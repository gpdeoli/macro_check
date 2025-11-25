import { Router, type Response } from 'express';
import crypto from 'node:crypto';
import prisma from '../lib/prismaClient.js';
import { authenticate, type AuthRequest } from '../middleware/auth.js';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

const handleError = (res: Response, error: unknown) => {
  const message = error instanceof Error ? error.message : 'Internal server error';
  res.status(500).json({ error: message });
};

type ChallengeBody = {
  name: string;
  description?: string;
  duration_days: number;
  min_score?: number;
};

type JoinBody = {
  invite_code: string;
};

// Create challenge
router.post('/', async (req: AuthRequest, res: Response) => {
  try {
    const creatorId = req.userId!;
    const { name, description, duration_days, min_score } = req.body as ChallengeBody;
    
    const inviteCode = await generateInviteCode();
    
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + duration_days);
    
    const challenge = await prisma.challenge.create({
      data: {
        creator_id: creatorId,
        name,
        description: description || null,
        duration_days,
        min_score: min_score || 70,
        invite_code: inviteCode,
        start_date: startDate,
        end_date: endDate
      }
    });
    res.status(201).json(challenge);
  } catch (error) {
    handleError(res, error);
  }
});

// Get all challenges for authenticated creator
router.get('/my-challenges', async (req: AuthRequest, res: Response) => {
  try {
    const creatorId = req.userId!;
    const challenges = await prisma.challenge.findMany({
      where: { creator_id: creatorId },
      orderBy: { created_at: 'desc' },
      include: {
        _count: { select: { participants: true } }
      }
    });
    
    const formatted = challenges.map(challenge => ({
      ...challenge,
      participant_count: challenge._count.participants
    }));
    
    res.json(formatted);
  } catch (error) {
    handleError(res, error);
  }
});

// Get challenge by invite code (public endpoint for viewing before joining)
router.get('/invite/:inviteCode', async (req: AuthRequest, res: Response) => {
  try {
    const challenge = await prisma.challenge.findUnique({
      where: { invite_code: req.params.inviteCode }
    });
    
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    
    const participants = await fetchParticipants(challenge.id);
    res.json({ ...challenge, participants });
  } catch (error) {
    handleError(res, error);
  }
});

// Join challenge
router.post('/join', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { invite_code } = req.body as JoinBody;
    
    const challenge = await prisma.challenge.findUnique({
      where: { invite_code }
    });
    
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    
    const existing = await prisma.challengeParticipant.findUnique({
      where: {
        challenge_id_user_id: {
          challenge_id: challenge.id,
          user_id: userId
        }
      }
    });
    
    if (existing) {
      return res.status(400).json({ error: 'Already joined this challenge' });
    }
    
    await prisma.challengeParticipant.create({
      data: {
        challenge_id: challenge.id,
        user_id: userId
      }
    });
    
    res.json({ message: 'Successfully joined challenge', challenge_id: challenge.id });
  } catch (error) {
    handleError(res, error);
  }
});

// Update participant stats (called when meals are registered)
router.put('/participant/:challengeId', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { challengeId } = req.params;
    const challenge = await prisma.challenge.findUnique({
      where: { id: Number(challengeId) }
    });
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    if (!challenge.start_date || !challenge.end_date) {
      return res.status(400).json({ error: 'Challenge dates not configured' });
    }
    
    const scores = await prisma.dailyScore.findMany({
      where: {
        user_id: userId,
        date: {
          gte: challenge.start_date,
          lte: challenge.end_date
        },
        daily_score: { gte: challenge.min_score }
      },
      orderBy: { date: 'desc' }
    });
    
    if (!scores.length) {
      return res.json({ message: 'No valid days yet' });
    }
    
    const averageScore = scores.reduce((sum, s) => sum + (s.daily_score || 0), 0) / scores.length;
    const currentStreak = scores[0]?.streak_days || 0;
    
    const badges = [];
    if (scores.length >= 7) badges.push('week_perfect');
    if (averageScore >= 85) badges.push('high_performer');
    
    await prisma.challengeParticipant.update({
      where: {
        challenge_id_user_id: {
          challenge_id: challenge.id,
          user_id: userId
        }
      },
      data: {
        average_score: averageScore,
        current_streak: currentStreak,
        badges_earned: badges
      }
    });
    
    res.json({ message: 'Participant stats updated' });
  } catch (error) {
    handleError(res, error);
  }
});

// Get challenge details with ranking
router.get('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const challenge = await prisma.challenge.findUnique({
      where: { id }
    });
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    
    const participants = await fetchParticipants(id);
    const ranked = participants
      .sort((a, b) => (b.average_score || 0) - (a.average_score || 0) || (b.current_streak || 0) - (a.current_streak || 0))
      .map((participant, index) => ({ ...participant, rank: index + 1 }));
    
    res.json({ ...challenge, participants: ranked });
  } catch (error) {
    handleError(res, error);
  }
});

async function generateInviteCode() {
  for (let i = 0; i < 5; i += 1) {
    const inviteCode = crypto.randomBytes(4).toString('hex').toUpperCase();
    const exists = await prisma.challenge.findUnique({ where: { invite_code: inviteCode } });
    if (!exists) return inviteCode;
  }
  throw new Error('Unable to generate unique invite code');
}

async function fetchParticipants(challengeId: number) {
  const participants = await prisma.challengeParticipant.findMany({
    where: { challenge_id: challengeId },
    orderBy: { average_score: 'desc' }
  });

  const userIds = participants.map(p => p.user_id);
  const gamification = await prisma.userGamification.findMany({
    where: { user_id: { in: userIds } },
    select: { user_id: true, total_xp: true, current_level: true }
  });
  const gamificationMap = new Map(gamification.map(g => [g.user_id, g]));

  return participants.map(participant => {
    const gam = gamificationMap.get(participant.user_id);
    return {
      ...participant,
      badges_earned: Array.isArray(participant.badges_earned) ? participant.badges_earned : [],
      total_xp: gam?.total_xp || 0,
      current_level: gam?.current_level || 1
    };
  });
}

export default router;

