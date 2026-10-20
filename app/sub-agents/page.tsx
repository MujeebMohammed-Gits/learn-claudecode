export const metadata = {
  title: "Module 3: Sub-agents and Plugin Architecture"
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
  LuBookOpen,
  LuPuzzle,
  LuLayers,
  LuLayout,
} from "lucide-react";

export default function SubAgents() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sub-Agent Design */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Sub-Agent Design
                </CardTitle>
                <CardDescription>
                  Design hierarchical agent structures with parent-child relationships
                  and specialized task delegation patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create sub-agents that handle specific domains while coordinating
                  through a central orchestrator pattern. Learn the lifecycle of
                  sub-agent creation, spawning, and termination.
                </p>
              </CardContent>
            </Card>

            {/* Plugin Architecture */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuPuzzle className="h-6 w-6 mr-3" />
                  Plugin Architecture
                </CardTitle>
                <CardDescription>
                  Build extensible plugin systems that enhance Claude Code capabilities
                  through modular components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop custom plugins and skills that integrate with the Claude Code
                  ecosystem. Learn plugin manifest structure, dependency management,
                  and hot-reloading capabilities.
                </p>
              </CardContent>
            </Card>

            {/* Interface-Based Patterns */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuLayers className="h-6 w-6 mr-3" />
                  Interface-Based Patterns
                </CardTitle>
                <CardDescription>
                  Primary approach: no-terminal required. Learn through interface
                  interactions and natural language prompts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All lessons in this module are conducted through the visual interface
                  with natural language prompts. No terminal required for the first 3
                  modules - learn Claude Code fundamentals entirely through the UI.
                </p>
              </CardContent>
            </Card>

            {/* Direct UI Interaction */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuLayout className="h-6 w-6 mr-3" />
                  Direct UI Interaction
                </CardTitle>
                <CardDescription>
                  Dedicated panels for hands-on practice with sub-agent configuration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive panels where you configure sub-agent hierarchies, plugin
                  manifests, and skill compositions through point-and-click interfaces
                  with live preview.
                </p>
              </CardContent>
            </Card>

            {/* Terminal-Inclusive Commands */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  Terminal-Inclusive Commands
                </CardTitle>
                <CardDescription>
                  rtk gain              # Show token savings analytics
rtk gain --history      # Show command usage history with savings
rtk discover            # Analyze Claude Code history for missed opportunities
rtk proxy <cmd>         # Execute raw command without filtering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Terminal commands for sub-agent and plugin management:
                  <br />
                  <code className="text-sm code-inline bg-muted/50 rounded px-1">rtk gain</code>
                  shows token savings analytics
                  <br />
                  <code className="text-sm code-inline bg-muted/50 rounded px-1">rtk proxy <cmd></code>
                  executes raw commands without filtering
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Module 3: Sub-agents and Plugin Architecture
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Design sub-agents, skills, and plugins for production-ready applications.
              Interface-based learning without terminal requirements.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Start Designing
              </button>
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                View Plugin Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}