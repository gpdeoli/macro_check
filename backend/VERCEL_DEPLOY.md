# 🚀 Guia Completo de Deploy no Vercel - MacroCheck Backend

Este guia detalha todos os passos necessários para fazer deploy do backend MacroCheck no Vercel como Serverless Functions.

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Repositório no GitHub/GitLab/Bitbucket
3. Banco de dados PostgreSQL (Supabase, Neon, Railway, etc.)
4. Chave da API OpenAI

## 🔧 Configuração Inicial

### 1. Preparar o Repositório

Certifique-se de que o código está commitado e pushado para o repositório remoto:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin master
```

### 2. Criar Projeto no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe o repositório do GitHub/GitLab/Bitbucket
4. **IMPORTANTE**: Configure o **Root Directory** como `backend`

### 3. Configurações do Projeto no Vercel

Na página de configuração do projeto, configure:

#### **Framework Preset**
- Deixe como **"Other"** ou **"None"**

#### **Root Directory**
- Defina como: `backend`
- ⚠️ **CRÍTICO**: Sem isso, o Vercel não encontrará o `vercel.json` e `api/index.ts`

#### **Build Command**
- Deixe vazio (já está configurado no `vercel.json`)
- Ou use: `npm run prisma:generate && npm run build`

#### **Output Directory**
- Deixe vazio ou defina como `dist`
- O Vercel usará o `vercel.json` para configuração

#### **Install Command**
- Deixe como padrão: `npm install`
- ⚠️ **IMPORTANTE**: O `vercel.json` já está configurado com `npm install --include=dev` para instalar dependências de desenvolvimento (necessárias para os tipos TypeScript)

## 🔐 Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no Vercel:

### Variáveis Obrigatórias

1. **DATABASE_URL**
   - String de conexão do PostgreSQL
   - Formato: `postgresql://user:password@host:port/database?schema=public`
   - Exemplo (Supabase): `postgresql://postgres:[PASSWORD]@[PROJECT-REF].supabase.co:6543/postgres?pgbouncer=true`
   - ⚠️ Para Supabase, use a porta **6543** (pooler) em produção

2. **JWT_SECRET**
   - Chave secreta para assinar tokens JWT
   - Gere uma string aleatória forte
   - Exemplo: `openssl rand -base64 32`

3. **OPENAI_API_KEY**
   - Chave da API OpenAI
   - Obtenha em: https://platform.openai.com/api-keys
   - Formato: `sk-...`

### Variáveis Opcionais

4. **NODE_ENV**
   - Defina como: `production`
   - Isso desativa logs detalhados e ativa otimizações

5. **FRONTEND_URL**
   - URL do frontend deployado no Vercel
   - Exemplo: `https://seu-frontend.vercel.app`
   - ⚠️ **IMPORTANTE**: Necessário para CORS funcionar corretamente
   - O backend permite automaticamente domínios `*.vercel.app` em produção, mas é recomendado definir esta variável

6. **ALLOWED_ORIGINS** (opcional)
   - Lista de origens permitidas separadas por vírgula
   - Exemplo: `https://seu-frontend.vercel.app,https://www.seu-dominio.com`
   - Se não definido, permite localhost em desenvolvimento e `*.vercel.app` em produção

7. **PORT**
   - Não é necessário no Vercel (gerenciado automaticamente)
   - Mas pode ser definido se necessário

### Como Adicionar Variáveis no Vercel

1. No dashboard do projeto, vá em **Settings** → **Environment Variables**
2. Adicione cada variável:
   - **Name**: Nome da variável (ex: `DATABASE_URL`)
   - **Value**: Valor da variável
   - **Environment**: Selecione **Production**, **Preview** e **Development** conforme necessário
3. Clique em **Save**

## 📦 Estrutura do Projeto

O projeto deve ter a seguinte estrutura:

```
backend/
├── api/
│   └── index.ts          # Handler serverless principal
├── src/
│   ├── routes/          # Rotas da API
│   ├── services/        # Serviços (AI, etc.)
│   ├── lib/             # Bibliotecas (Prisma, etc.)
│   └── middleware/      # Middlewares (auth, etc.)
├── prisma/
│   └── schema.prisma   # Schema do Prisma
├── vercel.json          # Configuração do Vercel
├── package.json
└── tsconfig.json
```

## 🔄 Processo de Deploy

### Deploy Automático (Recomendado)

1. Após configurar o projeto, o Vercel fará deploy automaticamente
2. Cada push para a branch principal (master/main) acionará um novo deploy
3. Pull Requests criam **Preview Deployments** automaticamente

### Deploy Manual

