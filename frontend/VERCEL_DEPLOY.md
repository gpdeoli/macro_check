# 🚀 Guia de Deploy do Frontend no Vercel

Este guia detalha como fazer deploy do frontend Next.js no Vercel.

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Repositório no GitHub/GitLab/Bitbucket
3. Backend já deployado (para configurar a URL da API)

## 🔧 Configuração Inicial

### 1. Preparar o Repositório

Certifique-se de que o código está commitado e pushado:

```bash
git add .
git commit -m "Prepare frontend for Vercel deployment"
git push origin master
```

### 2. Criar Projeto no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe o repositório do GitHub/GitLab/Bitbucket
4. **IMPORTANTE**: Configure o **Root Directory** como `frontend`

### 3. Configurações do Projeto no Vercel

Na página de configuração do projeto, configure:

#### **Framework Preset**
- Selecione **"Next.js"** (deve ser detectado automaticamente)
- Ou deixe como **"Other"** se não detectar

#### **Root Directory**
- Defina como: `frontend`
- ⚠️ **CRÍTICO**: Sem isso, o Vercel não encontrará o `package.json` e `next.config.js`

#### **Build Command**
- Deixe vazio (o Vercel detecta automaticamente: `next build`)
- Ou use: `npm run build`

#### **Output Directory**
- **NÃO configure** - Deixe vazio
- O Next.js 14 usa `.next` automaticamente
- ⚠️ **NÃO** defina como `public` - isso causará erro

#### **Install Command**
- Deixe como padrão: `npm install`

## 🔐 Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no Vercel:

### Variáveis Obrigatórias

1. **NEXT_PUBLIC_API_URL** (ou similar)
   - URL do backend deployado
   - Exemplo: `https://seu-backend.vercel.app`
   - ⚠️ Use `NEXT_PUBLIC_` prefix para variáveis acessíveis no cliente

### Variáveis Opcionais

2. **NODE_ENV**
   - Defina como: `production`

### Como Adicionar Variáveis no Vercel

1. No dashboard do projeto, vá em **Settings** → **Environment Variables**
2. Adicione cada variável:
   - **Name**: Nome da variável (ex: `NEXT_PUBLIC_API_URL`)
   - **Value**: Valor da variável
   - **Environment**: Selecione **Production**, **Preview** e **Development** conforme necessário
3. Clique em **Save**

## 📦 Estrutura do Projeto

O projeto deve ter a seguinte estrutura:

```
frontend/
├── app/              # App Router do Next.js 14
│   ├── layout.tsx
│   ├── page.tsx
│   └── login/
│       └── page.tsx
├── components/       # Componentes React
├── lib/             # Utilitários
├── next.config.js   # Configuração do Next.js
├── package.json
├── tsconfig.json
└── vercel.json      # Configuração do Vercel (opcional)
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

3. Navegue até a pasta `frontend`:
   ```bash
   cd frontend
   ```

4. Execute o deploy:
   ```bash
   vercel --prod
   ```

## ✅ Verificação Pós-Deploy

### 1. Testar Rota Principal

Acesse: `https://seu-projeto.vercel.app/`

Deve carregar a página inicial do aplicativo.

### 2. Testar Rota de Login

Acesse: `https://seu-projeto.vercel.app/login`

Deve carregar a página de login.

## 🐛 Troubleshooting

### Erro: "No Output Directory named 'public' found"

**Causa**: O Vercel está procurando um diretório `public` que não existe no Next.js 14.

**Soluções**:

1. **Verifique o Root Directory**:
   - No dashboard do Vercel, vá em **Settings** → **General**
   - Certifique-se de que **Root Directory** está configurado como `frontend`
   - Se não estiver, configure e faça um novo deploy

2. **Remova Output Directory**:
   - No dashboard do Vercel, vá em **Settings** → **General**
   - Deixe o campo **Output Directory** **VAZIO**
   - O Next.js 14 usa `.next` automaticamente

3. **Verifique o vercel.json**:
   - Se houver um `vercel.json` no frontend, certifique-se de que não define `outputDirectory` como `public`
   - O `vercel.json` deve ter apenas `"framework": "nextjs"` ou ser removido

4. **Framework Detection**:
   - Certifique-se de que o Vercel detectou o Next.js
   - No dashboard, verifique se mostra "Next.js" como framework

### Erro: "Module not found"

- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente e verifique se funciona
- Verifique se o `node_modules` não está no `.gitignore` (não deve estar)

### Erro: "Build failed"

- Verifique os logs de build no dashboard do Vercel
- Teste o build localmente: `npm run build`
- Verifique se há erros de TypeScript: `npm run lint`

### Erro: "API calls failing"

- Verifique se a variável `NEXT_PUBLIC_API_URL` está configurada
- Verifique se o backend está deployado e acessível
- Verifique CORS no backend (deve permitir o domínio do frontend)

## 📊 Monitoramento

### Métricas Disponíveis

No dashboard do Vercel, você pode ver:
- **Page Views**: Visualizações de páginas
- **Bandwidth**: Uso de banda
- **Build Time**: Tempo de build
- **Deployment History**: Histórico de deploys

## 🔒 Segurança

### Boas Práticas

1. **Variáveis de Ambiente**:
   - Use `NEXT_PUBLIC_` apenas para variáveis que precisam estar no cliente
   - Nunca exponha secrets no cliente
   - Use variáveis de ambiente do Vercel para todos os secrets

2. **CORS**:
   - Configure CORS no backend para permitir apenas o domínio do frontend
   - Exemplo: `https://seu-frontend.vercel.app`

3. **HTTPS**:
   - O Vercel fornece HTTPS automaticamente
   - Certifique-se de que todas as requisições usam HTTPS

## 🚀 Otimizações

### Performance

1. **Images**:
   - O Next.js Image Optimization está desabilitado (`unoptimized: true`)
   - Considere habilitar para melhor performance
   - Ou use um serviço de CDN (Cloudinary, Imgix)

2. **Static Generation**:
   - Páginas estáticas são geradas automaticamente
   - Considere usar `generateStaticParams` para rotas dinâmicas

3. **Bundle Size**:
   - Monitore o tamanho do bundle
   - Use `next/bundle-analyzer` para análise

## 📝 Checklist de Deploy

Antes de fazer deploy, verifique:

- [ ] Código commitado e pushado
- [ ] `next.config.js` configurado corretamente
- [ ] `package.json` com todas as dependências
- [ ] Root Directory configurado como `frontend`
- [ ] Output Directory **VAZIO** (não configurado)
- [ ] Framework detectado como Next.js
- [ ] Variáveis de ambiente configuradas
- [ ] `NEXT_PUBLIC_API_URL` apontando para o backend
- [ ] Build passa localmente (`npm run build`)
- [ ] Lint passa (`npm run lint`)

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Next.js no Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs no dashboard do Vercel
2. Teste localmente com `vercel dev`
3. Consulte a documentação do Next.js
4. Verifique issues conhecidos no GitHub

---

**Última atualização**: 2024

