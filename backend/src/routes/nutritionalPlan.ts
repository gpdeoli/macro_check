import { Router, type Response } from 'express';
import prisma from '../lib/prismaClient.js';
import { authenticate, type AuthRequest } from '../middleware/auth.js';

// Import calculateDailyScore function
async function calculateDailyScore(userId: string, date: Date) {
  const dateKey = new Date(date);
  dateKey.setHours(0, 0, 0, 0);
  const start = new Date(dateKey);
  const end = new Date(dateKey);
  end.setDate(end.getDate() + 1);

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

  const activePlan = await prisma.nutritionalPlan.findFirst({
    where: {
      user_id: userId,
      is_active: true
    },
    select: { id: true, daily_calories: true }
  });

  let finalPlanId = activePlan?.id || null;
  let targetCalories = activePlan?.daily_calories || 2000;

  const calorieDiff = Math.abs(totalCalories - targetCalories);
  const tolerance = targetCalories * 0.1;
  let calorieScore = 100;
  
  if (calorieDiff > tolerance) {
    const excessRatio = Math.min(1, calorieDiff / targetCalories);
    calorieScore = Math.max(0, 100 - (excessRatio * 50));
  }

  const dailyScore = Math.round((avgScore * 0.6) + (calorieScore * 0.4));

  let status = 'red';
  if (dailyScore >= 80) status = 'green';
  else if (dailyScore >= 60) status = 'yellow';

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

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

type PlanMealInput = {
  meal_name: string;
  suggested_time?: string | null;
  target_calories?: number | null;
  allowed_foods?: string | null;
  notes?: string | null;
};

const handleError = (res: Response, error: unknown) => {
  const message = error instanceof Error ? error.message : 'Internal server error';
  res.status(500).json({ error: message });
};

// Get active plan for authenticated user
router.get('/active', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const activePlan = await prisma.nutritionalPlan.findFirst({
      where: { 
        user_id: userId,
        is_active: true
      },
      include: {
        meals: {
          orderBy: { id: 'asc' }
        }
      }
    });

    res.json(activePlan);
  } catch (error) {
    handleError(res, error);
  }
});

// Get all plans for authenticated user
router.get('/', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const plans = await prisma.nutritionalPlan.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      include: {
        meals: {
          orderBy: { id: 'asc' }
        }
      }
    });

    res.json(plans);
  } catch (error) {
    handleError(res, error);
  }
});

// Get plan adherence statistics (must be before /:id route)
router.get('/:id/adherence', async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId = req.userId!;
    const { days = 7 } = req.query;

    // Verify ownership
    const plan = await prisma.nutritionalPlan.findUnique({
      where: { id },
      include: { meals: { orderBy: { id: 'asc' } } }
    });

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    if (plan.user_id !== userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Calculate date range
    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - Number(days));
    startDate.setHours(0, 0, 0, 0);

    // Get all meals registered for this plan in the date range
    const registeredMeals = await prisma.mealRegistration.findMany({
      where: {
        user_id: userId,
        plan_id: id,
        registered_at: {
          gte: startDate,
          lte: endDate
        }
      },
      orderBy: { registered_at: 'desc' }
    });

    // Calculate adherence metrics
    const totalMeals = registeredMeals.length;
    const totalCalories = registeredMeals.reduce((sum, meal) => sum + (meal.estimated_calories || 0), 0);
    const totalProtein = registeredMeals.reduce((sum, meal) => sum + (meal.estimated_protein || 0), 0);
    const totalCarbs = registeredMeals.reduce((sum, meal) => sum + (meal.estimated_carbs || 0), 0);
    const totalFats = registeredMeals.reduce((sum, meal) => sum + (meal.estimated_fats || 0), 0);
    const avgMealScore = totalMeals > 0 
      ? registeredMeals.reduce((sum, meal) => sum + (meal.meal_score || 0), 0) / totalMeals 
      : 0;

    // Calculate target calories for the period
    const targetCalories = plan.daily_calories * Number(days);
    const calorieAdherence = targetCalories > 0 
      ? Math.min(100, Math.max(0, (totalCalories / targetCalories) * 100))
      : 0;

    // Group meals by meal_name and compare with plan meals
    const mealAdherence: Array<{
      meal_name: string;
      plan_meal: any;
      registered_count: number;
      avg_score: number;
      avg_calories: number;
      within_target: number;
    }> = [];

    plan.meals.forEach((planMeal) => {
      const mealsForThisType = registeredMeals.filter(m => m.meal_name === planMeal.meal_name);
      const count = mealsForThisType.length;
      const avgScore = count > 0
        ? mealsForThisType.reduce((sum, m) => sum + (m.meal_score || 0), 0) / count
        : 0;
      const avgCalories = count > 0
        ? mealsForThisType.reduce((sum, m) => sum + (m.estimated_calories || 0), 0) / count
        : 0;
      
      let withinTarget = 0;
      if (planMeal.target_calories && count > 0) {
        const tolerance = planMeal.target_calories * 0.2;
        withinTarget = mealsForThisType.filter(m => {
          const diff = Math.abs((m.estimated_calories || 0) - planMeal.target_calories!);
          return diff <= tolerance;
        }).length;
      }

      mealAdherence.push({
        meal_name: planMeal.meal_name,
        plan_meal: planMeal,
        registered_count: count,
        avg_score: Math.round(avgScore),
        avg_calories: Math.round(avgCalories),
        within_target: withinTarget
      });
    });

    // Calculate overall adherence percentage
    const overallAdherence = Math.round(
      (avgMealScore * 0.5) + (calorieAdherence * 0.3) + ((totalMeals / (plan.meals.length * Number(days))) * 100 * 0.2)
    );

    res.json({
      plan: {
        id: plan.id,
        name: plan.name,
        daily_calories: plan.daily_calories
      },
      period: {
        days: Number(days),
        start_date: startDate,
        end_date: endDate
      },
      overall: {
        adherence_percentage: Math.min(100, Math.max(0, overallAdherence)),
        avg_meal_score: Math.round(avgMealScore),
        total_meals_registered: totalMeals,
        expected_meals: plan.meals.length * Number(days)
      },
      calories: {
        total: Math.round(totalCalories),
        target: targetCalories,
        adherence_percentage: Math.round(calorieAdherence),
        difference: Math.round(totalCalories - targetCalories)
      },
      macros: {
        protein: Math.round(totalProtein),
        carbs: Math.round(totalCarbs),
        fats: Math.round(totalFats)
      },
      meal_adherence: mealAdherence,
      registered_meals: registeredMeals.map(m => ({
        id: m.id,
        meal_name: m.meal_name,
        registered_at: m.registered_at,
        estimated_calories: m.estimated_calories,
        meal_score: m.meal_score,
        adherence_tags: m.adherence_tags
      }))
    });
  } catch (error) {
    handleError(res, error);
  }
});

