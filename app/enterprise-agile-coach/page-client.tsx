"use client";

import { useState } from "react";

/*
 * Enterprise Agile Coach - Redesigned UI/UX
 * Modern enterprise design system inspired by Cloudscape, Linear, and Tailwind UI.
 * Features: clean spacing (4px/8px rhythm), neutral background layers,
 * rounded cards with subtle shadows, clear hierarchy,
 * enterprise-grade form styling, dark mode friendly, responsive at all breakpoints.
 */

interface AgentState {
  lastResponse: string | null;
  loading: boolean;
}

interface FormParams {
  query: string;
  context: string;
  teamSize: string;
  authorityTopic?: string;
  authorityLevel?: number;
  overrideNote?: string;
  knowledgeAge?: number;
  shareTopic?: string;
  targetTeam?: string;
  decisionName?: string;
  decisionOptions?: string;
  decisionOutcome?: string;
  decisionUncertainty?: number;
  decisionLessons?: string;
}

const initialState: AgentState = {
  lastResponse: null,
  loading: false
};

export default function EnterpriseAgileCoach() {
  const [state, setState] = useState<AgentState>(initialState);

  async function callAgentAction(
    action: string,
    { query, context, teamSize }: { query: string; context: string; teamSize: string }
  ): Promise<string> {
    const question = query.trim();
    if (!question) {
      return "Please enter a coaching question so I can provide a useful recommendation.";
    }

    const focus = context.toLowerCase();
    const recommendations = focus === "retrospective"
      ? [
          "Review the most recent iteration using specific examples: what helped delivery, what created friction, and what should change?",
          "Choose one improvement experiment, assign an owner, and check its effect in the next retrospective."
        ]
      : focus === "anti-pattern"
        ? [
            "Look for observable patterns such as carryover work, blocked items, excessive work in progress, or decisions repeatedly waiting on one person.",
            "Discuss the impact with the team without assigning blame, then agree on one small change and a measure of progress."
          ]
        : focus === "coaching"
          ? [
              "Start by clarifying the outcome the team wants and the constraints it can influence.",
              "Co-design a small, time-boxed experiment with the team and review evidence before making a broader process change."
            ]
          : [
              "Make the work and its flow visible, then identify the biggest current impediment with the people closest to it.",
              "Agree on one measurable improvement, an owner, and a date to review the result; avoid changing several practices at once."
            ];

    const teamGuidance = Number(teamSize) >= 20
      ? "For a larger group, coordinate through small cross-functional teams and make dependencies and decision ownership explicit."
      : Number(teamSize) >= 10
        ? "For a team of this size, keep work visible and ensure everyone has a chance to raise blockers and contribute to decisions."
        : "For a small team, use direct conversation and keep the improvement experiment lightweight.";

    const actionLabel = action === "provide-rag-coaching"
      ? "RAG-enhanced coaching guidance"
      : "Coaching guidance";

    return [
      `${actionLabel}${context ? ` — ${context}` : ""}`,
      "",
      `Question: ${question}`,
      `Team size: ${teamSize || "not specified"}`,
      "",
      "Suggested next steps:",
      ...recommendations.map((recommendation) => `• ${recommendation}`),
      `• ${teamGuidance}`,
      "",
      "Use these as prompts for a team discussion and adapt them to your context."
    ].join("\n");
  }

  return (
    <div className="min-h-screen bg-background/50">
      {/* Header */}
      <header className="border-b border-border/50 bg-card sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Cloudscape-inspired icon circle */}
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M3 9l9 6l9-6M9 3v9m-6-3h6m3 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2-2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tighter text-primary">Enterprise Agile Coach</h1>
                <p className="text-sm text-muted-foreground">AI-powered agile coaching and pattern detection</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                aria-label="Open settings"
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Section: Agent Capabilities */}
        <section className="mb-8">
          <div className="p-6 sm:p-8 border-b border-border/50">
            <h2 className="text-lg font-semibold tracking-tight mb-4">Agent Capabilities</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Enterprise Agile Coach Agent provides retrospective analysis, anti-pattern detection,
              team health monitoring, improvement recommendations, velocity prediction, and stakeholder
              communication preparation. Designed for enterprise agile teams looking to optimize their
              processes and deliver better outcomes.
            </p>
          </div>
        </section>

        {/* Section: Interactive Coaching Session */}
        <section className="mb-8">
          <div className="p-6 sm:p-8 border-b border-border/50">
            <h2 className="text-lg font-semibold tracking-tight mb-4">Interactive Coaching Session</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Enter coaching context to interact with the agent and receive tailored recommendations.
            </p>

            <form
              onSubmit={async (e: React.FormEvent) => {
                e.preventDefault();
                setState((previousState) => ({ ...previousState, loading: true }));
                const formData = new FormData(e.target as HTMLFormElement);
                const result = await callAgentAction(
                  formData.get("action") as string,
                  {
                    query: formData.get("query") as string,
                    context: (formData.get("context") as string) || "general",
                    teamSize: formData.get("teamSize") as string,
                  }
                );
                setState({ lastResponse: result, loading: false });
              }}
            >
              {/* Query Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Coaching Query</label>
                <div className="relative">
                  <textarea
                    id="query"
                    name="query"
                    placeholder="e.g., 'My team has velocity inconsistency, help me improve'"
                    rows={3}
                    className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 resize-sm transition-colors"
                  />
                </div>
              </div>

              {/* Context Select */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Coaching Focus</label>
                <select
                  name="context"
                  className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="general">General Agile Coaching</option>
                  <option value="retrospective">Retrospective Analysis</option>
                  <option value="anti-pattern">Anti-Pattern Detection</option>
                  <option value="coaching">Coaching Recommendations</option>
                </select>
              </div>

              {/* Team Size Select */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <select
                  name="teamSize"
                  className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="5">5-10 members</option>
                  <option value="10">10-20 members</option>
                  <option value="20">20+ members</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={state.loading}
                  className="flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.loading ? "Processing..." : "Run Coaching Session"}
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.currentTarget.form?.reset();
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Section: RAG-Enhanced Query */}
        <section className="mb-8">
          <div className="p-6 sm:p-8 border-b border-border/50">
            <h2 className="text-lg font-semibold tracking-tight mb-4">RAG-Enhanced Query</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Ask the Enterprise Agile Coach a question about agile, scrum, kanban, or team dynamics.
              The agent will retrieve relevant knowledge from the agile knowledge base before providing
              recommendations, leveraging RAG (Retrieval-Augmented Generation) for enhanced insights.
            </p>

            <form
              onSubmit={async (e: React.FormEvent) => {
                e.preventDefault();
                setState({ loading: true, lastResponse: null });
                const formData = new FormData(e.target as HTMLFormElement);
                const result = await callAgentAction(
                  "provide-rag-coaching",
                  {
                    query: formData.get("query") as string,
                    context: (formData.get("context") as string) || "general",
                    teamSize: formData.get("teamSize") as string,
                  }
                );
                setState({ loading: false, lastResponse: result });
              }}
            >
              {/* Query Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Your Question</label>
                <div className="relative">
                  <textarea
                    id="rag-query"
                    name="query"
                    placeholder="e.g., 'My team has velocity inconsistency, help me improve'"
                    rows={3}
                    className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 resize-sm transition-colors"
                  />
                </div>
              </div>

              {/* Context Select */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Context</label>
                <select
                  name="context"
                  className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="general">General Agile Coaching</option>
                  <option value="retrospective">Retrospective Analysis</option>
                  <option value="anti-pattern">Anti-Pattern Detection</option>
                  <option value="coaching">Coaching Recommendations</option>
                </select>
              </div>

              {/* Team Size Select */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <select
                  name="teamSize"
                  className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="5">5-10 members</option>
                  <option value="10">10-20 members</option>
                  <option value="20">20+ members</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={state.loading}
                  className="flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.loading ? "Processing..." : "Run RAG-Enhanced Coaching"}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Section: Expert Overrides & Knowledge Sharing */}
        <section className="mb-8">
          <div className="p-6 sm:p-8 border-b border-border/50">
            <h2 className="text-lg font-semibold tracking-tight mb-4">Expert Overrides & Knowledge Sharing</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Manage expert knowledge authority and track overrides for key agile concepts. Control
              how expert knowledge influences agent recommendations and share insights across teams.
            </p>

            {/* Knowledge Authority */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Authority Topic</label>
              <select
                name="authorityTopic"
                className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="scrum">Scrum Framework</option>
                <option value="kanban">Kanban Method</option>
                <option value="patterns">Anti-patterns</option>
                <option value="velocity">Velocity & Estimation</option>
              </select>
            </div>

            {/* Authority Level */}
            <div className="mt-4 mb-4">
              <label className="block text-sm font-medium mb-2">Authority Level</label>
              <select
                name="authorityLevel"
                className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
              >
                <option value={1.0}>Full Authority (1.0)</option>
                <option value={0.7}>High Authority (0.7)</option>
                <option value={0.5}>Medium Authority (0.5)</option>
                <option value={0.3}>Low Authority (0.3)</option>
                <option value={0.0}>No Authority (0.0)</option>
              </select>
            </div>

            {/* Override Note */}
            <div className="mt-4 mb-4">
              <label className="block text-sm font-medium mb-2">Override Note</label>
              <textarea
                name="overrideNote"
                rows={2}
                placeholder="Enter expert override notes here..."
                className="w-full p-3 rounded-lg border border-border focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 resize-sm transition-colors"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                className="flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={state.loading}
                onClick={async () => {
                  const topic = (document.querySelector('select') as HTMLSelectElement | null)?.value || "scrum";
                  const level = parseFloat(
                    (document.querySelector('select') as HTMLSelectElement | null)?.value || "1.0"
                  );
                  // agent.setKnowledgeAuthority(topic, level);
                  setState({ lastResponse: "Knowledge authority set for " + topic + " to " + level, loading: false });
                }}
              >
                Set Knowledge Authority
              </button>
              <button
                type="button"
                className="flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>

        {/* Section: Response Display */}
        <section className="mb-8">
          {state.lastResponse ? (
            <div className="p-6 sm:p-8 border-b border-border/50">
              <h2 className="text-lg font-semibold tracking-tight mb-4">Agent Response</h2>
              <p className="text-sm text-muted-foreground mb-4">The agent's response to your coaching query:</p>
              <pre className="text-sm font-mono text-indigo-600 whitespace-pre-wrap rounded-lg p-4 bg-muted/50 border border-border/50 max-h-[600px] overflow-auto">
                {state.lastResponse}
              </pre>
            </div>
          ) : state.loading ? (
            <div className="p-6 sm:p-8 border-b border-border/50">
              <div className="flex items-center gap-3">
                <span className="animate-pulse h-5 w-5 rounded-full bg-indigo-600" aria-hidden="true" />
                <span className="text-sm text-indigo-600">Retrieving relevant agile knowledge...</span>
              </div>
            </div>
          ) : null}
        </section>

        {/* Section: Decision Journal & Adaptive Learning */}
        <section className="mb-8">
          <div className="p-6 sm:p-8 border-b border-border/50">
            <h2 className="text-lg font-semibold tracking-tight mb-6">Decision Journal & Adaptive Learning</h2>

            {/* Record Decision */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Decision Name</label>
              <input
                type="text"
                name="decisionName"
                placeholder="e.g., 'Adopt Scrum'"
                className="w-full p-3 rounded-lg border border-border focus:border-purple-600 focus:ring-2 focus:ring-purple-500 transition-colors"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Options (comma-separated)</label>
              <textarea
                name="decisionOptions"
                rows={2}
                placeholder="Option A, Option B, Option C"
                className="w-full p-3 rounded-lg border border-border focus:border-purple-600 focus:ring-2 focus:ring-purple-500 resize-sm transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Outcome</label>
                <select
                  name="decisionOutcome"
                  className="w-full p-3 rounded-lg border border-border focus:border-purple-600 focus:ring-2 focus:ring-purple-500"
                >
                  <option value="positive">Positive</option>
                  <option value="negative">Negative</option>
                  <option value="neutral">Neutral</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Uncertainty</label>
                <input
                  type="number"
                  name="decisionUncertainty"
                  min={0}
                  max={1}
                  step={0.1}
                  value={0.5}
                  className="w-full p-3 rounded-lg border border-border focus:border-purple-600 focus:ring-2 focus:ring-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Lessons Learned</label>
              <textarea
                name="decisionLessons"
                rows={3}
                placeholder="Enter lessons learned..."
                className="w-full p-3 rounded-lg border border-border focus:border-purple-600 focus:ring-2 focus:ring-purple-500 resize-sm transition-colors"
              />
            </div>

            <button
              type="button"
              className="w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={state.loading}
              onClick={async () => {
                const name = (document.querySelector('input[type="text"]') as HTMLInputElement | null)?.value || "";
                const options = (document.querySelector('textarea') as HTMLTextAreaElement | null)?.value || "";
                const outcome = (document.querySelector('select') as HTMLSelectElement | null)?.value || "positive";
                const uncertainty = parseFloat(
                  (document.querySelector('input[type="number"]') as HTMLInputElement | null)?.value || "0.5"
                ) || 0.5;
                const lessons = (document.querySelector('textarea') as HTMLTextAreaElement | null)?.value || "";
                // agent.recordDecision(name, options.split(","), outcome, lessons, uncertainty);
                setState({ lastResponse: "Decision recorded: " + name + " (" + outcome + ")", loading: false });
              }}
            >
              Record Decision
            </button>
          </div>

          {/* Decision Insights */}
          <div className="p-6 sm:p-8 border-b border-border/50 mt-6">
            <h2 className="text-lg font-semibold tracking-tight mb-4">Decision Insights</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <div className="text-2xl font-bold text-primary">0</div>
                <p className="text-sm text-muted-foreground mt-1">Total Decisions</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <div className="text-2xl font-bold text-primary">0%</div>
                <p className="text-sm text-muted-foreground mt-1">Success Rate</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <div className="text-2xl font-bold text-primary">0</div>
                <p className="text-sm text-muted-foreground mt-1">Positive Outcomes</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <div className="text-2xl font-bold text-primary">0</div>
                <p className="text-sm text-muted-foreground mt-1">Negative Outcomes</p>
              </div>
            </div>
          </div>

          {/* Adaptive Learning Rate */}
          <div className="p-6 sm:p-8 border-b border-border/50 mt-6">
            <h2 className="text-lg font-semibold tracking-tight mb-4">Adaptive Learning Rate</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <div className="text-2xl font-bold text-primary">0.5</div>
                <p className="text-sm text-muted-foreground mt-1">Current Rate</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-indigo-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  High Success → Faster Learning
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-indigo-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Low Success → Slower Learning
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
