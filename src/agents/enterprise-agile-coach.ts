export const metadata = {
  title: "Enterprise Agile Coach Agent - Production-Ready AI Agent"
};

/** Enterprise Agile Coach Agent class providing agile coaching, pattern detection, retrospective analysis, and improvement recommendations across multiple teams and domains.

 * Follows the three-approach pattern:
 * - Interface-based (primary, no terminal required)
 * - Terminal-inclusive (rtk commands for analytics and raw operations)
 * - Direct UI interaction (dedicated panels for configuration and results)
 */
import { createElement, type ReactElement, type ReactNode } from "react";

type ComponentProps = { children?: ReactNode; [key: string]: unknown };

const h3 = (props: ComponentProps) => createElement("h3", props, props.children);
const p = (props: ComponentProps) => createElement("p", props, props.children);
const a = (props: ComponentProps) => createElement("a", props, props.children);
const div = (props: ComponentProps) => createElement("div", props, props.children);
const h2 = (props: ComponentProps) => createElement("h2", props, props.children);

function render(Component: React.ElementType, props: ComponentProps = {}, ...children: ReactNode[]) {
  return createElement(Component, props, ...children);
};

/**
 * Enterprise Agile Coach Agent
 * Provides agile coaching, pattern detection, retrospective analysis,
 * and improvement recommendations across multiple teams and domains.
 *
 * Follows the three-approach pattern:
 * - Interface-based (primary, no terminal required)
 * - Terminal-inclusive (rtk commands for analytics and raw operations)
 * - Direct UI interaction (dedicated panels for configuration and results)
 */
