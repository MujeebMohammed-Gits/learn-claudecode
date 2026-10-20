export const metadata = {
  title: "Learn ClaudeCode - Zero to Mastery Tutorial Course",
  description: "The complete zero-to-mastery tutorial course for learning Claude Code from complete beginner to mastery deployment."
};

import { Suspense } from "react";

import {
  Container,
  h1,
  p,
  a,
  div,
  ul,
  li,
} from "@/components/ui";

export default function Home() {
  return (
    <Suspense fallback>
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Learn ClaudeCode - Zero to Mastery
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          The complete zero-to-mastery tutorial course for anyone from non-theoretical
          or technical background who has never opened a terminal.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="/fundamentals" className="group px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Start Learning
            <svg className="h-4 w-4 ml-2 -mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="group-hover:opacity-100" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
          <a href="/about" className="group px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
            View Syllabus
            <svg className="h-4 w-4 ml-2 -mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="group-hover:opacity-100" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </Container>
    </Suspense>
  );
}