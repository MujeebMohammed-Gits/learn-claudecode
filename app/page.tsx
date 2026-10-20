import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AlertTriangle, LuSettings, LuBookOpen, LuShieldCheck, LuZap } from "lucide-react";

export default function Home() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Module 1: Fundamentals */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuBookOpen className="h-6 w-6 mr-3" />
                  Module 1: Fundamentals
                </CardTitle>
                <CardDescription>
                  Learn ClaudeCode basics, terminal navigation, and core concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Starting your journey from beginner to mastery with ClaudeCode.
                </p>
              </CardContent>
            </Card>

            {/* Module 2: AI Agents */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  Module 2: AI Agents
                </CardTitle>
                <CardDescription>
                  Creating and managing AI agents for specific tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build intelligent agents that automate projects and workflows.
                </p>
              </CardContent>
            </Card>

            {/* Module 3: Sub-agents */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Module 3: Sub-agents
                </CardTitle>
                <CardDescription>
                  Plugin architecture and advanced agent patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design sub-agents, skills, and plugins for production-ready applications.
                </p>
              </CardContent>
            </Card>

            {/* Module 4: Advanced Features */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuSettings className="h-6 w-6 mr-3" />
                  Module 4: Advanced Features
                </CardTitle>
                <CardDescription>
                  Hooks, loops, MCP servers, and ECC skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master loops, hooks, MCP configuration, and skill development.
                </p>
              </CardContent>
            </Card>

            {/* Module 5: Capstone */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <AlertTriangle className="h-6 w-6 mr-3" />
                  Module 5: Capstone Project
                </CardTitle>
                <CardDescription>
                  End-to-end project from definition to production launch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build and deploy a complete capstone project with monitoring.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section below the grid on mobile */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Learn ClaudeCode
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              The complete zero-to-mastery tutorial course for anyone from non-theoretical or
              technical background who has never opened a terminal.
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}