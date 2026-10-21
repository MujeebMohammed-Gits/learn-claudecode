
export const metadata = {
  title: "Features and Deployment - Production-Ready Deployment"
};

import { createElement, type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";

interface UIComponentProps extends HTMLAttributes<HTMLDivElement> {}
interface H3Props extends HTMLAttributes<HTMLHeadingElement> {}
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}
interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
interface DivProps extends HTMLAttributes<HTMLDivElement> {}
interface H2Props extends HTMLAttributes<HTMLHeadingElement> {}

const UIComponent = (props: UIComponentProps) => createElement("div", props, props.children);

const h3 = (props: H3Props) => createElement("h3", props, props.children);
const p = (props: ParagraphProps) => createElement("p", props, props.children);
const a = (props: AnchorProps) => createElement("a", props, props.children);
const div = (props: DivProps) => createElement("div", props, props.children);
const h2 = (props: H2Props) => createElement("h2", props, props.children);

function render(Component: string, props: Record<string, string> = {}, ...children: ReactNode[]) {
  return createElement(Component, props, ...children);
}

export default function FeaturesDeployment() {
  return render(
    "div",
    {},
    render(
      "h2",
      { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
      "Features and Deployment"
    ),
    render(
      "p",
      { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" },
      "Production-ready deployment, Vercel integration, MCP servers, and the",
      "full skill ecosystem for enterprise-grade Claude Code applications."
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
          "Core Features"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "The complete learning system with interface-first design, token-optimized",
          "output, and modern UI patterns built with shadcn-ui and Tailwind CSS 4.0."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Vercel Deployment"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Deploy your Claude Code projects to Vercel with a single click. Set up",
          "custom domains, environment variables, and automatic CI/CD pipelines.",
          "Every branch gets a preview URL for testing and review."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "MCP Servers"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Configure Model Context Protocol servers for agent communication,",
          "shared context buffers, and distributed task processing across",
          "multiple Claude Code instances with proper authentication and routing."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Skills Ecosystem"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Publish, discover, and install skills from the Claude Code skill",
          "registry. Manage skill dependencies and version compatibility across",
          "agent ecosystems with the rtk skill management system."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Advanced Features"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Master the infrastructure that powers production Claude Code applications:",
          "custom hooks, loop design patterns, MCP server configuration, ECC",
          "(Evolving Code Craft) skills, security best practices, and output",
          "verification."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Token Optimization"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Track token savings with rtk gain, execute raw commands with rtk",
          "proxy, and apply token-saving patterns throughout your Claude Code",
          "workflow to reduce output by up to 90%."
        )
      ),
    ),
    render(
      "div",
      { className: "mt-6" },
      render(
        "a",
        { href: "/capstone", className: "px-4 py_2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" },
        "Deploy to Vercel"
      ),
      render(
        "a",
        { href: "/syllabus", className: "px_4 py_2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors" },
        "View Syllabus"
      )
    )
  );
}
