import express, { Router, type Response } from 'express';
import multer, { type FileFilterCallback } from 'multer';
import path from 'node:path';
import fs from 'node:fs';
import { Prisma } from '../generated/index.js';
import prisma from '../lib/prismaClient.js';
import { analyzeMealPhoto, compareWithPlan, formatAIMessage } from '../services/aiService.js';
import { authenticate, type AuthRequest } from '../middleware/auth.js';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

// Use /tmp for serverless (Vercel), otherwise use uploads directory
const isServerless = process.env.VERCEL === '1' || process.env.AWS_LAMBDA_FUNCTION_NAME;
const uploadsDir = isServerless 
  ? '/tmp' 
  : path.resolve(process.cwd(), 'uploads');

const ensureUploadsDir = () => {
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
};

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureUploadsDir();
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'meal-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb: FileFilterCallback) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

const handleError = (res: Response, error: unknown, logPrefix = 'Meals route error') => {
  const message = error instanceof Error ? error.message : 'Internal server error';
  console.error(logPrefix, error);
  res.status(500).json({ error: message });
};

interface MealRegisterBody {
  plan_id?: string;
  meal_name: string;
}

// Register meal with photo
router.post('/register', upload.single('photo'), async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No photo uploaded' });
    }

    const userId = req.userId!;
    const { plan_id, meal_name } = req.body as MealRegisterBody;
    let numericPlanId = plan_id ? Number(plan_id) : null;
    
    // If no plan_id provided, use the active plan
    if (!numericPlanId) {
      const activePlan = await prisma.nutritionalPlan.findFirst({
        where: {
          user_id: userId,
          is_active: true
        }
      });
      if (activePlan) {
        numericPlanId = activePlan.id;
      }
    }
    
    // For now, use local file path. In production, upload to cloud storage
    const photoUrl = `/uploads/${req.file.filename}`;
    
    // Get plan meal if plan_id is available
    let planMeal = null;
    if (numericPlanId) {
      planMeal = await prisma.planMeal.findFirst({
        where: {
          plan_id: numericPlanId,
          meal_name
        }
      });
    }
    
    // Analyze photo with AI (using file path for base64 encoding)
    const filePath = req.file.path;
    const aiAnalysis = await analyzeMealPhoto(filePath, meal_name);
    
    // Compare with plan
    const comparison = compareWithPlan(aiAnalysis, planMeal);
    
    // Format AI message with all data
    const formattedMessage = formatAIMessage(aiAnalysis, comparison.adherence_score, comparison.adherence_tags);
    
    // Save meal registration
    const meal = await prisma.mealRegistration.create({
      data: {
        user_id: userId,
        plan_id: numericPlanId,
        meal_name,
        photo_url: photoUrl,
        ai_analysis: aiAnalysis,
        detected_foods: aiAnalysis.detected_foods || [],
        estimated_calories: aiAnalysis.estimated_calories || 0,
        estimated_protein: aiAnalysis.estimated_protein || 0,
        estimated_carbs: aiAnalysis.estimated_carbs || 0,
        estimated_fats: aiAnalysis.estimated_fats || 0,
        meal_score: comparison.adherence_score,
        adherence_tags: comparison.adherence_tags || [],
        ai_message: aiAnalysis.message || ""
      }
    });
    
    // Update daily score
    await updateDailyScore(userId, numericPlanId);
    
    // Update gamification
    await updateGamification(userId, comparison.adherence_score);
    
    res.status(201).json(formatMeal(meal));
  } catch (error) {
    handleError(res, error, 'Error registering meal:');
  }
});

// Get meals for authenticated user
router.get('/', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { date, limit = 50 } = req.query;

    const where: Prisma.MealRegistrationWhereInput = { user_id: userId };
    if (date) {
      const { start, end } = buildDayRange(String(date));
      where.registered_at = { gte: start, lt: end };
    }

    const meals = await prisma.mealRegistration.findMany({
      where,
      orderBy: { registered_at: 'desc' },
      take: Number(limit)
    });

    res.json(meals.map(formatMeal));
  } catch (error) {
    handleError(res, error);
  }
});

// Get single meal
router.get('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const meal = await prisma.mealRegistration.findUnique({
      where: { id: Number(req.params.id) }
    });
    if (!meal) {
      return res.status(404).json({ error: 'Meal not found' });
    }

    if (meal.user_id !== userId) {
      return res.status(403).json({ error: 'Access denied' });
    }
    
    res.json(formatMeal(meal));
  } catch (error) {
    handleError(res, error);
  }
});

