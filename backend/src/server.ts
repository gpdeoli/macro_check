import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './lib/prismaClient.js';
import authRoutes from './routes/auth.js';
import nutritionalPlanRoutes from './routes/nutritionalPlan.js';
import mealRoutes from './routes/meals.js';
import scoreRoutes from './routes/scores.js';
import diaryRoutes from './routes/diary.js';
import gamificationRoutes from './routes/gamification.js';
import challengeRoutes from './routes/challenges.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const startServer = async () => {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
    process.exit(1);
  }
};

startServer();

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

