// Agent Session API Routes for Learn ClaudeCode Course
// API routes for managing ClaudeCode agent sessions
// Supabase integration for user progress tracking

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const sessionId = searchParams.get('sessionId');
  const userId = searchParams.get('userId');

  switch (action) {
    case 'create':
      // Create new agent session
      const newSession = {
        id: `session-${Date.now()}-${Math.floor(Math.random() * 9000) + 1000}`,
        userId: userId || 'anonymous',
        status: 'active' as 'active' | 'completed' | 'failed',
        createdAt: new Date(),
        lastActivity: new Date(),
        durationMs: 0,
        sessionData: {
          currentModule: 'fundamentals',
          progressPercentage: 0,
          commandsUsed: [],
          agentsCreated: [],
        },
      };
      return new Response(
        JSON.stringify({ success: true, session: newSession }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );

    case 'update':
      // Update session progress
      if (!sessionId) {
        return new Response(
          JSON.stringify({ success: false, error: 'sessionId required' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
      return new Response(
        JSON.stringify({ success: true, message: 'Session updated' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );

    case 'list':
      // List user's agent sessions (mock data)
      const mockSessions = [
        {
          id: 'session-1',
          userId: 'user-1',
          status: 'active',
          createdAt: new Date(Date.now() - 86400000), // 1 day ago
          lastActivity: new Date(),
          durationMs: 3600000, // 1 hour
          sessionData: {
            currentModule: 'ai-agents',
            progressPercentage: 45,
            commandsUsed: ['/init', '/agents', '/hooks'],
            agentsCreated: ['my-first-agent'],
          },
        },
        {
          id: 'session-2',
          userId: 'user-1',
          status: 'completed',
          createdAt: new Date(Date.now() - 604800000), // 7 days ago
          lastActivity: new Date(Date.now() - 86400000),
          durationMs: 18000000, // 5 hours
          sessionData: {
            currentModule: 'capstone',
            progressPercentage: 100,
            commandsUsed: ['/init', '/agents', '/plugins', '/mcp'],
            agentsCreated: ['project-agent', 'data-agent'],
          },
        },
      ];
      return new Response(
        JSON.stringify({ success: true, sessions: mockSessions }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );

    default:
      return new Response(
        JSON.stringify({ success: false, error: 'Unknown action' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
  }
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  const { action, sessionId, progress, command } = body;

  switch (action) {
    case 'update-progress':
      // Update agent session progress
      return new Response(
        JSON.stringify({
          success: true,
          message: `Progress updated to ${progress}%`,
          sessionId
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );

    case 'create-session':
      // Create new agent session
      const session = {
        id: `session-${Date.now()}-${Math.floor(Math.random() * 9000) + 1000}`,
        userId: body.userId || 'anonymous',
        status: 'active',
        createdAt: new Date(),
        lastActivity: new Date(),
        durationMs: 0,
        sessionData: {
          currentModule: body.initialModule || 'fundamentals',
          progressPercentage: 0,
          commandsUsed: [],
          agentsCreated: [],
        },
      };
      return new Response(
        JSON.stringify({ success: true, session }),
        {
          status: 201,
          headers: { 'Content-Type': 'application/json' }
        }
      );

    default:
      return new Response(
        JSON.stringify({ success: false, error: 'Unknown action' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
  }
}