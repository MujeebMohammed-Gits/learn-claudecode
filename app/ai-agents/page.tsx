export const metadata = {
  title: "Module 2: AI Agents - Building AI Agents"
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

export default function AIAgents() {
  return (
    <Suspense fallback>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Module 2: AI Agents
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Design sub-agents, skills, and plugins for production-ready applications.
          Interface-based learning without terminal requirements.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Sub-Agent Design</h3>
            <p className="text-muted-foreground">
              Create sub-agents that handle specific domains while coordinating through
              a central orchestrator pattern. Learn the lifecycle of sub-agent creation,
              spawning, and termination.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Plugin Architecture</h3>
            <p className="text-muted-foreground">
              Develop custom plugins and skills that integrate with the Claude Code
              ecosystem. Learn plugin manifest structure, dependency management,
              and hot-reloading capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Interface-Based Patterns</h3>
            <p className="text-muted-foreground">
              All lessons in this module are conducted through the visual interface
              with natural language prompts. No terminal required for the first 3
              modules - learn Claude Code fundamentals entirely through the UI.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Direct UI Interaction</h3>
            <p className="text-muted-foreground">
              Interactive panels where you configure sub-agent hierarchies, plugin
              manifests, and skill compositions through point-and-click interfaces
              with live preview.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Terminal-Inclusive Commands</h3>
            <p className="text-muted-foreground">
              rtk gain shows token savings analytics <br />
              rtk gain --history shows command usage history with savings <br />
              rtk discover analyzes Claude Code history for missed opportunities <br />
              rtk proxy <cmd> executes raw commands without filtering
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a href="/sub-agents" className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Start Designing
          </a>
          <a href="/syllabus" className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors">
            View Syllabus
          </a>
        </div>
      </Container>
    </Suspense>
  );
}