-- Create agent_sessions table
create table if not exists public.agent_sessions (
  id uuid not null primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  status text default 'active' check (status in ('active', 'completed', 'failed')),
  session_data jsonb default '{"agent_type": "", "task": "", "started_at": "", "completed_at": "", "duration_ms": 0, "metadata": {}}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS policy
alter table public.agent_sessions enable row level security;

create policy "Users can read own agent sessions" on public.agent_sessions
for select using (auth.uid() = user_id);

create policy "Users can create own agent sessions" on public.agent_sessions
for insert with check (auth.uid() = user_id);

create policy "Admins can manage agent sessions" on public.agent_sessions
for all using (true);

comment on table public.agent_sessions is 'Claude Code agent sessions tracking';
comment on column public.agent_sessions.id is 'Unique agent session identifier';
comment on column public.agent_sessions.user_id is 'Foreign key to users table';
comment on column public.agent_sessions.status is 'Current session status (active, completed, failed)';
comment on column public.agent_sessions.session_data is 'JSONB containing agent task details, progress, and results';
comment on column public.agent_sessions.created_at is 'Session creation timestamp';
comment on column public.agent_sessions.updated_at is 'Last update timestamp';
