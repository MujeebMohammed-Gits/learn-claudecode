import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  LuShieldCheck,
  LuZap,
  LuRocket,
  LuSettings,
  LuGitMerge,
  LuDatabase,
} from "lucide-react";

export default function AIAgents() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* AI Agents Fundamentals */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  AI Agents Fundamentals
                </CardTitle>
                <CardDescription>
                  Learn the basics of creating and managing AI agents for specific tasks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build intelligent agents that automate projects and workflows using
                  Claude Code's agent capabilities.
                </p>
              </CardContent>
            </Card>

            {/* Sub-Agent Patterns */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Sub-Agent Patterns
                </CardTitle>
                <CardDescription>
                  Design hierarchical agent structures with parent-child relationships
                  and specialized task delegation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create sub-agents that handle specific domains while coordinating
                  through a central orchestrator pattern.
                </p>
              </CardContent>
            </Card>

            {/* Plugin Architecture */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuRocket className="h-6 w-6 mr-3" />
                  Plugin Architecture
                </CardTitle>
                <CardDescription>
                  Build extensible plugin systems that enhance Claude Code capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop custom plugins and skills that integrate with the Claude Code
                  ecosystem to extend functionality.
                </p>
              </CardContent>
            </Card>

            {/* Advanced Hooks */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuSettings className="h-6 w-6 mr-3" />
                  Advanced Hooks
                </CardTitle>
                <CardDescription>
                  Master custom hooks for state management, side effects, and composition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn hook patterns that enable reusable logic across agents and
                  applications, including effect hooks and state synchronization.
                </p>
              </CardContent>
            </Card>

            {/* MCP Server Integration */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuGitMerge className="h-6 w-6 mr-3" />
                  MCP Server Integration
                </CardTitle>
                <CardDescription>
                  Configure Model Context Protocol servers for agent communication.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set up MCP servers enabling inter-agent communication, shared context,
                  and distributed task processing across multiple Claude Code instances.
                </p>
              </CardContent>
            </Card>

            {/* Skill Development */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuDatabase className="h-6 w-6 mr-3" />
                  Skill Development
                </CardTitle>
                <CardDescription>
                  Create reusable skills and capabilities for agent composition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design modular skills that can be composed, shared, and reused across
                  multiple agent types and projects.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Module 2: AI Agents
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Creating and managing AI agents for specific tasks. Learn how to build
              intelligent agents that automate projects and workflows.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Start Lesson
              </button>
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                View Agent Patterns
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}