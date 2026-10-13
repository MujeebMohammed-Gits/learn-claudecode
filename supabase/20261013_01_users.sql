-- Create users table
create table if not exists public.users (
  id uuid not null primary key default gen_random_uuid(),
  email text not null,
  full_name text,
  avatar_url text,
  progress_jsonb jsonb default '{"completed_lessons": [], "time_spent_minutes": 0, "current_module": null, "current_lesson": null}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS policy
alter table public.users enable row level security;

create policy "Users can read own profile" on public.users
for select using (auth.uid() = id);

create policy "Users can update own profile" on public.users
for update using (auth.uid() = id);

comment on table public.users is 'User profiles for course enrollment and progress tracking';
comment on column public.users.id is 'Unique user identifier';
comment on column public.users.email is 'User email address';
comment on column public.users.full_name is 'User full name';
comment on column public.users.avatar_url is 'URL to user avatar image';
comment on column public.users.progress_jsonb is 'JSONB tracking course progress (completed lessons, time spent, current module/lesson)';
comment on column public.users.created_at is 'Account creation timestamp';
comment on column public.users.updated_at is 'Last update timestamp';
