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

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
    ];

// Add Vercel preview and production URLs if provided
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      // In production, allow Vercel preview deployments (*.vercel.app)
      if (process.env.NODE_ENV === 'production' && origin.includes('.vercel.app')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
}));

// Middleware
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

