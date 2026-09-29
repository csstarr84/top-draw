# Top Draw

Private mobile-first NASCAR Cup Series racing pool.

## v0.1.0 application foundation
- Supabase Auth email/password login shell
- Active-player authorization check
- Mobile-first Race Board shell
- 2026 season draft state
- Five current players shown in seat order
- Weekly/season pot placeholders
- Navigation foundation for Race, Standings, History and Chat
- Uses the Supabase publishable key only; no service-role secret is included

## Local development
1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev`.

No production player login works yet because the five player records have not been linked to Supabase Auth users. That is intentional.
