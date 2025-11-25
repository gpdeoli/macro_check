import { Router, type Response } from 'express';
import { Prisma } from '../generated/index.js';
import type { ParsedQs } from 'qs';
import prisma from '../lib/prismaClient.js';
import { authenticate, type AuthRequest } from '../middleware/auth.js';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

const handleError = (res: Response, error: unknown) => {
  const message = error instanceof Error ? error.message : 'Internal server error';
  res.status(500).json({ error: message });
};

type TimelineEntry = {
  date: string;
  meal_count: number;
  total_score: number;
  total_calories: number;
  meals: Array<{
    id: number;
    meal_name: string;
    photo_url: string;
    meal_score: number | null;
    estimated_calories: number | null;
    registered_at: Date;
    adherence_tags: unknown[];
  }>;
};

// Get diary timeline
router.get('/timeline', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { startDate, endDate, limit } = req.query;
    const where: Prisma.MealRegistrationWhereInput = { user_id: userId };

    const startParam = parseQueryValue(startDate);
    const endParam = parseQueryValue(endDate);

    if (startParam && endParam) {
      const start = toDayStart(startParam);
      const endRange = toDayEnd(endParam);
      where.registered_at = { gte: start, lte: endRange };
    }

    const meals = await prisma.mealRegistration.findMany({
      where,
      orderBy: { registered_at: 'desc' }
    });

    const limitParam = parseQueryValue(limit);
    const limitValue = Number(limitParam ?? 30);
    const limitNumber = Number.isNaN(limitValue) ? 30 : limitValue;
    const timelineMap = new Map<string, TimelineEntry>();

    for (const meal of meals) {
      const dateKey = formatDateKey(meal.registered_at);
      if (!timelineMap.has(dateKey)) {
        timelineMap.set(dateKey, {
          date: dateKey,
          meal_count: 0,
          total_score: 0,
          total_calories: 0,
          meals: []
        });
      }

      const entry = timelineMap.get(dateKey)!;
      entry.meal_count += 1;
      entry.total_score += meal.meal_score || 0;
      entry.total_calories += meal.estimated_calories || 0;
      entry.meals.push({
        id: meal.id,
        meal_name: meal.meal_name,
        photo_url: meal.photo_url,
        meal_score: meal.meal_score,
        estimated_calories: meal.estimated_calories,
        registered_at: meal.registered_at,
        adherence_tags: getStringTags(meal.adherence_tags)
      });
    }

    const timeline = Array.from(timelineMap.values())
      .slice(0, limitNumber)
      .map(day => ({
        date: day.date,
        meal_count: day.meal_count,
        avg_score: day.meal_count ? Math.round(day.total_score / day.meal_count) : 0,
        total_calories: day.total_calories,
        meals: day.meals
      }));

    res.json(timeline);
  } catch (error) {
    handleError(res, error);
  }
});

// Get insights
router.get('/insights', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const daysParam = parseQueryValue(req.query.days);
    const days = Number(daysParam ?? 30);

    const since = new Date();
    since.setDate(since.getDate() - days);

    const meals = await prisma.mealRegistration.findMany({
      where: {
        user_id: userId,
        registered_at: { gte: since }
      },
      orderBy: { registered_at: 'desc' }
    });
    
    if (meals.length === 0) {
      return res.json({
        patterns: [],
        strengths: [],
        weaknesses: [],
        average_score: 0,
        total_meals: 0
      });
    }
    
    const mealTimes = meals.map(m => new Date(m.registered_at).getHours());
    
    const hourCounts = mealTimes.reduce<Record<string, number>>((acc, hour) => {
      const key = String(hour);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    
    const mostCommonHour = Number(
      Object.keys(hourCounts).reduce((a, b) =>
        hourCounts[a] > hourCounts[b] ? a : b
      )
    );
    
    const avgScore = meals.reduce((sum, m) => sum + (m.meal_score || 0), 0) / meals.length;
    
    const allTags = meals.flatMap(m => getStringTags(m.adherence_tags));
    const tagCounts = allTags.reduce<Record<string, number>>((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    
    const strengths = Object.entries(tagCounts)
      .filter(([, count]) => count >= meals.length * 0.3)
      .map(([tag]) => tag)
      .slice(0, 3);
    
    const weaknesses = Object.entries(tagCounts)
      .filter(([tag, count]) => count < meals.length * 0.1 && ['processed', 'high-sugar', 'low-protein'].includes(tag))
      .map(([tag]) => tag)
      .slice(0, 3);
    
    res.json({
      patterns: [
        {
          type: 'most_common_time',
          value: `${mostCommonHour}:00`,
          description: `Most meals registered around ${mostCommonHour}:00`
        }
      ],
      strengths,
      weaknesses,
      average_score: Math.round(avgScore),
      total_meals: meals.length
    });
  } catch (error) {
    handleError(res, error);
  }
});

function parseQueryValue(value: string | ParsedQs | (string | ParsedQs)[] | undefined): string | undefined {
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    const candidate = value[0];
    return typeof candidate === 'string' ? candidate : undefined;
  }
  return undefined;
}

function getStringTags(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((tag): tag is string => typeof tag === 'string');
}

function toDayStart(dateString: string) {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);
  return date;
}

function toDayEnd(dateString: string) {
  const date = new Date(dateString);
  date.setHours(23, 59, 59, 999);
  return date;
}

function formatDateKey(date: Date | string) {
  return new Date(date).toISOString().split('T')[0];
}

export default router;

