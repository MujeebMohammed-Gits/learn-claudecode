export const metadata = {
  title: "Learn ClaudeCode - Zero to Mastery Tutorial Course",
  description: "The complete zero-to-mastery tutorial course for learning Claude Code from complete beginner to mastery deployment."
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
  LuShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Get Started */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Get Started
                </CardTitle>
                <CardDescription>
                  Begin your ClaudeCode journey with interface-based learning.
                  No terminal required for the first 3 modules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start learning Claude Code without ever opening a terminal. All lessons
                  are conducted through the visual interface with natural language prompts.
                </p>
              </CardContent>
            </Card>

            {/* Three-Access Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuLayers className="h-6 w-6 mr-3" />
                  Three-Access Pattern
                </CardTitle>
                <CardDescription>
                  Interface-based (primary, no terminal required), Terminal-inclusive
                  (command syntax reference), and Direct UI interaction (dedicated
                  panels) for every lesson.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every section offers three ways to learn: no-terminal interface,
                  command syntax reference, and dedicated UI panels - you choose
                  your path through the material.
                </p>
              </CardContent>
            </Card>

            {/* Production-Ready Focus */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuShieldCheck className="h-6 w-6 mr-3" />
                  Production-Ready
                </CardTitle>
                <CardDescription>
                  Full-stack deployment, Vercel integration, SQL migrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Course covers AI Agents, Sub-agents, Hooks, Loops, MCP servers, Skills,
                  and a final Capstone Project with real deployment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Learn ClaudeCode - Zero to Mastery
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              The complete zero-to-mastery tutorial course for anyone from non-theoretical
              or technical background who has never opened a terminal.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Start Learning
              </button>
              <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
                View Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}