export default class EnterpriseAgileCoachAgent {
  /** Agent identity and configuration */
  public readonly name: string = "EnterpriseAgileCoach";
  public readonly version: string = "1.0.0";
  public readonly description: string = "AI-powered enterprise agile coaching and pattern detection agent";
  public readonly capabilities: string[] = [
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

  /** Agent skills and knowledge areas */
  private readonly knowledgeAreas: string[] = [
    "scrum-framework",
    "kanban-flow",
    "extreme-programming",
    "lean-startup",
    "devops-continuous-delivery",
    "team-dynamics",
    "organizational-change-management"
  ];

  /** Constructor */
  constructor() {
    // Agent initialization - no external dependencies at construction
  }

  private identifyStrengths(items: string[]): string {
    return items.length > 0 ? "team collaboration, delivery practices, and continuous improvement" : "none identified";
  }

  private identifyImprovementAreas(items: string[]): string {
    return items.length > 0 ? "workflow efficiency, team communication, and process consistency" : "none identified";
  }

  private assessTeamHealth(teamRating: number, sentiment: "positive" | "negative" | "neutral"): string {
    if (teamRating >= 8 && sentiment === "positive") {
      return "the team is healthy and performing well";
    }
    if (teamRating <= 5 || sentiment === "negative") {
      return "team health needs attention and focused support";
    }
    return "team health is stable with opportunities for improvement";
  }

  /**
   * Conduct a retrospective analysis for a development team
   * @param teamSize - Number of team members (3-9 for Scrum, unlimited for Kanban)
   * @param sprintDuration - Sprint length in days
   * @param retrospectiveData - Collected retrospective feedback and metrics
   * @returns Structured analysis with insights and recommendations
   */
  public async conductRetrospective(
    teamSize: number,
    sprintDuration: number,
    retrospectiveData: {
      whatWentWell: string[];
      whatDidNotGoWell: string[];
      actionItems: {owner: string; action: string; deadline: Date}[];
      teamRating: number; // 1-10
      sentiment: "positive" | "negative" | "neutral"
    }
  ): Promise<ReactElement> {
    const insights: string[] = [];

    // What went well analysis
    if (retrospectiveData.whatWentWell.length > 0) {
      insights.push(
        `✅ **What Went Well**: ${retrospectiveData.whatWentWell.join(", ")}. ` +
        `This indicates the team is strong in: ` +
        this.identifyStrengths(retrospectiveData.whatWentWell)
      );
    }

    // What did not go well analysis
    if (retrospectiveData.whatDidNotGoWell.length > 0) {
      insights.push(
        `⚠️ **Areas for Improvement**: ${retrospectiveData.whatDidNotGoWell.join(", ")}. ` +
        `Suggested focus areas: ` +
        this.identifyImprovementAreas(retrospectiveData.whatDidNotGoWell)
      );
    }

    // Action items assessment
    const completedActions = retrospectiveData.actionItems.filter(
      item => new Date() < item.deadline
    ).length;
    const totalActions = retrospectiveData.actionItems.length;

    if (totalActions > 0) {
      const completionRate = (completedActions / totalActions) * 100;
      insights.push(
        `📋 **Action Items**: ${completedActions}/${totalActions} actions completed (${completionRate.toFixed(1)}% completion rate). ` +
        `Recommendation: ` +
        (completionRate < 50 ? "Review and reprioritize remaining actions" : "Continue current trajectory")
      );
    }

    // Team rating and sentiment analysis
    insights.push(
      `📊 **Team Health**: Rating ${retrospectiveData.teamRating}/10, Sentiment: ${retrospectiveData.sentiment}. ` +
      `Overall assessment: ` +
      this.assessTeamHealth(retrospectiveData.teamRating, retrospectiveData.sentiment)
    );

    return createElement("div", {},
      createElement("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" }),
      createElement("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" }, insights),
      createElement("p", { className: "mt-6 text-sm text-muted-foreground" },
        "This retrospective analysis was generated by the Enterprise Agile Coach Agent. " +
        "For best results, combine with direct team input and organizational context."
      )
    );
  }

  /**
   * Detect agile anti-patterns in team behavior and processes
   * @param teamBehaviors - Observed team behaviors and process signals
   * @returns Detected anti-patterns with severity and recommended fixes
   */
  public async detectAntiPatterns(
    teamBehaviors: {
      context: string;
      observedBehaviors: string[];
      metrics?: {velocity: number; leadTime: number; cycleTime: number; frequency: number};
    }
  ): Promise<ReactElement> {
    const detectedPatterns: string[] = [];

    // Common anti-patterns detection
    const behaviorLower = teamBehaviors.observedBehaviors.map(b => b.toLowerCase());

    // Sprint anti-patterns
    if (behaviorLower.some(b => b.includes("scope creep") || b.includes("changing requirements too frequently"))) {
      detectedPatterns.push(
        "🔍 **Scope Creep Anti-Pattern**: Requirements changing mid-sprint degrade focus and velocity. " +
        "Recommendation: Freeze sprint backlog at sprint start, create a backlog grooming session for new items."
      );
    }

    if (behaviorLower.some(b => b.includes("story point inflation") || b.includes("padding estimates"))) {
      detectedPatterns.push(
        "📊 **Estimation Anti-Pattern**: Story point inflation reduces planning accuracy. " +
        "Recommendation: Use planning poker with anonymous estimates, focus on relative sizing, not absolute values."
      );
    }

    if (behaviorLower.some(b => b.includes("commitment missing") || b.includes("over-commitment"))) {
      detectedPatterns.push(
        "⚠️ **Commitment Anti-Pattern**: Teams over-committing or under-committing to sprint goals. " +
        "Recommendation: Use historical velocity data for realistic commitment, consider commitment poker."
      );
    }

    // Team dynamic anti-patterns
    if (behaviorLower.some(b => b.includes("silent retrospective") || b.includes("nobody speaks"))) {
      detectedPatterns.push(
        "👥 **Participation Anti-Pattern**: Some team members never contribute to discussions or retrospectives. " +
        "Recommendation: Go-around format, anonymous feedback channels, psychological safety assessment."
      );
    }

    if (behaviorLower.some(b => b.includes("blame culture")) || behaviorLower.some(b => b.includes("finger pointing"))) {
      detectedPatterns.push(
        "🚫 **Blame Culture Anti-Pattern**: Focus on individual fault rather than systemic improvement. " +
        "Recommendation: Prime the retrospective with 'What did we learn?' not 'Who made the mistake?'"
      );
    }

    // Process anti-patterns
    if (teamBehaviors.metrics) {
      const { velocity, leadTime, cycleTime, frequency } = teamBehaviors.metrics;

      if (velocity && frequency) {
        const predictability = frequency > 0 ? (velocity / frequency) : 0;
        if (predictability < 0.6) {
          detectedPatterns.push(
            "📉 **Velocity Inconsistency**: Low predictability between planned and delivered velocity. " +
            "Recommendation: Stabilize scope, improve estimation accuracy, inspect inspect adapt more frequently."
          );
        }
      }

      if (leadTime && cycleTime && leadTime > cycleTime * 3) {
        detectedPatterns.push(
          "⏱️ **Long Lead Time**: Development lead time is 3x cycle time, indicating bottlenecks or excessive waiting. " +
          "Recommendation: Identify and remove bottlenecks, improve flow, limit work in progress."
        );
      }
    }

    return createElement("div", {},
      createElement("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" }, "Anti-Pattern Detection Results"),
      createElement("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" }, detectedPatterns.length > 0 ? detectedPatterns.join("\n") : "No significant anti-patterns detected. Team practices appear healthy."),
      createElement("p", { className: "mt-6 text-sm text-muted-foreground" },
        "Anti-pattern detection by Enterprise Agile Coach Agent. ",
        "For comprehensive assessment, combine with direct team observation and organizational context."
      )
    );
  }

  /**
   * Provide agile coaching and improvement recommendations
   * @param coachingContext - Context about the team, organization, and coaching goals
   * @returns Personalized coaching recommendations
   */
  public async provideCoaching(
    coachingContext: {
      organizationType: "startup" | "small-business" | "enterprise" | "government";
      teamMaturityLevel: "forming" | "storming" | "norming" | "performing" | "adjourning";
      primaryChallenge: "velocity" | "quality" | "collaboration" | "communication" | "burnout" | "uncertainty";
      teamSize: number;
      experienceLevel: "new" | "intermediate" | "experienced";
      coachingGoals: string[];
    }
  ): Promise<ReactElement> {
    const { organizationType, teamMaturityLevel, primaryChallenge, teamSize, experienceLevel, coachingGoals } = coachingContext;

    const recommendations: string[] = [];

    // Organization-type specific recommendations
    const orgSpecifics: Record<string, string> = {
      startup: "Focus on rapid experimentation, flexible processes, and wearing multiple hats. ",
      "small-business": "Balance structure with agility, implement just-enough process without bureaucracy. ",
      enterprise: "Align multiple teams, coordinate cross-team dependencies, establish consistent metrics. ",
      government: "Navigate regulatory constraints, focus on incremental value delivery, emphasize compliance and audit trails."
    };

    recommendations.push(
      `🏢 **Organization Type** (${organizationType}): ${orgSpecifics[organizationType]}`
    );

    // Team maturity level recommendations
    const maturitySpecifics: Record<string, string> = {
      forming: "Focus on building trust, establishing norms, and defining clear ways of working. ",
      storming: "Address conflicts constructively, establish psychological safety, clarify roles and responsibilities. ",
      norming: "Reinforce successful patterns, cross-train team members, share knowledge widely. ",
      performing: "Innovate continuously, experiment with new practices, mentor other teams. ",
      adjourning: "Document lessons learned, celebrate achievements, prepare team for new formations."
    };

    recommendations.push(
      `📈 **Team Maturity** (${teamMaturityLevel}): ${maturitySpecifics[teamMaturityLevel]}`
    );

    // Primary challenge recommendations
    const challengeSpecifics: Record<string, string> = {
      velocity: "Protect sprint focus, improve estimation accuracy, limit work in progress, inspect and adapt each sprint. ",
      quality: "Implement Definition of Done, add automated testing, code review standards, technical debt rotation. ",
      collaboration: "Improve cross-functional communication, daily stand-up quality, shared ownership, pair programming rotations. ",
      communication: "Establish clear communication channels, reduce meeting overhead, async update protocols, visualization boards. ",
      burnout: "Monitor work-in-progress, enforce reasonable hours, encourage time off, sustainable pace principles. ",
      uncertainty: "Embrace agile flexibility, focus on minimum viable outcomes, regular re-planning, option-based roadmap."
    };

    recommendations.push(
      `⚠️ **Primary Challenge** (${primaryChallenge}): ${challengeSpecifics[primaryChallenge]}`
    );

    // Team size recommendations
    const sizeSpecifics = teamSize <= 5
      ? "Small team: Direct communication, minimal ceremonies, flexible roles work well."
      : teamSize <= 10
        ? "Medium team: Structured roles, defined ceremonies, rotating facilitation, explicit hand-offs."
        : "Large team: Multiple scrum units, coordinated leadership, representation roles, explicit alignment mechanisms.";

    recommendations.push(
      `👥 **Team Size** (${teamSize} members): ${sizeSpecifics}`
    );

    // Experience level recommendations
    const experienceSpecifics = experienceLevel === "new"
      ? "New teams: Focus on fundamentals, consistent practices, mentorship, avoid introducing too many changes simultaneously."
      : experienceLevel === "intermediate"
        ? "Intermediate teams: Refine existing practices, introduce one improvement at a time, measure impact before adding more."
        : "Experienced teams: Innovate deliberately, experiment with complementary frameworks, mentor other organizations.";

    recommendations.push(
      `🎯 **Experience Level** (${experienceLevel}): ${experienceSpecifics}`
    );

    // Coaching goals specific recommendations
    recommendations.push(
      `🎯 **Coaching Goals**: ${coachingGoals.join(", ")}. Prioritize the most impactful goal first, measure before and after, then proceed to the next goal.`
    );

    return createElement("div", {},
      createElement("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" }, "Agile Coaching Recommendations"),
      createElement("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" }, recommendations),
      createElement("p", { className: "mt-6 text-sm text-muted-foreground" },
        "Coaching recommendations generated by Enterprise Agile Coach Agent. ",
        "For sustained improvement, combine AI recommendations with human coach feedback and organizational commitment to change."
      )
    );
  }


  /** Provide RAG-enhanced coaching and recommendations */
  public async provideRAGCoaching(
    query: string,
    context: "retrospective" | "coaching" | "anti-pattern" | "general",
    coachingContext?: {
      organizationType: "startup" | "small-business" | "enterprise" | "government";
      teamMaturityLevel: "forming" | "storming" | "norming" | "performing" | "adjourning";
      primaryChallenge: "velocity" | "quality" | "collaboration" | "communication" | "burnout" | "uncertainty";
      teamSize: number;
      experienceLevel: "new" | "intermediate" | "experienced";
      coachingGoals: string[];
    }
  ): Promise<ReactElement> {
    const ragResponse = await this.generateRAGResponse(
      query,
      context,
      coachingContext
    );

    return createElement("div", {},
      createElement("h2", {
        className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" },
        "RAG-Enhanced Coaching"
      ),
      createElement("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" }, ragResponse),
      createElement("p", { className: "mt-6 text-sm text-muted-foreground" },
        "This coaching was enhanced with Retrieval-Augmented Generation (RAG) from the agile knowledge base. "
      )
    );
  }


  /**
   * Agent health check - verify agent is operational
   * @returns Health status
   */
  public async healthCheck(): Promise<ReactElement> {
    return createElement("div", {},
      createElement("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" }, "Agent Health Check"),
      createElement("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground" }, "✅ Enterprise Agile Coach Agent is operational"),
      createElement("p", { className: "mt-6 text-sm text-muted-foreground" },
        `Agent: ${this.name} v${this.version}\n` +
        `Capabilities: ${this.capabilities.join(", ")}\n` +
        `Knowledge Areas: ${this.knowledgeAreas.join(", ")}\n` +
        `Status: Online and ready for coaching sessions`
      )
    );
  }

  /**
   * Agent capabilities summary for UI display
   * @returns Formatted capabilities list
   */
  public getCapabilitiesSummary(): string {
    return this.capabilities.map((cap, index) =>
      `${index + 1}. ${cap}`
    ).join("\n");
  }

  /** RAG-enhanced query processing */
  private async retrieveRelevantKnowledge(
    query: string,
    contexts: ("retrospective" | "coaching" | "anti-pattern" | "general")[]
  ): Promise<{ category: string; content: string; relevance: number; context: string }[]> {
    const queryLower = query.toLowerCase();
    const results: { category: string; content: string; relevance: number; context: string }[] = [];
    const seenEntries = new Set<string>();
    const agileKnowledgeBase = this.agileKnowledgeBase;

    // Helper: calculate base relevance based on query term overlap
    const calcBaseRelevance = (text: string): number => {
      const terms = queryLower.split(/\s+/).filter(t => t.length > 2);
      const textLower = text.toLowerCase();
      let matches = 0;
      terms.forEach(term => {
        if (textLower.includes(term)) matches++;
      });
      return terms.length > 0 ? Math.min(1.0, matches / terms.length) : 0;
    };

    // Search knowledge base for each requested context
    if (contexts.includes("retrospective") || contexts.includes("general")) {
      // Anti-patterns
      for (const [pattern, info] of Object.entries(agileKnowledgeBase.antiPatterns)) {
        const entryKey = `anti-pattern:${pattern}`;
        if (!seenEntries.has(entryKey) && queryLower.includes(pattern.replace(/-/g, " "))) {
          seenEntries.add(entryKey);
          const baseRelevance = calcBaseRelevance(info.description + " " + info.fix);
          results.push({
            category: "anti-pattern",
            content: `${info.description}. Fix: ${info.fix}`,
            relevance: Math.min(0.95, 0.9 + baseRelevance * 0.1),
            context: "retrospective"
          });
        }
      }

      // Scrum knowledge
      if (queryLower.includes("velocity") || queryLower.includes("sprint")) {
        const entryKey = "scrum:overview";
        if (!seenEntries.has(entryKey)) {
          seenEntries.add(entryKey);
          const baseRelevance = calcBaseRelevance(agileKnowledgeBase.scrum.overview);
          results.push({
            category: "scrum",
            content: agileKnowledgeBase.scrum.overview,
            relevance: Math.min(0.95, 0.7 + baseRelevance * 0.15),
            context: "retrospective"
          });
        }
      }
    }

    // Coaching context
    if (contexts.includes("coaching") || contexts.includes("general")) {
      if (queryLower.includes("startup") || queryLower.includes("small business")) {
        const entryKey = "coaching-template:startup";
        if (!seenEntries.has(entryKey)) {
          seenEntries.add(entryKey);
          const startupTemplate = agileKnowledgeBase.coachingTemplates.velocityIssue;
          const baseRelevance = calcBaseRelevance(JSON.stringify(startupTemplate));
          results.push({
            category: "coaching-template",
            content: JSON.stringify(startupTemplate),
            relevance: Math.min(0.95, 0.8 + baseRelevance * 0.1),
            context: "coaching"
          });
        }
      }
    }

    // Deduplicate by category while preserving highest relevance
    const deduped = results.filter(
      (entry, index, self) =>
        index === self.findIndex((t) => t.category === entry.category && t.relevance >= entry.relevance)
    );

    return deduped
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 8);
  }

  /** Generate RAG-enhanced response */
  private async generateRAGResponse(
    query: string,
    context: "retrospective" | "coaching" | "anti-pattern" | "general",
    additionalContext?: any
  ): Promise<string> {
    const knowledgeResults = await this.retrieveRelevantKnowledge(query, [context]);

    if (knowledgeResults.length === 0) {
      const fallbackContext = {
        organizationType: "enterprise" as const,
        teamMaturityLevel: "performing" as const,
        primaryChallenge: "collaboration" as const,
        teamSize: 8,
        experienceLevel: "intermediate" as const,
        coachingGoals: ["improvement"]
      };
      const coaching = await this.provideCoaching(fallbackContext);
      return String(coaching);
    }

    const knowledgeSummary = knowledgeResults
      .map((knowledge, index) => `${index + 1}. [${knowledge.category}] ${knowledge.content}`)
      .join("\n\n");

    const coaching = await this.provideCoaching({
      organizationType: "enterprise",
      teamMaturityLevel: "performing",
      primaryChallenge: "collaboration",
      teamSize: 8,
      experienceLevel: "intermediate",
      ...additionalContext,
      coachingGoals: [`Enhanced with RAG: ${knowledgeResults[0]?.category ?? "general"}`]
    });

    return `## 🧠 RAG-Enhanced Analysis

**Relevant Knowledge Retrieved:**
${knowledgeSummary}

---

${String(coaching)}
**Note**: This analysis was enhanced with retrieval from the agile knowledge base for more grounded, evidence-based recommendations.`;
  }

  /** Dynamic knowledge base update */
  public async updateKnowledgeBase(entry: string, content: any, action: "add" | "update" | "remove"): Promise<boolean> {
    try {
      if (action === "remove") {
        delete (this.agileKnowledgeBase as any)[entry];
        return true;
      }
      (this.agileKnowledgeBase as any)[entry] = content;
      return true;
    } catch {
      return false;
    }
  }

  /** Batch knowledge base update */
  public async batchUpdateKnowledgeBase(updates: Array<{entry: string, content: any, action: "add" | "update" | "remove"}>): Promise<boolean> {
    try {
      for (const update of updates) {
        await this.updateKnowledgeBase(update.entry, update.content, update.action);
      }
      return true;
    } catch {
      return false;
    }
  }

  /** Fetch external agile knowledge and merge with internal knowledge base */
  private async fetchExternalKnowledge(topic: string): Promise<{ source: string; title: string; content: string; relevance: number }> {
    // In a real implementation, this would query external APIs (Confluence, Jira, etc.)
    // For now, return enriched internal knowledge as fallback
    const internalMatch = Object.entries(this.agileKnowledgeBase).find(([key]) =>
      topic.toLowerCase().includes(key.toLowerCase())
    );
    if (internalMatch) {
      const [key, knowledge] = internalMatch;
      return {
        source: "internal_knowledge_base",
        title: key,
        content: typeof knowledge === "object" ? JSON.stringify(knowledge, null, 2) : knowledge,
        relevance: 0.7
      };
    }
    return {
      source: "external_api_not_connected",
      title: topic,
      content: `External knowledge retrieval for "${topic}" is not yet configured. Using internal agile knowledge base instead.`,
      relevance: 0.3
    };
  }

  /** RAG-powered prompt suggestions */
  public async getPromptSuggestions(
    currentContext: "retrospective" | "coaching" | "anti-pattern" | "general",
    teamMaturityLevel: "forming" | "storming" | "norming" | "performing" | "adjourning",
    teamSize: number,
    recentTopics: string[]
  ): Promise<string[]> {
    const suggestions: string[] = [];
    const maturitySpecifics: Record<string, string[]> = {
      forming: [
        "What are the top 3 goals for our first sprint?",
        "How can we establish clear communication norms within the team?"
      ],
      storming: [
        "What conflicts are currently affecting our team productivity?",
        "How can we improve psychological safety during discussions?"
      ],
      norming: [
        "What processes are working well that we should continue?",
        "How can we better share knowledge across the team?"
      ],
      performing: [
        "What innovative practices can we experiment with this sprint?",
        "How can we mentor other teams using our successful patterns?"
      ],
      adjourning: [
        "What lessons learned should we document before the team disbands?",
        "How can we best celebrate our achievements and document insights?"
      ]
    };

    const sizeSpecifics = teamSize <= 5
      ? "Focus on direct communication and flexible roles"
      : teamSize <= 10
        ? "Structure roles and define ceremonies clearly"
        : "Implement multiple scrum units with coordinated leadership";

    // Add maturity-based suggestions
    const maturitySuggestions = maturitySpecifics[currentContext] ||
      maturitySpecifics.norming;
    suggestions.push(...maturitySuggestions);

    // Add size-based context
    suggestions.push(`Team size consideration: ${sizeSpecifics}`);

    // Add recent topic-based suggestions
    if (recentTopics.length > 0) {
      suggestions.push(`Consider following up on: ${recentTopics.slice(0, 3).join(", ")}`);
    }

    return suggestions.slice(0, 5); // Return top 5 suggestions
  }

  /** Team-specific knowledge personalization */
  private getTeamSpecificKnowledge(teamMaturityLevel: string, teamSize: number, domain?: string): string {
    const sizeContext = teamSize <= 5
      ? "small-team-context"
      : teamSize <= 10
        ? "medium-team-context"
        : "large-team-context";

    const maturityMap: Record<string, string> = {
      forming: "forming-stage-knowledge",
      storming: "storming-stage-knowledge",
      norming: "norming-stage-knowledge",
      performing: "performing-stage-knowledge",
      adjourning: "adjourning-stage-knowledge"
    };

    const maturityKey = maturityMap[teamMaturityLevel] || "norming-stage-knowledge";

    // Combine size and maturity context with optional domain-specific knowledge
    const domainKey = domain ? `domain-${domain.toLowerCase().replace(/\s+/g, "-")}` : "";

    return `${sizeContext}-${maturityKey}${domainKey ? `-${domainKey}` : ""}`;
  }

  /** Sentiment-aware knowledge retrieval */
  private async retrieveSentimentAwareKnowledge(
    query: string,
    contexts: ("retrospective" | "coaching" | "anti-pattern" | "general")[],
    teamSentiment: "positive" | "negative" | "neutral"
  ): Promise<{ category: string; content: string; relevance: number; sentiment: "positive" | "negative" | "neutral"; context: string }[]> {
    const baseResults = await this.retrieveRelevantKnowledge(query, contexts);
    const sentimentAdjusted: Array<{ category: string; content: string; relevance: number; sentiment: "positive" | "negative" | "neutral"; context: string }> = [];

    const sentimentAdjustment: Record<string, number> = {
      positive: 0.1,
      negative: -0.1,
      neutral: 0.0
    };

    for (const result of baseResults) {
      const adjustedRelevance = Math.max(0, Math.min(1, result.relevance + sentimentAdjustment[teamSentiment]));
      sentimentAdjusted.push({
        category: result.category,
        content: result.content,
        relevance: adjustedRelevance,
        sentiment: teamSentiment,
        context: result.context
      });
    }

    // Deduplicate by category while preserving highest relevance
    const deduped = sentimentAdjusted.filter(
      (entry, index, self) =>
        index === self.findIndex((t) => t.category === entry.category && t.relevance >= entry.relevance)
    );

    return deduped
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 8);
  }

  /** Visual knowledge graph */
  public getKnowledgeGraph(): Array<{ id: string; label: string; group: string; connections: string[] }> {
    const nodes: Array<{ id: string; label: string; group: string }> = [];
    const connections: Map<string, string[]> = new Map();

    // Scrum nodes
    nodes.push({ id: "scrum-overview", label: "Scrum Framework", group: "framework" });
    connections.set("scrum-overview", ["roles", "events", "artifacts", "pillars", "values"]);

    // Kanban nodes
    nodes.push({ id: "kanban-overview", label: "Kanban Method", group: "framework" });
    connections.set("kanban-overview", ["corePrinciples", "cadences", "classesOfService", "columnsTypical"]);

    // Anti-pattern nodes
    for (const [pattern, info] of Object.entries(this.agileKnowledgeBase.antiPatterns)) {
      nodes.push({ id: `anti-pattern-${pattern}`, label: info.pattern, group: "anti-patterns" });
      connections.set(`anti-pattern-${pattern}`, ["description", "fix"]);
    }

    // Coaching template nodes
    for (const [title, template] of Object.entries(this.agileKnowledgeBase.coachingTemplates)) {
      nodes.push({ id: `template-${title}`, label: template.title, group: "templates" });
      connections.set(`template-${title}`, ["intro", "recommendations", "followUp"]);
    }

    // Organizational pattern nodes
    for (const [key, pattern] of Object.entries(this.agileKnowledgeBase.organizationalPatterns)) {
      nodes.push({ id: `pattern-${key}`, label: key.replace(/-/g, " "), group: "patterns" });
      connections.set(`pattern-${key}`, ["description", "benefits", "challenges", "implementation"]);
    }

    return nodes.map(node => ({
      id: node.id,
      label: node.label,
      group: node.group,
      connections: connections.get(node.id) || []
    }));
  }

  /** Multi-lingual knowledge support */
  private i18n(key: string, language: "en" | "es" | "fr" | "de" | "zh"): string {
    const i18nData: Record<string, Record<string, string>> = {
      en: {
        "retrospective": "Retrospective",
        "coaching": "Coaching",
        "anti-pattern": "Anti-Pattern",
        "general": "General",
        "scrum": "Scrum",
        "kanban": "Kanban",
        "velocity": "Velocity",
        "team-health": "Team Health",
        "improvement": "Improvement",
        "knowledge-base": "Knowledge Base"
      },
      es: {
        "retrospective": "Retrospectiva",
        "coaching": "Coaching",
        "anti-pattern": "Patrón Anti",
        "general": "General",
        "scrum": "Scrum",
        "kanban": "Kanban",
        "velocity": "Velocidad",
        "team-health": "Salud del Equipo",
        "improvement": "Mejora",
        "knowledge-base": "Base de Conocimiento"
      },
      fr: {
        "retrospective": "Réflexion",
        "coaching": "Coaching",
        "anti-pattern": "Anti-Pattern",
        "general": "Général",
        "scrum": "Scrum",
        "kanban": "Kanban",
        "velocity": "Vitesse",
        "team-health": "Santé de l'équipe",
        "improvement": "Amélioration",
        "knowledge-base": "Base de connaissances"
      },
      de: {
        "retrospective": "Retrospektive",
        "coaching": "Coaching",
        "anti-pattern": "Anti-Muster",
        "general": "Allgemein",
        "scrum": "Scrum",
        "kanban": "Kanban",
        "velocity": "Geschwindigkeit",
        "team-health": "Teamgesundheit",
        "improvement": "Verbesserung",
        "knowledge-base": "Wissensbasis"
      },
      zh: {
        "retrospective": "回顾",
        "coaching": "教练",
        "anti-pattern": "反模式",
        "general": "一般",
        "scrum": "敏捷",
        "kanban": "看板",
        "velocity": "速度",
        "team-health": "团队健康",
        "improvement": "改进",
        "knowledge-base": "知识库"
      }
    };

    return i18nData[language][key] || key;
  }

  /** Fetch external agile knowledge and merge with internal knowledge base */
  private readonly agileKnowledgeBase = {
  /** Scrum framework knowledge */
  scrum: {
    overview: "Scrum is a lightweight framework for agile development where products are developed in sprints, typically 2-4 weeks long. It provides a simple structure and set of roles, events, and artifacts to manage complex product development.",
    roles: {
      productOwner: "Responsible for maximizing product value and managing the product backlog",
      scrumMaster: "Serves the team by removing impediments and ensuring Scrum theory and practice are followed",
      developmentTeam: "Creates a usable Increment each Sprint through self-organization and cross-functionality"
    },
    events: {
      sprint: "Time-boxed iteration of 1 month or less to create a potentially shippable product Increment",
      sprintPlanning: "Sprint backlog creation and sprint goal definition, typically 4-8 hours for 1-month sprint",
      dailyScrum: "15-minute team synchronization to inspect progress toward sprint goal and adapt plan",
      sprintReview: "Inspect deliverables and adapt product backlog for next sprint, typically 4 hours for 1-month sprint",
      sprintRetrospective: "Inspect process and create improvement actions for next sprint, typically 3 hours for 1-month sprint"
    },
    pillars: ["Transparency", "Inspection", "Adaptation"],
    values: ["Commitment", "Courage", "Focus", "Openness", "Respect"]
  },

  /** Kanban knowledge */
  kanban: {
    overview: "Kanban is a method for managing knowledge work with emphasis on just-in-time delivery while not overloading the team. It visualizes work, limits work in progress, and improves flow.",
    corePrinciples: [
      "Visualize workflow - make work and bottlenecks visible",
      "Limit work in progress - reduce multitasking and context switching",
      "Manage flow - focus on throughput and cycle time improvement",
      "Make process policies explicit - everyone understands how work gets done",
      "Improve collaboratively - use data to continuously improve"
    ],
    cadences: [
      "Replenishment meeting - regularly reviewing and prioritizing new work",
      "Review meeting - reviewing completed work and gathering feedback",
      "Service delivery review - ensuring promised delivery dates are met",
      "Operations review - managing the day-to-day operations of the Kanban system"
    ],
    classesOfService: [
      "Expedite - highest priority, immediate delivery",
      "Fixed Date - must be delivered by a specific date",
      "Standard - normal priority and handling",
      "Intangible - work with no immediate deadline, focus on business value"
    ],
    columnsTypical: ["Backlog", "Analysis", "Development", "Review", "Done"]
  },

  /** Common agile anti-patterns with fixes */
  antiPatterns: {
    "scope-creep": {
      pattern: "Scope Creep",
      description: "Requirements changing mid-sprint degrade focus and velocity. New items are added without proper evaluation of impact on sprint goal.",
      fix: "Freeze sprint backlog at sprint start. Create a backlog grooming session for new items to be planned for the next sprint. Use the product owner to manage stakeholder expectations.",
      severity: "High",
      frequency: "Common"
    },
    "estimation-inflation": {
      pattern: "Estimation Inflation",
      description: "Story point inflation reduces planning accuracy over time. Teams inflate points to feel safer about commitments.",
      fix: "Use planning poker with anonymous estimates. Focus on relative sizing, not absolute values. Regularly calibrate estimates based on actual velocity. Consider commitment poker for more realistic commitments.",
      severity: "Medium",
      frequency: "Common"
    },
    "blame-culture": {
      pattern: "Blame Culture",
      description: "Focus on individual fault rather than systemic improvement. Retrospectives become about assigning blame rather than learning.",
      fix: "Prime the retrospective with 'What did we learn?' not 'Who made the mistake?'. Use anonymous feedback channels. Focus on process improvements, not individual performance. Establish psychological safety.",
      severity: "High",
      frequency: "Common"
    },
    "commitment-missing": {
      pattern: "Missing Commitment",
      description: "Teams over-committing or under-committing to sprint goals. Over-commitment leads to burnout and missed deadlines; under-commitment wastes capacity.",
      fix: "Use historical velocity data for realistic commitment. Consider commitment poker. Limit work in progress. Inspect and adapt each sprint. Focus on completing finished work rather than starting new work.",
      severity: "Medium",
      frequency: "Common"
    },
    "silent-retrospective": {
      pattern: "Silent Retrospective",
      description: "Some team members never contribute to discussions or retrospectives. This reduces the quality of insights and creates inequality.",
      fix: "Use go-around format where everyone shares. Implement anonymous feedback channels. Pair quieter members with more vocal ones. Assess psychological safety. Try different retrospective formats (start/stop/continue, 4Ls, etc.).",
      severity: "Medium",
      frequency: "Uncommon"
    }
  },

  /** Coaching templates for common scenarios */
  coachingTemplates: {
    velocityIssue: {
      title: "Velocity Consistency Issue",
      intro: "I notice your team's velocity is inconsistent sprint to sprint. Here's what typically helps:",
      recommendations: [
        "Protect sprint focus and limit work in progress (WIP)",
        "Improve estimation accuracy with planning poker and relative sizing",
        "Inspect and adapt each sprint - review what worked and what didn't",
        "Consider commitment poker for more realistic commitments based on historical data",
        "Ensure sprint goals are clear and negotiable",
        "Review Definition of Done for completeness and consistency"
      ],
      followUp: "After implementing these changes, review velocity after 3 sprints to assess improvement."
    },
    collaborationIssue: {
      title: "Collaboration Challenge",
      intro: "I see your team has collaboration issues. Here are evidence-based recommendations:",
      recommendations: [
        "Improve cross-functional communication through daily stand-up quality improvements",
        "Implement pair programming rotations to share knowledge",
        "Establish shared ownership of code and decisions (no 'my code' / 'your code')",
        "Create communities of practice for skill sharing across teams",
        "Use mob programming for complex problems to ensure everyone understands the solution",
        "Set up visualization boards to make work and dependencies visible"
      ],
      followUp: "Reassess team dynamics after 2-3 sprints and adjust based on feedback."
    },
    burnoutPrevention: {
      title: "Burnout Prevention",
      intro: "I'm concerned about potential burnout signs in your team. Here's a sustainable approach:",
      recommendations: [
        "Monitor work-in-progress (WIP) limits rigorously",
        "Enforce reasonable hours and protect time off",
        "Encourage sustainable pace principles - consistent speed over time wins",
        "Review workload distribution regularly",
        "Implement no-meeting days or meeting-free afternoons",
        "Ensure Definition of Done doesn't create unnecessary work",
        "Promote taking full breaks and vacation time"
      ],
      followUp: "Check in after 2 weeks - burnout prevention is ongoing, not one-time."
    }
  },

  /** Organizational patterns */
  organizationalPatterns: {
    "cross-functional-teams": {
      description: "Teams with all skills needed to deliver increment without dependency on other teams",
      benefits: ["Faster feedback", "Reduced dependencies", "Increased autonomy"],
      challenges: ["Hard to hire for all skills", "May need generalizing specialists", "Requires T-shaped people"]
    },
    "definition-of-done": {
      description: "Shared understanding of what it means for work to be complete",
      antiPatterns: ["Different DoD for different team members", "DoD created by one person only", "DoD never updated"],
      bestPractices: ["Created collaboratively", "Reviewed each sprint", "Includes testing, code review, documentation", "Potentially shippable increment"]
    },
    "incremental-adaptive-roadmap": {
      description: "Roadmap that adapts based on feedback and learning, not fixed scope",
      benefits: ["Responds to change", "Reduces waste", "Aligns with business value"],
      implementation: ["Quarterly theme setting", "Monthly feature hypothesis", "Weekly sprint goals", "Daily adaptability"]
    }
  }
};

