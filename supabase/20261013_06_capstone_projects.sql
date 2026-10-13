-- Create capstone_projects table
create table if not exists public.capstone_projects (
  id uuid not null primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  description text,
  status text default 'in_progress' check (status in ('in_progress', 'completed', 'deployed', 'archived')),
  code_url text,
  deployed_url text,
  feedback_jsonb jsonb default '{"rating": null, "comments": ""}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS policy
alter table public.capstone_projects enable row level security;

create policy "Users can read own capstone projects" on public.capstone_projects
for select using (auth.uid() = user_id);

create policy "Users can manage own capstone projects" on public.capstone_projects
for all using (auth.uid() = user_id);

create policy "Admins can manage capstone projects" on public.capstone_projects
for all using (true);

comment on table public.capstone_projects is 'Capstone project submissions for the Learn ClaudeCode course';
comment on column public.capstone_projects.id is 'Unique capstone project identifier';
comment on column public.capstone_projects.user_id is 'Foreign key to users table';
comment on column public.capstone_projects.title is 'Capstone project title';
comment on column public.capstone_projects.description is 'Capstone project description';
comment on column public.capstone_projects.status is 'Current project status (in_progress, completed, deployed, archived)';
comment on column public.capstone_projects.code_url is 'URL to the source code repository';
comment on column public.capstone_projects.deployed_url is 'URL to the deployed application';
comment on column public.capstone_projects.feedback_jsonb is 'JSONB containing user feedback (rating and comments)';
comment on column public.capstone_projects.created_at is 'Capstone project creation timestamp';
comment on column public.capstone_projects.updated_at is 'Last update timestamp';
