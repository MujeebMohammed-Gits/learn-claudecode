// ClaudeCode Learning Assistant Agent - simplified version
// Production-ready Agent for the tutorial course

export class LearningAssistantAgent {
  name = 'claude-code-learning-assistant';
  version = '1.0.0';

  async processRequest(input: string): Promise<string> {
    const lower = input.toLowerCase().trim();

    if (lower.includes('/init') || lower.includes('start project')) {
      return '## Welcome to ClaudeCode Fundamentals 🌟\\n\\nUse /init to begin your first project. No terminal experience required!';
    }

    if (lower.includes('/agents') || lower.includes('create agent')) {
      return '## Building AI Agents 🤠\\n\\nLearn agent architecture and production-ready patterns in Module 2 of the tutorial course.';
    }

    return 'I can help you learn ClaudeCode fundamentals, AI Agents, Sub-agents, Advanced Features, or the Capstone Project journey. What would you like to explore?';
  }
}