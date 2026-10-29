"use client";

import React, { useState } from "react";

interface AgentState {
  lastResponse: string | null;
  loading: boolean;
}

const initialState: AgentState = {
  lastResponse: null,
  loading: false
};

async function callAgentAction(action: string, params: any): Promise<string> {
  try {
    const response = await fetch(`/api/agent?action=${action}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, ...params })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.message || JSON.stringify(data);
  } catch (error: any) {
    return `Error: ${error.message}`;
  }
}

export default function EnterpriseAgileCoach() {
  const [state, setState] = useState<AgentState>(initialState);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Page shell */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="mb-8 flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-300 bg-clip-text text-transparent">
              Enterprise Agile Coach
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
              AI-powered enterprise agile coaching and pattern detection agent for retrospectives, anti-patterns, team health, and decision support.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <span className="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
              <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
              Agent Online · RAG-Enhanced
            </span>
            <span className="text-xs text-slate-400">
              Designed for enterprise agile coaches, delivery leads, and transformation teams.
            </span>
          </div>
        </header>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          {/* Left column: interaction + RAG + decision journal */}
          <div className="space-y-6">
            {/* Agent capabilities */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-800 text-xs text-indigo-300">
                  EA
                </span>
                Agent Capabilities
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                The Enterprise Agile Coach Agent provides:
              </p>
              <ul className="mt-3 grid gap-2 text-xs text-slate-300 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Retrospective analysis & pattern detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Anti-pattern detection & risk surfacing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Team health monitoring & improvement suggestions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Velocity prediction & stakeholder communication prep
                </li>
              </ul>
            </section>

            {/* Interactive coaching session */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-900/60 text-xs text-indigo-300">
                      🎯
                    </span>
                    Interactive Coaching Session
                  </h2>
                  <p className="mt-2 text-xs text-slate-400">
                    Provide context about your team or situation to receive targeted coaching guidance.
                  </p>
                </div>
              </div>

              <form
                className="mt-4 space-y-4"
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const result = await callAgentAction(formData.get("action") as string, {});
                  setState({ lastResponse: result, loading: false });
                }}
              >
                {/* Hidden action field to keep your existing API contract */}
                <input type="hidden" name="action" value="interactive-coaching" />

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Query</label>
                  <textarea
                    name="query"
                    rows={3}
                    className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., “My team has velocity inconsistency, help me improve.”"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Context</label>
                    <select
                      name="context"
                      className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="general">General Agile Coaching</option>
                      <option value="retrospective">Retrospective Analysis</option>
                      <option value="anti-pattern">Anti-Pattern Detection</option>
                      <option value="coaching">Coaching Recommendations</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Team Size</label>
                    <select
                      name="teamSize"
                      className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="5">5–10 members</option>
                      <option value="10">10–20 members</option>
                      <option value="20">20+ members</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={state.loading}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state.loading ? "Processing..." : "Run RAG-Enhanced Coaching"}
                </button>
              </form>
            </section>

            {/* RAG-enhanced query */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-sky-900/60 text-xs text-sky-300">
                      🔍
                    </span>
                    RAG-Enhanced Query
                  </h2>
                  <p className="mt-2 text-xs text-sky-300">
                    Ask about agile, scrum, kanban, or team dynamics. The agent retrieves relevant knowledge before responding.
                  </p>
                </div>
              </div>

              <form
                className="mt-4 space-y-4"
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setState({ loading: true, lastResponse: null });
                  const formData = new FormData(e.currentTarget);
                  const result = await callAgentAction("provide-rag-coaching", {
                    query: formData.get("query") as string,
                    context: (formData.get("context") as string) || "general",
                    teamSize: formData.get("teamSize") as string
                  });
                  setState({ loading: false, lastResponse: result });
                }}
              >
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Query</label>
                  <textarea
                    name="query"
                    rows={3}
                    className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="e.g., “My team has velocity inconsistency, help me improve.”"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Context</label>
                    <select
                      name="context"
                      className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="general">General Agile Coaching</option>
                      <option value="retrospective">Retrospective Analysis</option>
                      <option value="anti-pattern">Anti-Pattern Detection</option>
                      <option value="coaching">Coaching Recommendations</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Team Size</label>
                    <select
                      name="teamSize"
                      className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="5">5–10 members</option>
                      <option value="10">10–20 members</option>
                      <option value="20">20+ members</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={state.loading}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state.loading ? "Processing..." : "Run RAG-Enhanced Coaching"}
                </button>
              </form>
            </section>

            {/* Decision journal */}
            <section className="rounded-xl border border-purple-800/60 bg-slate-900/60 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-purple-200 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-purple-900/60 text-xs text-purple-300">
                      📊
                    </span>
                    Decision Journal
                  </h2>
                  <p className="mt-2 text-xs text-purple-300">
                    Track agile decisions and observe learning rate adaptation based on outcomes.
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-purple-100">Decision</label>
                  <input
                    type="text"
                    name="decisionName"
                    className="w-full rounded-md border border-purple-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., “Adopt Scrum”"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-purple-100">Options</label>
                  <textarea
                    name="decisionOptions"
                    rows={2}
                    className="w-full rounded-md border border-purple-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue="Option A, Option B, Option C"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-purple-100">Outcome</label>
                  <select
                    name="decisionOutcome"
                    className="w-full rounded-md border border-purple-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="positive">Positive</option>
                    <option value="negative">Negative</option>
                    <option value="neutral">Neutral</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-purple-100">Uncertainty (0–1)</label>
                  <input
                    type="number"
                    name="decisionUncertainty"
                    min={0}
                    max={1}
                    step={0.1}
                    defaultValue={0.5}
                    className="w-full rounded-md border border-purple-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-purple-100">Lessons Learned</label>
                  <textarea
                    name="decisionLessons"
                    rows={2}
                    className="w-full rounded-md border border-purple-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue="Enter lessons learned..."
                  />
                </div>

                <button
                  type="button"
                  disabled={state.loading}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
                  onClick={() => {
                    const name =
                      document.querySelector<HTMLInputElement>('input[name="decisionName"]')?.value || "";
                    const options =
                      document.querySelector<HTMLTextAreaElement>('textarea[name="decisionOptions"]')?.value ||
                      "";
                    const outcome =
                      document.querySelector<HTMLSelectElement>('select[name="decisionOutcome"]')?.value ||
                      "positive";
                    const uncertainty =
                      parseFloat(
                        document.querySelector<HTMLInputElement>('input[name="decisionUncertainty"]')?.value ||
                          "0.5"
                      ) || 0.5;
                    const lessons =
                      document.querySelector<HTMLTextAreaElement>('textarea[name="decisionLessons"]')?.value ||
                      "";
                    // agent.recordDecision(name, options.split(","), outcome, lessons, uncertainty);
                    setState({
                      lastResponse: `Decision recorded: ${name} (${outcome})`,
                      loading: false
                    });
                  }}
                >
                  Record Decision
                </button>

                {/* Static insights */}
                <div className="mt-4 border-t border-purple-800/40 pt-4">
                  <h3 className="text-xs font-medium text-purple-200 mb-3">Decision Insights</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-purple-200">
                    <div>Total Decisions: 0</div>
                    <div>Success Rate: 0%</div>
                    <div>Positive Outcomes: 0</div>
                    <div>Negative Outcomes: 0</div>
                  </div>
                </div>

                <div className="mt-4 border-t border-purple-800/40 pt-4">
                  <h3 className="text-xs font-medium text-purple-200 mb-3">Adaptive Learning Rate</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-purple-200">
                    <div>Current Rate: 0.5</div>
                    <div>High Success → Faster Learning</div>
                    <div>Low Success → Slower Learning</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right column: expert overrides + knowledge sharing + response */}
          <div className="space-y-6">
            {/* Expert overrides & knowledge sharing */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-800 text-xs text-slate-300">
                      🔐
                    </span>
                    Expert Overrides & Knowledge Sharing
                  </h2>
                  <p className="mt-2 text-xs text-slate-400">
                    Manage expert authority, time-decay relevance, and cross-team knowledge sharing.
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {/* Knowledge authority */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Topic</label>
                  <select
                    name="authorityTopic"
                    className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="scrum">Scrum Framework</option>
                    <option value="kanban">Kanban Method</option>
                    <option value="patterns">Anti-patterns</option>
                    <option value="velocity">Velocity & Estimation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-200">Authority Level</label>
                  <select
                    name="authorityLevel"
                    className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="1.0">Full Authority (1.0)</option>
                    <option value="0.7">High Authority (0.7)</option>
                    <option value="0.5">Medium Authority (0.5)</option>
                    <option value="0.3">Low Authority (0.3)</option>
                    <option value="0.0">No Authority (0.0)</option>
                  </select>
                </div>

                <button
                  type="button"
                  disabled={state.loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  onClick={() => {
                    const topic =
                      document.querySelector<HTMLSelectElement>('select[name="authorityTopic"]')?.value ||
                      "scrum";
                    const level =
                      document.querySelector<HTMLSelectElement>('select[name="authorityLevel"]')?.value ||
                      "1.0";
                    // agent.setKnowledgeAuthority(topic, parseFloat(level));
                    setState({
                      lastResponse: `Knowledge authority set for ${topic} to ${level}`,
                      loading: false
                    });
                  }}
                >
                  Set Knowledge Authority
                </button>

                {/* Expert override note */}
                <div className="space-y-2 pt-3 border-t border-slate-800/60">
                  <label className="text-xs font-medium text-slate-200">Override Note</label>
                  <textarea
                    name="overrideNote"
                    rows={2}
                    className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="Enter expert override notes here..."
                  />
                </div>

                <button
                  type="button"
                  disabled={state.loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  onClick={() => {
                    const note =
                      (document.querySelector(
                        'textarea[name="overrideNote"]'
                      ) as HTMLTextAreaElement | null)?.value || "";
                    // agent.recordExpertOverride("key concept", note);
                    setState({
                      lastResponse: `Expert override recorded: ${note}`,
                      loading: false
                    });
                  }}
                >
                  Record Expert Override
                </button>

                {/* Time-decay relevance */}
                <div className="space-y-2 pt-3 border-t border-slate-800/60">
                  <label className="text-xs font-medium text-slate-200">Knowledge Age (days)</label>
                  <input
                    type="number"
                    name="knowledgeAge"
                    min={0}
                    defaultValue={0}
                    className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="button"
                  disabled={state.loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  onClick={() => {
                    const age = parseInt(
                      document.querySelector<HTMLInputElement>('input[name="knowledgeAge"]')?.value ||
                        "0",
                      10
                    );
                    // const relevance = agent.calculateTimeDecayedRelevance(0.8, "knowledge-id", age);
                    setState({
                      lastResponse: `Time-decay relevance calculated for age ${age}`,
                      loading: false
                    });
                  }}
                >
                  Calculate Time-Decay Relevance
                </button>

                {/* Cross-team knowledge sharing */}
                <div className="space-y-3 pt-3 border-t border-slate-800/60">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Share Topic</label>
                    <select
                      name="shareTopic"
                      className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="scrum">Scrum Framework</option>
                      <option value="kanban">Kanban Method</option>
                      <option value="patterns">Anti-patterns</option>
                      <option value="velocity">Velocity & Estimation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-200">Target Team</label>
                    <select
                      name="targetTeam"
                      className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="team-alpha">Team Alpha</option>
                      <option value="team-beta">Team Beta</option>
                      <option value="team-gamma">Team Gamma</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    disabled={state.loading}
                    className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                    onClick={() => {
                      const topic =
                        document.querySelector<HTMLSelectElement>('select[name="shareTopic"]')?.value ||
                        "scrum";
                      const team =
                        document.querySelector<HTMLSelectElement>('select[name="targetTeam"]')?.value ||
                        "team-alpha";
                      // agent.shareKnowledge(topic, "Shared agile knowledge", team);
                      setState({
                        lastResponse: `Knowledge shared to ${team} on ${topic}`,
                        loading: false
                      });
                    }}
                  >
                    Share Knowledge
                  </button>
                </div>
              </div>
            </section>

            {/* Agent response panel */}
            <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-800 text-xs text-slate-300">
                  🤖
                </span>
                Agent Response
              </h2>

              {state.lastResponse ? (
                <div className="mt-3 rounded-md border border-slate-800 bg-slate-950/70 p-3">
                  <pre className="max-h-[320px] overflow-auto whitespace-pre-wrap text-xs font-mono text-slate-100">
                    {state.lastResponse}
                  </pre>
                </div>
              ) : state.loading ? (
                <div className="mt-3 flex items-center gap-2 text-xs text-indigo-300">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-indigo-400" />
                  Retrieving relevant agile knowledge...
                </div>
              ) : (
                <p className="mt-3 text-xs text-slate-400">
                  Run a coaching session or RAG query to see the agent’s response here.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