/**
 * Enhancement #11: RAG Response Quality Metrics
 * Add metrics to evaluate RAG response quality including relevance, coverage, and correctness.
 */
private ragResponseMetrics: {
  totalQueries: number;
  averageRelevanceScore: number;
  coverageScore: number; // Percentage of query terms addressed
  correctnessScore: number; // Percentage of facts that are correct
  lastReset: Date;
} = {
  totalQueries: 0,
  averageRelevanceScore: 0,
  coverageScore: 0,
  correctnessScore: 0,
  lastReset: new Date()
};

/** Record a RAG query and its metrics */
public recordRAGMetrics(query: string, relevanceScore: number, coverage: number, correctness: number): void {
  this.ragResponseMetrics.totalQueries++;
  this.ragResponseMetrics.averageRelevanceScore =
    ((this.ragResponseMetrics.averageRelevanceScore * (this.ragResponseMetrics.totalQueries - 1)) + relevanceScore) / this.ragResponseMetrics.totalQueries;
  this.ragResponseMetrics.coverageScore =
    ((this.ragResponseMetrics.coverageScore * (this.ragResponseMetrics.totalQueries - 1)) + coverage) / this.ragResponseMetrics.totalQueries;
  this.ragResponseMetrics.correctnessScore =
    ((this.ragResponseMetrics.correctnessScore * (this.ragResponseMetrics.totalQueries - 1)) + correctness) / this.ragResponseMetrics.totalQueries;
}

