import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from '../src/lib/prismaClient.js';
import authRoutes from '../src/routes/auth.js';
import nutritionalPlanRoutes from '../src/routes/nutritionalPlan.js';
import mealRoutes from '../src/routes/meals.js';
import scoreRoutes from '../src/routes/scores.js';
import diaryRoutes from '../src/routes/diary.js';
import gamificationRoutes from '../src/routes/gamification.js';
import challengeRoutes from '../src/routes/challenges.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (_req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'MacroCheck API is running',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      nutritionalPlans: '/api/nutritional-plans',
      meals: '/api/meals',
      scores: '/api/scores',
      diary: '/api/diary',
      gamification: '/api/gamification',
      challenges: '/api/challenges'
    }
  });
});

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/nutritional-plans', nutritionalPlanRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/diary', diaryRoutes);
app.use('/api/gamification', gamificationRoutes);
app.use('/api/challenges', challengeRoutes);

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'MacroCheck API is running' });
});

// Initialize Prisma connection
let prismaInitialized = false;

const initializePrisma = async () => {
  if (!prismaInitialized) {
    try {
      await prisma.$connect();
      prismaInitialized = true;
    } catch (error) {
      console.error('Unable to connect to database:', error);
    }
  }
};

// Initialize on first request
app.use(async (_req: Request, _res: Response, next) => {
  await initializePrisma();
  next();
});

// Export for Vercel serverless
export default app;

