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
