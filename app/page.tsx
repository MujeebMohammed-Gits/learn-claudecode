
export const metadata = {
  title: "Learn ClaudeCode - Zero to Mastery Tutorial Course",
  description: "The complete zero-to-mastery tutorial course for learning Claude Code from complete beginner to mastery deployment."
};

import { createElement } from "react";

interface UIComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

const UIComponent = (props: UIComponentProps) => createElement("div", props, props.children);

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}
interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}
interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {}
interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const h1 = (props: H1Props) => createElement("h1", props, props.children);
const p = (props: ParagraphProps) => createElement("p", props, props.children);
const a = (props: AnchorProps) => createElement("a", props, props.children);
const div = (props: DivProps) => createElement("div", props, props.children);
const ul = (props: UnorderedListProps) => createElement("ul", props, props.children);
const li = (props: ListItemProps) => createElement("li", props, props.children);

function render(
  Component: React.ElementType,
  props: Record<string, unknown> = {},
  ...children: React.ReactNode[]
): React.ReactElement {
  return createElement(Component, props, ...children);
}

function Home() {
  return render(
    "div",
    {},
    render(
      "div",
      { className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" },
      render(
        "a",
        { href: "/fundamentals", className: "group px-4 py_2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" },
        "Start Learning"
      ),
      render(
        "a",
        { href: "/about", className: "group px-4 py_2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors" },
        "View Syllabus"
      )
    ),
    render(
      "h1",
      { className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
      "Learn ClaudeCode - Zero to Mastery"
    ),
    render(
      "p",
      { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" },
      "The complete zero-to-mastery tutorial course for anyone from non-theoretical",
      "or technical background who has never opened a terminal."
    )
  );
}

export default function Page() {
  return createElement("div", { className: "prose max-w-none" },
    createElement("h1", { className: "text-4xl font-bold" }, "Homepage"),

    createElement("p", null, "Welcome to the Learn ClaudeCode project"),

    // Navigation link to the agent page
    createElement("a", {
      href: "/enterprise-agile-coach",
      className: "mt-6 btn-primary"
    }, "Enterprise Agile Coach Agent")
  );
}