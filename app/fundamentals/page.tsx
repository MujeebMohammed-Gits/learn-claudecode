export const metadata = {
  title: "Module 1: Fundamentals - Beginner-Friendly Start"
};

import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LuBookOpen, LuPencil, LuTerminal, LuZap, LuShieldCheck } from "lucide-react";

export default function Fundamentals() {
  return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Beginner-Friendly Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuBookOpen className="h-6 w-6 mr-3" />
                  Beginner-Friendly Start
                </CardTitle>
                <CardDescription>
                  No terminal required for first 3 modules - learn through interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start your ClaudeCode journey without ever opening a terminal. All lessons
                  are conducted through the visual interface with natural language prompts.
                </p>
              </CardContent>
            </Card>

            {/* Three-Approach Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Three-Access Pattern
                </CardTitle>
                <CardDescription>
                  Interface, terminal, and UI panel approaches for every lesson
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every section offers three ways to learn: no-terminal interface, command
                  syntax reference, and dedicated UI panels - you choose your path.
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

          {/* Hero content */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Module 1: Fundamentals
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Your entry point to ClaudeCode mastery - from zero terminal experience to
              confident AI agent builder in just a few lessons.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Start Lesson 1
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