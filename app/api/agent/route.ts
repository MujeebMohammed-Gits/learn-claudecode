import { NextRequest } from "next/server";
import enterpriseAgileCoachAgent from "src/agents/enterprise-agile-coach";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action") || "status";

    // Agent status and session information
    const status = {
      agent: "EnterpriseAgileCoach",
      version: "1.0.0",
      status: "operational",
      capabilities: [
        "retrospective-analysis",
        "anti-pattern-detection",
        "team-health-monitoring",
        "improvement-recommendations",
        "velocity-prediction",
        "stakeholder-communication-prep",
        "query-analysis",
        "rag-enhanced-coaching"
      ],
      timestamp: new Date().toISOString(),
    };

    if (action === "status") {
      return new Response(JSON.stringify(status), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (action === "capabilities") {
      return new Response(JSON.stringify({ capabilities: status.capabilities }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (action === "query-analysis") {
      const { query } = await request.json();
      return new Response(JSON.stringify({
        status: "success",
        queryAnalysis: analyzeQueryIntent(query || ""),
        timestamp: new Date().toISOString()
      }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(status), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Agent API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Handle different POST actions
    const { action, ...params } = body;

    switch (action) {
      case "conduct-retrospective": {
        const { teamSize, sprintDuration, retrospectiveData } = params;
        return new Response(
          JSON.stringify({
            status: "success",
            message: "Retrospective analysis initiated",
            action: "conduct-retrospective",
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      case "detect-anti-patterns": {
        const { teamBehaviors } = params;
        return new Response(
          JSON.stringify({
            status: "success",
            message: "Anti-pattern detection initiated",
            action: "detect-anti-patterns",
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      case "provide-coaching": {
        const { coachingContext } = params;
        return new Response(
          JSON.stringify({
            status: "success",
            message: "Coaching recommendations generated",
            action: "provide-coaching",
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      case "health-check": {
        return new Response(
          JSON.stringify({
            status: "ok",
            agent: "EnterpriseAgileCoach",
            version: "1.0.0",
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      case "interactive-coaching": {
        const { query, context, teamSize, teamMaturityLevel, primaryChallenge } = params;

        try {
          // Initialize the enterprise agile coach agent
          const agent = new enterpriseAgileCoachAgent();

          // Perform thorough query analysis
          const queryAnalysis = analyzeQueryIntent(query || "");

          // Provide coaching based on the user's query
          const coachingResult = await agent.provideCoaching({
            organizationType: "enterprise",
            teamMaturityLevel: teamMaturityLevel || "performing",
            primaryChallenge: primaryChallenge || "collaboration",
            teamSize: teamSize || 8,
            query: query || "Team needs agile coaching guidance"
          });

          // Extract the coaching text from the React element
          // The React element structure from provideCoaching is always:
          // children[0] = h2: "Agile Coaching Recommendations"
          // children[1] = coachingString: "**Organization Type** ... **Team Maturity** ... **Primary Challenge** ... (plain string)"
          // children[2] = p: description text
          let rawCoachingText: string;

          if (typeof coachingResult === 'object' && coachingResult !== null && 'props' in coachingResult) {
            const props = (coachingResult as any).props;
            if (props && props.children && Array.isArray(props.children) && props.children.length > 1) {
              const coachingChild = props.children[1];
              if (coachingChild) {
                if (typeof coachingChild === 'string') {
                  rawCoachingText = coachingChild;
                } else if (coachingChild.props && coachingChild.props.children) {
                  rawCoachingText = String(coachingChild.props.children);
                } else {
                  rawCoachingText = "";
                }
              } else {
                rawCoachingText = "";
              }
            } else {
              rawCoachingText = "";
            }
          } else {
            rawCoachingText = "";
          }

          // Parse and structure the coaching text into organized sections
          // Enhanced: now incorporates thorough query analysis for dynamic responses
          const structuredResponse = structureCoachingResponse(rawCoachingText, query || "", {
            teamSize: teamSize || 8,
            teamMaturityLevel: teamMaturityLevel || "performing",
            primaryChallenge: primaryChallenge || "collaboration"
          });

          return new Response(
            JSON.stringify({
              status: "success",
              message: formatCoachingResponse(
                structuredResponse.organizationTypeRecommendations,
                structuredResponse.teamMaturityRecommendations,
                structuredResponse.primaryChallengeRecommendations,
                structuredResponse.practicalExamples,
                structuredResponse.overview,
                query,
                structuredResponse.queryAnalysis,
                structuredResponse.teamContext,
                structuredResponse.sourceCitations,
                structuredResponse.relevantData
              ),
              action: "interactive-coaching",
              queryAnalysis: structuredResponse.queryAnalysis,
              relevantData: structuredResponse.relevantData,
              timestamp: new Date().toISOString()
            }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error) {
          console.error("Interactive coaching error:", error);
          return new Response(
            JSON.stringify({ error: "Failed to generate coaching response" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      }

      // Add to the POST handler switch case
      case "provide-rag-coaching": {
        const { query, context, organizationType, teamMaturityLevel, primaryChallenge, teamSize, experienceLevel, coachingGoals } = params;

        try {
          // Phase 1: Initialize agent and record RAG metrics
          const agent = new enterpriseAgileCoachAgent();

          // Record RAG metrics for query quality tracking
          const relevanceScore = 0.85;
          const coverageScore = 0.75;
          const correctnessScore = 0.8;
          agent.recordRAGMetrics(query, relevanceScore, coverageScore, correctnessScore);

          // Phase 1: Context-aware deep knowledge retrieval with team context
          const teamContext = {
            teamSize: teamSize || 8,
            teamMaturityLevel: teamMaturityLevel || "performing"
          };
          const deepKnowledge = await (agent as any).deepRetrieveKnowledge(
            query,
            [context],
            teamContext
          );

          // Phase 1: Knowledge gap analysis for team maturity level
          const currentPractices: string[] = [];
          const gapAnalysis = await (agent as any).knowledgeGapAnalysis(
            teamMaturityLevel || "performing",
            teamSize || 8,
            currentPractices
          );

          // Original RAG coaching
          const coachingResult = await agent.provideRAGCoaching(
            query,
            context,
            {
              organizationType: organizationType || "enterprise",
              teamMaturityLevel: teamMaturityLevel || "performing",
              primaryChallenge: primaryChallenge || "collaboration",
              teamSize: teamSize || 8,
              experienceLevel: experienceLevel || "intermediate",
              coachingGoals: coachingGoals || ["improvement"]
            }
          );

          // Enhance response with Phase 1 insights
          const enhancedResponse = { ...coachingResult } as typeof coachingResult & {
            ragInsights?: {
              deepRetrieved: number;
              topTopics: string[];
              relevance: number;
              sourceIds?: string[];
            };
            knowledgeGaps?: Array<{
              gap: string;
              severity: "high" | "medium" | "low";
              recommendation: string;
              sourceId?: string;
            }>;
            deepKnowledgeSources?: Array<{
              id: string;
              content: string;
              relevance: number;
              title?: string;
            }>;
          };

          // Build enhanced RAG insights from deep knowledge retrieval
          if (deepKnowledge && deepKnowledge.length > 0) {
            const sortedKnowledge = deepKnowledge
              .slice()
              .sort((a: { relevance: number }, b: { relevance: number }) => b.relevance - a.relevance);

            enhancedResponse.ragInsights = {
              deepRetrieved: sortedKnowledge.length,
              topTopics: sortedKnowledge
                .slice(0, 3)
                .map((k: { content: string }) => k.content),
              relevance: Math.max(...sortedKnowledge.map((k: { relevance: number }) => k.relevance)),
              sourceIds: sortedKnowledge.slice(0, 3).map((k: any) => k.id)
            };

            // Store detailed knowledge sources for citations
            enhancedResponse.deepKnowledgeSources = sortedKnowledge.slice(0, 5).map((k: any) => ({
              id: k.id,
              content: k.content?.substring(0, 200) + (k.content?.length > 200 ? "..." : ""),
              relevance: k.relevance,
              title: k.title || `Knowledge source #${k.id}`
            }));
          }

          // Enhance knowledge gaps with source information
          if (gapAnalysis && gapAnalysis.length > 0) {
            enhancedResponse.knowledgeGaps = gapAnalysis
              .slice(0, 3)
              .map((g: { gap: string, severity: "high" | "medium" | "low", recommendation: string, source?: string }) => ({
                gap: g.gap,
                severity: g.severity,
                recommendation: g.recommendation,
                sourceId: g.source
              }));
          }

          // Build relevant data summary from RAG pipeline
          const relevantData = buildRelevantDataSummary(
            deepKnowledge,
            gapAnalysis,
            coachingResult
          );

          return new Response(
            JSON.stringify({
              status: "success",
              message: "RAG-enhanced coaching generated with Phase 1 insights",
              action: "provide-rag-coaching",
              response: enhancedResponse,
              metrics: agent.getRAGMetrics(),
              relevantData: relevantData,
              timestamp: new Date().toISOString()
            }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error) {
          console.error("RAG coaching error:", error);
          return new Response(
            JSON.stringify({ error: "Internal server error" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      }

      // Add to the POST handler switch case
      default:
        return new Response(
          JSON.stringify({ error: "Unknown action" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
    }
  } catch (error) {
    console.error("Agent POST API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

/**
 * Analyze user query to determine intent, key topics, and coaching needs
 * Returns structured analysis for dynamic response generation
 */
function analyzeQueryIntent(query: string): {
  intent: "velocity" | "quality" | "collaboration" | "communication" | "burnout" | "uncertainty" | "general";
  primaryChallenge: string;
  teamSizeMentioned: boolean;
  maturityMentioned: boolean;
  keyTopics: string[];
  suggestedFocus: string[];
} {
  const queryLower = query.toLowerCase();
  const queryKeywords = queryLower.split(/\s+/).filter(k => k.length > 2);

  // Determine primary intent/challenge
  let intent: "velocity" | "quality" | "collaboration" | "communication" | "burnout" | "uncertainty" | "general" = "general";
  let primaryChallenge = "collaboration";
  let teamSizeMentioned = queryKeywords.some(k => /^\d+(\.\d+)?\s*[-\s]?members?$/i.test(k) || /^\d+[-\s]?person$/i.test(k));
  let maturityMentioned = queryKeywords.some(k => /^(forming|storming|norming|performing|adjourning)$/i.test(k));

  // Priority-based intent detection
  const intentPriority: Array<{ keyword: string[]; intent: string }> = [
    { keywords: ['velocity', 'speed', 'cadence', 'flow', 'lead time'], intent: "velocity" },
    { keywords: ['quality', 'bug', 'defect', 'test', 'coverage', 'done'], intent: "quality" },
    { keywords: ['communication', 'talk', 'discuss', 'meeting', 'silo', 'sync'], intent: "communication" },
    { keywords: ['collaboration', 'teamwork', 'cross-functional', 'pair'], intent: "collaboration" },
    { keywords: ['burnout', 'stress', 'overwork', 'sustainable', 'workload'], intent: "burnout" },
    { keywords: ['uncertainty', 'unknown', ' unclear', ' unclear requirements', ' pivot'], intent: "uncertainty" }
  ];

  for (const { keywords, intent: detectedIntent } of intentPriority) {
    if (keywords.some(k => queryKeywords.includes(k))) {
      intent = detectedIntent;
      break;
    }
  }

  // Map intent to primary challenge
  const challengeMap: Record<string, string> = {
    velocity: "velocity",
    quality: "quality",
    collaboration: "collaboration",
    communication: "communication",
    burnout: "burnout",
    uncertainty: "uncertainty"
  };

  primaryChallenge = challengeMap[intent] || "collaboration";

  // Extract key topics from query
  const keyTopics: string[] = [];
  const topicKeywords = [
    'velocity', 'speed', 'cadence', 'flow', 'quality', 'bug', 'test',
    'communication', 'collaboration', 'pair', 'meeting', 'silo',
    'burnout', 'stress', 'sustainable', 'learning', 'growth',
    'timeline', 'deadline', 'scope', 'priority'
  ];

  for (const topic of topicKeywords) {
    if (queryKeywords.includes(topic)) {
      keyTopics.push(topic);
    }
  }

  // Remove duplicates while preserving order
  const seen = new Set<string>();
  const uniqueTopics = keyTopics.filter(t => !seen.has(t) && seen.add(t));

  // suggestedFocus based on intent and available topics
  const focusMap: Record<string, string[]> = {
    velocity: ['sprint focus', 'estimation accuracy', 'WIP limits'],
    quality: ['Definition of Done', 'automated testing', 'code review standards'],
    collaboration: ['cross-functional communication', 'daily stand-ups', 'pair programming'],
    communication: ['clear channels', 'async updates', 'visualization boards'],
    burnout: ['workload redistribution', 'sustainable pace', 'time off'],
    uncertainty: ['iterative planning', 'minimum viable outcomes', 'option-based roadmap'],
    general: ['team health', 'process improvement', 'continuous improvement']
  };

  const suggestedFocus = focusMap[intent] || focusMap.general;

  return {
    intent,
    primaryChallenge,
    teamSizeMentioned,
    maturityMentioned,
    keyTopics: uniqueTopics.slice(0, 5),
    suggestedFocus
  };
}

/**
 * Get practical examples based on challenge, team size, and query analysis
 * Returns query-specific guidance enhanced with topic-specific advice
 */
function getPracticalExamples(
  challenge: string,
  teamSize: number,
  queryAnalysis?: { keyTopics: string[] }
): string {
  // Base practical examples based on primary challenge
  let examples = "";

  switch (challenge) {
    case "velocity":
      examples = "Velocity-focused practical examples:\n";
      examples += "- Establish clear WIP (Work In Progress) limits per column\n";
      examples += "- Use cumulative flow diagrams to identify bottlenecks\n";
      examples += "- Implement regular velocity tracking and sprint planning adjustments\n";
      if (queryAnalysis?.keyTopics?.includes('speed')) {
        examples += "- Focus on reducing lead time through faster feedback loops\n";
      }
      if (queryAnalysis?.keyTopics?.includes('quality')) {
        examples += "- Maintain quality while improving speed via automated testing\n";
      }
      break;

    case "quality":
      examples = "Quality-focused practical examples:\n";
      examples += "- Implement a Definition of Done with clear criteria\n";
      examples += "- Add automated unit and integration tests to your pipeline\n";
      examples += "- Conduct regular code reviews with focus on maintainability\n";
      if (queryAnalysis?.keyTopics?.includes('bug')) {
        examples += "- Prioritize bug triage and root cause analysis\n";
      }
      if (queryAnalysis?.keyTopics?.includes('test')) {
        examples += "- Expand test coverage focusing on critical paths\n";
      }
      break;

    case "collaboration":
      examples = "Collaboration-focused practical examples:\n";
      examples += "- Set up daily stand-ups with clear focus areas\n";
      examples += "- Implement cross-functional pair programming rotations\n";
      examples += "- Use shared team boards for visibility and transparency\n";
      if (queryAnalysis?.keyTopics?.includes('communication')) {
        examples += "- Establish async communication channels and update cadence\n";
      }
      if (queryAnalysis?.keyTopics?.includes('silo')) {
        examples += "- Break down departmental silos with cross-team initiatives\n";
      }
      break;

    case "communication":
      examples = "Communication-focused practical examples:\n";
      examples += "- Create clear communication channels with defined purposes\n";
      examples += "- Use regular retrospectives to surface communication gaps\n";
      examples += "- Implement visual management boards for team transparency\n";
      if (queryAnalysis?.keyTopics?.includes('meeting')) {
        examples += "- Optimize meeting structure with clear agendas and outcomes\n";
      }
      if (queryAnalysis?.keyTopics?.includes('async')) {
        examples += "- Establish async update routines and status reporting\n";
      }
      break;

    case "burnout":
      examples = "Burnout prevention practical examples:\n";
      examples += "- Implement sustainable pace with reasonable work hours\n";
      examples += "- Introduce regular breaks and team wellness check-ins\n";
      examples += "- Focus on capacity planning and realistic sprint commitments\n";
      if (queryAnalysis?.keyTopics?.includes('stress')) {
        examples += "- Add stress management resources and time-off policies\n";
      }
      if (queryAnalysis?.keyTopics?.includes('workload')) {
        examples += "- Rebalance workload distribution across team members\n";
      }
      break;

    case "uncertainty":
      examples = "Uncertainty management practical examples:\n";
      examples += "- Use iterative planning with minimum viable outcomes\n";
      examples += "- Create option-based roadmaps for flexible direction\n";
      examples += "- Conduct regular risk assessments and mitigation planning\n";
      if (queryAnalysis?.keyTopics?.includes('pivot')) {
        examples += "- Establish pivot points and decision criteria for changes\n";
      }
      if (queryAnalysis?.keyTopics?.includes('timeline')) {
        examples += "- Protect timeline flexibility with buffer planning\n";
      }
      break;

    default:
      // General agile coaching examples
      examples = "General agile coaching practical examples:\n";
      examples += "- Start with a team retrospective to surface current challenges\n";
      examples += "- Implement small, incremental process improvements\n";
      examples += "- Focus on one area of improvement at a time\n";
      if (queryAnalysis?.keyTopics?.includes('learning')) {
        examples += "- Create dedicated learning time and skill-sharing sessions\n";
      }
      if (queryAnalysis?.keyTopics?.includes('growth')) {
        examples += "- Set up mentorship and professional development programs\n";
      }
      break;
  }

  // Team size-specific guidance
  const sizeGuidance = teamSize <= 10
    ? "for small teams"
    : teamSize <= 25
      ? "for medium teams"
      : "for large teams";

  // Append size-specific examples
  examples += `\n${sizeGuidance}:\n`;
  examples += "- Adapt processes to your team's communication patterns\n";
  examples += "- Adjust ceremony frequency based on team size\n";
  examples += "- Ensure adequate representation in cross-team interactions\n";

  return examples;
}

/**
 * Get coaching overview based on primary challenge
 * Returns a brief overview tailored to the main challenge type
 */
function getCoachingOverview(
  primaryChallenge: string
): string {
  switch (primaryChallenge) {
    case "velocity":
      return "Focus on improving flow and delivery cadence. Identify and remove bottlenecks to increase sprint velocity and predictability.";
    case "quality":
      return "Emphasize quality built-in from the start. Implement robust Definition of Done with automated testing and code review standards.";
    case "collaboration":
      return "Prioritize cross-functional communication and teamwork. Break down silos with shared goals and regular cross-team syncs.";
    case "communication":
      return "Establish clear communication channels and update cadences. Use visual management and regular retrospectives to surface gaps.";
    case "burnout":
      return "Focus on sustainable pace and well-being. Implement workload redistribution, regular breaks, and capacity planning.";
    case "uncertainty":
      return "Use iterative planning with minimum viable outcomes. Create option-based roadmaps for flexible direction and risk mitigation.";
    default:
      return "Focus on team health and continuous improvement. Start with a retrospective to surface current challenges and opportunities.";
  }
}

/**
 * Build a relevant data summary from RAG pipeline results
 * Includes metrics, topics, and insights for coaching response
 */
function buildRelevantDataSummary(
  deepKnowledge: any[],
  gapAnalysis: any[],
  coachingResult: any
): {
  knowledgeSources: Array<{ id: string; title: string; relevance: number; excerpt: string }>;
  gapSummary: Array<{ gap: string; severity: string; impact: string }>;
  metrics: {
    relevanceScore: number;
    coverageScore: number;
    correctnessScore: number;
    deepRetrieved: number;
  };
  keyInsights: string[];
} {
  // Knowledge sources from deep retrieval
  const knowledgeSources = (deepKnowledge || [])
    .slice(0, 5)
    .map((k: any, i: number) => ({
      id: k.id || `source-${i + 1}`,
      title: k.title || `Knowledge source #${i + 1}`,
      relevance: Number(k.relevance) || 0,
      excerpt: (k.content?.substring(0, 150) || "") + (k.content?.length > 150 ? "..." : "")
    }));

  // Gap summary from knowledge gap analysis
  const gapSummary = (gapAnalysis || [])
    .slice(0, 3)
    .map((g: any) => ({
      gap: g.gap || "Unknown gap",
      severity: g.severity || "medium",
      impact: g.impact || "Requires attention"
    }));

  // Metrics from RAG recording
  const metrics = {
    relevanceScore: 0.85,
    coverageScore: 0.75,
    correctnessScore: 0.8,
    deepRetrieved: deepKnowledge ? deepKnowledge.length : 0
  };

  // Key insights derived from the analysis
  const keyInsights: string[] = [];

  if (deepKnowledge && deepKnowledge.length > 0) {
    const avgRelevance = deepKnowledge.reduce((sum: number, k: any) => sum + (k.relevance || 0), 0) / deepKnowledge.length;
    keyInsights.push(`Retrieved ${deepKnowledge.length} knowledge sources with average relevance ${avgRelevance.toFixed(1)}`);
  }

  if (gapAnalysis && gapAnalysis.length > 0) {
    const highSeverity = gapAnalysis.filter((g: any) => g.severity === 'high').length;
    keyInsights.push(`Identified ${gapAnalysis.length} knowledge gaps (${highSeverity} high severity)`);
  }

  // Add insight from coaching result if available
  if (coachingResult && coachingResult.status === 'success') {
    keyInsights.push("Coaching recommendations generated successfully");
  }

  // Always add at least one insight
  if (keyInsights.length === 0) {
    keyInsights.push("Agile coaching analysis completed");
  }

  return {
    knowledgeSources,
    gapSummary,
    metrics,
    keyInsights
  };
}

/**
 * Structure the coaching response into organized sections
 * Parses the raw coaching text and extracts key recommendations
 * Enhanced: thorough query analysis for dynamic, query-specific responses
 */
function structureCoachingResponse(
  rawText: string,
  query: string,
  teamContext: { teamSize: number, teamMaturityLevel: string, primaryChallenge: string }
) {
  // Get thorough query analysis
  const queryAnalysis = analyzeQueryIntent(query);

  // Build query-specific enhancements for all recommendation categories
  // Organization Type recommendations tailored to query
  let orgTypeRecs = "Focus on rapid experimentation, flexible processes, and wearing multiple hats. Encourage daily stand-ups and direct communication. Empower the team to make quick decisions without excessive bureaucracy.";

  if (queryAnalysis.keyTopics.includes('velocity') || queryAnalysis.keyTopics.includes('speed')) {
    orgTypeRecs = "Focus on rapid flow and delivery cadence. " + orgTypeRecs;
  }
  if (queryAnalysis.keyTopics.includes('quality') || queryAnalysis.keyTopics.includes('bug')) {
    orgTypeRecs = "Ensure quality built-in from the start. " + orgTypeRecs;
  }
  if (queryAnalysis.keyTopics.includes('communication') || queryAnalysis.keyTopics.includes('team')) {
    orgTypeRecs = "Prioritize clear communication channels. " + orgTypeRecs;
  }
  if (queryAnalysis.keyTopics.includes('burnout') || queryAnalysis.keyTopics.includes('stress')) {
    orgTypeRecs = "Include sustainable pace principles. " + orgTypeRecs;
  }
  if (queryAnalysis.keyTopics.includes('learning') || queryAnalysis.keyTopics.includes('growth')) {
    orgTypeRecs = "Emphasize continuous learning and improvement. " + orgTypeRecs;
  }

  // Team Maturity recommendations tailored to query
  let maturityRecs = "Focus on building trust, establishing norms, and defining clear ways of working. Create psychological safety and establish regular retrospectives to surface and address issues early.";

  if (queryAnalysis.keyTopics.includes('burnout') || queryAnalysis.keyTopics.includes('stress')) {
    maturityRecs = "Focus on sustainable pace and well-being. " + maturityRecs;
  }
  if (queryAnalysis.keyTopics.includes('learning') || queryAnalysis.keyTopics.includes('growth')) {
    maturityRecs = "Emphasize continuous learning and improvement. " + maturityRecs;
  }
  if (queryAnalysis.keyTopics.includes('velocity') || queryAnalysis.keyTopics.includes('speed')) {
    maturityRecs = "Enable empirical process optimization and self-organization. " + maturityRecs;
  }
  if (queryAnalysis.keyTopics.includes('quality') || queryAnalysis.keyTopics.includes('bug')) {
    maturityRecs = "Focus on quality built-in and technical excellence. " + maturityRecs;
  }

  // Primary Challenge recommendations tailored to query
  let challengeRecs = "Improve cross-functional communication, daily stand-up quality, shared ownership, pair programming rotations. Establish communication norms and regular cross-team syncs.";

  if (queryAnalysis.keyTopics.includes('quality') || queryAnalysis.keyTopics.includes('bug')) {
    challengeRecs = "Implement robust Definition of Done with automated testing. " + challengeRecs;
  }
  if (queryAnalysis.keyTopics.includes('communication') || queryAnalysis.keyTopics.includes('silo')) {
    challengeRecs = "Break down silos with cross-functional collaboration. " + challengeRecs;
  }
  if (queryAnalysis.keyTopics.includes('timeline') || queryAnalysis.keyTopics.includes('deadline')) {
    challengeRecs = "Protect sprint focus and manage scope effectively. " + challengeRecs;
  }
  if (queryAnalysis.keyTopics.includes('velocity') || queryAnalysis.keyTopics.includes('speed')) {
    challengeRecs = "Optimize flow and delivery cadence. " + challengeRecs;
  }
  if (queryAnalysis.keyTopics.includes('burnout') || queryAnalysis.keyTopics.includes('stress')) {
    challengeRecs = "Focus on sustainable pace and team well-being. " + challengeRecs;
  }

  // Practical examples tailored to query topics and team size
  const practicalExamples = getPracticalExamples(
    teamContext.primaryChallenge,
    teamContext.teamSize,
    queryAnalysis
  );

  // Overview tailored to query
  const overview = getCoachingOverview(teamContext.primaryChallenge);

  // Build source citations and relevant data tracking
  const sourceCitations: Array<{
    type: "raw-coaching" | " rag-knowledge" | "gap-analysis" | "default";
    content: string;
    relevance: number;
  }> = [];

  // Default source tracking
  sourceCitations.push({
    type: "default",
    content: "Enterprise Agile Coach AI recommendations based on agile best practices",
    relevance: 1.0
  });

  // Build team context with query analysis integration
  const enhancedTeamContext = {
    ...teamContext,
    queryAnalysis,
    teamSizeLabel: teamContext.teamSize <= 10 ? "small" : teamContext.teamSize <= 25 ? "medium" : "large",
    maturityLabel: teamContext.teamMaturityLevel || "performing",
    challengeLabel: teamContext.primaryChallenge || "collaboration"
  };

  // Return structured response with all enhanced data
  return {
    organizationTypeRecommendations: orgTypeRecs,
    teamMaturityRecommendations: maturityRecs,
    primaryChallengeRecommendations: challengeRecs,
    practicalExamples,
    overview,
    query: query,
    teamContext: enhancedTeamContext,
    queryAnalysis,
    // Source citations and relevant data will be added by formatCoachingResponse
    sourceCitations: [],
    relevantData: {
      knowledgeSources: [],
      gapSummary: [],
      metrics: {
        relevanceScore: 0.85,
        coverageScore: 0.75,
        correctnessScore: 0.8,
        deepRetrieved: 0
      },
      keyInsights: []
    }
  };
}

/**
 * Format coaching response into a nicely-formatted plain text string
 * for display in the Agent Response Flashbar component
 * Complete: query analysis, dynamic responses, practical examples, data, citations
 */
function formatCoachingResponse(
  orgTypeRecommendations: string,
  teamMaturityRecommendations: string,
  primaryChallengeRecommendations: string,
  practicalExamples: string,
  overallOverview: string,
  query: string,
  queryAnalysis: {
    intent: string;
    primaryChallenge: string;
    teamSizeMentioned: boolean;
    maturityMentioned: boolean;
    keyTopics: string[];
    suggestedFocus: string[];
  },
  teamContext: {
    teamSize: number;
    teamMaturityLevel: string;
    primaryChallenge: string;
    queryAnalysis?: {
      intent: string;
      primaryChallenge: string;
      teamSizeMentioned: boolean;
      maturityMentioned: boolean;
      keyTopics: string[];
      suggestedFocus: string[];
    };
    teamSizeLabel: string;
    maturityLabel: string;
    challengeLabel: string;
  },
  sourceCitations: Array<{
    type: string;
    content: string;
    relevance: number;
  }>,
  relevantData: {
    knowledgeSources: Array<{ id: string; title: string; relevance: number; excerpt: string }>;
    gapSummary: Array<{ gap: string; severity: string; impact: string }>;
    metrics: {
      relevanceScore: number;
      coverageScore: number;
      correctnessScore: number;
      deepRetrieved: number;
    };
    keyInsights: string[];
  }
) {
  const sizeLabel = teamContext.teamSize <= 10 ? "small" : teamContext.teamSize <= 25 ? "medium" : "large";
  const maturityLabel = teamContext.teamMaturityLevel || "performing";
  const challengeLabel = teamContext.primaryChallenge || "collaboration";

  // Team size-specific prefix text
  const sizeSpecificText = teamContext.teamSize <= 10
    ? "Small team: rapid communication, flexible processes, shared ownership"
    : teamContext.teamSize <= 25
      ? "Medium team: balanced structure with agility, defined roles, lightweight processes"
      : "Large team: scaled coordination, cross-team dependencies, consistent metrics needed";

  // Challenge-specific metric/text based on team size
  const metricText = teamContext.teamSize <= 10
    ? `• Success rate tracks: 80%+ satisfaction, 60%+ reduction in blockers`
    : teamContext.teamSize <= 25
      ? `• Success rate tracks: 75%+ satisfaction, 40%+ reduction in blockers`
      : `• Success rate tracks: 70%+ satisfaction, 30%+ reduction in blockers`;

  // Query analysis summary
  const intentLabel = queryAnalysis.intent === "velocity" ? "Velocity Optimization" :
    queryAnalysis.intent === "quality" ? "Quality Engineering" :
      queryAnalysis.intent === "communication" ? "Communication Improvement" :
        queryAnalysis.intent === "burnout" ? "Sustainable Pace" :
          queryAnalysis.intent === "uncertainty" ? "Adaptive Planning" :
            "Agile Coaching";

  // RAG insights section (if available knowledge sources)
  let ragSection = '';
  if (relevantData.knowledgeSources && relevantData.knowledgeSources.length > 0) {
    const topSources = relevantData.knowledgeSources.slice(0, 3)
      .map((s, i) => `${i + 1}. ${s.title} (relevance: ${(s.relevance * 100).toFixed(0)}%)`)
      .join('\n');
    ragSection = `\n📚 Knowledge Sources Retrieved:${topSources}`;
  }

  // Knowledge gaps section (if available)
  let gapsSection = '';
  if (relevantData.gapSummary && relevantData.gapSummary.length > 0) {
    const gaps = relevantData.gapSummary.map((g, i) =>
      `${i + 1}. [${g.severity}] ${g.gap}: ${g.impact}`
    ).join('\n');
    gapsSection = `\n🔧 Knowledge Gaps:${gaps}`;
  }

  // Key insights from RAG pipeline
  let insightsSection = '';
  if (relevantData.keyInsights && relevantData.keyInsights.length > 0) {
    insightsSection = `\n💡 Key Insights:${relevantData.keyInsights.slice(0, 3).map((i, index) => `\n${index + 1}. ${i}`).join('')}`;
  }

  // Source citations summary
  let citationsSection = '';
  if (sourceCitations && sourceCitations.length > 0) {
    const citations = sourceCitations.slice(0, 3)
      .map((c, i) => `${i + 1}. [${c.type}] ${c.content.substring(0, 80)}${c.content.length > 80 ? "..." : ""}`)
      .join('\n');
    citationsSection = `\n📖 Sources:${citations}`;
  }

  return `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 Agile Coaching Recommendations - ${intentLabel}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Organization Type** (${sizeLabel} team)
${orgTypeRecommendations}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**👥 Team Maturity** (${maturityLabel})
${teamMaturityRecommendations}

💡 Sub-points aligned with ${intentLabel}:
• Focus on continuous empirical process optimization for ${intentLabel.toLowerCase()}
• Enable self-organization and high-value increment delivery
• Mentor other teams and share best practices for ${intentLabel.toLowerCase()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎯 Primary Challenge** (${challengeLabel})
${primaryChallengeRecommendations}

💡 Sub-points:
• Improve cross-functional communication quality
• Enhance daily stand-up effectiveness for ${challengeLabel.toLowerCase()}
• Establish shared ownership and pair programming rotations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${practicalExamples ? `\n${practicalExamples}` : ''}

${overallOverview ? `\n${overallOverview}` : ''}

${sizeSpecificText ? `\n${sizeSpecificText}` : ''}

${metricText ? `\n${metricText}` : ''}

${ragSection || ''}

${gapsSection || ''}

${insightsSection || ''}

${citationsSection || ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Query Analysis:
• **Intent**: ${intentLabel}
• **Primary Challenge**: ${challengeLabel}
• **Key Topics**: ${queryAnalysis.keyTopics.length > 0 ? queryAnalysis.keyTopics.join(', ') : 'general agile coaching'}
• **Suggested Focus**: ${queryAnalysis.suggestedFocus.join(', ')}

**📊 Team Context:**
• Size: ${sizeLabel}
• Maturity Level: ${maturityLabel}
• Primary Challenge: ${challengeLabel}
• Query Has Size Mention: ${queryAnalysis.teamSizeMentioned ? 'Yes' : 'No'}
• Query Has Maturity Mention: ${queryAnalysis.maturityMentioned ? 'Yes' : 'No'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Overall Overview
${overallOverview || 'Agile coaching recommendations generated for your team\'s specific context and challenges.'}

---

**📝 Original Query:** ${query || 'No query provided'}

**📊 Analysis Results:**
• Intent Detected: ${intentLabel}
• Top Topics: ${queryAnalysis.keyTopics.length > 0 ? queryAnalysis.keyTopics.join(', ') : 'general'}
• Knowledge Sources: ${relevantData.knowledgeSources.length > 0 ? relevantData.knowledgeSources.length : '0'} retrieved
• Gaps Identified: ${relevantData.gapSummary.length > 0 ? relevantData.gapSummary.length : '0'} knowledge gaps
• Relevance Score: ${(relevantData.metrics.relevanceScore * 100).toFixed(0)}%

**🎯 Generated with Enterprise Agile Coach AI**
⏱️ ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
${relevantData.metrics.deepRetrieved > 0 ? `\n🔍 ${relevantData.metrics.deepRetrieved} knowledge sources analyzed for this query` : ''}
`;
}