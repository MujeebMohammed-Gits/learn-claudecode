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
      permanent: true,
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
    {
      source: "/static/(.*)",
      headers: [
        { type: "Cache-Control", value: "public, max-age=86400, immutable" },
      ],
    },
    // Security headers
    {
      source: "/:path*",
      headers: [
        { type: "X-Content-Type", value: "nosniff" },
        { type: "X-Frame-Options", value: "DENY" },
        { type: "Referrer-Policy", value: "origin-cross-origin" },
      ],
    },
    // API route headers
    {
      source: "/api/:path*",
      headers: [
        { type: "Access-Control-Allow-Origin", value: "*" },
      ],
    },
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

  // Environment variables for the course
  environment: {
    NODE_ENV: "production",
    NEXT_PUBLIC_COURSE_NAME: "Learn ClaudeCode - Zero to Mastery",
    NEXT_PUBLIC_MODULE_COUNT: "5",
  },

  // Experimental features
  experimental: {
    // ISR (Incremental Static Regeneration) for tutorial pages
    // ISR works on Vercel for Next.js, Nuxt, and Astro
    island: true,
  },
};
