"use client";
import { createElement, useState } from "react";

const UIComponent = (props) => createElement("div", props, props.children);

const h3 = (props) => createElement("h3", props, props.children);
const p = (props) => createElement("p", props, props.children);
const a = (props) => createElement("a", props, props.children);
const div = (props) => createElement("div", props, props.children);
const h2 = (props) => createElement("h2", props, props.children);

function render(Component, props = {}, ...children) {
  return createElement(Component, props, ...children);
}

// State for agent interactions
interface AgentState {
  lastResponse: string | null;
  loading: boolean;
}

// Initial state
const initialState: AgentState = {
  lastResponse: null,
  loading: false
};

// State setters for render sections outside the React component
let standaloneState: AgentState = initialState;
const setState = (update: Partial<AgentState>) => {
  standaloneState = { ...standaloneState, ...update };
};

// API call function
async function callAgentAction(action: string, params: any): Promise<string> {
  try {
    const response = await fetch(`/api/agent?action=${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...params })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.message || JSON.stringify(data);
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// Main component
export default function EnterpriseAgileCoach() {
  const [state, setState] = useState<AgentState>(initialState);

  return render(
    "div",
    {},
    render(
      "h2",
      { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
      "Enterprise Agile Coach"
    ),
    render(
      "p",
      { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" },
      "AI-powered enterprise agile coaching and pattern detection agent."
    ),

    // Agent Capabilities Panel
    render(
      "div",
      { className: "mt-6 space-y-4" },
      render(
        "div",
        {},
        render(
          "h3",
          { className: "text-xl font-medium mb-2" },
          "Agent Capabilities"
        ),
        render(
          "p",
          { className: "text-muted-foreground" },
          "The Enterprise Agile Coach Agent provides:",
          " retrospective analysis, anti-pattern detection,",
          " team health monitoring, improvement recommendations,",
          " velocity prediction, and stakeholder communication preparation."
        )
      ),

      // Interactive Coaching Form
      render(
        "div",
        { className: "mt-6 p-4 bg-secondary/5 rounded-md" },
        render(
          "h3",
          { className: "text-xl font-medium mb-4" },
          "🎯 Interactive Coaching Session"
        ),
        render(
          "p",
          { className: "text-sm text-muted-foreground mb-4" },
          "Enter coaching context to interact with the agent:"
        ),

        // Coaching Context Form
        render(
          "form",
          {
            onsubmit: async (e: any) => {
              e.preventDefault();
              // Get form values and call agent
              // ... implementation would go here
            }
          },
          // ... form fields
        )
      )
    )
  );
}


// Add after the three-approach pattern section:
render(
  "div",
  { className: "mt-6 p-4 bg-primary/5 rounded-md" },
  render(
    "h3",
    { className: "text-xl font-medium mb-4" },
    "🚀 Quick Agent Test"
  ),
  render(
    "form",
    { onsubmit: async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const setState = (state: any) => setState(state);
        setState({ loading: true });
        const result = await callAgentAction(
          formData.get('action') as string,
          {}
        );
        setState({ lastResponse: result, loading: false });
      }
    },
    render(
      "select",
      { name: "action", className: "w-full p-2 border rounded mb-2" },
      render("option", { value: "status" }, "Status"),
      render("option", { value: "health-check" }, "Health Check"),
      render("option", { value: "capabilities" }, "Capabilities")
    ),
    render(
      "button",
      { type: "submit", className: "px-4 py-2 bg-primary text-primary-foreground" },
      "Run Agent"
    )
  ),
  render(
    "div",
    { className: "mt-4 p-3 bg-secondary/5 rounded" },
      ""
    )
  )


// RAG Query Section
render(
  "div",
  { className: "mt-6 p-4 bg-indigo-5/10 rounded-md border-indigo-500/20" },
  render(
    "h3",
    { className: "text-xl font-medium mb-4 .flex items-center gap-2" },
    "🔍 RAG-Enhanced Query"
  ),
  render(
    "p",
    { className: "text-sm text-indigo-600 mb-4" },
    "Ask the Enterprise Agile Coach a question about agile, scrum, kanban, or team dynamics. The agent will retrieve relevant knowledge from the agile knowledge base before providing recommendations."
  ),

  render(
    "form",
    {
      onsubmit: async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setState({ loading: true, lastResponse: null });

        const result = await callAgentAction(
          "provide-rag-coaching",
          {
            query: formData.get('query') as string,
            context: (formData.get('context') as string) || "general",
            teamSize: formData.get('teamSize') as string
          }
        );

        setState({ loading: false, lastResponse: result });
      }
    },
    render(
      "div",
      { className: "space-y-3" },
      render(
        "div",
        { className: "mb-3" },
        render("label", { className: "block text-sm font-medium mb-2" }, "Query:"),
        render(
          "textarea",
          {
            name: "query",
            rows: 3,
              className: "w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 resize-sm",
              placeholder: "e.g., 'My team has velocity inconsistency, help me improve'"
          },
          ""
        )
      ),
      render(
        "div",
        { className: "mb-3" },
        render("label", { className: "block text-sm font-medium mb-2" }, "Context:"),
        render(
          "select",
          { name: "context", className: "w-full p-2 border rounded-md" },
          render("option", { value: "general" }, "General Agile Coaching"),
          render("option", { value: "retrospective" }, "Retrospective Analysis"),
          render("option", { value: "anti-pattern" }, "Anti-Pattern Detection"),
          render("option", { value: "coaching" }, "Coaching Recommendations")
        )
      ),
      render(
        "div",
        { className: "mb-3" },
        render("label", { className: "block text-sm font-medium mb-2" }, "Team Size:"),
        render(
          "select",
          { name: "teamSize", className: "w-full p-2 border rounded-md" },
          render("option", { value: "5" }, "5-10 members"),
          render("option", { value: "10" }, "10-20 members"),
          render("option", { value: "20" }, "20+ members")
        )
      ),
      render(
        "button",
        {
          type: "submit",
          className: "w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",
          disabled: standaloneState.loading
        },
        standaloneState.loading ? "Processing..." : "Run RAG-Enhanced Coaching"
      )
    )
  ),

  // Response Display
  standaloneState.lastResponse ? render(
    "div",
    { className: "mt-6 p-4 bg-indigo-5/5 rounded-md border-indigo-200/50" },
    render(
      "h4",
      { className: "text-lg font-medium mb-3 indigo-600" },
      "🤖 Agent Response"
    ),
    render(
      "pre",
      { className: "text-sm font-mono text-indigo-600 whitespace-pre-wrap", style: { maxHeight: '400px', overflow: 'auto' } },
      standaloneState.lastResponse
    )
  ) : standaloneState.loading ? render(
    "div",
    { className: "mt-3 text-indigo-600" },
    "🔍 Retrieving relevant agile knowledge..."
  ) : null
)