// Get single plan with meals
router.get('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId = req.userId!;
    const plan = await prisma.nutritionalPlan.findUnique({
      where: { id },
      include: { meals: { orderBy: { id: 'asc' } } }
    });

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    if (plan.user_id !== userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json(plan);
  } catch (error) {
    handleError(res, error);
  }
});

// Create new plan
router.post('/', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const {
      name,
      daily_calories,
      meals = [],
      set_as_active = false
    } = req.body as { name: string; daily_calories: number; meals?: PlanMealInput[]; set_as_active?: boolean };

    // If setting as active, deactivate all other plans first
    if (set_as_active) {
      await prisma.nutritionalPlan.updateMany({
        where: { user_id: userId },
        data: { is_active: false }
      });
    }

    const newPlan = await prisma.nutritionalPlan.create({
      data: {
        user_id: userId,
        name,
        daily_calories,
        is_active: set_as_active,
        meals: {
          create: meals.map((meal: PlanMealInput) => ({
            meal_name: meal.meal_name,
            suggested_time: meal.suggested_time || null,
            target_calories: meal.target_calories ?? null,
            allowed_foods: meal.allowed_foods || null,
            notes: meal.notes || null
          }))
        }
      },
      include: {
        meals: { orderBy: { id: 'asc' } }
      }
    });

    res.status(201).json(newPlan);
  } catch (error) {
    handleError(res, error);
  }
});

// Update plan
router.put('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId = req.userId!;
    const {
      name,
      daily_calories,
      meals = []
    } = req.body as { name: string; daily_calories: number; meals?: PlanMealInput[] };

    // Verify ownership
    const existingPlan = await prisma.nutritionalPlan.findUnique({
      where: { id },
      select: { user_id: true }
    });

    if (!existingPlan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    if (existingPlan.user_id !== userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    await prisma.$transaction([
      prisma.nutritionalPlan.update({
        where: { id },
        data: { name, daily_calories }
      }),
      prisma.planMeal.deleteMany({ where: { plan_id: id } })
    ]);

    if (meals.length) {
      await prisma.planMeal.createMany({
        data: meals.map((meal: PlanMealInput) => ({
          plan_id: id,
          meal_name: meal.meal_name,
          suggested_time: meal.suggested_time || null,
          target_calories: meal.target_calories ?? null,
          allowed_foods: meal.allowed_foods || null,
          notes: meal.notes || null
        }))
      });
    }

    const updatedPlan = await prisma.nutritionalPlan.findUnique({
      where: { id },
      include: { meals: { orderBy: { id: 'asc' } } }
    });

    res.json(updatedPlan);
  } catch (error) {
    handleError(res, error);
  }
});

// Activate a plan (deactivates all other plans for the user)
router.patch('/:id/activate', async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId = req.userId!;

    // Verify ownership
    const existingPlan = await prisma.nutritionalPlan.findUnique({
      where: { id },
      select: { user_id: true, is_active: true }
    });

    if (!existingPlan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    if (existingPlan.user_id !== userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Deactivate all other plans for this user
    await prisma.nutritionalPlan.updateMany({
      where: { 
        user_id: userId,
        id: { not: id }
      },
      data: { is_active: false }
    });

    // Activate this plan
    const updatedPlan = await prisma.nutritionalPlan.update({
      where: { id },
      data: { is_active: true },
      include: {
        meals: { orderBy: { id: 'asc' } }
      }
    });

    // Recalculate today's score automatically when plan changes
    try {
      await calculateDailyScore(userId, new Date());
    } catch (error) {
      // Don't fail the request if score calculation fails
      console.error('Error recalculating daily score after plan activation:', error);
    }

    res.json(updatedPlan);
  } catch (error) {
    handleError(res, error);
  }
});

// Deactivate a plan
router.patch('/:id/deactivate', async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId = req.userId!;

    // Verify ownership
    const existingPlan = await prisma.nutritionalPlan.findUnique({
      where: { id },
      select: { user_id: true }
    });

    if (!existingPlan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    if (existingPlan.user_id !== userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const updatedPlan = await prisma.nutritionalPlan.update({
      where: { id },
      data: { is_active: false },
      include: {
        meals: { orderBy: { id: 'asc' } }
      }
    });

    res.json(updatedPlan);
  } catch (error) {
    handleError(res, error);
  }
});

// Delete plan
router.delete('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId = req.userId!;

    // Verify ownership
    const existingPlan = await prisma.nutritionalPlan.findUnique({
      where: { id },
      select: { user_id: true }
    });

    if (!existingPlan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    if (existingPlan.user_id !== userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    await prisma.nutritionalPlan.delete({ where: { id } });
    res.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
});

export default router;

