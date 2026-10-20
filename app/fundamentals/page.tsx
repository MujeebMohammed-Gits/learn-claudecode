export const metadata = {
  title: "Module 1: Fundamentals - Beginner-Friendly Start"
};

import { Suspense } from "react";

import {
  Container,
  h2,
  h3,
  p,
  a,
  div,
  ul,
  li,
} from "@/components/ui";

export default function Fundamentals() {
  return (
    <Suspense fallback>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Module 1: Fundamentals
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Your entry point to ClaudeCode mastery - from zero terminal experience to
          confident AI agent builder in just a few lessons.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Beginner-Friendly Start</h3>
            <p className="text-muted-foreground">
              Start your ClaudeCode journey without ever opening a terminal. All lessons
              are conducted through the visual interface with natural language prompts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Three-Access Pattern</h3>
            <p className="text-muted-foreground">
              Every section offers three ways to learn: no-terminal interface,
              command syntax reference, and dedicated UI panels - you choose your path.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Production-Ready</h3>
            <p className="text-muted-foreground">
              Course covers AI Agents, Sub-agents, Hooks, Loops, MCP servers, Skills,
              and a final Capstone Project with real deployment.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/ai-agents" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Start Lesson 1
          </a>
          <a href="/syllabus" className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
            View Syllabus
          </a>
        </div>
      </Container>
    </Suspense>
  );
}