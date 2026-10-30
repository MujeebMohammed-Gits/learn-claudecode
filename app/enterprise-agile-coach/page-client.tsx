"use client";

import React, { useState, useEffect } from "react";

// Cloudscape components
import AppLayout from "@cloudscape-design/components/app-layout";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Textarea from "@cloudscape-design/components/textarea";
import Select from "@cloudscape-design/components/select";
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import Box from "@cloudscape-design/components/box";
import Flashbar from "@cloudscape-design/components/flashbar";

interface AgentState {
  lastResponse: string | null;
  loading: boolean;
  relevantData: any;
  queryAnalysis: {
    intent: string;
    primaryChallenge: string;
    teamSizeMentioned: boolean;
    maturityMentioned: boolean;
    keyTopics: string[];
    suggestedFocus: string[];
  } | null;
}

const initialState: AgentState = {
  lastResponse: null,
  loading: false,
  relevantData: null,
  queryAnalysis: null
};

async function callAgentAction(action: string, params: any): Promise<{message: string, queryAnalysis?: any, relevantData?: any}> {
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
    return {
      message: data.message || JSON.stringify(data),
      queryAnalysis: data.queryAnalysis,
      relevantData: data.relevantData
    };
  } catch (error: any) {
    return {
      message: `Error: ${error.message}`,
      queryAnalysis: null,
      relevantData: null
    };
  }
}