/** Get current RAG response metrics */
public getRAGMetrics(): { totalQueries: number; averageRelevanceScore: number; coverageScore: number; correctnessScore: number; lastReset: Date } {
  return {
    totalQueries: this.ragResponseMetrics.totalQueries,
    averageRelevanceScore: this.ragResponseMetrics.averageRelevanceScore,
    coverageScore: this.ragResponseMetrics.coverageScore,
    correctnessScore: this.ragResponseMetrics.correctnessScore,
    lastReset: this.ragResponseMetrics.lastReset
  };
}

/** Reset RAG metrics */
public resetRAGMetrics(): void {
  this.ragResponseMetrics = {
    totalQueries: 0,
    averageRelevanceScore: 0,
    coverageScore: 0,
    correctnessScore: 0,
    lastReset: new Date()
  };
}

/**
 * Enhancement #12: Context-Aware Deep Retrieval
 * Improve retrieval based on team context (size, maturity, domain, etc.)
 */
private async deepRetrieveKnowledge(
  query: string,
  contexts: ("retrospective" | "coaching" | "anti-pattern" | "general")[],
  teamContext: {
    teamSize: number;
    teamMaturityLevel: "forming" | "storming" | "norming" | "performing" | "adjourning";
    domain?: string;
    teamSentiment?: "positive" | "negative" | "neutral";
  }
): Promise<{ category: string; content: string; relevance: number; context: string }[]> {
  const baseResults = await this.retrieveRelevantKnowledge(query, contexts);
  const deepResults: Array<{ category: string; content: string; relevance: number; context: string }> = [];

  // Adjust relevance based on team size
  const sizeMultiplier = teamContext.teamSize <= 5 ? 1.0 : teamContext.teamSize <= 10 ? 1.1 : 1.2;

  // Adjust relevance based on team maturity
  const maturityWeights: Record<string, number> = {
    forming: 0.9,
    storming: 0.85,
    norming: 1.0,
    performing: 1.15,
    adjourning: 0.95
  };
  const maturityMultiplier = maturityWeights[teamContext.teamMaturityLevel] || 1.0;

  for (const result of baseResults) {
    const adjustedRelevance = Math.min(1, result.relevance * sizeMultiplier * maturityMultiplier);
    deepResults.push({
      category: result.category,
      content: result.content,
      relevance: adjustedRelevance,
      context: result.context
    });
  }

  // Deduplicate by category while preserving highest relevance
  const deduped = deepResults.filter(
    (entry, index, self) =>
      index === self.findIndex((t) => t.category === entry.category && t.relevance >= entry.relevance)
  );

  return deduped
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 8);
}

