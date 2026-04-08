-- PepTalk Database Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- ============================================================================
-- PROFILES (extends Supabase auth.users)
-- ============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text not null default '',
  avatar_url text,
  gender text,
  age_range text,
  goals text[] default '{}',
  interests text[] default '{}',
  subscription_tier text not null default 'free' check (subscription_tier in ('free', 'pepe', 'pepe_plus', 'pepe_pro')),
  is_pro boolean not null default false,
  favorite_peptides text[] default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-create profile when user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)));
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- HEALTH PROFILES
-- ============================================================================
create table if not exists public.health_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  sex text,
  dob date,
  weight_lbs numeric,
  height_inches numeric,
  body_fat_percent numeric,
  goal_weight_lbs numeric,
  activity_level text,
  diet_type text,
  conditions text[] default '{}',
  medications text[] default '{}',
  allergies text[] default '{}',
  supplements text[] default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id)
);

-- ============================================================================
-- CHECK-INS
-- ============================================================================
create table if not exists public.check_ins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  mood smallint not null check (mood between 1 and 5),
  energy smallint not null check (energy between 1 and 5),
  stress smallint not null check (stress between 1 and 5),
  sleep_quality smallint not null check (sleep_quality between 1 and 5),
  recovery smallint not null check (recovery between 1 and 5),
  appetite smallint not null check (appetite between 1 and 5),
  weight_lbs numeric,
  resting_heart_rate integer,
  steps integer,
  hrv_ms numeric,
  vo2_max numeric,
  spo2 numeric,
  notes text,
  emotion_tags text[] default '{}',
  side_effect_tags text[] default '{}',
  created_at timestamptz not null default now(),
  unique(user_id, date)
);

-- ============================================================================
-- DOSE LOGS
-- ============================================================================
create table if not exists public.dose_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  peptide_id text not null,
  peptide_name text not null,
  dose_mcg numeric not null,
  route text not null default 'subcutaneous',
  date date not null,
  time time,
  notes text,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- MEAL ENTRIES
-- ============================================================================
create table if not exists public.meal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  meal_type text not null,
  foods jsonb not null default '[]',
  quick_log jsonb,
  notes text,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- WORKOUT LOGS
-- ============================================================================
create table if not exists public.workout_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  program_id text,
  workout_name text,
  sets jsonb not null default '[]',
  duration_minutes integer not null default 0,
  rating smallint check (rating between 1 and 5),
  notes text,
  started_at timestamptz not null,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- CHAT MESSAGES (Aimee / Pepe conversation history)
-- ============================================================================
create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- JOURNAL ENTRIES
-- ============================================================================
create table if not exists public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  title text not null default '',
  content text not null default '',
  tags text[] default '{}',
  created_at timestamptz not null default now()
);

-- ============================================================================
-- SAVED STACKS
-- ============================================================================
create table if not exists public.saved_stacks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  peptides jsonb not null default '[]',
  notes text,
  created_at timestamptz not null default now()
);

-- ============================================================================
-- ROW LEVEL SECURITY — users can only see/edit their own data
-- ============================================================================
alter table public.profiles enable row level security;
alter table public.health_profiles enable row level security;
alter table public.check_ins enable row level security;
alter table public.dose_logs enable row level security;
alter table public.meal_entries enable row level security;
alter table public.workout_logs enable row level security;
alter table public.chat_messages enable row level security;
alter table public.journal_entries enable row level security;
alter table public.saved_stacks enable row level security;

-- Profiles: users read/update their own
create policy "Users read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users update own profile" on public.profiles for update using (auth.uid() = id);

-- All other tables: users CRUD their own rows
do $$
declare
  tbl text;
begin
  for tbl in select unnest(array[
    'health_profiles', 'check_ins', 'dose_logs', 'meal_entries',
    'workout_logs', 'chat_messages', 'journal_entries', 'saved_stacks'
  ]) loop
    execute format('create policy "Users select own %s" on public.%s for select using (auth.uid() = user_id)', tbl, tbl);
    execute format('create policy "Users insert own %s" on public.%s for insert with check (auth.uid() = user_id)', tbl, tbl);
    execute format('create policy "Users update own %s" on public.%s for update using (auth.uid() = user_id)', tbl, tbl);
    execute format('create policy "Users delete own %s" on public.%s for delete using (auth.uid() = user_id)', tbl, tbl);
  end loop;
end $$;

-- ============================================================================
-- INDEXES for common queries
-- ============================================================================
create index if not exists idx_check_ins_user_date on public.check_ins(user_id, date desc);
create index if not exists idx_dose_logs_user_date on public.dose_logs(user_id, date desc);
create index if not exists idx_meal_entries_user_date on public.meal_entries(user_id, date desc);
create index if not exists idx_workout_logs_user_date on public.workout_logs(user_id, date desc);
create index if not exists idx_chat_messages_user on public.chat_messages(user_id, created_at desc);
create index if not exists idx_journal_entries_user_date on public.journal_entries(user_id, date desc);
