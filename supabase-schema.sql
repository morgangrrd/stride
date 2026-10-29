create table if not exists public.training_profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default '' check (char_length(display_name) <= 80),
  plan text check (plan in ('half', 'marathon', 'trail')),
  race_date date,
  weekly_km numeric not null default 0 check (weekly_km between 0 and 200),
  longest_run_km numeric not null default 0 check (longest_run_km between 0 and 100),
  sessions_per_week smallint not null default 4 check (sessions_per_week between 3 and 5),
  completed jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.training_profiles enable row level security;

grant select, insert, update on public.training_profiles to authenticated;

drop policy if exists "Users can read their own training profile"
  on public.training_profiles;
create policy "Users can read their own training profile"
  on public.training_profiles for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own training profile"
  on public.training_profiles;
create policy "Users can create their own training profile"
  on public.training_profiles for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own training profile"
  on public.training_profiles;
create policy "Users can update their own training profile"
  on public.training_profiles for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create table if not exists public.training_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  session_date date not null default current_date,
  session_type text not null check (session_type in ('easy', 'quality', 'long', 'trail', 'recovery')),
  distance_km numeric(6, 2) not null check (distance_km > 0 and distance_km <= 200),
  duration_minutes smallint not null check (duration_minutes between 1 and 1440),
  effort smallint not null check (effort between 1 and 10),
  elevation_gain_m integer not null default 0 check (elevation_gain_m between 0 and 10000),
  notes text not null default '' check (char_length(notes) <= 500),
  planned_session_id text,
  planned_plan_signature text,
  created_at timestamptz not null default now()
);

alter table public.training_sessions
  add column if not exists planned_session_id text,
  add column if not exists planned_plan_signature text;

create index if not exists training_sessions_user_date_idx
  on public.training_sessions (user_id, session_date desc, created_at desc);

create unique index if not exists training_sessions_plan_link_idx
  on public.training_sessions (user_id, planned_plan_signature, planned_session_id)
  where planned_plan_signature is not null and planned_session_id is not null;

alter table public.training_sessions enable row level security;

grant select, insert, delete on public.training_sessions to authenticated;

drop policy if exists "Users can read their own training sessions"
  on public.training_sessions;
create policy "Users can read their own training sessions"
  on public.training_sessions for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own training sessions"
  on public.training_sessions;
create policy "Users can create their own training sessions"
  on public.training_sessions for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own training sessions"
  on public.training_sessions;
create policy "Users can delete their own training sessions"
  on public.training_sessions for delete
  to authenticated
  using ((select auth.uid()) = user_id);
