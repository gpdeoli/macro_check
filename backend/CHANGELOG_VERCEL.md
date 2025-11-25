# Changelog - Otimizações para Vercel Serverless

## Mudanças Realizadas

### 1. Prisma Client Otimizado (`src/lib/prismaClient.ts`)
- ✅ Configurado connection pool otimizado para serverless
- ✅ Pool com `max: 1` (uma conexão por instância de função)
- ✅ Timeouts configurados para evitar conexões órfãs
- ✅ Desconexão graceful no `beforeExit`

### 2. Uploads de Arquivos (`src/routes/meals.ts`)
- ✅ Detecção automática de ambiente serverless
- ✅ Uso de `/tmp` no Vercel (único diretório gravável)
- ✅ Fallback para `uploads/` em desenvolvimento local

### 3. Handler Serverless (`api/index.ts`)
- ✅ Exportação do app Express como default
- ✅ Rotas raiz e health check funcionando sem Prisma
- ✅ Tratamento de erros adequado
- ✅ Middleware de erro configurado corretamente

### 4. Configuração Vercel (`vercel.json`)
- ✅ Build command com geração do Prisma Client
- ✅ Timeout de função configurado (30s)
- ✅ Roteamento correto para todas as rotas

### 5. TypeScript (`tsconfig.json`)
- ✅ Pasta `api/` incluída no build
- ✅ `rootDir` removido para permitir arquivos fora de `src/`

## Arquivos Criados

1. **`api/index.ts`** - Handler principal para serverless functions
2. **`vercel.json`** - Configuração do Vercel
3. **`VERCEL_DEPLOY.md`** - Guia completo de deploy

## Arquivos Modificados

1. **`src/lib/prismaClient.ts`** - Otimizado para serverless
2. **`src/routes/meals.ts`** - Uploads usando `/tmp`
3. **`src/server.ts`** - Rota raiz adicionada
4. **`tsconfig.json`** - Inclui pasta `api/`

## Compatibilidade

- ✅ Funciona localmente (desenvolvimento)
- ✅ Funciona no Vercel (produção)
- ✅ Compatível com Supabase, Neon, Railway, etc.
- ✅ Suporta connection pooling

## Próximos Passos Recomendados

1. **CDN para Imagens**: Considere usar Cloudinary ou AWS S3 para uploads
2. **Rate Limiting**: Adicione rate limiting para APIs públicas
3. **Monitoring**: Configure alertas no Vercel
4. **CORS**: Restrinja origens permitidas em produção