1. Instale a CLI do Vercel:
   ```bash
   npm i -g vercel
   ```

2. Faça login:
   ```bash
   vercel login
   ```

3. Navegue até a pasta `backend`:
   ```bash
   cd backend
   ```

4. Execute o deploy:
   ```bash
   vercel --prod
   ```

## ✅ Verificação Pós-Deploy

### 1. Testar Rota Raiz

Acesse: `https://seu-projeto.vercel.app/`

Deve retornar:
```json
{
  "status": "ok",
  "message": "MacroCheck API is running",
  "version": "1.0.0",
  "endpoints": { ... }
}
```

### 2. Testar Health Check

Acesse: `https://seu-projeto.vercel.app/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "message": "MacroCheck API is running"
}
```

### 3. Testar Autenticação

```bash
curl -X POST https://seu-projeto.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "senha123",
    "name": "Test User"
  }'
```

## 🐛 Troubleshooting

### Erro: "This Serverless Function has crashed"

**Possíveis causas:**

1. **Prisma Client não gerado**
   - Verifique se `prisma:generate` está no build command
   - Verifique os logs de build no Vercel

2. **Variáveis de ambiente faltando**
   - Verifique se todas as variáveis obrigatórias estão configuradas
   - Verifique se estão disponíveis no ambiente correto (Production/Preview)

3. **Erro de conexão com banco**
   - Verifique se `DATABASE_URL` está correto
   - Para Supabase, use a porta **6543** (pooler)
   - Verifique se o banco permite conexões externas

4. **Erro de importação**
   - Verifique se todos os arquivos estão commitados
   - Verifique se o `tsconfig.json` inclui a pasta `api/`

### Erro: "Module not found"

- Verifique se todas as dependências estão no `package.json`
- Verifique se o `node_modules` não está no `.gitignore` (não deve estar)
- Execute `npm install` localmente e verifique se funciona

### Erro: "Function timeout"

- O timeout padrão é 10 segundos no plano Hobby
- Para funções que demoram mais (como análise de IA), considere:
  - Otimizar o código
  - Usar o plano Pro (até 60 segundos)
  - Processar uploads de forma assíncrona

### Logs e Debugging

1. Acesse o dashboard do projeto no Vercel
2. Vá em **Deployments** → Selecione o deployment → **Functions** → Clique na função
3. Veja os logs em tempo real
4. Para logs locais, use: `vercel logs`

## 📊 Monitoramento

### Métricas Disponíveis

No dashboard do Vercel, você pode ver:
- **Invocations**: Número de chamadas
- **Duration**: Tempo de execução
- **Errors**: Taxa de erros
- **Bandwidth**: Uso de banda

### Alertas

Configure alertas para:
- Taxa de erro > 5%
- Tempo de resposta > 3s
- Uso de função > 80% do limite

## 🔒 Segurança

### Boas Práticas

1. **Nunca commite** arquivos `.env` ou credenciais
2. Use variáveis de ambiente do Vercel para todos os secrets
3. Use HTTPS sempre (automático no Vercel)
4. Valide todos os inputs nas rotas
5. Use rate limiting para APIs públicas (considere middleware)

### CORS

O CORS está configurado para permitir todas as origens. Em produção, considere restringir:

```typescript
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true
}));
```

## 🚀 Otimizações

### Cold Start

Para reduzir cold starts:
1. Use connection pooling (já configurado com PrismaPg)
2. Minimize imports no topo do arquivo
3. Use lazy loading quando possível
4. Considere usar Edge Functions para rotas simples

### Performance

1. **Prisma**: Já otimizado com connection pooling
2. **Uploads**: Usa `/tmp` em serverless (limite de 512MB)
3. **Imagens**: Considere usar CDN (Cloudinary, AWS S3) para uploads grandes

## 📝 Checklist de Deploy

Antes de fazer deploy, verifique:

- [ ] Código commitado e pushado
- [ ] `vercel.json` configurado corretamente
- [ ] `api/index.ts` existe e exporta o app
- [ ] Todas as variáveis de ambiente configuradas
- [ ] `DATABASE_URL` está correto e acessível
- [ ] `JWT_SECRET` está definido
- [ ] `OPENAI_API_KEY` está definido
- [ ] Root Directory configurado como `backend`
- [ ] Build passa localmente (`npm run build`)
- [ ] Prisma Client gerado (`npm run prisma:generate`)

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Prisma + Vercel](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
- [Supabase Connection Pooling](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler)

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs no dashboard do Vercel
2. Teste localmente com `vercel dev`
3. Consulte a documentação do Vercel
4. Verifique issues conhecidos no GitHub

---

**Última atualização**: 2024

