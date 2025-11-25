import { Router, type Response } from 'express';
import { Prisma } from '../generated/index.js';
import prisma from '../lib/prismaClient.js';
import { authenticate, type AuthRequest } from '../middleware/auth.js';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

const handleError = (res: Response, error: unknown) => {
  const message = error instanceof Error ? error.message : 'Internal server error';
  res.status(500).json({ error: message });
};

// Get daily score for a specific date (automatically calculates if needed)
router.get('/daily/:date', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { date } = req.params;
    const dateKey = toDayStart(date);
    
    // Try to get existing score
    let score = await prisma.dailyScore.findUnique({
      where: {
        user_id_date: {
          user_id: userId,
          date: dateKey
        }
      }
    });
    
    // If no score exists or it's for today, calculate it automatically
    const today = toDayStart();
    const isToday = dateKey.getTime() === today.getTime();
    
    if (!score || isToday) {
      // Calculate score automatically
      score = await calculateDailyScore(userId, dateKey);
    }
    
    res.json(score);
  } catch (error) {
    handleError(res, error);
  }
});

// Get weekly scores (automatically calculates missing scores)
router.get('/weekly', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { startDate } = req.query;

    let start: Date;
    let end: Date;
    
    const startParam = parseQueryValue(startDate);
    if (startParam) {
      start = toDayStart(startParam);
      end = new Date(start);
      end.setDate(end.getDate() + 6);
    } else {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
      sevenDaysAgo.setHours(0, 0, 0, 0);
      start = sevenDaysAgo;
      end = new Date();
      end.setHours(23, 59, 59, 999);
    }

    // Get existing scores
    const existingScores = await prisma.dailyScore.findMany({
      where: {
        user_id: userId,
        date: { gte: start, lte: end }
      },
      orderBy: { date: 'desc' }
    });

    // Generate all dates in range
    const allDates: Date[] = [];
    const currentDate = new Date(start);
    while (currentDate <= end) {
      allDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Calculate missing scores automatically
    const today = toDayStart();
    const scoresPromises = allDates.map(async (date) => {
      const dateKey = toDayStart(date);
      const existing = existingScores.find(s => 
        s.date.getTime() === dateKey.getTime()
      );
      
      // Only auto-calculate for today or if score doesn't exist
      if (!existing || dateKey.getTime() === today.getTime()) {
        return await calculateDailyScore(userId, dateKey);
      }
      
      return existing;
    });

    const scores = await Promise.all(scoresPromises);
    
    res.json(scores.sort((a, b) => b.date.getTime() - a.date.getTime()));
  } catch (error) {
    handleError(res, error);
  }
});

// Get current streak
router.get('/streak', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const todayKey = toDayStart();
    const score = await prisma.dailyScore.findUnique({
      where: {
        user_id_date: {
          user_id: userId,
          date: todayKey
        }
      },
      select: { streak_days: true }
    });
    
    res.json({ streak_days: score?.streak_days || 0 });
  } catch (error) {
    handleError(res, error);
  }
});

// Recalculate daily score for today
router.post('/recalculate', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const today = toDayStart();
    const score = await calculateDailyScore(userId, today);
    res.json(score);
  } catch (error) {
    handleError(res, error);
  }
});

// Helper function to calculate daily score for a specific date
async function calculateDailyScore(userId: string, date: Date) {
  const dateKey = toDayStart(date);
  const { start, end } = buildDayRange(date);

  // Get meals for the date
  const meals = await prisma.mealRegistration.findMany({
    where: {
      user_id: userId,
      registered_at: {
        gte: start,
        lt: end
      }
    }
  });

  const totalCalories = meals.reduce((sum, meal) => sum + (meal.estimated_calories || 0), 0);
  const avgScore = meals.length > 0 
    ? meals.reduce((sum, meal) => sum + (meal.meal_score || 0), 0) / meals.length 
    : 0;

  // Get active plan
  const activePlan = await prisma.nutritionalPlan.findFirst({
    where: {
      user_id: userId,
      is_active: true
    },
    select: { id: true, daily_calories: true }
  });

  let finalPlanId = activePlan?.id || null;
  let targetCalories = activePlan?.daily_calories || 2000;

  // Calculate calorie adherence score
  const calorieDiff = Math.abs(totalCalories - targetCalories);
  const tolerance = targetCalories * 0.1;
  let calorieScore = 100;
  
  if (calorieDiff > tolerance) {
    const excessRatio = Math.min(1, calorieDiff / targetCalories);
    calorieScore = Math.max(0, 100 - (excessRatio * 50));
  }

  // Calculate daily score: 60% meal scores, 40% calorie adherence
  const dailyScore = Math.round((avgScore * 0.6) + (calorieScore * 0.4));

  // Determine status
  let status = 'red';
  if (dailyScore >= 80) status = 'green';
  else if (dailyScore >= 60) status = 'yellow';

  // Calculate streak
  const yesterday = new Date(dateKey);
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
    if (yesterdayScore && (yesterdayScore.daily_score || 0) >= 70) {
      streakDays = yesterdayScore.streak_days || 0;
    } else {
      streakDays = 0;
    }
  }

  // Upsert the score
  const score = await prisma.dailyScore.upsert({
    where: {
      user_id_date: {
        user_id: userId,
        date: dateKey
      }
    },
    create: {
      user_id: userId,
      plan_id: finalPlanId,
      date: dateKey,
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

  return score;
}

function buildDayRange(date?: string | Date) {
  const base = date ? new Date(date) : new Date();
  base.setHours(0, 0, 0, 0);
  const end = new Date(base);
  end.setDate(end.getDate() + 1);
  return { start: base, end };
}

function toDayStart(date?: string | Date) {
  const day = date ? new Date(date) : new Date();
  day.setHours(0, 0, 0, 0);
  return day;
}

function parseQueryValue(value: unknown): string | undefined {
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    const candidate = value[0];
    return typeof candidate === 'string' ? candidate : undefined;
  }
  return undefined;
}

export default router;

