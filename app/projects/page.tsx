export const metadata = {
  title: "Projects - Showcase and Portfolio"
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

export default function Projects() {
  return (
    <Suspense fallback>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Showcase of projects built through the learning journey with architecture
          diagrams, deployment status, and token savings analytics.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Completed Projects</h3>
            <p className="text-muted-foreground">
              View all completed capstone projects with their tech stacks, token
              savings, deployment status, and lessons learned. Each project includes
              a live demo link and source code repository.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Agent Projects</h3>
            <p className="text-muted-foreground">
              Interactive agent building projects with sub-agent hierarchies, skill
              compositions, and MCP server configurations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Open Source</h3>
            <p className="text-muted-foreground">
              Browse publicly shared projects from the learning community. Each
              repository includes sanitized code, CLAUDE.md configuration, setup.sh
              scripts, and contribution guidelines.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Deployment Showcase</h3>
            <p className="text-muted-foreground">
              Examples of deployed projects on Vercel with custom domains, environment
              variable setups, and CI/CD pipeline configurations. See token
              optimization results and performance metrics.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Skill Showcase</h3>
            <p className="text-muted-foreground">
              Explore published skills and plugins from the community. View usage
              statistics, compatibility information, and installation instructions
              for each skill package.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Token Savings</h3>
            <p className="text-muted-foreground">
              Track token savings with rtk gain, execute raw commands with rtk proxy,
              and apply token-saving patterns throughout your Claude Code workflow
              to reduce output by up to 90%.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            View Projects
          </a>
          <a href="/create" className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
            Create New
          </a>
        </div>
      </Container>
    </Suspense>
  );
}