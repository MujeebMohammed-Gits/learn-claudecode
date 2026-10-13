-- Create lessons table
create table if not exists public.lessons (
  id uuid not null primary key default gen_random_uuid(),
  module_id uuid not null references public.course_modules(id) on delete cascade,
  title text not null,
  description text,
  content_jsonb jsonb default '{"content": "", "key_concepts": []}'::jsonb,
  snippet_jsonb jsonb,
  image_url text,
  "order" integer not null default 0,
  is_published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS policy
alter table public.lessons enable row level security;

create policy "Published lessons are readable" on public.lessons
for select using (is_published = true);

create policy "Admins can manage lessons" on public.lessons
for all using (true);

comment on table public.lessons is 'Lessons within course modules';
comment on column public.lessons.id is 'Unique lesson identifier';
comment on column public.lessons.module_id is 'Foreign key to course_modules';
comment on column public.lessons.title is 'Lesson title';
comment on column public.lessons.description is 'Lesson description';
comment on column public.lessons.content_jsonb is 'JSONB containing lesson content and explanation';
comment on column public.lessons.snippet_jsonb is 'Code snippet associated with the lesson';
comment on column public.lessons.image_url is 'URL to lesson illustration or screenshot';
comment on column public.lessons."order" is 'Display order of lessons within a module';
comment on column public.lessons.is_published is 'Whether the lesson is published and visible to students';
comment on column public.lessons.created_at is 'Lesson creation timestamp';
comment on column public.lessons.updated_at is 'Last update timestamp';
