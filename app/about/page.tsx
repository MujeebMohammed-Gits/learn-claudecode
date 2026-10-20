export const metadata = {
  title: "About Learn ClaudeCode",
  description: "Empower developers of all backgrounds to master Claude Code without requiring terminal expertise."
};

import { Suspense } from "react";

import {
  Container,
  h2,
  p,
  a,
  div,
  ul,
  li,
} from "@/components/ui";

export default function About() {
  return (
    <Suspense fallback>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Learn ClaudeCode
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          The complete zero-to-mastery tutorial course for anyone from non-theoretical
          or technical background who has never opened a terminal.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Mission</h3>
            <p className="text-muted-foreground">
              Empower developers of all backgrounds to master Claude Code without
              requiring terminal expertise. Make AI-assisted development accessible
              to everyone.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Learning Path</h3>
            <p className="text-muted-foreground">
              A structured 5-module journey from fundamentals to capstone deployment,
              with interface-based learning for the first 3 modules.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Three-Access Pattern</h3>
            <p className="text-muted-foreground">
              Every section offers three ways to learn: no-terminal interface,
              command syntax reference, and dedicated UI panels - you choose
              your path through the material.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/fundamentals" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Start Learning
          </a>
          <a href="/syllabus" className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
            View Syllabus
          </a>
        </div>
      </Container>
    </Suspense>
  );
}