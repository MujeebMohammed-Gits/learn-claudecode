import { routes, deploymentEnv, type VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  buildCommand: "npm run build",
  framework: "nextjs",
  rewrites: [
    routes.rewrite("/api/(.*)", "https://backend.example.com/$1"),
  ],
  redirects: [
    routes.redirect("/old-docs", "/docs"),
  ],
  headers: [
    routes.cacheControl("/static/(.*)", { public: true, maxAge: "1 week", immutable: true }),
  ],
  crons: [{ path: "/api/cleanup", schedule: "0 0 * * *" }],
};