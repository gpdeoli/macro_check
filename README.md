# MacroCheck - Nutritional AI + Daily Gamification

MacroCheck é um microSaaS que ajuda usuários a seguir o plano nutricional através de registro de refeições por foto, análise automática por IA, cálculo de calorias e macros, gamificação diária e desafios para creators e coaches.

## 🚀 Tecnologias

- **Backend**: Express.js + TypeScript + Prisma + PostgreSQL
- **Frontend**: Next.js 14 + TypeScript + Shadcn UI
- **IA**: OpenAI GPT-4 Vision (para análise de fotos de refeições)

## 📁 Estrutura do Projeto

```
macro_check/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma  # Definição do banco via Prisma
│   ├── routes/
│   │   ├── nutritionalPlan.js
│   │   ├── meals.js
│   │   ├── scores.js
│   │   ├── diary.js
│   │   ├── gamification.js
│   │   └── challenges.js
│   ├── services/
│   │   └── aiService.js   # Integração com OpenAI
│   └── server.js
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/            # Componentes Shadcn
│   │   ├── NutritionalPlanForm.tsx
│   │   ├── MealRegistration.tsx
│   │   ├── DailyScore.tsx
│   │   ├── DiaryTimeline.tsx
│   │   ├── Gamification.tsx
│   │   └── Challenges.tsx
│   └── lib/
│       └── utils.ts
└── README.md
```

## 🛠️ Instalação Rápida

Execute o script de setup (recomendado):
```bash
./setup.sh
```

Ou instale manualmente:

### Backend

1. Navegue até a pasta backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` e configure as variáveis:
```bash
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
OPENAI_API_KEY=your-openai-api-key
NODE_ENV=development

# Supabase Database URLs
# DATABASE_URL: Use a connection string do Supabase (pode usar pooler na porta 6543)
# Exemplo: postgresql://postgres:[PASSWORD]@[PROJECT-REF].supabase.co:6543/postgres?pgbouncer=true
DATABASE_URL=postgresql://postgres:[PASSWORD]@[PROJECT-REF].supabase.co:6543/postgres?pgbouncer=true

# DIRECT_URL: Conexão direta (porta 5432) - opcional, só necessário se usar migrate dev
# Exemplo: postgresql://postgres:[PASSWORD]@[PROJECT-REF].supabase.co:5432/postgres
DIRECT_URL=postgresql://postgres:[PASSWORD]@[PROJECT-REF].supabase.co:5432/postgres
```

4. Gere o client Prisma e aplique as migrações:
```bash
npm run prisma:generate
npm run prisma:migrate
```

**Nota**: O comando `prisma:migrate` usa `migrate deploy` que aplica as migrações diretamente no Supabase. 
Para criar novas migrações durante desenvolvimento, use `npm run prisma:migrate:dev`.

5. (Opcional) Gere o build para produção:
```bash
npm run build
```

6. Inicie o servidor:
```bash
npm run dev
```

O backend estará rodando em `http://localhost:3001`

### Frontend

1. Navegue até a pasta frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará rodando em `http://localhost:3000`

**Nota**: Os erros de TypeScript no editor são esperados até que as dependências sejam instaladas. Execute `npm install` em ambas as pastas primeiro.

## 📋 Funcionalidades

### Módulo 1: Plano Nutricional
- Criar e gerenciar planos nutricionais
- Definir calorias diárias e por refeição
- Configurar horários sugeridos
- Listar alimentos permitidos
- Adicionar observações do coach

### Módulo 2: Registro por Foto (IA Vision)
- Upload de fotos de refeições
- Análise automática por IA:
  - Detecção de alimentos
  - Estimativa de calorias e macros
  - Score de aderência (0-100)
  - Tags de aderência
  - Mensagem explicativa

### Módulo 3: Score do Dia
- Cálculo automático do score diário
- Comparação de calorias vs meta
- Indicador visual (verde/amarelo/vermelho)
- Streak de dias seguidos "on plan"
- Visão semanal

### Módulo 4: Diário & Histórico
- Timeline diária com fotos e scores
- Gráfico semanal
- Insights da IA:
  - Padrões (horário que mais erra)
  - Forças e fragilidades

### Módulo 5: Gamificação
- XP por refeição
- Sistema de níveis
- Badges:
  - Semana Blindada
  - Dia Perfeito
  - Protein Lover
  - 5 dias seguidos
  - 30 refeições registradas

### Módulo 6: Desafios
- Criar desafios (creators/coaches)
- Código de convite único
- Ranking de participantes
- Média de score e streak
- Badges por desafio

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Registrar novo usuário
  - Body: `{ email: string, password: string, name?: string }`
  - Returns: `{ user: User, token: string }`
- `POST /api/auth/login` - Login
  - Body: `{ email: string, password: string }`
  - Returns: `{ user: User, token: string }`
- `GET /api/auth/me` - Obter usuário atual (requer token)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ user: User }`

**Nota**: Todas as rotas abaixo requerem autenticação via header `Authorization: Bearer <token>`

### Nutritional Plans
- `GET /api/nutritional-plans` - Listar planos do usuário autenticado
- `GET /api/nutritional-plans/:id` - Obter plano específico
- `POST /api/nutritional-plans` - Criar novo plano
- `PUT /api/nutritional-plans/:id` - Atualizar plano
- `DELETE /api/nutritional-plans/:id` - Deletar plano

### Meals
- `POST /api/meals/register` - Registrar refeição com foto
- `GET /api/meals` - Listar refeições do usuário autenticado
- `GET /api/meals/:id` - Obter refeição específica

### Scores
- `GET /api/scores/daily/:date` - Score diário
- `GET /api/scores/weekly` - Scores semanais
- `GET /api/scores/streak` - Streak atual

### Diary
- `GET /api/diary/timeline` - Timeline de refeições
- `GET /api/diary/insights` - Insights da IA

### Gamification
- `GET /api/gamification` - Dados de gamificação do usuário autenticado
- `GET /api/gamification/leaderboard/:challengeId` - Leaderboard do desafio

### Challenges
- `POST /api/challenges` - Criar desafio
- `GET /api/challenges/my-challenges` - Desafios do criador autenticado
- `GET /api/challenges/invite/:inviteCode` - Obter desafio por código
- `POST /api/challenges/join` - Entrar em desafio (body: `{ invite_code: string }`)
- `GET /api/challenges/:id` - Detalhes do desafio com ranking

## 🎨 UI Components

A aplicação utiliza Shadcn UI, uma biblioteca de componentes baseada em Radix UI e Tailwind CSS. Todos os componentes estão em `frontend/components/ui/`.

## 📝 Notas

- É necessário um banco PostgreSQL acessível pela `DATABASE_URL`
- As fotos são salvas localmente em `backend/uploads/` (em produção, use cloud storage)
- A integração com OpenAI requer uma chave de API válida
- Sistema de autenticação JWT implementado - todas as rotas (exceto `/api/auth/*`) requerem token

## 🚧 Próximos Passos

- [ ] Implementar autenticação completa (JWT)
- [ ] Upload de imagens para cloud storage (AWS S3, Cloudinary)
- [ ] Notificações push
- [ ] Exportação de relatórios
- [ ] Integração com wearables
- [ ] App mobile (React Native)

## 📄 Licença

ISC

