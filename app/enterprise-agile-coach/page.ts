// app/enterprise-agile-coach/page.tsx - Server Component page

export const metadata = {
  title: "Enterprise Agile Coach - AI-Powered Agile Coaching",
  description: "Enterprise Agile Coach - AI-powered agile coaching and pattern detection agent"
};

// Import the Client Component for interactive agent functionality
import EnterpriseAgileCoach from "./page-client";

// Server Component rendering the three-approach pattern + client interactivity
import { createElement } from "react";

const h3 = (props) => createElement("h3", props, props.children);
const p = (props) => createElement("p", props, props.children);
const a = (props) => createElement("a", props, props.children);
const div = (props) => createElement("div", props, props.children);
const h2 = (props) => createElement("h2", props, props.children);

function render(Component, props = {}, ...children) {
  return createElement(Component, props, ...children);
}

// Main page component - renders three-approach pattern AND client interactivity
export default function EnterpriseAgileCoachPage() {
  return createElement("div", {className: "prose max-w-none"},
    // Three-approach pattern display (always visible)
     createElement("h2", {
      className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
    }, "Enterprise Agile Coach"),

      createElement("p", {
        className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl"
      }, "AI-powered enterprise agile coaching and pattern detection agent."),
    
      // Divider
        createElement("hr", { className: "my-8 border-t border-secondary-400" }),

      // Interactive agent component (Client Component with useState, forms, etc.)
        createElement(EnterpriseAgileCoach)

    );
    
}