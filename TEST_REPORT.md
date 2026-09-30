# Top Draw Validation Report

## Frontend
- JavaScript syntax: PASS (`node --check`)
- ZIP integrity: PASS
- Dynamic auth redirect: implemented
- Numeric car-number field sorting: implemented
- Race-selection priority: implemented
- Realtime race-change re-subscription: implemented
- Expanded Realtime event coverage: implemented

## Database / workflow
- Public tables RLS enabled: PASS
- Public views use `security_invoker=true`: PASS
- Unrestricted authenticated SELECT policies remaining: 0
- Anonymous callable public functions remaining: 0
- `SECURITY DEFINER` functions in public schema remaining: 0
- Provider-only finalizer blocked for ordinary authenticated users: PASS
- Duplicate weekly/season contribution and payout protections: PASS
- Unresolved Steal Ball blocks draw completion: PASS
- Weekly rollover chain test: PASS ($25 rollover -> $50 payout -> $25 rollover)
- Automatic race finalization test: PASS
- Automatic audit record test: PASS
- Full 37-race isolated season simulation: PASS
  - 185 player race scores
  - 185 weekly contributions
  - 185 season contributions
  - 37 weekly settlements
  - 5 standings rows
  - season pot conserved exactly: $925.00 contributed / $925.00 paid
  - 5 season payout rows
- Temporary test seasons remaining: 0
- Production 2026 ledger rows after tests: 0

## NASCAR integration
- Official NASCAR public schedule source: PASS
- Las Vegas external NASCAR race ID resolved: 5630
- Las Vegas active field retained: 36 cars
- Field-sync cron: ACTIVE every 30 minutes
- Live-sync cron: ACTIVE every minute
- `feed.nascar.com` preliminary entry list: HTTP 401 (handled safely; no destructive fallback)

## Supabase security advisor
Two existing project-level warnings remain:
1. `pg_net` extension is installed in the public schema.
2. Supabase leaked-password protection is disabled.

Neither warning was introduced by this release candidate.
