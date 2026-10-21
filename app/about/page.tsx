export const metadata = {
  title: "About Learn ClaudeCode",
  description: "Empower developers of all backgrounds to master Claude Code without requiring terminal expertise."
};

import { createElement } from "react";

const Container: UIComponent = (props) => createElement("main", props, props.children);
const h2: UIComponent = (props) => createElement("h2", props, props.children);
const p: UIComponent = (props) => createElement("p", props, props.children);
const a: UIComponent = (props) => createElement("a", props, props.children);
const div: UIComponent = (props) => createElement("div", props, props.children);

type UIComponent = (props: any) => any;

function render(
  Component: UIComponent,
  props: Record<string, unknown> = {},
  ...children: any[]
) {
  return Component({ ...props, children });
}

export default function About() {
  return render(
    Container,
    {},
    render(
      h2,
      {
        className:
          "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
      },
      "About Learn ClaudeCode",
    ),
    render(
      p,
      { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" },
      "The complete zero-to-mastery tutorial course for anyone from non-theoretical or technical background who has never opened a terminal.",
    ),
    render(
      div,
      { className: "mt-6 space-y-4" },
      render(
        div,
        {},
        render(h2, { className: "text-xl font-medium mb-2" }, "Mission"),
        render(
          p,
          { className: "text-muted-foreground" },
          "Empower developers of all backgrounds to master Claude Code without requiring terminal expertise. Make AI-assisted development accessible to everyone.",
        ),
      ),
      render(
        div,
        {},
        render(h2, { className: "text-xl font-medium mb-2" }, "Learning Path"),
        render(
          p,
          { className: "text-muted-foreground" },
          "A structured 5-module journey from fundamentals to capstone deployment, with interface-based learning for the first 3 modules.",
        ),
      ),
      render(
        div,
        {},
        render(h2, { className: "text-xl font-medium mb-2" }, "Three-Access Pattern"),
        render(
          p,
          { className: "text-muted-foreground" },
          "Every section offers three ways to learn: no-terminal interface, command syntax reference, and dedicated UI panels - you choose your path through the material.",
        ),
      ),
    ),
    render(
      div,
      { className: "mt-6" },
      render(
        a,
        {
          href: "/fundamentals",
          className:
            "px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
        },
        "Start Learning",
      ),
      render(
        a,
        {
          href: "/syllabus",
          className:
            "px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors",
        },
        "View Syllabus",
      ),
    ),
  );
}