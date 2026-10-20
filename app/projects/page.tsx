export const metadata = {
  title: "Projects - Showcase and Portfolio",
  description: "Showcase of projects built through the learning journey with architecture diagrams, deployment status, and token savings analytics."
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
  LuGit,
  LuFolder,
  LuZap,
  LuShieldCheck,
  LuPalette,
  LuServer,
} from "lucide-react";

export default function Projects() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Completed Projects */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuFolder className="h-6 w-6 mr-3" />
                  Completed Projects
                </CardTitle>
                <CardDescription>
                  Showcase of capstone projects built through the learning journey
                  with architecture diagrams and deployment status.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View all completed capstone projects with their tech stacks,
                  token savings, deployment status, and lessons learned. Each
                  project includes a live demo link and source code repository.
                </p>
              </CardContent>
            </Card>

            {/* Agent Projects */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Agent Projects
                </CardTitle>
                <CardDescription>
                  Interactive agent building projects with sub-agent hierarchies,
                  skill compositions, and MCP server configurations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on projects for designing and implementing agent ecosystems.
                  Build sub-agent hierarchies, compose skills, configure MCP
                  servers, and deploy working agent systems.
                </p>
              </CardContent>
            </Card>

            {/* Open Source */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuGit className="h-6 w-6 mr-3" />
                  Open Source
                </CardTitle>
                <CardDescription>
                  Public repository showcases with sanitized code, CLAUDE.md,
                  setup scripts, and contribution guidelines.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse publicly shared projects from the learning community.
                  Each repository includes sanitized code, CLAUDE.md configuration,
                  setup.sh scripts, and contribution guidelines.
                </p>
              </CardContent>
            </Card>

            {/* Deployment Showcase */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuServer className="h-6 w-6 mr-3" />
                  Deployment Showcase
                </CardTitle>
                <CardDescription>
                  Vercel deployment examples with custom domains, environment
                  variable configurations, and CI/CD pipeline configurations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Examples of deployed projects on Vercel with custom domains,
                  environment variable setups, and CI/CD pipeline configurations.
                  See token optimization results and performance metrics.
                </p>
              </CardContent>
            </Card>

            {/* Skill Showcase */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuPalette className="h-6 w-6 mr-3" />
                  Skill Showcase
                </CardTitle>
                <CardDescription>
                  Published skills and plugins from the learning community with
                  usage statistics and compatibility information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore published skills and plugins from the community. View
                  usage statistics, compatibility information, and installation
                  instructions for each skill package.
                </p>
              </CardContent>
            </Card>

            {/* Token Savings */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  Token Savings
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
              Projects
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Showcase of projects built through the learning journey with
              architecture diagrams, deployment status, and token savings analytics.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                View Projects
              </button>
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}