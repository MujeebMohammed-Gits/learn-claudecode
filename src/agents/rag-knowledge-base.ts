/** Agile Knowledge Base for RAG - Enterprise Agile Coach Agent */
export const agileKnowledgeBase = {
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
    artifacts: {
      productBacklog: "Ordered list of product requirements (PBs) with descriptions, ordering by value, risk, and effort",
      sprintBacklog: "Sprint goal + selected PBs + plan for delivering increment",
      increment: "Sum of all completed product backlog items from the current sprint and all previous sprints"
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