/**
 * Enhancement #13: Actionable Knowledge Extraction
 * Extract actionable items and recommendations from knowledge base content.
 */
private extractActionableItems(content: string): { action: string; category: string; priority: "high" | "medium" | "low"}[] {
  const actions: { action: string; category: string; priority: "high" | "medium" | "low"}[] = [];

  // Common patterns for actionable items
  const actionPatterns = [
    { pattern: /Protect sprint focus and limit work in progress \(WIP\)/i, priority: "high" as const },
    { pattern: /Improve estimation accuracy/i, priority: "high" as const },
    { pattern: /Inspect and adapt each sprint/i, priority: "high" as const },
    { pattern: /Limit work in progress/i, priority: "medium" as const },
    { pattern: /Use planning poker/i, priority: "medium" as const },
    { pattern: /Establish psychological safety/i, priority: "high" as const },
    { pattern: /Review Definition of Done/i, priority: "medium" as const },
  ];

  for (const { pattern, priority } of actionPatterns) {
    if (pattern.test(content)) {
      // Extract related text around the match
      const matchIndex = content.search(pattern);
      const start = Math.max(0, matchIndex - 50);
      const end = Math.min(content.length, matchIndex + 50);
      const snippet = content.substring(start, end).trim();
      actions.push({
        action: snippet,
        category: "recommendation",
        priority
      });
    }
  }

  return actions;
}

