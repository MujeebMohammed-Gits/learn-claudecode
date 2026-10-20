export const metadata = {
  title: "Features and Deployment - Production-Ready Deployment"
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

export default function FeaturesDeployment() {
  return (
    <Suspense fallback>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Features and Deployment
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Production-ready deployment, Vercel integration, MCP servers, and the
          full skill ecosystem for enterprise-grade Claude Code applications.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Core Features</h3>
            <p className="text-muted-foreground">
              The complete learning system with interface-first design, token-optimized
              output, and modern UI patterns built with shadcn-ui and Tailwind CSS 4.0.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Vercel Deployment</h3>
            <p className="text-muted-foreground">
              Deploy your Claude Code projects to Vercel with a single click. Set up
              custom domains, environment variables, and automatic CI/CD pipelines.
              Every branch gets a preview URL for testing and review.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">MCP Servers</h3>
            <p className="text-muted-foreground">
              Configure Model Context Protocol servers for agent communication,
              shared context buffers, and distributed task processing across
              multiple Claude Code instances with proper authentication and routing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Skills Ecosystem</h3>
            <p className="text-muted-foreground">
              Publish, discover, and install skills from the Claude Code skill
              registry. Manage skill dependencies and version compatibility across
              agent ecosystems with the rtk skill management system.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Advanced Features</h3>
            <p className="text-muted-foreground">
              Master the infrastructure that powers production Claude Code applications:
              custom hooks, loop design patterns, MCP server configuration, ECC
              (Evolving Code Craft) skills, security best practices, and output
              verification.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Token Optimization</h3>
            <p className="text-muted-foreground">
              Track token savings with rtk gain, execute raw commands with rtk proxy,
              and apply token-saving patterns throughout your Claude Code workflow
              to reduce output by up to 90%.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/deploy" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Deploy to Vercel
          </a>
          <a href="/configure-mcp" className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
            Configure MCP
          </a>
        </div>
      </Container>
    </Suspense>
  );
}