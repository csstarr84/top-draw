# Top Draw Release Candidate

Direct GitHub Pages build. No npm/Vite build is required.

## Included
- Supabase email/password authentication with approved-player authorization
- Chris enabled as Commissioner for initial setup/testing
- Dynamic email confirmation redirect to the deployed site URL
- Live Race Board with assignments, unassigned drivers, pots, provider sync state, and live/final scores
- Official draw rotation with Steal Ball workflow and protected completion/publish readiness
- Season standings, Hall of Champions, career statistics, and race archive
- Private race chat
- Commissioner Race Control, player/login management, field review, season lifecycle controls, and settlement status
- Expanded Supabase Realtime refresh for race state, field, assignments, draw events, steals, results, scores, money, sync status, and chat
- Mobile-first responsive layout

## NASCAR automation
- Race IDs and schedule mapping now come from NASCAR's public `cf.nascar.com` schedule feed.
- Las Vegas South Point 400 is mapped to NASCAR race ID `5630`.
- Live timing/scoring worker now uses NASCAR's public `cf.nascar.com` live-feed, live-points, and weekend-feed endpoints.
- Field sync runs every 30 minutes and live race sync runs every minute.
- The private `feed.nascar.com` preliminary-entry-list endpoint currently returns HTTP 401, so automatic entry-list import falls back safely without overwriting an already loaded field. The Las Vegas 36-car field is already loaded and preserved.

## Safety
- Only the Supabase publishable browser key is included in frontend code.
- No Supabase service-role or secret key is present in this package.
- Production season remains DRAFT until a Commissioner intentionally starts it.
- Race finalization and money settlement are protected in Supabase and were tested using rollback-isolated test seasons.