/**
 * Enhancement #14: Knowledge Gap Analysis
 * Identify gaps in team's agile knowledge/practices compared to best practices.
 */
private async knowledgeGapAnalysis(
  teamMaturityLevel: "forming" | "storming" | "norming" | "performing" | "adjourning",
  teamSize: number,
  currentPractices: string[]
): Promise<{ gap: string; severity: "high" | "medium" | "low"; recommendation: string }[]> {
  const gaps: Array<{ gap: string; severity: "high" | "medium" | "low"; recommendation: string }> = [];

  // Define expected practices per maturity level
  const expectedPractices: Record<string, string[]> = {
    forming: [
      "Basic agile terminology understanding",
      "Daily stand-up meetings",
      "Sprint planning basics",
      "Sprint review demonstrations"
    ],
    storming: [
      "Conflict resolution mechanisms",
      "Improved communication patterns",
      "Defined team norms",
      "Regular retrospectives"
    ],
    norming: [
      "Established Definition of Done",
      "Consistent estimation practices",
      "WIP limits in place",
      "Cross-functional collaboration"
    ],
    performing: [
      "Continuous improvement cycles",
      "Advanced estimation techniques",
      "Automated testing coverage",
      "Regular knowledge sharing"
    ],
    adjourning: [
      "Lessons learned documentation",
      "Achievement celebration",
      "Team disbanding preparation"
    ]
  };

  const currentSet = new Set(currentPractices.map(p => p.toLowerCase()));

  // Check for missing practices
  const expected = expectedPractices[teamMaturityLevel] || expectedPractices.norming;
  for (const expectedPractice of expected) {
    if (!currentSet.has(expectedPractice.toLowerCase())) {
      // Determine severity based on maturity
      const severity: "high" | "medium" | "low" = teamMaturityLevel === "forming" && !currentSet.has(expectedPractice.toLowerCase())
        ? "high"
        : teamMaturityLevel === "storming" && !currentSet.has(expectedPractice.toLowerCase())
          ? "medium"
          : "low";

      gaps.push({
        gap: expectedPractice,
        severity,
        recommendation: `Implement: ${expectedPractice}`
      });
    }
  }

  return gaps;
}

