-- Create ml_models table
create table if not exists public.ml_models (
  id uuid not null primary key default gen_random_uuid(),
  name text not null,
  version text not null,
  description text,
  status text default 'pending' check (status in ('pending', 'training', 'ready', 'deprecated')),
  trained_at timestamp with time zone,
  performance_metrics jsonb default '{"accuracy": 0, "loss": 0, "f1_score": 0}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS policy
alter table public.ml_models enable row level security;

create policy "Public can read ml_models" on public.ml_models
for select using (true);

create policy "Admins can manage ml_models" on public.ml_models
for all using (true);

comment on table public.ml_models is 'Machine learning models for code analysis and assistance';
comment on column public.ml_models.id is 'Unique model identifier';
comment on column public.ml_models.name is 'Model name (e.g., "code-completion", "error-prediction")';
comment on column public.ml_models.version is 'Model version string';
comment on column public.ml_models.description is 'Description of the model\'s purpose and capabilities';
comment on column public.ml_models.status is 'Current model status (pending, training, ready, deprecated)';
comment on column public.ml_models.trained_at is 'When the model was last trained';
comment on column public.ml_models.performance_metrics is 'JSONB containing model performance metrics';
comment on column public.ml_models.created_at is 'Model creation timestamp';
comment on column public.ml_models.updated_at is 'Last update timestamp';
