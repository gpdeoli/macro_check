import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from '../src/routes/auth.js';
import nutritionalPlanRoutes from '../src/routes/nutritionalPlan.js';
import mealRoutes from '../src/routes/meals.js';
import scoreRoutes from '../src/routes/scores.js';
import diaryRoutes from '../src/routes/diary.js';
import gamificationRoutes from '../src/routes/gamification.js';
import challengeRoutes from '../src/routes/challenges.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route - should work without Prisma
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

// Health check - should work without Prisma
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'MacroCheck API is running' });
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

// Error handling middleware (must be last)
app.use((err: Error, _req: Request, res: Response, _next: any) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error', 
    message: process.env.NODE_ENV === 'production' ? 'An error occurred' : err.message 
  });
});

// Export for Vercel serverless
export default app;

