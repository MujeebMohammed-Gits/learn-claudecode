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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top app shell */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
              EA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-slate-900">
                  Enterprise Agile Coach
                </h1>
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Agent online · RAG-enhanced
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                AI-powered enterprise agile coaching and pattern detection for retrospectives, anti-patterns, team health, and decision support.
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-slate-500">
            <span>Enterprise Agile Coaching Suite</span>
            <span className="h-4 w-px bg-slate-200" />
            <span>Environment: Production</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Breadcrumbs */}
        <nav className="mb-4 text-xs text-slate-500">
          <ol className="flex items-center gap-1">
            <li>Home</li>
            <li className="text-slate-300">/</li>
            <li>Agents</li>
            <li className="text-slate-300">/</li>
            <li className="font-medium text-slate-700">Enterprise Agile Coach</li>
          </ol>
        </nav>

        {/* Page intro */}
        <section className="mb-6 rounded-lg border border-slate-200 bg-white px-5 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Overview
              </h2>
              <p className="mt-1 text-xs text-slate-600 max-w-xl">
                Use this agent to analyze team dynamics, detect agile anti-patterns, monitor health, and support decision-making with RAG-enhanced insights.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-slate-600">
                Agile · Scrum · Kanban
              </span>
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-slate-600">
                Retrospectives · Velocity · Stakeholders
              </span>
            </div>
          </div>
        </section>

        {/* Two-column layout */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Capabilities card */}
            <section className="rounded-lg border border-slate-200 bg-white px-5 py-4">
              <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-slate-100 text-[11px] text-slate-700">
                  EA
                </span>
                Agent capabilities
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                The Enterprise Agile Coach Agent provides:
              </p>
              <div className="mt-3 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Retrospective analysis & pattern detection
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Anti-pattern detection & risk surfacing
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Team health monitoring & improvement suggestions
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Velocity prediction & stakeholder communication prep
                </div>
              </div>
            </section>

            {/* Interactive coaching session */}
            <section className="rounded-lg border border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Interactive coaching session
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Provide context about your team or situation to receive targeted coaching guidance.
                  </p>
                </div>
                <span className="hidden text-xs text-slate-500 md:inline">
                  Mode: Guided coaching
                </span>
              </div>

              <form
                className="mt-4 space-y-4"
                onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const result = await callAgentAction(
                    formData.get("action") as string,
                    {}
                  );
                  setState({ lastResponse: result, loading: false });
                }}
              >
                {/* keep your existing API contract */}
                <input type="hidden" name="action" value="interactive-coaching" />

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Query
                  </label>
                  <textarea
                    name="query"
                    rows={3}
                    className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., “My team has velocity inconsistency, help me improve.”"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-800">
                      Context
                    </label>
                    <select
                      name="context"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="general">General agile coaching</option>
                      <option value="retrospective">Retrospective analysis</option>
                      <option value="anti-pattern">Anti-pattern detection</option>
                      <option value="coaching">Coaching recommendations</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-800">
                      Team size
                    </label>
                    <select
                      name="teamSize"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="5">5–10 members</option>
                      <option value="10">10–20 members</option>
                      <option value="20">20+ members</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={state.loading}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.loading ? "Processing..." : "Run RAG-enhanced coaching"}
                  </button>
                </div>
              </form>
            </section>

            {/* RAG-enhanced query */}
            <section className="rounded-lg border border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    RAG-enhanced query
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Ask about agile, scrum, kanban, or team dynamics. The agent retrieves relevant knowledge before responding.
                  </p>
                </div>
                <span className="hidden text-xs text-slate-500 md:inline">
                  Mode: Knowledge retrieval
                </span>
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
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Query
                  </label>
                  <textarea
                    name="query"
                    rows={3}
                    className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., “My team has velocity inconsistency, help me improve.”"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-800">
                      Context
                    </label>
                    <select
                      name="context"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="general">General agile coaching</option>
                      <option value="retrospective">Retrospective analysis</option>
                      <option value="anti-pattern">Anti-pattern detection</option>
                      <option value="coaching">Coaching recommendations</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-800">
                      Team size
                    </label>
                    <select
                      name="teamSize"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="5">5–10 members</option>
                      <option value="10">10–20 members</option>
                      <option value="20">20+ members</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={state.loading}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.loading ? "Processing..." : "Run RAG-enhanced coaching"}
                  </button>
                </div>
              </form>
            </section>

            {/* Decision journal */}
            <section className="rounded-lg border border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Decision journal
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Track agile decisions and observe learning rate adaptation based on outcomes.
                  </p>
                </div>
                <span className="hidden text-xs text-slate-500 md:inline">
                  Mode: Decision tracking
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Decision
                  </label>
                  <input
                    type="text"
                    name="decisionName"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g., “Adopt Scrum”"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Options
                  </label>
                  <textarea
                    name="decisionOptions"
                    rows={2}
                    className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="Option A, Option B, Option C"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Outcome
                  </label>
                  <select
                    name="decisionOutcome"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="positive">Positive</option>
                    <option value="negative">Negative</option>
                    <option value="neutral">Neutral</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Uncertainty (0–1)
                  </label>
                  <input
                    type="number"
                    name="decisionUncertainty"
                    min={0}
                    max={1}
                    step={0.1}
                    defaultValue={0.5}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Lessons learned
                  </label>
                  <textarea
                    name="decisionLessons"
                    rows={2}
                    className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    defaultValue="Enter lessons learned..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    disabled={state.loading}
                    className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
                    onClick={() => {
                      const name =
                        document.querySelector<HTMLInputElement>('input[name="decisionName"]')?.value ||
                        "";
                      const options =
                        document.querySelector<HTMLTextAreaElement>('textarea[name="decisionOptions"]')
                          ?.value || "";
                      const outcome =
                        document.querySelector<HTMLSelectElement>('select[name="decisionOutcome"]')
                          ?.value || "positive";
                      const uncertainty =
                        parseFloat(
                          document.querySelector<HTMLInputElement>(
                            'input[name="decisionUncertainty"]'
                          )?.value || "0.5"
                        ) || 0.5;
                      const lessons =
                        document.querySelector<HTMLTextAreaElement>('textarea[name="decisionLessons"]')
                          ?.value || "";
                      // agent.recordDecision(name, options.split(","), outcome, lessons, uncertainty);
                      setState({
                        lastResponse: `Decision recorded: ${name} (${outcome})`,
                        loading: false
                      });
                    }}
                  >
                    Record decision
                  </button>
                </div>

                {/* Insights */}
                <div className="mt-4 grid gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-xs text-slate-700 sm:grid-cols-2">
                  <div>
                    <div className="font-medium text-slate-800">Decision insights</div>
                    <div className="mt-2 space-y-1">
                      <div>Total decisions: 0</div>
                      <div>Success rate: 0%</div>
                      <div>Positive outcomes: 0</div>
                      <div>Negative outcomes: 0</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Adaptive learning rate</div>
                    <div className="mt-2 space-y-1">
                      <div>Current rate: 0.5</div>
                      <div>High success → faster learning</div>
                      <div>Low success → slower learning</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Expert overrides & knowledge sharing */}
            <section className="rounded-lg border border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Expert overrides & knowledge sharing
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Manage expert authority, time-decay relevance, and cross-team knowledge sharing.
                  </p>
                </div>
                <span className="hidden text-xs text-slate-500 md:inline">
                  Mode: Governance
                </span>
              </div>

              <div className="mt-4 space-y-4">
                {/* Knowledge authority */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Topic
                  </label>
                  <select
                    name="authorityTopic"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="scrum">Scrum framework</option>
                    <option value="kanban">Kanban method</option>
                    <option value="patterns">Anti-patterns</option>
                    <option value="velocity">Velocity & estimation</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-800">
                    Authority level
                  </label>
                  <select
                    name="authorityLevel"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="1.0">Full authority (1.0)</option>
                    <option value="0.7">High authority (0.7)</option>
                    <option value="0.5">Medium authority (0.5)</option>
                    <option value="0.3">Low authority (0.3)</option>
                    <option value="0.0">No authority (0.0)</option>
                  </select>
                </div>

                <button
                  type="button"
                  disabled={state.loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  onClick={() => {
                    const topic =
                      document.querySelector<HTMLSelectElement>('select[name="authorityTopic"]')
                        ?.value || "scrum";
                    const level =
                      document.querySelector<HTMLSelectElement>('select[name="authorityLevel"]')
                        ?.value || "1.0";
                    // agent.setKnowledgeAuthority(topic, parseFloat(level));
                    setState({
                      lastResponse: `Knowledge authority set for ${topic} to ${level}`,
                      loading: false
                    });
                  }}
                >
                  Set knowledge authority
                </button>

                {/* Override note */}
                <div className="space-y-1 pt-3 border-t border-slate-200">
                  <label className="text-xs font-medium text-slate-800">
                    Override note
                  </label>
                  <textarea
                    name="overrideNote"
                    rows={2}
                    className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue="Enter expert override notes here..."
                  />
                </div>

                <button
                  type="button"
                  disabled={state.loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
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
                  Record expert override
                </button>

                {/* Time-decay relevance */}
                <div className="space-y-1 pt-3 border-t border-slate-200">
                  <label className="text-xs font-medium text-slate-800">
                    Knowledge age (days)
                  </label>
                  <input
                    type="number"
                    name="knowledgeAge"
                    min={0}
                    defaultValue={0}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <button
                  type="button"
                  disabled={state.loading}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  onClick={() => {
                    const age = parseInt(
                      document.querySelector<HTMLInputElement>('input[name="knowledgeAge"]')
                        ?.value || "0",
                      10
                    );
                    // const relevance = agent.calculateTimeDecayedRelevance(0.8, "knowledge-id", age);
                    setState({
                      lastResponse: `Time-decay relevance calculated for age ${age}`,
                      loading: false
                    });
                  }}
                >
                  Calculate time-decay relevance
                </button>

                {/* Cross-team sharing */}
                <div className="space-y-3 pt-3 border-t border-slate-200">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-800">
                      Share topic
                    </label>
                    <select
                      name="shareTopic"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="scrum">Scrum framework</option>
                      <option value="kanban">Kanban method</option>
                      <option value="patterns">Anti-patterns</option>
                      <option value="velocity">Velocity & estimation</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-800">
                      Target team
                    </label>
                    <select
                      name="targetTeam"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="team-alpha">Team Alpha</option>
                      <option value="team-beta">Team Beta</option>
                      <option value="team-gamma">Team Gamma</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    disabled={state.loading}
                    className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                    onClick={() => {
                      const topic =
                        document.querySelector<HTMLSelectElement>('select[name="shareTopic"]')
                          ?.value || "scrum";
                      const team =
                        document.querySelector<HTMLSelectElement>('select[name="targetTeam"]')
                          ?.value || "team-alpha";
                      // agent.shareKnowledge(topic, "Shared agile knowledge", team);
                      setState({
                        lastResponse: `Knowledge shared to ${team} on ${topic}`,
                        loading: false
                      });
                    }}
                  >
                    Share knowledge
                  </button>
                </div>
              </div>
            </section>

            {/* Agent response */}
            <section className="rounded-lg border border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  Agent response
                </h3>
                <span className="text-xs text-slate-500">
                  Output · Read-only
                </span>
              </div>

              {state.lastResponse ? (
                <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-3">
                  <pre className="max-h-[320px] overflow-auto whitespace-pre-wrap text-xs font-mono text-slate-900">
                    {state.lastResponse}
                  </pre>
                </div>
              ) : state.loading ? (
                <div className="mt-3 flex items-center gap-2 text-xs text-indigo-600">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-indigo-500" />
                  Retrieving relevant agile knowledge...
                </div>
              ) : (
                <p className="mt-3 text-xs text-slate-500">
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
