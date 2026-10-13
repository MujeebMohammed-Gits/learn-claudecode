-- Create user_progress table
create table if not exists public.user_progress (
  id uuid not null primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete set null,
  completed boolean default false,
  time_spent_minutes integer default 0,
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS policy
alter table public.user_progress enable row level security;

create policy "Users can read own progress" on public.user_progress
for select using (auth.uid() = user_id);

create policy "Users can update own progress" on public.user_progress
for update using (auth.uid() = user_id);

create policy "Admins can manage progress" on public.user_progress
for all using (true);

comment on table public.user_progress is 'User progress tracking for course lessons';
comment on column public.user_progress.id is 'Unique progress record identifier';
comment on column public.user_progress.user_id is 'Foreign key to users table';
comment on column public.user_progress.lesson_id is 'Foreign key to lessons table';
comment on column public.user_progress.completed is 'Whether the lesson has been completed';
comment on column public.user_progress.time_spent_minutes is 'Total time spent on lesson (minutes)';
comment on column public.user_progress.started_at is 'When the user started the lesson';
comment on column public.user_progress.completed_at is 'When the user completed the lesson';
comment on column public.user_progress.created_at is 'Progress record creation timestamp';
comment on column public.user_progress.updated_at is 'Last update timestamp';
