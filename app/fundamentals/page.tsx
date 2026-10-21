
export const metadata = {
  title: "Module 1: Fundamentals - Getting Started"
};

import { createElement } from "react";
import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
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

interface RenderProps {
  [key: string]: string | undefined;
  className?: string;
  href?: string;
}

const UIComponent = (props: UIComponentProps) => createElement("div", props, props.children);

const h3 = (props: HeadingProps) => createElement("h3", props, props.children);
const p = (props: ParagraphProps) => createElement("p", props, props.children);
const a = (props: AnchorProps) => createElement("a", props, props.children);
const div = (props: DivProps) => createElement("div", props, props.children);
const h2 = (props: HeadingProps) => createElement("h2", props, props.children);

function render(Component: string, props: RenderProps = {}, ...children: ReactNode[]) {
  return createElement(Component, props, ...children);
}

export default function Fundamentals() {
  return render(
    "div",
    {},
    render(
      "h2",
      { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
      "Module 1: Fundamentals"
    ),
    render(
      "p",
      { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" },
      "The complete zero-to-mastery tutorial course for learning Claude Code from",
      "complete beginner to mastery deployment."
    ),
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
  );
}
