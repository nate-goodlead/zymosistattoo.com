# Implementation status

## Completed

- Phase 0 repository assessment
- Phase 1 foundation scaffold (Next.js 16.3.4, Tailwind 4, App Router, `src/`)
- Project rules and PRD copied into the repo
- Design tokens, Inter Tight + Instrument Serif, editorial layout primitives
- Accessible header + fullscreen menu (no GSAP/Lenis yet)
- Public route shells: `/` `/work` `/available` `/about` `/book` `/contact` `/privacy`
- Typed `TODO_CONTENT` fixtures
- Public GitHub repo: https://github.com/nate-goodlead/zymosistattoo.com
- Vercel production: https://zymosistattoo.vercel.app (GitHub repo connected for push-to-deploy)

## Current

- Phase 2 homepage art direction, once original images start arriving
- GitHub Actions workflow is ready locally on branch `ci`; pushing it needs the GitHub `workflow` scope (`gh auth refresh -s workflow`)

## Blocked

- Original isolated artwork files (PDF collages cannot be used in production)
- Public contact email
- Approved artist statement / bio / policies / privacy copy
- Budget ranges and response-time wording
- Wordmark/logo beyond the ZYMO/SIS type lockup
- Supabase / Resend / PostHog credentials

## Content TODOs

- Hero and about portraits
- 12–30 portfolio photographs with alt text, year, category, publish permission
- 3–10 available designs with size/placement/status
- Legal privacy notice
- ManyChat UTM conventions to confirm with the operator

## Technical debt

- Booking route is an editorial outline, not the multi-step form
- Image frames are placeholders until `next/image` can point at real files
- No motion system yet (intentional; Phase 3)
- No persistence adapter yet (Phase 6)
