# Implementation status

## Completed

- Phase 0 repository assessment
- Phase 1 foundation scaffold (Next.js 16.3.4, Tailwind 4, App Router, `src/`)
- Project rules and PRD copied into the repo
- Design tokens, Inter Tight + Instrument Serif, editorial layout primitives
- Accessible header + fullscreen menu (no GSAP/Lenis yet)
- Public routes: `/` `/work` `/available` `/how-we-do` `/aftercare` `/about` `/book` `/contact` `/privacy`
- Typed `TODO_CONTENT` fixtures
- Public GitHub repo: https://github.com/nate-goodlead/zymosistattoo.com
- Vercel production: https://zymosistattoo.vercel.app (GitHub repo connected for push-to-deploy)
- Start-a-project inquiry: idea, size in cm, place, inspiration dropzone, notes, “Not sure yet”
- Available work as thumbnail gallery with large-image overlay, story, and process where it exists
- Location line: Canvas Tattoo, Haarlem
- Homepage hero: swallow photograph as full-bleed background behind the title

## Current

- GitHub Actions workflow is ready locally on branch `ci`; pushing it needs the GitHub `workflow` scope (`gh auth refresh -s workflow`)

## Blocked

- Public contact email
- Approved artist statement / bio / policies / privacy copy
- Budget ranges and response-time wording
- Wordmark/logo beyond the ZYMO/SIS type lockup
- Supabase / Resend / PostHog credentials
- Inspiration images are validated, not stored (no private bucket yet)

## Content TODOs

- More portfolio photographs toward 12–30, with year and publish permission confirmed
- Dedicated unused flash (current Available mix includes already-tattooed pieces as references)
- Legal privacy notice
- ManyChat UTM conventions to confirm with the operator

## Technical debt

- Inquiry still hands off to Instagram until an inbox is connected
- No motion system yet (intentional; Phase 3)
- No persistence adapter yet (Phase 6)
