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
  LuBookOpen,
  LuSettings,
  LuShieldCheck,
  LuRocket,
  LuPalette,
} from "lucide-react";

export default function CapstoneProject() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Definition */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuBookOpen className="h-6 w-6 mr-3" />
                  Project Definition
                </CardTitle>
                <CardDescription>
                  Define your capstone project scope, goals, and success criteria.
                  Identify the problem space, target users, and technical requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start with a clear project brief. Define what success looks like,
                  the key features required, and the metrics that matter. This
                  foundation guides all subsequent development decisions.
                </p>
              </CardContent>
            </Card>

            {/* Agent Architecture */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Agent Architecture
                </CardTitle>
                <CardDescription>
                  Design the complete agent hierarchy for your capstone project,
                  including primary agents, sub-agents, and skill composition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blueprint your agent ecosystem: the main orchestrator, specialized
                  sub-agents for each domain, and the skills each agent carries.
                  Document agent prompts, tool access, and hand-off protocols.
                </p>
              </CardContent>
            </Card>

            {/* Plugin Development */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuRocket className="h-6 w-6 mr-3" />
                  Plugin Development
                </CardTitle>
                <CardDescription>
                  Build custom plugins and skills that extend Claude Code capabilities
                  for your project's specific needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop reusable plugins: skill packages, MCP server configurations,
                  and custom hook libraries. Publish to the skill registry for
                  version control and team sharing.
                </p>
              </CardContent>
            </Card>

            {/* Deployment Pipeline */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuSettings className="h-6 w-6 mr-3" />
                  Deployment Pipeline
                </CardTitle>
                <CardDescription>
                  Set up Vercel deployment, environment variables, and CI/CD for
                  your capstone project with monitoring and rollback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Configure Next.js for Vercel deployment. Set up environment
                  variables, custom domains, and automated CI/CD pipelines. Enable
                  monitoring, analytics, and quick rollback capabilities.
                </p>
              </CardContent>
            </Card>

            {/* Monitoring and Observability */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  Monitoring and Observability
                </CardTitle>
                <CardDescription>
                  Implement logging, analytics, and performance tracking for your
                  deployed capstone project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set up error tracking, performance metrics, user analytics, and
                  health checks. Integrate with Vercel observability tools and
                  custom dashboards for real-time project insights.
                </p>
              </CardContent>
            </Card>

            {/* Capstone Showcase */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuPalette className="h-6 w-6 mr-3" />
                  Capstone Showcase
                </CardTitle>
                <CardDescription>
                  Present your completed project with live demo, architecture
                  diagrams, and lessons learned from the entire learning journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Document your complete journey from Module 1 fundamentals through
                  Module 5 capstone. Include architecture diagrams, code samples,
                  token savings analytics, and deployment success metrics.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Module 5: Capstone Project
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              End-to-end project from definition to production launch with monitoring
              and deployment.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Start Capstone
              </button>
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                View Capstone Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}