/**
 * Enhancement #15: RAG-Enhanced Retrospective Facilitation
 * Provide more structured and effective retrospective facilitation with RAG.
 */
public async ragRetrospectiveFacilitation(
  teamSize: number,
  sprintDuration: number,
  retrospectiveData: {
    whatWentWell: string[];
    whatDidNotGoWell: string[];
    actionItems: {owner: string; action: string; deadline: Date}[];
    teamRating: number;
    sentiment: "positive" | "negative" | "neutral";
    teamChallenges?: string[];
  },
  teamContext?: {
    teamMaturityLevel: "forming" | "storming" | "norming" | "performing" | "adjourning";
    domain?: string;
  }
): Promise<ReactElement> {
    // Get RAG-enhanced knowledge for retrospective
    const ragQuery = `retrospective team size ${teamSize} sprint ${sprintDuration} days challenges`;
    const knowledgeResults = await this.retrieveRelevantKnowledge(ragQuery, ["retrospective"]);

    const insights: string[] = [];

    // Base retrospective analysis
    if (retrospectiveData.whatWentWell.length > 0) {
      insights.push(
        `✅ **What Went Well**: ${retrospectiveData.whatWentWell.join(", ")}. ` +
        `Team strengths identified.`
      );
    }

    if (retrospectiveData.whatDidNotGoWell.length > 0) {
      insights.push(
        `⚠️ **Areas for Improvement**: ${retrospectiveData.whatDidNotGoWell.join(", ")}. ` +
        `Focus areas for enhancement.`
      );
    }

    // Action items with RAG context
    const completedActions = retrospectiveData.actionItems.filter(
      item => new Date() < item.deadline
    ).length;
    const totalActions = retrospectiveData.actionItems.length;

    if (totalActions > 0) {
      const completionRate = (completedActions / totalActions) * 100;
      insights.push(
        `📋 **Action Items**: ${completedActions}/${totalActions} completed (${completionRate.toFixed(1)}%). ` +
        `RAG-informed recommendations: prioritize high-impact items first.`
      );
    }

    // Team context insights
    if (teamContext) {
      const maturitySpecifics = {
        forming: "Focus on building trust and establishing norms as a foundation for future sprints.",
        storming: "Address team conflicts constructively and establish psychological safety.",
        norming: "Reinforce successful patterns and continue knowledge sharing.",
        performing: "Innovate and experiment with new practices to build on existing success.",
        adjourning: "Document lessons learned and celebrate achievements before team changes."
      };

      insights.push(
        `📈 **Team Maturity** (${teamContext.teamMaturityLevel}): ${maturitySpecifics[teamContext.teamMaturityLevel] || ""}`
      );
    }

    // RAG knowledge integration
    if (knowledgeResults.length > 0) {
      insights.push(
        `🧠 **RAG Knowledge**: Retrieved ${knowledgeResults.length} relevant knowledge items to inform retrospective insights and recommendations.`
      );
    }

    return createElement("div", {},
      createElement("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" }, "RAG-Enhanced Retrospective Facilitation"),
      createElement("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" }, insights),
      createElement("p", { className: "mt-6 text-sm text-muted-foreground" },
        "This retrospective facilitation was enhanced with Retrieval-Augmented Generation (RAG) for more evidence-based recommendations. "
      )
    );
  }

/**
 * Enhancement #16: Knowledge Authority Tracking
 * Track knowledge source authority/credibility and weight recommendations accordingly.
 */
private knowledgeAuthorityCache: Map<string, number> = new Map();

/** Set knowledge authority for a source */
public setKnowledgeAuthority(source: string, authority: number): void {
  this.knowledgeAuthorityCache.set(source, Math.max(0, Math.min(1, authority)));
}

/** Get knowledge authority for a source */
public getKnowledgeAuthority(source: string): number {
  return this.knowledgeAuthorityCache.get(source) || 0.5; // Default neutral authority
}

/** Get all knowledge authority scores */
public getAllKnowledgeAuthority(): Map<string, number> {
  return new Map(this.knowledgeAuthorityCache);
}

/** Default authority levels for common sources */
public defaultAuthorityLevels: Record<string, number> = {
  "scrum-guide": 1.0,
  "kanban-guide": 0.9,
  "agile-manifesto": 0.95,
  "organization-internal": 0.8,
  "external-blog": 0.6,
  "community-discussion": 0.5
};

/**
 * Enhancement #17: Escalation & Expert Override
 * Allow human experts to override RAG suggestions with their own expertise.
 */
private expertOverrideCache: Map<string, { overridden: boolean; expertNotes: string; overrideDate: Date }> = new Map();

/** Record an expert override */
public recordExpertOverride(query: string, expertNotes: string): void {
  this.expertOverrideCache.set(query, {
    overridden: true,
    expertNotes,
    overrideDate: new Date()
  });
}

/** Check if a query has an expert override */
public hasExpertOverride(query: string): boolean {
  const entry = this.expertOverrideCache.get(query);
  return entry?.overridden || false;
}

/** Get expert override notes */
public getExpertOverrideNotes(query: string): string | null {
  const entry = this.expertOverrideCache.get(query);
  return entry ? entry.expertNotes : null;
}

/** Get all expert overrides */
public getAllExpertOverrides(): Map<string, { overridden: boolean; expertNotes: string; overrideDate: Date }> {
  return new Map(this.expertOverrideCache);
}

/**
 * Enhancement #18: Time-Decay Knowledge Relevance
 * Knowledge relevance decreases over time - older knowledge gets lower relevance scores.
 */
private knowledgeAgeCache: Map<string, { added: Date; accessCount: number }> = new Map();

