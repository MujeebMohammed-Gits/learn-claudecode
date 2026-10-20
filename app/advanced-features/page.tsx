import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  LuSettings,
  LuZap,
  LuRocket,
  LuServer,
  LuRefreshCw,
  LuShieldCheck,
} from "lucide-react";

export default function AdvancedFeatures() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Hooks and Loops */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuSettings className="h-6 w-6 mr-3" />
                  Hooks and Loops
                </CardTitle>
                <CardDescription>
                  Master custom hooks for state management, side effects, and composition.
                  including effect hooks and state synchronization patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn hook patterns that enable reusable logic across agents and
                  applications. Study loop design patterns including continuous,
                  conditional, and interruptible loops for agent workflows.
                </p>
              </CardContent>
            </Card>

            {/* MCP Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  MCP Configuration
                </CardTitle>
                <CardDescription>
                  Configure Model Context Protocol servers for agent communication,
                  shared context, and distributed task processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set up MCP servers enabling inter-agent communication, shared context
                  buffers, and distributed task processing across multiple Claude Code
                  instances with proper authentication and routing.
                </p>
              </CardContent>
            </Card>

            {/* ECC Skills */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuRocket className="h-6 w-6 mr-3" />
                  ECC Skills
                </CardTitle>
                <CardDescription>
                  Explore ECC (Evolving Code Craft) skills for systematic code
                  development, refactoring, and quality improvement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master systematic approaches to code evolution, automated
                  refactoring patterns, and quality gate integration within the
                  Claude Code workflow.
                </p>
              </CardContent>
            </Card>

            {/* Skill Management */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuServer className="h-6 w-6 mr-3" />
                  Skill Management
                </CardTitle>
                <CardDescription>
                  Manage skill repositories, versioning, and discovery for agent
                  composition and sharing across projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn how to publish, discover, and install skills from the Claude
                  Code skill registry. Manage skill dependencies and version
                  compatibility across agent ecosystems.
                </p>
              </CardContent>
            </Card>

            {/* Loops and Iteration Patterns */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuRefreshCw className="h-6 w-6 mr-3" />
                  Loops and Iteration
                </CardTitle>
                <CardDescription>
                  Design continuous, conditional, and interruptible loops for
                  agent workflows with proper exit criteria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master loop patterns including while loops with safety guards,
                  conditional iteration, and break/continue semantics for
                  agentic decision-making processes.
                </p>
              </CardContent>
            </Card>

            {/* Security and Verification */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  Security and Verification
                </CardTitle>
                <CardDescription>
                  Implement security best practices, input validation, and output
                  verification for production-ready agent deployments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn security patterns for agent authentication, prompt injection
                  prevention, output sanitization, and audit logging for
                  compliance and production readiness.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Module 4: Advanced Features
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Hooks, loops, MCP configuration, and ECC skills. Master the
              infrastructure that powers production Claude Code applications.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Configure MCP
              </button>
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                Learn ECC Patterns
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}