import { Router, type Response } from 'express';
// UserGamification type is available from Prisma client
import prisma from '../lib/prismaClient.js';
import { authenticate, type AuthRequest } from '../middleware/auth.js';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

const handleError = (res: Response, error: unknown) => {
  const message = error instanceof Error ? error.message : 'Internal server error';
  res.status(500).json({ error: message });
};

// Get user gamification data
router.get('/', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const userGam = await prisma.userGamification.findUnique({
      where: { user_id: userId }
    });

    const baseGamification = userGam ?? {
      id: 0,
      user_id: userId,
      total_xp: 0,
      current_level: 1,
      total_meals_registered: 0,
      current_streak: 0,
      longest_streak: 0,
      badges: [],
      updated_at: new Date()
    };
    
    const badges = Array.isArray(baseGamification.badges)
      ? baseGamification.badges as string[]
      : [];
    
    const badgeDetails: Record<string, { name: string; description?: string; icon: string }> = {
      '30_meals': { name: '30 Refeições Registradas', description: 'Registrou 30 refeições', icon: '🍽️' },
      '5_day_streak': { name: 'Sequência de 5 Dias', description: '5 dias seguidos no plano', icon: '🔥' },
      'perfect_meal': { name: 'Refeição Perfeita', description: 'Score 90+ em uma refeição', icon: '⭐' },
      'week_perfect': { name: 'Semana Perfeita', description: 'Semana perfeita', icon: '💎' },
      'protein_lover': { name: 'Amante de Proteína', description: 'Refeições ricas em proteína', icon: '💪' }
    };
    
    const response = {
      user_id: baseGamification.user_id,
      total_xp: baseGamification.total_xp,
      current_level: baseGamification.current_level,
      total_meals_registered: baseGamification.total_meals_registered,
      current_streak: baseGamification.current_streak,
      longest_streak: baseGamification.longest_streak,
      badges,
      badge_details: badges.map(badge => badgeDetails[badge] || { name: badge, icon: '🏆' })
    };
    
    const currentLevelXP = (response.current_level - 1) * 100;
    const nextLevelXP = response.current_level * 100;
    const xpForCurrent = response.total_xp - currentLevelXP;
    const xpNeeded = nextLevelXP - response.total_xp;
    const progress = Math.min(100, (xpForCurrent / 100) * 100);

    res.json({
      ...response,
      xp_for_current_level: xpForCurrent,
      xp_needed_for_next: xpNeeded,
      progress_to_next_level: progress
    });
    
  } catch (error) {
    handleError(res, error);
  }
});

// Get leaderboard (for challenges)
router.get('/leaderboard/:challengeId', async (req: AuthRequest, res: Response) => {
  try {
    const { challengeId } = req.params;
    
    const participants = await prisma.challengeParticipant.findMany({
      where: { challenge_id: Number(challengeId) },
      orderBy: [
        { average_score: 'desc' },
        { current_streak: 'desc' }
      ]
    });

    const userIds = participants.map(p => p.user_id);
    const gamification = await prisma.userGamification.findMany({
      where: { user_id: { in: userIds } },
      select: { user_id: true, total_xp: true, current_level: true }
    });
    const gamificationMap = new Map(gamification.map(g => [g.user_id, g]));
    
    const enriched = participants.map(participant => {
      const gam = gamificationMap.get(participant.user_id);
      return {
        ...participant,
        badges_earned: Array.isArray(participant.badges_earned) ? participant.badges_earned : [],
        total_xp: gam?.total_xp || 0,
        current_level: gam?.current_level || 1
      };
    });
    
    res.json(enriched);
  } catch (error) {
    handleError(res, error);
  }
});

export default router;