export default function EnterpriseAgileCoach() {
  const [state, setState] = useState<AgentState>(initialState);
  const [query, setQuery] = useState("");
  const [ragQuery, setRagQuery] = useState("");

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("enterprise-agile-coach-state");
      if (stored) {
        const parsed = JSON.parse(stored);
        setState(prev => ({ ...prev, ...parsed }));
        setQuery(parsed.query || "");
        setRagQuery(parsed.ragQuery || "");
      }
    } catch (e) {
      console.error("Failed to load coaching state from localStorage", e);
    }
  }, []);

  // Save state to localStorage on changes
  useEffect(() => {
    try {
      const stateToStore = {
        lastResponse: state.lastResponse,
        relevantData: state.relevantData,
        queryAnalysis: state.queryAnalysis
      };
      localStorage.setItem("enterprise-agile-coach-state", JSON.stringify(stateToStore));
    } catch (e) {
      console.error("Failed to save coaching state to localStorage", e);
    }
  }, [state.lastResponse, state.relevantData, state.queryAnalysis]);

  // Save query to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("enterprise-agile-coach-query", query);
    } catch (e) {
      console.error("Failed to save query to localStorage", e);
    }
  }, [query]);

  // Save ragQuery to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("enterprise-agile-coach-rag-query", ragQuery);
    } catch (e) {
      console.error("Failed to save ragQuery to localStorage", e);
    }
  }, [ragQuery]);
  const [decisionName, setDecisionName] = useState("");
  const [decisionOptions, setDecisionOptions] = useState("Option A, Option B, Option C");
  const [decisionLessons, setDecisionLessons] = useState("");
  const [decisionUncertainty, setDecisionUncertainty] = useState("0.5");
  const [overrideNote, setOverrideNote] = useState("Enter expert override notes here...");
  const [knowledgeAge, setKnowledgeAge] = useState("0");

  return (
    <AppLayout
      navigationHide
      toolsHide
      content={
        <ContentLayout
          header={
            <Header
              variant="h1"
              description="AI-powered enterprise agile coaching and pattern detection for retrospectives, anti-patterns, team health, and decision support."
            >
              Enterprise Agile Coach
            </Header>
          }
        >
          <SpaceBetween size="l">
            {/* Overview */}
            <Container header={<Header variant="h2">Overview</Header>}>
              <SpaceBetween size="s">
                <Box variant="p">
                  Use this agent to analyze team dynamics, detect agile anti-patterns, monitor health, and support
                  decision-making with RAG-enhanced insights.
                </Box>
                <Box variant="p" color="text-label">
                  Agile · Scrum · Kanban · Retrospectives · Velocity · Stakeholders
                </Box>
              </SpaceBetween>
            </Container>

            {/* Capabilities */}
            <Container header={<Header variant="h2">Agent capabilities</Header>}>
              <ColumnLayout columns={2}>
                <Box variant="p">Retrospective analysis & pattern detection</Box>
                <Box variant="p">Anti-pattern detection & risk surfacing</Box>
                <Box variant="p">Team health monitoring & improvement suggestions</Box>
                <Box variant="p">Velocity prediction & stakeholder communication prep</Box>
              </ColumnLayout>
            </Container>

            {/* Interactive Coaching Session */}
            <Container header={<Header variant="h2">Interactive coaching session</Header>}>
              <form
                onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  setState({ ...state, loading: true });
                  const result = await callAgentAction(formData.get("action") as string, {});
                  setState({
                    lastResponse: result.message,
                    loading: false,
                    queryAnalysis: result.queryAnalysis,
                    relevantData: result.relevantData
                  });
                }}
              >
              <Form
                actions={
                  <Button variant="primary" loading={state.loading}>
                    {state.loading ? "Processing..." : "Run RAG-enhanced coaching"}
                  </Button>
                }
              >
                <input type="hidden" name="action" value="interactive-coaching" />

                <SpaceBetween size="m">
                  <FormField label="Query" description="Describe your team situation or coaching need.">
                    <Textarea
                      name="query"
                      value={query}
                      onChange={({ detail }) => setQuery(detail.value)}
                      rows={3}
                      placeholder="e.g., “My team has velocity inconsistency, help me improve.”"
                    />
                  </FormField>

                  <ColumnLayout columns={2}>
                    <FormField label="Context">
                      <Select
                        name="context"
                        selectedOption={{ value: "general", label: "General agile coaching" }}
                        onChange={({ detail }) => setQuery(detail.value)}
                        options={[
                          { value: "general", label: "General agile coaching" },
                          { value: "retrospective", label: "Retrospective analysis" },
                          { value: "anti-pattern", label: "Anti-pattern detection" },
                          { value: "coaching", label: "Coaching recommendations" }
                        ]}
                      />
                    </FormField>

                    <FormField label="Team size">
                      <Select
                        name="teamSize"
                        selectedOption={{ value: "5", label: "5–10 members" }}
                        onChange={({ detail }) => setQuery(detail.value)}
                        options={[
                          { value: "5", label: "5–10 members" },
                          { value: "10", label: "10–20 members" },
                          { value: "20", label: "20+ members" }
                        ]}
                      />
                    </FormField>
                  </ColumnLayout>
                </SpaceBetween>
              </Form>
              </form>
            </Container>

            {/* RAG-enhanced Query */}
            <Container header={<Header variant="h2">RAG-enhanced query</Header>}>
              <form
                onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  setState({ loading: true, lastResponse: null });
                  const formData = new FormData(event.currentTarget);
                  const result = await callAgentAction("provide-rag-coaching", {
                    query: formData.get("query") as string,
                    context: (formData.get("context") as string) || "general",
                    teamSize: formData.get("teamSize") as string
                  });
                  setState({ loading: false, lastResponse: result.message, queryAnalysis: result.queryAnalysis, relevantData: result.relevantData });
                }}
              >
                <Form
                  actions={
                    <Button variant="primary" loading={state.loading}>
                      {state.loading ? "Processing..." : "Run RAG-enhanced coaching"}
                    </Button>
                  }
                >
                <SpaceBetween size="m">
                  <FormField label="Query">
                    <Textarea
                      name="query"
                      value={ragQuery}
                      onChange={({ detail }) => setRagQuery(detail.value)}
                      rows={3}
                      placeholder="e.g., “My team has velocity inconsistency, help me improve.”"
                    />
                  </FormField>

                  <ColumnLayout columns={2}>
                    <FormField label="Context">
                      <Select
                        name="context"
                        selectedOption={{ value: "general", label: "General agile coaching" }}
                        onChange={({ detail }) => setQuery(detail.value)}
                        options={[
                          { value: "general", label: "General agile coaching" },
                          { value: "retrospective", label: "Retrospective analysis" },
                          { value: "anti-pattern", label: "Anti-pattern detection" },
                          { value: "coaching", label: "Coaching recommendations" }
                        ]}
                      />
                    </FormField>

                    <FormField label="Team size">
                      <Select
                        name="teamSize"
                        selectedOption={{ value: "5", label: "5–10 members" }}
                        onChange={({ detail }) => setQuery(detail.value)}
                        options={[
                          { value: "5", label: "5–10 members" },
                          { value: "10", label: "10–20 members" },
                          { value: "20", label: "20+ members" }
                        ]}
                      />
                    </FormField>
                  </ColumnLayout>
                </SpaceBetween>
                </Form>
              </form>
            </Container>

            {/* Decision Journal */}
            <Container header={<Header variant="h2">Decision journal</Header>}>
              <SpaceBetween size="m">
                <FormField label="Decision">
                  <Input
                    name="decisionName"
                    value={decisionName}
                    onChange={({ detail }) => setDecisionName(detail.value)}
                    placeholder="e.g., “Adopt Scrum”"
                  />
                </FormField>

                <FormField label="Options">
                  <Textarea
                    name="decisionOptions"
                    rows={2}
                    value={decisionOptions}
                    onChange={({ detail }) => setDecisionOptions(detail.value)}
                  />
                </FormField>

                <FormField label="Outcome">
                  <Select
                    name="decisionOutcome"
                    selectedOption={{ value: "positive", label: "Positive" }}
                    options={[
                      { value: "positive", label: "Positive" },
                      { value: "negative", label: "Negative" },
                      { value: "neutral", label: "Neutral" }
                    ]}
                  />
                </FormField>

                <FormField label="Uncertainty (0–1)">
                  <Input
                    name="decisionUncertainty"
                    type="number"
                    step={0.1}
                    value={decisionUncertainty}
                    onChange={({ detail }) => setDecisionUncertainty(detail.value)}
                  />
                </FormField>

                <FormField label="Lessons learned">
                  <Textarea
                    name="decisionLessons"
                    rows={2}
                    value={decisionLessons}
                    onChange={({ detail }) => setDecisionLessons(detail.value)}
                    placeholder="Enter lessons learned..."
                  />
                </FormField>

                <Button
                  variant="primary"
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

                    setState({
                      lastResponse: `Decision recorded: ${name} (${outcome})`,
                      loading: false
                    });
                  }}
                >
                  Record decision
                </Button>

                {/* Insights */}
                <Container header={<Header variant="h3">Insights</Header>}>
                  <ColumnLayout columns={2}>
                    <SpaceBetween size="xs">
                      <Box variant="p">Total decisions: 0</Box>
                      <Box variant="p">Success rate: 0%</Box>
                      <Box variant="p">Positive outcomes: 0</Box>
                      <Box variant="p">Negative outcomes: 0</Box>
                    </SpaceBetween>

                    <SpaceBetween size="xs">
                      <Box variant="p">Current learning rate: 0.5</Box>
                      <Box variant="p">High success → faster learning</Box>
                      <Box variant="p">Low success → slower learning</Box>
                    </SpaceBetween>
                  </ColumnLayout>
                </Container>
              </SpaceBetween>
            </Container>

            {/* Expert Overrides */}
            <Container header={<Header variant="h2">Expert overrides & knowledge sharing</Header>}>
              <SpaceBetween size="m">
                <FormField label="Topic">
                  <Select
                    name="authorityTopic"
                    selectedOption={{ value: "scrum", label: "Scrum framework" }}
                    options={[
                      { value: "scrum", label: "Scrum framework" },
                      { value: "kanban", label: "Kanban method" },
                      { value: "patterns", label: "Anti-patterns" },
                      { value: "velocity", label: "Velocity & estimation" }
                    ]}
                  />
                </FormField>

                <FormField label="Authority level">
                  <Select
                    name="authorityLevel"
                    selectedOption={{ value: "1.0", label: "Full authority (1.0)" }}
                    options={[
                      { value: "1.0", label: "Full authority (1.0)" },
                      { value: "0.7", label: "High authority (0.7)" },
                      { value: "0.5", label: "Medium authority (0.5)" },
                      { value: "0.3", label: "Low authority (0.3)" },
                      { value: "0.0", label: "No authority (0.0)" }
                    ]}
                  />
                </FormField>

                <Button
                  variant="primary"
                  onClick={() => {
                    const topic =
                      document.querySelector<HTMLSelectElement>('select[name="authorityTopic"]')
                        ?.value || "scrum";
                    const level =
                      document.querySelector<HTMLSelectElement>('select[name="authorityLevel"]')
                        ?.value || "1.0";

                    setState({
                      lastResponse: `Knowledge authority set for ${topic} to ${level}`,
                      loading: false
                    });
                  }}
                >
                  Set knowledge authority
                </Button>

                <FormField label="Override note">
                  <Textarea
                    name="overrideNote"
                    rows={2}
                    value={overrideNote}
                    onChange={({ detail }) => setOverrideNote(detail.value)}
                  />
                </FormField>

                <Button
                  variant="primary"
                  onClick={() => {
                    const note =
                      (document.querySelector(
                        'textarea[name="overrideNote"]'
                      ) as HTMLTextAreaElement | null)?.value || "";

                    setState({
                      lastResponse: `Expert override recorded: ${note}`,
                      loading: false
                    });
                  }}
                >
                  Record expert override
                </Button>

                <FormField label="Knowledge age (days)">
                  <Input
                    name="knowledgeAge"
                    type="number"
                    value={knowledgeAge}
                    onChange={({ detail }) => setKnowledgeAge(detail.value)}
                  />
                </FormField>

                <Button
                  variant="primary"
                  onClick={() => {
                    const age = parseInt(
                      document.querySelector<HTMLInputElement>('input[name="knowledgeAge"]')
                        ?.value || "0",
                      10
                    );

                    setState({
                      lastResponse: `Time-decay relevance calculated for age ${age}`,
                      loading: false
                    });
                  }}
                >
                  Calculate time-decay relevance
                </Button>

                <FormField label="Share topic">
                  <Select
                    name="shareTopic"
                    selectedOption={{ value: "scrum", label: "Scrum framework" }}
                    options={[
                      { value: "scrum", label: "Scrum framework" },
                      { value: "kanban", label: "Kanban method" },
                      { value: "patterns", label: "Anti-patterns" },
                      { value: "velocity", label: "Velocity & estimation" }
                    ]}
                  />
                </FormField>

                <FormField label="Target team">
                  <Select
                    name="targetTeam"
                    selectedOption={{ value: "team-alpha", label: "Team Alpha" }}
                    options={[
                      { value: "team-alpha", label: "Team Alpha" },
                      { value: "team-beta", label: "Team Beta" },
                      { value: "team-gamma", label: "Team Gamma" }
                    ]}
                  />
                </FormField>

                <Button
                  variant="primary"
                  onClick={() => {
                    const topic =
                      document.querySelector<HTMLSelectElement>('select[name="shareTopic"]')
                        ?.value || "scrum";
                    const team =
                      document.querySelector<HTMLSelectElement>('select[name="targetTeam"]')
                        ?.value || "team-alpha";

                    setState({
                      lastResponse: `Knowledge shared to ${team} on ${topic}`,
                      loading: false
                    });
                  }}
                >
                  Share knowledge
                </Button>
              </SpaceBetween>
            </Container>

            {/* Agent Response */}
            <Container header={<Header variant="h2">Agent response</Header>}>
              {state.lastResponse ? (
                <Flashbar
                  items={[
                    {
                      type: "info",
                      header: "Agent response",
                      content: state.lastResponse,
                      dismissible: true
                    }
                  ]}
                />
              ) : state.loading ? (
                <Flashbar
                  items={[
                    {
                      type: "info",
                      header: "Processing...",
                      content: "Retrieving relevant agile knowledge...",
                      loading: true
                    }
                  ]}
                />
              ) : (
                <Box variant="p" color="text-label">
                  Run a coaching session or RAG query to see the agent’s response here.
                </Box>
              )}
              {/* Always-On indicators - displayed when coaching data includes RAG metrics */}
              {state.lastResponse && !state.loading && (
                <Box variant="p" color="text-muted-foreground" size="s">
                  {`🔍 Knowledge sources analyzed: ${state.relevantData?.metrics?.deepRetrieved || 0} | 📊 Relevance: ${(state.relevantData?.metrics?.relevanceScore * 100 || 0).toFixed(0)}% | 🎯 Intent: ${state.queryAnalysis?.intent || 'general'}`
                  }
                </Box>
              )}
            </Container>
          </SpaceBetween>
        </ContentLayout>
      }
    />
  );
}