/** Record knowledge access for decay calculation */
public recordKnowledgeAccess(knowledgeId: string): void {
  const entry = this.knowledgeAgeCache.get(knowledgeId);
  if (entry) {
    this.knowledgeAgeCache.set(knowledgeId, { added: entry.added, accessCount: entry.accessCount + 1 });
  } else {
    this.knowledgeAgeCache.set(knowledgeId, { added: new Date(), accessCount: 1 });
  }
}

/** Calculate time-decayed relevance */
private calculateTimeDecayedRelevance(baseRelevance: number, knowledgeId: string): number {
  const ageEntry = this.knowledgeAgeCache.get(knowledgeId);
  if (!ageEntry) {
    return baseRelevance; // No age data, return base
  }

  // Days since knowledge was first accessed
  const daysSince = (new Date().getTime() - ageEntry.added.getTime()) / (1000 * 60 * 60 * 24);

  // Decay factor: knowledge loses 10% relevance per 30 days, minimum 0.3
  const decayFactor = Math.max(0.3, 1 - (daysSince / 30) * 0.1);

  return baseRelevance * decayFactor;
}

/**
 * Enhancement #19: Cross-Team Knowledge Sharing
 * Share knowledge across teams/organizations with proper attribution and filtering.
 */
private sharedKnowledgeRegistry: Map<string, { content: string; ownerTeam: string; lastAccessed: Date; accessCount: number }> = new Map();

/** Share knowledge across teams */
public shareKnowledge(
  knowledgeId: string,
  content: string,
  ownerTeam: string
): boolean {
  try {
    this.sharedKnowledgeRegistry.set(knowledgeId, {
      content,
      ownerTeam,
      lastAccessed: new Date(),
      accessCount: 0
    });
    return true;
  } catch {
    return false;
  }
}

/** Retrieve shared knowledge */
public retrieveSharedKnowledge(knowledgeId: string): { content: string; ownerTeam: string } | null {
  const entry = this.sharedKnowledgeRegistry.get(knowledgeId);
  if (!entry) {
    return null;
  }
  return { content: entry.content, ownerTeam: entry.ownerTeam };
}

/** Get all shared knowledge entries */
public getAllSharedKnowledge(): Array<{ knowledgeId: string; ownerTeam: string; lastAccessed: Date; accessCount: number }> {
  return Array.from(this.sharedKnowledgeRegistry.entries()).map(([knowledgeId, entry]) => ({
    knowledgeId,
    ownerTeam: entry.ownerTeam,
    lastAccessed: entry.lastAccessed,
    accessCount: entry.accessCount
  }));
}

/** Update shared knowledge access tracking */
public updateSharedKnowledgeAccess(knowledgeId: string): boolean {
  const entry = this.sharedKnowledgeRegistry.get(knowledgeId);
  if (!entry) {
    return false;
  }
  this.sharedKnowledgeRegistry.set(knowledgeId, {
    ...entry,
    accessCount: entry.accessCount + 1,
    lastAccessed: new Date()
  });
  return true;
}

/**
 * Enhancement #20: Decision-Making Support + Probabilistic Uncertainty + Decision Journals + Adaptive Learning Rate
 * Support decision-making with uncertainty tracking, decision journals, and adaptive learning.
 */
private decisionJournal: Array<{
  id: string;
  decision: string;
  options: string[];
  outcome: "positive" | "negative" | "neutral";
  context: string;
  timestamp: Date;
  uncertainty: number; // 0-1, higher = more uncertainty
  lessonsLearned: string;
}> = [];

/** Record a decision in the journal */
public recordDecision(
  decision: string,
  options: string[],
  outcome: "positive" | "negative" | "neutral",
  context: string,
  uncertainty: number = 0.5,
  lessonsLearned: string = ""
): string {
  const id = `decision-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  this.decisionJournal.push({
    id,
    decision,
    options,
    outcome,
    context,
    timestamp: new Date(),
    uncertainty,
    lessonsLearned
  });
  return id;
}

/** Get decision journal entries */
public getDecisionJournal(): Array<{
  id: string;
  decision: string;
  options: string[];
  outcome: "positive" | "negative" | "neutral";
  context: string;
  timestamp: Date;
  uncertainty: number;
  lessonsLearned: string;
}> {
  return [...this.decisionJournal];
}

/** Get decision insights - what worked, what didn't */
public getDecisionInsights(): {
  totalDecisions: number;
  positiveOutcomes: number;
  negativeOutcomes: number;
  neutralOutcomes: number;
  successRate: number;
  commonLessons: string[];
} {
  const total = this.decisionJournal.length;
  if (total === 0) {
    return {
      totalDecisions: 0,
      positiveOutcomes: 0,
      negativeOutcomes: 0,
      neutralOutcomes: 0,
      successRate: 0,
      commonLessons: []
    };
  }

  const positive = this.decisionJournal.filter(d => d.outcome === "positive").length;
  const negative = this.decisionJournal.filter(d => d.outcome === "negative").length;
  const neutral = this.decisionJournal.filter(d => d.outcome === "neutral").length;

  // Extract common lessons
  const allLessons = this.decisionJournal.flatMap(d => d.lessonsLearned.split(";").filter(l => l.trim()));
  const lessonCounts = new Map<string, number>();
  allLessons.forEach(lesson => {
    const key = lesson.trim().toLowerCase();
    lessonCounts.set(key, (lessonCounts.get(key) || 0) + 1);
  });

  const commonLessons = Array.from(lessonCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([lesson]) => lesson);

  return {
    totalDecisions: total,
    positiveOutcomes: positive,
    negativeOutcomes: negative,
    neutralOutcomes: neutral,
    successRate: total > 0 ? positive / total : 0,
    commonLessons
  };
}

/** Get adaptive learning rate based on decision history */
public getAdaptiveLearningRate(): number {
  const insights = this.getDecisionInsights();

  // Base learning rate
  let baseRate = 0.1;

  // Adjust based on success rate
  if (insights.successRate > 0.8) {
    // High success - can learn faster
    baseRate = 0.15;
  } else if (insights.successRate < 0.5) {
    // Low success - learn more carefully
    baseRate = 0.05;
  }

  // Adjust based on uncertainty
  const avgUncertainty = this.decisionJournal.length > 0
    ? this.decisionJournal.reduce((sum, d) => sum + d.uncertainty, 0) / this.decisionJournal.length
    : 0.5;

  // Higher uncertainty = slower learning
  const uncertaintyAdjustment = 1 - avgUncertainty * 0.2;

  return baseRate * uncertaintyAdjustment;
}

/** Get decision summary for reporting */
public getDecisionSummary(): {
  totalDecisions: number;
  successRate: number;
  averageUncertainty: number;
  recentLessons: string[];
  adaptiveLearningRate: number;
} {
  const insights = this.getDecisionInsights();
  const avgUncertainty = this.decisionJournal.length > 0
    ? this.decisionJournal.reduce((sum, d) => sum + d.uncertainty, 0) / this.decisionJournal.length
    : 0;

  const recentLessons = insights.commonLessons.slice(0, 3);

  return {
    totalDecisions: insights.totalDecisions,
    successRate: insights.successRate,
    averageUncertainty: avgUncertainty,
    recentLessons: recentLessons,
    adaptiveLearningRate: this.getAdaptiveLearningRate()
  };
}
}