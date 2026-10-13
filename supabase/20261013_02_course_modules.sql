-- Create course_modules table
create table if not exists public.course_modules (
  id uuid not null primary key default gen_random_uuid(),
  title text not null,
  description text,
  "order" integer not null default 0,
  content_jsonb jsonb default '{"overview": "", "learning_objectives": []}'::jsonb,
  snippets_jsonb jsonb default '[]'::jsonb,
  images_jsonb jsonb default '[]'::jsonb,
  is_published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS policy
alter table public.course_modules enable row level security;

create policy "Published modules are readable" on public.course_modules
for select using (is_published = true);

create policy "Admins can manage modules" on public.course_modules
for all using (true);

comment on table public.course_modules is 'Course modules for the Learn ClaudeCode tutorial course';
comment on column public.course_modules.id is 'Unique module identifier';
comment on column public.course_modules.title is 'Module title (e.g., "Module 1: ClaudeCode Fundamentals")';
comment on column public.course_modules.description is 'Module description';
comment on column public.course_modules."order" is 'Display order of modules in the course';
comment on column public.course_modules.content_jsonb is 'JSONB containing module overview and structure';
comment on column public.course_modules.snippets_jsonb is 'JSONB array of code snippets for the module';
comment on column public.course_modules.images_jsonb is 'JSONB array of image URLs for the module';
comment on column public.course_modules.is_published is 'Whether the module is published and visible to students';
comment on column public.course_modules.created_at is 'Module creation timestamp';
comment on column public.course_modules.updated_at is 'Last update timestamp';
