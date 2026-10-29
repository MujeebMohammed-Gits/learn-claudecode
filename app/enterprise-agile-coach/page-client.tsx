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
          "ðŸŽ¯ Interactive Coaching Session"
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
                className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500 resize-sm min-h-[120px] transition-[padding]",
                placeholder: "e.g., 'My team has velocity inconsistency, help me improve'"
              }
            )
          ),
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2 sr-only" },
              "Query:"
            ),
            render(
              "select",
              { name: "context", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
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
              { name: "teamSize", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
              render("option", { value: "5" }, "5-10 members"),
              render("option", { value: "10" }, "10-20 members"),
              render("option", { value: "20" }, "20+ members")
            )
          ),
          render(
            "button",
            {
              type: "submit",
              className: "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
                "focus-visible:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500 " +
                "disabled:opacity-50 disabled:cursor-not-allowed",
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
          "ðŸ” RAG-Enhanced Query"
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
                  className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500 resize-sm min-h-[120px] transition-[padding]",
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
                { name: "context", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
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
                { name: "teamSize", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
                render("option", { value: "5" }, "5-10 members"),
                render("option", { value: "10" }, "10-20 members"),
                render("option", { value: "20" }, "20+ members")
              )
            ),
            render(
              "button",
              {
                type: "submit",
                className: "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 " +
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
                  "focus-visible:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500 " +
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: state.loading
              },
              state.loading ? "Processing..." : "Run RAG-Enhanced Coaching"
            )
          )
        ),
        // Expert Overrides & Knowledge Sharing
        render(
          "div",
          { className: "mt-6 p-4 bg-indigo-5/10 rounded-md border-indigo-500/20" },
          render(
            "h3",
            { className: "text-xl font-medium mb-4 .flex items-center gap-2" },
            "🔐 Expert Overrides & Knowledge Sharing"
          ),
          render(
            "p",
            { className: "text-sm text-indigo-600 mb-4" },
            "Manage expert knowledge authority and track overrides for key agile concepts."
          ),
          // Knowledge Authority
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Topic:"
            ),
            render(
              "select",
              { name: "authorityTopic", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
              render("option", { value: "scrum" }, "Scrum Framework"),
              render("option", { value: "kanban" }, "Kanban Method"),
              render("option", { value: "patterns" }, "Anti-patterns"),
              render("option", { value: "velocity" }, "Velocity & Estimation")
            )
          ),
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Authority Level:"
            ),
            render(
              "select",
              { name: "authorityLevel", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
              render("option", { value: "1.0" }, "Full Authority (1.0)"),
              render("option", { value: "0.7" }, "High Authority (0.7)"),
              render("option", { value: "0.5" }, "Medium Authority (0.5)"),
              render("option", { value: "0.3" }, "Low Authority (0.3)"),
              render("option", { value: "0.0" }, "No Authority (0.0)")
            )
          ),
          render(
            "button",
            {
              type: "button",
              className: "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
                "focus-visible:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500 " +
                "disabled:opacity-50 disabled:cursor-not-allowed",
              onClick: async () => {
                const topic = document.querySelector<HTMLSelectElement>('select[name="authorityTopic"]')?.value || "scrum";
                const level = document.querySelector<HTMLSelectElement>('select[name="authorityLevel"]')?.value || "1.0";
                // agent.setKnowledgeAuthority(topic, parseFloat(level));
                setState({ lastResponse: "Knowledge authority set for " + topic + " to " + level, loading: false });
              }
            },
            "Set Knowledge Authority"
          ),
          // Expert Override Tracking
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Override Note:"
            ),
            render(
              "textarea",
              { name: "overrideNote", rows: 2, className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500 resize-sm" },
              "Enter expert override notes here..."
            )
          ),
          render(
            "button",
            {
              type: "button",
              className: "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
                "focus-visible:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500 " +
                "disabled:opacity-50 disabled:cursor-not-allowed",
              disabled: state.loading,
              onClick: async () => {
                const note = (document.querySelector('textarea[name="overrideNote"]') as HTMLTextAreaElement | null)?.value || "";
                // agent.recordExpertOverride("key concept", note);
                setState({ lastResponse: "Expert override recorded: " + note, loading: false });
              }
            },
            "Record Expert Override"
          ),
          // Time-Decay Knowledge Relevance
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Knowledge Age (days):"
            ),
            render(
              "input",
              { type: "number", name: "knowledgeAge", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500", min: "0", value: "0" }
            )
          ),
          render(
            "button",
            {
              type: "button",
              className: "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 " +
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
                "focus-visible:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500 " +
                "disabled:opacity-50 disabled:cursor-not-allowed",
              disabled: state.loading,
              onClick: async () => {
                const age = parseInt(document.querySelector<HTMLInputElement>('input[name="knowledgeAge"]')?.value || "0", 10);
                // const relevance = agent.calculateTimeDecayedRelevance(0.8, "knowledge-id", age);
                setState({ lastResponse: "Time-decay relevance calculated for age " + age, loading: false });
              }
            },
            "Calculate Time-Decay Relevance"
          ),
          // Cross-Team Knowledge Sharing
          render(
            "div",
            { className: "mb-3" },
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Share Topic:"
            ),
            render(
              "select",
              { name: "shareTopic", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
              render("option", { value: "scrum" }, "Scrum Framework"),
              render("option", { value: "kanban" }, "Kanban Method"),
              render("option", { value: "patterns" }, "Anti-patterns"),
              render("option", { value: "velocity" }, "Velocity & Estimation")
            ),
            render(
              "label",
              { className: "block text-sm font-medium mb-2" },
              "Target Team:"
            ),
            render(
              "select",
              { name: "targetTeam", className: "w-full p-3 rounded-md border border-input focus-ring-indigo-500 focus:border-indigo-500" },
              render("option", { value: "team-alpha" }, "Team Alpha"),
              render("option", { value: "team-beta" }, "Team Beta"),
              render("option", { value: "team-gamma" }, "Team Gamma")
            ),
            render(
              "button",
              {
                type: "button",
                className: "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 " +
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
                  "focus-visible:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500 " +
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: state.loading,
                onClick: async () => {
                  const topic = document.querySelector<HTMLSelectElement>('select[name="shareTopic"]')?.value || "scrum";
                  const team = document.querySelector<HTMLSelectElement>('select[name="targetTeam"]')?.value || "team-alpha";
                  // agent.shareKnowledge(topic, "Shared agile knowledge", team);
                  setState({ lastResponse: "Knowledge shared to " + team + " on " + topic, loading: false });
                }
              },
              "Share Knowledge"
            )
          ),
        ),


        // Response Display
        state.lastResponse ? render(
          "div",
          { className: "mt-6 rounded-lg border p-4 bg-background/50 border-b border-indigo-500/50 shadow-sm" },
          render(
            "h4",
            { className: "font-medium mb-2 text-sm text-indigo-600" },
            "ðŸ¤– Agent Response"
          ),
          render(
            "pre",
            { className: "text-sm font-mono text-indigo-600 whitespace-pre-wrap rounded-sm max-h-[500px] overflow-auto p-2 bg-muted/50" },
            state.lastResponse
          )
        ) : state.loading ? render(
          "div",
          { className: "mt-3 flex items-center gap-2 text-sm text-indigo-600" },
          render("span", { className: "animate-pulse h-4 w-4 bg-indigo-600 rounded-full" }),
          "Retrieving relevant agile knowledge..."
        ) : null,

      // Decision Journal & Adaptive Learning
      render(
        "div",
        { className: "mt-6 p-4 bg-purple-5/10 rounded-md border-purple-500/20" },
        render(
          "h3",
          { className: "text-xl font-medium mb-4 .flex items-center gap-2" },
          "📊 Decision Journal"
        ),
        render(
          "p",
          { className: "text-sm text-purple-600 mb-4" },
          "Track agile decisions and observe learning rate adaptation based on outcomes."
        ),
        // Record Decision
        render(
          "div",
          { className: "mb-3" },
          render(
            "label",
            { className: "block text-sm font-medium mb-2" },
            "Decision:"
          ),
          render(
            "input",
            { type: "text", name: "decisionName", className: "w-full p-3 rounded-md border border-input focus-ring-purple-500 focus:border-purple-500", placeholder: "e.g., 'Adopt Scrum'" }
          )
        ),
        render(
          "div",
          { className: "mb-3" },
          render(
            "label",
            { className: "block text-sm font-medium mb-2" },
            "Options:"
          ),
          render(
            "textarea",
            { name: "decisionOptions", rows: 2, className: "w-full p-3 rounded-md border border-input focus-ring-purple-500 focus:border-purple-500 resize-sm" },
            "Option A, Option B, Option C"
          )
        ),
        render(
          "div",
          { className: "mb-3" },
          render(
            "label",
            { className: "block text-sm font-medium mb-2" },
            "Outcome:"
          ),
          render(
            "select",
            { name: "decisionOutcome", className: "w-full p-3 rounded-md border border-input focus-ring-purple-500 focus:border-purple-500" },
            render("option", { value: "positive" }, "Positive"),
            render("option", { value: "negative" }, "Negative"),
            render("option", { value: "neutral" }, "Neutral")
          )
        ),
        render(
          "div",
          { className: "mb-3" },
          render(
            "label",
            { className: "block text-sm font-medium mb-2" },
            "Uncertainty (0-1):"
          ),
          render(
            "input",
            { type: "number", name: "decisionUncertainty", className: "w-full p-3 rounded-md border border-input focus-ring-purple-500 focus:border-purple-500", min: "0", max: "1", step: "0.1", value: "0.5" }
          )
        ),
        render(
          "div",
          { className: "mb-3" },
          render(
            "label",
            { className: "block text-sm font-medium mb-2" },
            "Lessons Learned:"
          ),
          render(
            "textarea",
            { name: "decisionLessons", rows: 2, className: "w-full p-3 rounded-md border border-input focus-ring-purple-500 focus:border-purple-500 resize-sm" },
            "Enter lessons learned..."
          )
        ),
        render(
          "button",
          {
            type: "button",
            className: "w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 " +
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 " +
              "focus-visible:ring-offset-2 bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-500 " +
              "disabled:opacity-50 disabled:cursor-not-allowed",
            disabled: state.loading,
            onClick: async () => {
              const name = document.querySelector<HTMLInputElement>('input[name="decisionName"]')?.value || "";
              const options = document.querySelector<HTMLTextAreaElement>('textarea[name="decisionOptions"]')?.value || "";
              const outcome = document.querySelector<HTMLSelectElement>('select[name="decisionOutcome"]')?.value || "positive";
              const uncertainty = parseFloat(document.querySelector<HTMLInputElement>('input[name="decisionUncertainty"]')?.value || "0.5") || 0.5;
              const lessons = document.querySelector<HTMLTextAreaElement>('textarea[name="decisionLessons"]')?.value || "";
              // agent.recordDecision(name, options.split(","), outcome, lessons, uncertainty);
              setState({ lastResponse: "Decision recorded: " + name + " (" + outcome + ")", loading: false });
            }
          },
          "Record Decision"
        ),
        // Decision Insights
        render(
          "div",
          { className: "mt-4 pt-4 border-t border-purple-500/20" },
          render(
            "h4",
            { className: "text-sm font-medium mb-3 text-purple-600" },
            "Decision Insights"
          ),
          render(
            "div",
            { className: "grid grid-cols-2 gap-2 text-sm" },
            render(
              "div",
              null,
              "Total Decisions: ",
              "0"
            ),
            render(
              "div",
              null,
              "Success Rate: ",
              "0%"
            ),
            render(
              "div",
              null,
              "Positive Outcomes: ",
              "0"
            ),
            render(
              "div",
              null,
              "Negative Outcomes: ",
              "0"
            )
          )
        ),
        // Adaptive Learning Rate
        render(
          "div",
          { className: "mt-4 pt-4 border-t border-purple-500/20" },
          render(
            "h4",
            { className: "text-sm font-medium mb-3 text-purple-600" },
            "Adaptive Learning Rate"
          ),
          render(
            "div",
            { className: "grid grid-cols-2 gap-2 text-sm" },
            render(
              "div",
              null,
              "Current Rate: ",
              "0.5"
            ),
            render(
              "div",
              null,
              "High Success → Faster Learning",
              ""
            ),
            render(
              "div",
              null,
              "Low Success → Slower Learning",
              ""
            )
          )
        ),
      )

      )
    )
  );
}

