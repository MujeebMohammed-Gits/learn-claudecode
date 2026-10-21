export const metadata = {
  title: "Projects - Showcase and Portfolio"
};

import {
  createElement,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface DivProps extends HTMLAttributes<HTMLDivElement> {}
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const UIComponent = (props: DivProps) => createElement("div", props, props.children);

const h3 = (props: HeadingProps) => createElement("h3", props, props.children);
const p = (props: ParagraphProps) => createElement("p", props, props.children);
const a = (props: LinkProps) => createElement("a", props, props.children);
const div = (props: DivProps) => createElement("div", props, props.children);
const h2 = (props: HeadingProps) => createElement("h2", props, props.children);

function render(
  Component: "div" | "h2" | "h3" | "p" | "a",
  props: Record<string, unknown> = {},
  ...children: ReactNode[]
) {
  return createElement(Component, props, ...children);
}

export default function Projects() {
  return render(
    "div",
    {},
    render(
      "h2",
      { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
      "Projects"
    ),
    render(
      "p",
      { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" },
      "Showcase of projects built through the learning journey with architecture",
      "diagrams, deployment status, and token savings analytics."
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
          "Completed Projects"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "View all completed capstone projects with their tech stacks, token",
          "savings, deployment status, and lessons learned. Each project includes",
          "a live demo link and source code repository."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Agent Projects"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Interactive agent building projects with sub-agent hierarchies, skill",
          "compositions, and MCP server configurations."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Open Source"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Browse publicly shared projects from the learning community. Each",
          "repository includes sanitized code, CLAUDE.md configuration, setup.sh",
          "scripts, and contribution guidelines."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Deployment Showcase"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Examples of deployed projects on Vercel with custom domains, environment",
          "variable setups, and CI/CD pipeline configurations. See token",
          "optimization results and performance metrics."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Skill Showcase"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "Explore published skills and plugins from the community. View usage",
          "statistics, compatibility information, and installation instructions",
          "for each skill package."
        )
      ),
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Token Savings"
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
        { href: "/", className: "px-4 py_2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" },
        "View Projects"
      ),
      render(
        "a",
        { href: "/create", className: "px_4 py_2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors" },
        "Create New"
      )
    )
  );
}
