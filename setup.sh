#!/bin/bash

echo "🚀 Setting up MacroCheck..."

# Backend setup
echo "📦 Setting up backend..."
cd backend
if [ ! -d "node_modules" ]; then
  npm install
fi

# Create .env if it doesn't exist
if [ ! -f ".env" ]; then
  echo "Creating .env file..."
  cat > .env << EOF
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
OPENAI_API_KEY=your-openai-api-key-here
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/macrocheck?schema=public
DIRECT_URL=postgresql://postgres:postgres@localhost:5432/macrocheck?schema=public
EOF
  echo "⚠️  Please update .env with your OpenAI API key!"
  echo "⚠️  Update DATABASE_URL and DIRECT_URL in backend/.env to point to your PostgreSQL instance."
fi

cd ..

# Frontend setup
echo "📦 Setting up frontend..."
cd frontend
if [ ! -d "node_modules" ]; then
  npm install
fi

cd ..

echo "✅ Setup complete!"
echo ""
echo "To start the application:"
echo "1. Backend: cd backend && npm run dev"
echo "2. Frontend: cd frontend && npm run dev"
echo ""
echo "Don't forget to add your OpenAI API key to backend/.env"