// Helper function to update daily score
async function updateDailyScore(userId: string, planId: number | null) {
  const { start, end } = buildDayRange();
  const todayKey = start;

  // Get meals for today
  const meals = await prisma.mealRegistration.findMany({
    where: {
      user_id: userId,
      registered_at: {
        gte: start,
        lt: end
      }
    }
  });

  // If no meals, still create/update score with zero values
  const totalCalories = meals.reduce((sum, meal) => sum + (meal.estimated_calories || 0), 0);
  const avgScore = meals.length > 0 
    ? meals.reduce((sum, meal) => sum + (meal.meal_score || 0), 0) / meals.length 
    : 0;

  // Get target calories from plan (use active plan if planId not provided)
  let finalPlanId = planId;
  let targetCalories = 2000;
  
  if (!finalPlanId) {
    const activePlan = await prisma.nutritionalPlan.findFirst({
      where: {
        user_id: userId,
        is_active: true
      },
      select: { id: true, daily_calories: true }
    });
    if (activePlan) {
      finalPlanId = activePlan.id;
      targetCalories = activePlan.daily_calories;
    }
  } else {
    const plan = await prisma.nutritionalPlan.findUnique({
      where: { id: finalPlanId },
      select: { daily_calories: true }
    });
    if (plan) {
      targetCalories = plan.daily_calories;
    }
  }

  // Calculate calorie adherence score (considering ±10% tolerance as ideal)
  const calorieDiff = Math.abs(totalCalories - targetCalories);
  const tolerance = targetCalories * 0.1; // 10% tolerance
  let calorieScore = 100;
  
  if (calorieDiff > tolerance) {
    // Penalize if too far from target (but don't go below 0)
    const excessRatio = Math.min(1, calorieDiff / targetCalories);
    calorieScore = Math.max(0, 100 - (excessRatio * 50));
  }

  // Calculate daily score: 60% meal scores, 40% calorie adherence
  const dailyScore = Math.round((avgScore * 0.6) + (calorieScore * 0.4));

  // Determine status
  let status = 'red';
  if (dailyScore >= 80) status = 'green';
  else if (dailyScore >= 60) status = 'yellow';

  // Calculate streak: check if yesterday had a good score (>= 70)
  const yesterday = new Date(start);
  yesterday.setDate(yesterday.getDate() - 1);

  const yesterdayScore = await prisma.dailyScore.findUnique({
    where: {
      user_id_date: {
        user_id: userId,
        date: yesterday
      }
    }
  });

  let streakDays = 1;
  if (yesterdayScore && (yesterdayScore.daily_score || 0) >= 70) {
    streakDays = (yesterdayScore.streak_days || 0) + 1;
  } else if (meals.length === 0) {
    // If no meals today, don't break streak if yesterday was good
    if (yesterdayScore && (yesterdayScore.daily_score || 0) >= 70) {
      streakDays = yesterdayScore.streak_days || 0;
    } else {
      streakDays = 0;
    }
  }

  // Only update/create score if there are meals or if we need to reset streak
  await prisma.dailyScore.upsert({
    where: {
      user_id_date: {
        user_id: userId,
        date: todayKey
      }
    },
    create: {
      user_id: userId,
      plan_id: finalPlanId,
      date: todayKey,
      total_calories: totalCalories,
      target_calories: targetCalories,
      average_meal_score: Math.round(avgScore),
      daily_score: dailyScore,
      streak_days: streakDays,
      status
    },
    update: {
      plan_id: finalPlanId,
      total_calories: totalCalories,
      target_calories: targetCalories,
      average_meal_score: Math.round(avgScore),
      daily_score: dailyScore,
      streak_days: streakDays,
      status
    }
  });
}

// Helper function to update gamification
async function updateGamification(userId: string, mealScore: number) {
  let userGam = await prisma.userGamification.findUnique({
    where: { user_id: userId }
  });
  
  if (!userGam) {
    userGam = await prisma.userGamification.create({
      data: { user_id: userId, badges: [] }
    });
  }
  
  const xpGained = Math.round(mealScore / 10);
  const newTotalXP = (userGam.total_xp || 0) + xpGained;
  const newMealCount = (userGam.total_meals_registered || 0) + 1;
  const newLevel = Math.floor(newTotalXP / 100) + 1;

  const { start } = buildDayRange();
  const todayScore = await prisma.dailyScore.findUnique({
    where: {
      user_id_date: {
        user_id: userId,
        date: start
      }
    },
    select: { streak_days: true }
  });
  const currentStreak = todayScore?.streak_days || 0;
  const longestStreak = Math.max(userGam.longest_streak || 0, currentStreak);
  
  let badges = Array.isArray(userGam.badges) ? [...userGam.badges] as string[] : [];
  
  if (newMealCount >= 30 && !badges.includes('30_meals')) {
    badges.push('30_meals');
  }
  if (currentStreak >= 5 && !badges.includes('5_day_streak')) {
    badges.push('5_day_streak');
  }
  if (mealScore >= 90 && !badges.includes('perfect_meal')) {
    badges.push('perfect_meal');
  }
  
  await prisma.userGamification.update({
    where: { user_id: userId },
    data: {
      total_xp: newTotalXP,
      current_level: newLevel,
      total_meals_registered: newMealCount,
      current_streak: currentStreak,
      longest_streak: longestStreak,
      badges
    }
  });
}

function buildDayRange(date?: string | Date) {
  const base = date ? new Date(date) : new Date();
  base.setHours(0, 0, 0, 0);
  const end = new Date(base);
  end.setDate(end.getDate() + 1);
  return { start: base, end };
}

function formatMeal(meal: { detected_foods: unknown; adherence_tags: unknown; ai_analysis: unknown; [key: string]: unknown }) {
  return {
    ...meal,
    detected_foods: Array.isArray(meal.detected_foods) ? meal.detected_foods : [],
    adherence_tags: Array.isArray(meal.adherence_tags) ? meal.adherence_tags : [],
    ai_analysis: typeof meal.ai_analysis === 'object' && meal.ai_analysis !== null ? meal.ai_analysis : {}
  };
}

// Serve uploaded files
ensureUploadsDir();
router.use('/uploads', express.static(uploadsDir));

export default router;

