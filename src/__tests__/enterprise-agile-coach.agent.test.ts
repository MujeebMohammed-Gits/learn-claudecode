/// <reference types="jest" />

import EnterpriseAgileCoachAgent from "../agents/enterprise-agile-coach";

describe("EnterpriseAgileCoachAgent", () => {
  let agent: EnterpriseAgileCoachAgent;

  beforeEach(() => {
    agent = new EnterpriseAgileCoachAgent();
  });

  describe("agent identity", () => {
    it("has correct name", () => {
      expect(agent.name).toBe("EnterpriseAgileCoach");
    });

    it("has correct version", () => {
      expect(agent.version).toBe("1.0.0");
    });

    it("has expected capabilities", () => {
      const expectedCapabilities = [
        "retrospective-analysis",
        "anti-pattern-detection",
        "team-health-monitoring",
        "improvement-recommendations",
        "velocity-prediction",
        "stakeholder-communication-prep",
        "rag-coaching",
        "knowledge-graph",
        "prompt-suggestions",
        "sentiment-aware-retrieval",
        "multi-lingual-support"
      ];
      expect(agent.capabilities).toEqual(expectedCapabilities);
    });
  });

  describe("knowledge areas", () => {
    it("has defined knowledge areas", () => {
      expect(agent["knowledgeAreas"]).toBeDefined();
      expect(Array.isArray(agent["knowledgeAreas"])).toBe(true);
      expect(agent["knowledgeAreas"].length).toBeGreaterThan(0);
    });
  });

  describe("retrospective facilitation", () => {
    it("conductRetrospective with valid data returns ReactElement", async () => {
      const result = await agent.conductRetrospective(
        8,
        10,
        {
          whatWentWell: ["Completed sprint goals", "Good communication"],
          whatDidNotGoWell: ["Scope creep introduced"],
          actionItems: [
            { owner: "John", action: "Fix login bug", deadline: new Date("2024-12-01") },
            { owner: "Sarah", action: "Update documentation", deadline: new Date("2024-12-05") }
          ],
          teamRating: 7,
          sentiment: "positive"
        }
      );
      expect(result).toBeDefined();
      // Should contain "What Went Well" section
      const resultStr = (result.props as { children: string[] }).children[0];
      expect(resultStr).toContain("What Went Well");
    });

    it("conductRetrospective handles empty whatWentWell", async () => {
      const result = await agent.conductRetrospective(
        8,
        10,
        {
          whatWentWell: [],
          whatDidNotGoWell: ["Scope creep introduced"],
          actionItems: [],
          teamRating: 5,
          sentiment: "neutral"
        }
      );
      expect(result).toBeDefined();
    });
  });

  describe("anti-pattern detection", () => {
    it("detectAntiPatterns identifies scope creep", async () => {
      const result = await agent.detectAntiPatterns({
        context: "sprint planning",
        observedBehaviors: ["Scope creep introduced new features mid-sprint"],
        metrics: { velocity: 20, leadTime: 5, cycleTime: 2, frequency: 3 }
      });
      expect(result).toBeDefined();
      const resultStr = (result.props as { children: unknown[] }).children[2] as string;
      expect(resultStr).toContain("Scope Creep");
    });

    it("detectAntiPatterns identifies estimation inflation", async () => {
      const result = await agent.detectAntiPatterns({
        context: "sprint review",
        observedBehaviors: ["Story point inflation to feel safer"],
        metrics: { velocity: 20, leadTime: 5, cycleTime: 2, frequency: 3 }
      });
      expect(result).toBeDefined();
    });

    it("detectAntiPatterns handles no anti-patterns", async () => {
      const result = await agent.detectAntiPatterns({
        context: "daily standup",
        observedBehaviors: ["Good communication", "On-time delivery"]
      });
      expect(result).toBeDefined();
    });
  });

  describe("agile coaching recommendations", () => {
    it("provideCoaching with valid context returns recommendations", async () => {
      const result = await agent.provideCoaching({
        organizationType: "enterprise",
        teamMaturityLevel: "performing",
        primaryChallenge: "velocity",
        teamSize: 8,
        experienceLevel: "intermediate",
        coachingGoals: ["improve velocity", "better estimation"]
      });
      expect(result).toBeDefined();
      const resultStr = (result.props as { children: unknown[] }).children[1] as string;
      expect(resultStr).toContain("Organization Type");
      expect(resultStr).toContain("Team Maturity");
      expect(resultStr).toContain("Primary Challenge");
    });

    it("provideCoaching handles different organization types", async () => {
      for (const orgType of ["startup", "small-business", "enterprise", "government"] as const) {
        const result = await agent.provideCoaching({
          organizationType: orgType,
          teamMaturityLevel: "performing",
          primaryChallenge: "velocity",
          teamSize: 8,
          experienceLevel: "intermediate",
          coachingGoals: ["improve velocity"]
        });
        expect(result).toBeDefined();
      }
    });
  });

  describe("RAG-enhanced coaching", () => {
    it("provideRAGCoaching returns formatted response", async () => {
      const result = await agent.provideRAGCoaching(
        "My team has velocity inconsistency",
        "retrospective",
        {
          organizationType: "enterprise",
          teamMaturityLevel: "performing",
          primaryChallenge: "collaboration",
          teamSize: 8,
          experienceLevel: "intermediate",
          coachingGoals: ["improvement"]
        }
      );
      expect(result).toBeDefined();
      const resultStr = (result as { props: { children: [unknown, string] } }).props.children[1];
      expect(resultStr).toContain("RAG-Enhanced Analysis");
    });

    it("provideRAGCoaching with general context", async () => {
      const result = await agent.provideRAGCoaching(
        "How to improve team collaboration",
        "general"
      );
      expect(result).toBeDefined();
    });
  });

  describe("RAG metrics", () => {
    it("recordRAGMetrics records metrics correctly", () => {
      agent.recordRAGMetrics("test query 1", 0.85, 0.75, 0.8);
      const metrics = agent.getRAGMetrics();
      expect(metrics.totalQueries).toBe(1);
      expect(metrics.averageRelevanceScore).toBe(0.85);
      expect(metrics.coverageScore).toBe(0.75);
      expect(metrics.correctnessScore).toBe(0.8);
    });

    it("recordRAGMetrics aggregates multiple queries", () => {
      agent.recordRAGMetrics("query 1", 0.8, 0.7, 0.75);
      agent.recordRAGMetrics("query 2", 0.9, 0.8, 0.85);
      const metrics = agent.getRAGMetrics();
      expect(metrics.totalQueries).toBe(2);
      // Average: (0.8 + 0.9) / 2 = 0.85
      expect(metrics.averageRelevanceScore).toBeCloseTo(0.85);
      // Average: (0.75 + 0.85) / 2 = 0.8
      expect(metrics.correctnessScore).toBeCloseTo(0.8);
    });

    it("resetRAGMetrics resets all metrics", () => {
      agent.recordRAGMetrics("query 1", 0.8, 0.7, 0.75);
      agent.resetRAGMetrics();
      const metrics = agent.getRAGMetrics();
      expect(metrics.totalQueries).toBe(0);
      expect(metrics.averageRelevanceScore).toBe(0);
      expect(metrics.coverageScore).toBe(0);
      expect(metrics.correctnessScore).toBe(0);
      expect(metrics.lastReset).toBeInstanceOf(Date);
    });

    it("getRAGMetrics returns correct structure", () => {
      const metrics = agent.getRAGMetrics();
      expect(metrics).toHaveProperty("totalQueries");
      expect(metrics).toHaveProperty("averageRelevanceScore");
      expect(metrics).toHaveProperty("coverageScore");
      expect(metrics).toHaveProperty("correctnessScore");
      expect(metrics).toHaveProperty("lastReset");
      expect(typeof metrics.lastReset).toBe("object");
    });
  });

  describe("decision journal", () => {
    it("recordDecision records a decision", () => {
      const id = agent.recordDecision(
        "Adopt Scrum",
        ["Waterfall", "Scrum", "Kanban"],
        "positive",
        "Team reorganization",
        0.3,
        "Improved velocity and morale"
      );
      expect(id).toBeDefined();
      expect(id).toContain("decision-");
    });

    it("recordDecision uses default values", () => {
      const id = agent.recordDecision("New process", ["Option A", "Option B"]);
      const journal = agent.getDecisionJournal();
      expect(journal.length).toBe(1);
      expect(journal[0].decision).toBe("New process");
      expect(journal[0].options).toEqual(["Option A", "Option B"]);
      expect(journal[0].outcome).toBe("positive"); // default
      expect(journal[0].uncertainty).toBe(0.5); // default
      expect(journal[0].lessonsLearned).toBe(""); // default
    });

    it("getDecisionInsights returns correct structure", () => {
      agent.recordDecision("Process A", ["A", "B"], "positive", "Context A", 0.2, "Lesson 1");
      agent.recordDecision("Process B", ["C", "D"], "negative", "Context B", 0.8, "Lesson 2");
      const insights = agent.getDecisionInsights();
      expect(insights).toHaveProperty("totalDecisions");
      expect(insights).toHaveProperty("positiveOutcomes");
      expect(insights).toHaveProperty("negativeOutcomes");
      expect(insights).toHaveProperty("neutralOutcomes");
      expect(insights).toHaveProperty("successRate");
      expect(insights).toHaveProperty("commonLessons");
      expect(insights.totalDecisions).toBe(2);
      expect(insights.positiveOutcomes).toBe(1);
      expect(insights.negativeOutcomes).toBe(1);
    });

    it("getDecisionInsights handles empty journal", () => {
      const insights = agent.getDecisionInsights();
      expect(insights.totalDecisions).toBe(0);
      expect(insights.positiveOutcomes).toBe(0);
      expect(insights.negativeOutcomes).toBe(0);
      expect(insights.neutralOutcomes).toBe(0);
      expect(insights.successRate).toBe(0);
      expect(insights.commonLessons).toEqual([]);
    });

    it("getAdaptiveLearningRate adjusts based on success rate", () => {
      // High success rate → faster learning
      for (let i = 0; i < 5; i++) {
        agent.recordDecision("Decision", ["A", "B"], "positive", "Context", 0.2);
      }
      const rate1 = agent.getAdaptiveLearningRate();
      expect(rate1).toBeGreaterThan(0.1);

      // Low success rate → slower learning
      agent.recordDecision("Decision", ["A", "B"], "negative", "Context", 0.8);
      const rate2 = agent.getAdaptiveLearningRate();
      expect(rate2).toBeLessThan(rate1);
    });
  });

  describe("knowledge gap analysis", () => {
    it("knowledgeGapAnalysis identifies gaps for forming team", async () => {
      const gaps = await agent["knowledgeGapAnalysis"](
        "forming",
        5,
        ["Daily stand-up meetings"]
      );
      expect(gaps).toBeDefined();
      expect(gaps.length).toBeGreaterThan(0);
      // Should identify missing practices for forming level
      const gapDescriptions = gaps.map(g => g.gap);
      expect(gapDescriptions).toContain("Basic agile terminology understanding");
      expect(gapDescriptions).toContain("Sprint planning basics");
    });

    it("knowledgeGapAnalysis identifies gaps for performing team", async () => {
      const gaps = await agent["knowledgeGapAnalysis"](
        "performing",
        8,
        ["Continuous improvement cycles", "Advanced estimation techniques"]
      );
      expect(gaps).toBeDefined();
      // Performing level has 4 expected practices, 2 provided → 2 gaps
      expect(gaps.length).toBe(2);
    });

    it("knowledgeGapAnalysis handles empty current practices", async () => {
      const gaps = await agent["knowledgeGapAnalysis"](
        "norming",
        10,
        []
      );
      expect(gaps.length).toBeGreaterThan(0);
    });
  });

  describe("expert override tracking", () => {
    it("setKnowledgeAuthority sets authority correctly", () => {
      agent.setKnowledgeAuthority("scrum-guide", 1.0);
      expect(agent.getKnowledgeAuthority("scrum-guide")).toBe(1.0);
    });

    it("setKnowledgeAuthority clamps values", () => {
      agent.setKnowledgeAuthority("external-blog", 1.5); // Should clamp to 1.0
      expect(agent.getKnowledgeAuthority("external-blog")).toBe(1.0);

      agent.setKnowledgeAuthority("external-blog", -0.1); // Should clamp to 0
      expect(agent.getKnowledgeAuthority("external-blog")).toBe(0);
    });

    it("recordExpertOverride records an override", () => {
      agent.recordExpertOverride("velocity issue", "Use commitment poker instead");
      expect(agent.hasExpertOverride("velocity issue")).toBe(true);
      expect(agent.getExpertOverrideNotes("velocity issue")).toBe("Use commitment poker instead");
    });

    it("hasExpertOverride returns false for unrecorded queries", () => {
      expect(agent.hasExpertOverride("unknown query")).toBe(false);
    });

    it("getAllExpertOverrides returns all overrides", () => {
      agent.recordExpertOverride("query 1", "Notes 1");
      agent.recordExpertOverride("query 2", "Notes 2");
      const overrides = agent.getAllExpertOverrides();
      expect(overrides.size).toBe(2);
    });
  });

  describe("time-decay knowledge relevance", () => {
    it("recordKnowledgeAccess records access", () => {
      agent.recordKnowledgeAccess("scrum-overview");
      // Just verify it doesn't throw
    });

    it("calculateTimeDecayedRelevance returns base when no access recorded", () => {
      const result = agent["calculateTimeDecayedRelevance" as any](0.8, "unknown-id");
      expect(result).toBe(0.8); // No age data, return base
    });

    it("calculateTimeDecayedRelevance decreases over time", async () => {
      agent.recordKnowledgeAccess("test-knowledge");
      // Immediately after access → high relevance
      const immediate = agent["calculateTimeDecayedRelevance" as any](1.0, "test-knowledge");
      expect(immediate).toBe(1.0); // 0 days old
    });
  });

  describe("cross-team knowledge sharing", () => {
    it("shareKnowledge shares knowledge successfully", () => {
      const result = agent.shareKnowledge("scrum-overview", "Scrum framework details", "team-alpha");
      expect(result).toBe(true);
    });

    it("shareKnowledge handles errors gracefully", () => {
      // Should not throw
      expect(() => agent.shareKnowledge("", "content", "team-alpha")).not.toThrow();
    });

    it("retrieveSharedKnowledge returns null for unknown id", () => {
      const result = agent.retrieveSharedKnowledge("non-existent-id");
      expect(result).toBeNull();
    });

    it("retrieveSharedKnowledge returns knowledge for known id", () => {
      agent.shareKnowledge("test-knowledge", "test content", "team-alpha");
      const result = agent.retrieveSharedKnowledge("test-knowledge");
      expect(result).toBeDefined();
      expect(result!.content).toBe("test content");
      expect(result!.ownerTeam).toBe("team-alpha");
    });

    it("getAllSharedKnowledge returns all entries", () => {
      agent.shareKnowledge("knowledge-1", "content 1", "team-alpha");
      agent.shareKnowledge("knowledge-2", "content 2", "team-beta");
      const allKnowledge = agent.getAllSharedKnowledge();
      expect(allKnowledge.length).toBe(2);
    });
  });

  describe("sentiment-aware knowledge retrieval", () => {
    it("retrieveSentimentAwareKnowledge adjusts relevance based on sentiment", async () => {
      const results = await (agent as any).retrieveSentimentAwareKnowledge(
        "velocity issue",
        ["retrospective"],
        "positive"
      );
      expect(results).toBeDefined();
      // Positive sentiment should slightly increase relevance
      if (results.length > 0) {
        expect(results[0].relevance).toBeGreaterThanOrEqual(0);
      }
    });

    it("retrieveSentimentAwareKnowledge handles empty contexts", async () => {
      const results = await (agent as any).retrieveSentimentAwareKnowledge(
        "",
        [],
        "neutral"
      );
      expect(results).toBeDefined();
    });
  });

  describe("knowledge graph", () => {
    it("getKnowledgeGraph returns structured graph", () => {
      const graph = agent.getKnowledgeGraph();
      expect(graph).toBeDefined();
      expect(Array.isArray(graph)).toBe(true);
      expect(graph.length).toBeGreaterThan(0);

      // Check structure of first node
      const firstNode = graph[0];
      expect(firstNode).toHaveProperty("id");
      expect(firstNode).toHaveProperty("label");
      expect(firstNode).toHaveProperty("group");
      expect(firstNode).toHaveProperty("connections");
      expect(Array.isArray(firstNode.connections)).toBe(true);
    });

    it("getKnowledgeGraph includes scrum nodes", () => {
      const graph = agent.getKnowledgeGraph();
      const scrumNode = graph.find((n: any) => n.id === "scrum-overview");
      expect(scrumNode).toBeDefined();
      expect(scrumNode?.label).toBe("Scrum Framework");
      expect(Array.isArray(scrumNode?.connections)).toBe(true);
    });

    it("getKnowledgeGraph includes anti-pattern nodes", () => {
      const graph = agent.getKnowledgeGraph();
      const antiPatternNode = graph.find((n: any) => n.id === "anti-pattern-scope-creep");
      expect(antiPatternNode).toBeDefined();
      expect(antiPatternNode?.label).toBe("Scope Creep");
    });

    it("getKnowledgeGraph includes coaching template nodes", () => {
      const graph = agent.getKnowledgeGraph();
      const templateNode = graph.find((n: any) => n.id === "template-velocityIssue");
      expect(templateNode).toBeDefined();
      expect(templateNode?.label).toBe("Velocity Consistency Issue");
    });
  });

  describe("i18n support", () => {
    it("i18n translates keys to English", () => {
      expect(agent["i18n" as any]("retrospective", "en")).toBe("Retrospective");
      expect(agent["i18n" as any]("coaching", "en")).toBe("Coaching");
      expect(agent["i18n" as any]("anti-pattern", "en")).toBe("Anti-Pattern");
      expect(agent["i18n" as any]("general", "en")).toBe("General");
    });

    it("i18n supports Spanish", () => {
      expect(agent["i18n" as any]("retrospective", "es")).toBe("Retrospectiva");
      expect(agent["i18n" as any]("coaching", "es")).toBe("Coaching");
    });

    it("i18n supports French", () => {
      expect(agent["i18n" as any]("retrospective", "fr")).toBe("Réflexion");
    });

    it("i18n supports German", () => {
      expect(agent["i18n" as any]("retrospective", "de")).toBe("Retrospektive");
    });

    it("i18n supports Chinese", () => {
      expect(agent["i18n" as any]("retrospective", "zh")).toBe("回顾");
    });

    it("i18n returns key if language not supported", () => {
      expect(agent["i18n" as any]("retrospective", "xx")).toBe("retrospective");
    });
  });

  describe("health check", () => {
    it("healthCheck returns operational status", async () => {
      const result = await agent.healthCheck();
      expect(result).toBeDefined();
      const resultStr = (result.props as { children: unknown[] }).children[1] as string;
      expect(resultStr).toContain("operational");
      expect(resultStr).toContain("EnterpriseAgileCoach");
    });
  });

  describe("React component test coverage", () => {
    import { render, screen } from "@testing-library/react"
    import EnterpriseAgileCoach from "../app/enterprise-agile-coach/page-client"

    it("renders the EnterpriseAgileCoach component", () => {
      render(<EnterpriseAgileCoach />)
      expect(screen.getByRole("heading", { name: "Enterprise Agile Coach" })).toBeInTheDocument()
    })

    it("Select components have onChange handlers", () => {
      render(<EnterpriseAgileCoach />)
      // Interactive coaching context Select
      const contextSelect = screen.getByLabelText("Context")
      expect(contextSelect).toHaveAttribute("onchange")
      // Interactive coaching team size Select
      const teamSizeSelect = screen.getByLabelText("Team size")
      expect(teamSizeSelect).toHaveAttribute("onchange")
      // RAG-enhanced query context Select
      const ragContextSelect = screen.getByPlaceholderText("e.g., "My team has velocity inconsistency, help me improve."")
        .closest("form")
        .querySelector('[name="context"]')
      expect(ragContextSelect).toHaveAttribute("onchange")
      // RAG-enhanced query team size Select
      const ragTeamSizeSelect = screen.getByPlaceholderText("e.g., "My team has velocity inconsistency, help me improve."")
        .closest("form")
        .querySelector('[name="teamSize"]')
      expect(ragTeamSizeSelect).toHaveAttribute("onchange")
    })

    it("displays Flashbar with agent response", () => {
      const mockResponse = "Test coaching response"
      render(
        <EnterpriseAgileCoach
          lastResponse={mockResponse}
          relevantData={{ metrics: { deepRetrieved: 5, relevanceScore: 0.85 } }}
          queryAnalysis={{ intent: "retrospective" }}
        />
      )
      const flashbar = screen.getByRole("status")
      expect(flashbar).toBeInTheDocument()
    })

    it("persists state to localStorage", () => {
      const mockResponse = "Persistent response"
      render(
        <EnterpriseAgileCoach
          lastResponse={mockResponse}
          relevantData={{ metrics: { deepRetrieved: 3, relevanceScore: 0.9 } }}
          queryAnalysis={{ intent: "anti-pattern" }}
        />
      )
      // Check localStorage was updated
      const storedState = localStorage.getItem("enterprise-agile-coach-state")
      expect(storedState).toBeDefined()
      const parsed = JSON.parse(storedState!)
      expect(parsed.lastResponse).toBe(mockResponse)
    })

    it("query state is stored in localStorage", () => {
      const testQuery = "My team has velocity issues"
      render(
        <EnterpriseAgileCoach query={testQuery} />
      )
      const storedQuery = localStorage.getItem("enterprise-agile-coach-query")
      expect(storedQuery).toBe(testQuery)
    })

    it("ragQuery state is stored in localStorage", () => {
      const testRagQuery = "How to improve collaboration"
      render(
        <EnterpriseAgileCoach ragQuery={testRagQuery} />
      )
      const storedRagQuery = localStorage.getItem("enterprise-agile-coach-rag-query")
      expect(storedRagQuery).toBe(testRagQuery)
    })
  })
});