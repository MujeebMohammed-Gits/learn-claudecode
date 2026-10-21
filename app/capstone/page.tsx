export const metadata = {
  title: "Module 5: Capstone Project - End-to-End Deployment"
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

export default function CapstoneProject() {
  return (
    <Suspense fallback>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Module 5: Capstone Project
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          End-to-end project from definition to production launch with monitoring
          and deployment.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Project Definition</h3>
            <p className="text-muted-foreground">
              Start with a clear project brief. Define what success looks like, the
              key features required, and the metrics that matter. This foundation
              guides all subsequent development decisions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Agent Architecture</h3>
            <p className="text-muted-foreground">
              Design the complete agent hierarchy for your capstone project, including
              primary agents, sub-agents, and skill composition. Document agent
              prompts, tool access, and hand-off protocols.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Plugin Development</h3>
            <p className="text-muted-foreground">
              Build custom plugins and skills that extend Claude Code capabilities
              for your project's specific needs. Develop reusable plugins: skill
              packages, MCP server configurations, and custom hook libraries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Deployment Pipeline</h3>
            <p className="text-muted-foreground">
              Configure Next.js for Vercel deployment. Set up environment variables,
              custom domains, and automated CI/CD pipelines. Enable monitoring,
              analytics, and quick rollback capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Monitoring and Observability</h3>
            <p className="text-muted-foreground">
              Set up error tracking, performance metrics, user analytics, and health
              checks. Integrate with Vercel observability tools and custom dashboards
              for real-time project insights.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Launch Phase</h3>
            <p className="text-muted-foreground">
              Execute the final launch sequence for your capstone project. This section
              covers the production deployment, post-launch verification, and monitoring
              setup required to go live with confidence. Follow the three-approach
              pattern: interface-based configuration (primary, no terminal required),
              terminal-inclusive commands for advanced control, and direct UI interaction
              for real-time status monitoring.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Capstone Showcase</h3>
            <p className="text-muted-foreground">
              Document your complete journey from Module 1 fundamentals through
              Module 5 capstone. Include architecture diagrams, code samples,
              token savings analytics, and deployment success metrics.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/projects" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Start Capstone
          </a>
          <a href="/syllabus" className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
            View Syllabus
          </a>
        </div>
      </Container>
    </Suspense>
  );
}
