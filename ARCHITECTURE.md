# Architecture Documentation: Interactive Website Build

## Project Overview
- **Project Name**: Learn ClaudeCode Website
- **Goal**: Build a clean, clear, highly interactive and scalable website from scratch with latest technologies and trendy UI
- **Target Audience**: Non-technical user learning Claude Code from scratch
- **Final Goal**: Host live on free tools (Vercel), maintain, provide maintenance support, and improvising as needed

## Tech Stack
| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| **Frontend** | Next.js | 14.2.0 | App Router, TypeScript, Tailwind CSS |
| | React | 19.0.0 | Latest stable |
| | TypeScript | 5.6.0 | Type-safe development |
| | Tailwind CSS | 3.4.0 | Utility-first styling, custom themes |
| | shadcn-ui | Latest | Accessible UI component library |
| | framer-motion | Latest | Animations and micro-interactions |
| | @tanstack/react-query | 5.0.0 | Data fetching and state management |

| **Backend** | Supabase | Free tier | Postgres, Auth, Storage, APIs |
| | Postgres | Serverless | Relational database |
| | Auth | Email/password + Google OAuth | User authentication |
| | Storage | Private Blob | File uploads and assets |

| **Deployment** | Vercel | Free tier | Node.js 22, Fluid Compute, custom domain |
| | Node.js Runtime | 22 LTS | Default Vercel runtime |
| | Environment vars | vercel.ts | Configuration via vercel.ts |

| **Portfolio & Automation** | GitHub | Remote | Repository, Profile README, CI/CD |
| | Claude Code (rtk) | CLI | Token-optimized command proxy |
| | ECC Skills | Framework | /ecc:plan, /ecc:council, and all /ecc:skills |
| | Agents & MCP's | Custom | Built and hosted on Vercel free tier |

## Scalability Design
- **Fluid Compute**: Vercel's Fluid Compute reuses function instances across concurrent requests, significantly reducing cold starts
- **Edge-aware**: Default Node.js runtime (not deprecated Edge) for full API access and longer durations
- **ISR (Incremental Static Regeneration)**: Works on Next.js App Router for static-like performance with dynamic content
- **CDN**: Automatic global CDN for all assets and pages
- **Connection pooling**: Supabase Postgres uses connection pooling for concurrent users

## Security Model
| Area | Implementation | Details |
|------|---------------|---------|
| **Authentication** | Supabase Auth | Email/password, Google OAuth, JWT tokens, RLS policies |
| **Authorization** | Row Level Security | Database-level access control per user |
| **Headers** | Helmet middleware | CSP, XSS protection, frame options |
| **Input validation** | Zod schemas | Type-safe validation for all forms/APIs |
| **Rate limiting** | next-rate-limit | Prevent abuse, configurable per endpoint |
| **Secrets management** | Vercel env | No hardcoded secrets, all env vars via Vercel dashboard |
| **HTTPS** | Automatic on Vercel | SSL/TLS certificates auto-generated and renewed |

## Database Schema (Supabase Postgres)

### Tables

#### 1. `users`
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
email VARCHAR(255) NOT NULL
full_name VARCHAR(100)
avatar_url TEXT
created_at TIMESTAMP DEFAULT NOW()
updated_at TIMESTAMP DEFAULT NOW()
```

#### 2. `pages`
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
slug VARCHAR(255) NOT NULL UNIQUE
title VARCHAR(255) NOT NULL
content JSONB DEFAULT '{}'
is_published BOOLEAN DEFAULT false
created_at TIMESTAMP DEFAULT NOW()
updated_at TIMESTAMP DEFAULT NOW()
```

