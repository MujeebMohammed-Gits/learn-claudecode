"use client";

import { createElement, useState } from "react";

function render(Component: React.ElementType, props: Record<string, unknown> = {}, ...children: React.ReactNode[]) {
  return createElement(Component, props, ...children);
}

// UIComponent helpers
const h3 = (props: { className?: string }) => render("h3", props);
const p = (props: { className?: string }) => render("p", props);
const form = (props: { className?: string; children: React.ReactNode }) => render("form", props);
const div = (props: { className?: string }) => render("div", props);
const input = (props: { name: string; className?: string; [key: string]: unknown }) => render("input", props);
const select = (props: { name: string; className?: string }) => render("select", props);
const option = (props: { value: string; children: string }) => render("option", props);
const textarea = (props: { name: string; rows: number; className?: string }) => render("textarea", props);
const button = (props: { type: string; className?: string; children: string }) => render("button", props);

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

      // Interactive Coaching Session
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
        render(
          "form",
          { onsubmit: async (e: any) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const result = await callAgentAction(
                formData.get('action') as string,
                {}
              );
              setState({ lastResponse: result, loading: false });
            }
          },
          // Input fields
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Query:"
            ),
            render(
              "textarea",
              {
                name: "query",
                rows: 3,
                className: "w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 resize-sm",
                placeholder: "e.g., 'My team has velocity inconsistency, help me improve'"
              }
            )
          ),
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Context:"
            ),
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
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Team Size:"
            ),
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
              disabled: state.loading
            },
            state.loading ? "Processing..." : "Run RAG-Enhanced Coaching"
          )
        )
      ),

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
          { onsubmit: async (e: any) => {
              e.preventDefault();
              setState({ loading: true, lastResponse: null });
              const formData = new FormData(e.target);
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
              render(
                "label",
                { className: "block text-sm font-medium mb-2" },
                "Query:"
              ),
              render(
                "textarea",
                {
                  name: "query",
                  rows: 3,
                  className: "w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 resize-sm",
                  placeholder: "e.g., 'My team has velocity inconsistency, help me improve'"
                }
              )
            ),
            render(
              "div",
              { className: "mb-3" },
              render(
                "label",
                { className: "block text-sm font-medium mb-2" },
                "Context:"
              ),
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
              render(
                "label",
                { className: "block text-sm font-medium mb-2" },
                "Team Size:"
              ),
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
                disabled: state.loading
              },
              state.loading ? "Processing..." : "Run RAG-Enhanced Coaching"
            )
          )
        ),

        // Response Display
        state.lastResponse ? render(
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
            state.lastResponse
          )
        ) : state.loading ? render(
          "div",
          { className: "mt-3 text-indigo-600" },
          "🔍 Retrieving relevant agile knowledge..."
        ) : null
      )
    )
  );
}
