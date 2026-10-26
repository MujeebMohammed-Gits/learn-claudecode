export const metadata = {
  title: "Module 2: AI Agents - Building AI Agents"
};

// @ts-ignore React's types are unavailable in this project configuration.
import { createElement, type HTMLAttributes, type ReactNode } from "react";

const UIComponent = (props: HTMLAttributes<HTMLDivElement>) => createElement("div", props, props.children);

interface AnchorProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: ReactNode;
}

interface RenderProps extends HTMLAttributes<HTMLElement> {
  href?: string;
  className?: string;
}

const h3 = (props: HTMLAttributes<HTMLHeadingElement>) => createElement("h3", props, props.children);
const p = (props: HTMLAttributes<HTMLParagraphElement>) => createElement("p", props, props.children);
const a = (props: AnchorProps) => createElement("a", props, props.children);
const div = (props: HTMLAttributes<HTMLDivElement>) => createElement("div", props, props.children);
const h2 = (props: HTMLAttributes<HTMLHeadingElement>) => createElement("h2", props, props.children);

function render(Component: string, props: RenderProps = {}, ...children: ReactNode[]) {
  return createElement(Component, props, ...children);
}

export default function AIAgents() {
  return render(
    "div",
    {},
    render(
      "h2",
      { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
      "Module 2: AI Agents"
    ),
    render(
      "p",
      { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" },
      "Design sub-agents, skills, and plugins for production-ready applications.",
      "Interface-based learning without terminal requirements."
    ),
    render(
      "div",
      { className: "mt-6 space-y-4" },
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Sub-Agent Design"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Create sub-agents that handle specific domains while coordinating through",
          "a central orchestrator pattern. Learn the lifecycle of sub-agent creation,",
          "spawning, and termination."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Plugin Architecture"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Develop custom plugins and skills that integrate with the Claude Code",
          "ecosystem. Learn plugin manifest structure, dependency management,",
          "and hot-reloading capabilities."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Interface-Based Patterns"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "All lessons in this module are conducted through the visual interface",
          "with natural language prompts. No terminal required for the first 3",
          "modules - learn Claude Code fundamentals entirely through the UI."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Direct UI Interaction"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Interactive panels where you configure sub-agent hierarchies, plugin",
          "manifests, and skill compositions through point-and-click interfaces",
          "with live preview."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Terminal-Inclusive Commands"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "rtk gain shows token savings analytics",
          "rtk gain --history shows command usage history with savings",
          "rtk discover analyzes Claude Code history for missed opportunities",
          "rtk proxy executes raw commands without filtering"
        )
      ),
    ),
    render(
      "div",
      { className: "mt-6" },
      render(
        "a",
        { href: "/sub-agents", className: "px-4 py_2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" },
        "Start Designing"
      ),
      render(
        "a",
        { href: "/syllabus", className: "px_4 py_2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors" },
        "View Syllabus"
      )
    )
  );
}
