export const metadata = {
  title: "Features and Deployment - Production-Ready Deployment",
  description: "Production-ready deployment, Vercel integration, MCP servers, and the full skill ecosystem for enterprise-grade Claude Code applications."
};

import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  LuZap,
  LuServer,
  LuSettings,
  LuShieldCheck,
  LuRocket,
  LuGrid,
} from "lucide-react";

export default function FeaturesDeployment() {
return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Core Features */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Core Features
                </CardTitle>
                <CardDescription>
                  Interface-based learning, three-access pattern (interface, terminal,
                  UI panels), shadcn-ui + Tailwind CSS 4.0, rtk token optimization,
                  and production-ready agent patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The complete learning system with interface-first design, token-optimized
                  output, and modern UI patterns built with shadcn-ui and Tailwind CSS 4.0.
                </p>
              </CardContent>
            </Card>

            {/* Deployment */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuServer className="h-6 w-6 mr-3" />
                  Vercel Deployment
                </CardTitle>
                <CardDescription>
                  One-click deployment to Vercel, custom domains, environment variables,
                  CI/CD pipelines, and preview environments for every branch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy your Claude Code projects to Vercel with a single click. Set up
                  custom domains, environment variables, and automatic CI/CD pipelines.
                  Every branch gets a preview URL for testing and review.
                </p>
              </CardContent>
            </Card>

            {/* MCP Servers */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuRocket className="h-6 w-6 mr-3" />
                  MCP Servers
                </CardTitle>
                <CardDescription>
                  Model Context Protocol server configuration, inter-agent communication,
                  shared context management, and distributed task processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Configure Model Context Protocol servers for agent communication,
                  shared context buffers, and distributed task processing across
                  multiple Claude Code instances with proper authentication and routing.
                </p>
              </CardContent>
            </Card>

            {/* Skills Ecosystem */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuGrid className="h-6 w-6 mr-3" />
                  Skills Ecosystem
                </CardTitle>
                <CardDescription>
                  Skill repository, versioning, discovery, and sharing across projects
                  and teams with the rtk skill management system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Publish, discover, and install skills from the Claude Code skill
                  registry. Manage skill dependencies and version compatibility across
                  agent ecosystems with the rtk skill management system.
                </p>
              </CardContent>
            </Card>

            {/* Advanced Features */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuSettings className="h-6 w-6 mr-3" />
                  Advanced Features
                </CardTitle>
                <CardDescription>
                  Hooks, loops, MCP configuration, ECC skills, security patterns,
                  and verification for production deployments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master the infrastructure that powers production Claude Code
                  applications: custom hooks, loop design patterns, MCP server
                  configuration, ECC (Evolving Code Craft) skills, security best
                  practices, and output verification.
                </p>
              </CardContent>
            </Card>

            {/* Token Optimization */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  Token Optimization
                </CardTitle>
                <CardDescription>
                  rtk gain for analytics, rtk proxy for raw commands, and token-saving
                  patterns throughout the learning journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track token savings with rtk gain, execute raw commands with rtk
                  proxy, and apply token-saving patterns throughout your Claude Code
                  workflow to reduce output by up to 90%.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Features and Deployment
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Production-ready deployment, Vercel integration, MCP servers, and the
              full skill ecosystem for enterprise-grade Claude Code applications.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Deploy to Vercel
              </button>
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                Configure MCP
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}