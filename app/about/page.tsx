export const metadata = {
  title: "About Learn ClaudeCode",
  description: "Empower developers of all backgrounds to master Claude Code without requiring terminal expertise."
};

import { Suspense } from "react";

export default function About() {
return (
    <Suspense fallback>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Mission */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuBookOpen className="h-6 w-6 mr-3" />
                  Mission
                </CardTitle>
                <CardDescription>
                  Empower developers of all backgrounds to master Claude Code without
                  requiring terminal expertise. Make AI-assisted development
                  accessible to everyone.
                </CardDescription>
              </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mission is to lower the barrier to entry for AI-assisted software
                development. By focusing on interface-based learning first, we ensure
                that anyone can start building with Claude Code regardless of their
                terminal familiarity.
              </p>
            </CardContent>
            </Card>

            {/* Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuZap className="h-6 w-6 mr-3" />
                  Learning Path
                </CardTitle>
                <CardDescription>
                  A structured 5-module journey from fundamentals to capstone
                  deployment, with interface-based learning for the first 3 modules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Module 1: Fundamentals - Core concepts and beginner-friendly
                  introduction. Module 2: AI Agents - Creating and managing AI
                  agents. Module 3: Sub-agents and Plugin Architecture - Designing
                  hierarchical structures. Module 4: Advanced Features - Hooks,
                  loops, MCP, and ECC skills. Module 5: Capstone Project - End-to-end
                  deployment and showcase.
                </p>
              </CardContent>
            </Card>

            {/* Three-Access Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuGlobe className="h-6 w-6 mr-3" />
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

            {/* Target Audience */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuUsers className="h-6 w-6 mr-3" />
                  Target Audience
                </CardTitle>
                <CardDescription>
                  Non-technical or technical beginners who have never opened a
                  terminal and want to master Claude Code.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Designed for developers, designers, and entrepreneurs who want to
                  leverage AI-assisted development without spending months learning
                  terminal commands. The interface-first approach means you can start
                  building immediately.
                </p>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <LuTerminal className="h-6 w-6 mr-3" />
                  Technology Stack
                </CardTitle>
                <CardDescription>
                  Next.js 16, React 18, Tailwind CSS 4.0, shadcn-ui, TypeScript,
                  ESLint, and the rtk token optimization system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built with modern web technologies: Next.js 16 app router, React
                  18, Tailwind CSS 4.0 for styling, shadcn-ui components, TypeScript
                  for type safety, ESLint for linting, and rtk (Rust Token Killer)
                  for token-optimized CLI proxy operations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Hero section */}
          <div className="mt-12 md:mt-0 lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Learn ClaudeCode
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