#### 3. `interactions`
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
user_id UUID REFERENCES users(id)
page_id UUID REFERENCES pages(id)
action VARCHAR(50) NOT NULL -- 'view', 'click', 'form_submit', etc.
metadata JSONB DEFAULT '{}'
created_at TIMESTAMP DEFAULT NOW()
```

#### 4. `agent_sessions`
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
user_id UUID REFERENCES users(id)
status VARCHAR(50) DEFAULT 'active' -- 'active', 'completed', 'failed'
started_at TIMESTAMP DEFAULT NOW()
completed_at TIMESTAMP
duration_ms INTEGER
session_data JSONB DEFAULT '{}'
```

#### 5. `ml_models`
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid()
name VARCHAR(100) NOT NULL
version VARCHAR(20) NOT NULL
description TEXT
status VARCHAR(50) DEFAULT 'pending' -- 'pending', 'training', 'deployed', 'deprecated'
created_at TIMESTAMP DEFAULT NOW()
updated_at TIMESTAMP DEFAULT NOW()
```

## API Endpoints

### Public Endpoints
| Endpoint | Method | Description | Auth |
|----------|--------|-------------|------|
| `GET /api/pages` | List all pages | Get published pages | None |
| `GET /api/pages/:slug` | Get page by slug | Get a specific page | None |
| `GET /api/health` | Health check | Server status check | None |

### Protected Endpoints (Auth required)
| Endpoint | Method | Description | Auth |
|----------|--------|-------------|------|
| `POST /api/interactions` | Log interaction | Track user interaction | ✅ |
| `GET /api/user/profile` | Get user profile | Retrieve current user data | ✅ |
| `PATCH /api/user/profile` | Update user profile | Update name, avatar, etc. | ✅ |
| `POST /api/agent/sessions` | Create agent session | Start a new Claude Code agent session | ✅ |

### Supabase Edge Functions
| Function | Purpose |
|----------|---------|
| `capture-clipboard` | Capture clipboard content for AI learning |
| `generate-insights` | Generate analytics insights from interactions |
| `save-session` | Save agent session state durably |

## Environment Configuration

### vercel.ts
```ts
import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: 'npm run build',
  framework: 'nextjs',
  env: {
    VITE_SUPABASE_URL: process.env.SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
  headers: [
    routes.cacheControl('/static/(.*)', { public: true, maxAge: '1 week', immutable: true }),
    routes.redirect('/old-page', '/new-page', { permanent: true }),
  ],
  crons: [{ path: '/api/cleanup', schedule: '0 0 * * *' }],
};
```

### Supabase Environment Variables
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Server-side only (not exposed to client)

## Monitoring & Maintenance
- **Sentry**: Error tracking and performance monitoring
- **GitHub Actions**: CI/CD pipeline for lint, test, build, deploy
- **Vercel Analytics**: Page views, traffic, performance metrics
- **Supabase Dashboard**: Database queries, authentication stats, storage usage

## Migration Path
- **Free tier → Paid**: Vercel Hobby/Pro plan, Supabase Pro plan
- **Vercel**: Keep same Next.js code, upgrade resources
- **Supabase**: Export/import database, upgrade storage plans
- **Domain**: Existing custom domain maps to new hosting without changes

## Development Workflow
1. **Branch**: Create feature branch from main
2. **Develop**: Implement feature, write tests
3. **Lint**: `npm run lint` - pass code quality checks
4. **Test**: `npm test` - unit and integration tests
5. **Deploy**: `vercel deploy` - create preview deployment
6. **Promote**: Merge to main, promote preview to production

## Risks & Mitigations
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Database schema changes | Medium | Use migrations, normalize for scalability from start |
| Supabase free tier limits | Medium | Monitor usage, upgrade before hitting limits |
| Next.js edge runtime dep | Low | Stay on default Node.js (Fluid Compute) for full API access |
| Authentication edge cases | Low | Comprehensive test coverage, handle all OAuth flows |
| Performance bottlenecks | Low | Profile with Lighthouse, optimize images, use ISR |

---
*Architecture document generated as part of Phase 2: Architecture & Design*
*Version: 1.0 | Last updated: 2026-10-03*