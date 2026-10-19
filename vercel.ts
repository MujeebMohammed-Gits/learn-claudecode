// Vercel Configuration for Learn ClaudeCode Course
// Following course patterns: Next.js App Router, TypeScript, Fluid Compute
// No edge runtime - stay on Fluid Compute for full Node.js APIs and longer durations

import { routes, deploymentEnv, type VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  buildCommand: "npm run build",
  framework: "nextjs",
  // Fluid Compute — default runtime, not edge (enables full Node.js APIs, longer durations)
  // runtime: "edge" removed — stay on Fluid Compute for production-ready patterns

  rewrites: [
    // API routes for Agent sessions
    {
      source: "/api/agent/:path*",
      destination: "/api/agent/$1",
    },
    // MCP endpoint redirects
    {
      source: "/mcp/:path*",
      destination: "/api/mcp/$1",
    },
    // Tutorial course navigation
    {
      source: "/tutorials",
      destination: "/tutorials",
    },
  ],

  redirects: [
    // Agent deployment redirect
    {
      source: "/deploy-agent",
      destination: "/api/agent/sessions",
      permanent: true,
    },
    // Course page redirects
    {
      source: "/about",
      destination: "/about",
      permanent: true,
    },
  ],

  headers: [
    // Cache control for static tutorial assets
    routes.cacheControl('/static/(.*)', { public: true, maxAge: '1 week', immutable: true }),
  ],

  crons: [
    // Session cleanup cron job — daily at midnight
    {
      path: "/api/agent/cleanup-sessions",
      schedule: "0 0 * * *",
    },
    // Progress tracking sync
    {
      path: "/api/user/progress-sync",
      schedule: "*/5 * * * *",  // every 5 minutes
    },
  ],
};
