# Backend Change Log

- Added field-review, draw readiness, automation status, settlement status, weekly-pot status, and season-payout audit layers.
- Added protected automatic NASCAR finalization path.
- Split weekly settlement into Commissioner and provider-safe private paths.
- Added exact-cent tied season payout handling and payout structure validation.
- Added database uniqueness protections against duplicate contributions/payouts.
- Added automatic finalization audit logging.
- Added compatibility audit wrapper for legacy private callers after audit signature hardening.
- Tightened RLS read policies to approved active Top Draw players only.
- Removed anonymous public RPC execution.
- Removed obsolete public `activate_season` SECURITY DEFINER function.
- Removed temporary payout test RPC.
- Enabled Chris as Commissioner for initial setup/testing.
- Deployed `nascar-field-sync` v3 using NASCAR public CF schedule mapping.
- Deployed `nascar-sync` v6 using NASCAR public CF live/timing endpoints and production-season scoping.
- Added 30-minute field-sync cron; retained 1-minute live-sync cron.

## RC2 note

RC2 is primarily a frontend visual restoration. No scoring, settlement, draw, NASCAR automation, or production season-state logic was changed by the RC2 frontend work.
