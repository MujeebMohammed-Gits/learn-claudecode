// @ts-nocheck
export const metadata = {
  title: "Module 3: Sub-agents and Plugin Architecture"
};

// @ts-ignore React and its type declarations are expected to be provided by the app.
import {
  createElement,
  type AnchorHTMLAttributes,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface UIComponentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}
interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}
interface DivProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const UIComponent = (props: UIComponentProps) => createElement("div", props, props.children);

const h3 = (props: HeadingProps) => createElement("h3", props, props.children);
const p = (props: ParagraphProps) => createElement("p", props, props.children);
const a = (props: AnchorProps) => createElement("a", props, props.children);
const div = (props: DivProps) => createElement("div", props, props.children);
const h2 = (props: HeadingProps) => createElement("h2", props, props.children);

function render(
  Component: ElementType,
  props: any = {},
  ...children: ReactNode[]
) {
  return createElement(Component, props, ...children);
}

export default function SubAgents() {
  return render(
    "div",
    {},
    render(
      "h2",
      { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
      "Module 3: Sub-agents and Plugin Architecture"
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
        { href: "/advanced-features", className: "px-4 py_2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" },
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
