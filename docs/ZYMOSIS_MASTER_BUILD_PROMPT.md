# ZYMOSIS TATTOO — MASTER CURSOR BUILD PROMPT

## Role

Act as a principal product designer, creative developer, senior full-stack engineer, motion designer, accessibility specialist, and conversion-focused digital product strategist.

You are building **Zymosis Tattoo**, a premium independent tattoo-artist portfolio and inquiry website for **zymosistattoo.com**.

The site is inspired by the *design philosophy* of Oscar Akermo's website — editorial composition, strong typography, negative space, image-led storytelling, high-end motion, and a gallery-like experience — but it must **not copy its source code, artwork, wording, exact layouts, proprietary assets, logos, or distinctive creative expression**.

Zymosis must become its own visual identity:

> **70% contemporary art gallery / editorial**
> **20% sketchbook / pencil / artist-process**
> **10% restrained graffiti / street influence**

The output must feel like an artist's digital exhibition with a conversion engine underneath it, not a generic tattoo studio template and not a SaaS landing page.

---

## Read these project files first

Before writing implementation code:

1. Read `docs/ZYMOSIS_PRODUCT_REQUIREMENTS.md` in full.
2. Read `docs/CONTENT_ASSET_CHECKLIST.md`.
3. Obey `.cursor/rules/zymosis-project.mdc`.
4. Inspect the existing repository before changing architecture or dependencies.
5. If the repo is empty, initialize the stack described below.

Treat `docs/ZYMOSIS_PRODUCT_REQUIREMENTS.md` as the product/design source of truth. If this prompt conflicts with the PRD, follow the PRD unless I explicitly override it in chat.

---

# 1. Product objective

Build a high-end portfolio and inquiry experience that moves a visitor through this path:

**Instagram / ManyChat / direct visit**
→ **Zymosis identity + selected work**
→ **style/artist trust**
→ **custom or available-work intent**
→ **multi-step inquiry**
→ **qualified lead stored**
→ **artist notified**
→ **visitor receives acknowledgement**

The site should maximize:
- perceived artistic quality;
- portfolio exploration;
- qualified inquiries;
- Instagram-to-website conversion;
- clarity around the tattoo process;
- future maintainability.

Do not optimize for raw lead volume at the expense of artistic positioning.

---

# 2. Technical baseline

Use the latest stable compatible releases available in the repository, with this architecture as the intended baseline:

- **Next.js 16+**
- **App Router**
- **React**
- **TypeScript**
- **Tailwind CSS 4.x**
- **GSAP + ScrollTrigger** for complex sequenced and scroll-linked motion
- **Lenis** for restrained smooth scrolling
- **Motion for React** for component state, menu, gesture and presence transitions
- **React Hook Form + Zod** for inquiry validation
- **Supabase** for database and reference-image storage
- **Resend** for transactional emails
- **Vercel** deployment
- **PostHog** or equivalent privacy-conscious analytics, behind consent where legally required

Prefer native browser/CSS capabilities when they are sufficient. Do not animate something with JavaScript merely because an animation library exists.

Do not install redundant component or animation libraries.

Do not introduce a generic component system that imposes rounded cards, shadows, gradients, or SaaS aesthetics.

---

# 3. Brand and art direction

## Brand personality

Zymosis should feel:
- artistic;
- composed;
- slightly subversive;
- tactile;
- premium;
- quiet rather than loud;
- contemporary;
- human-made;
- curated;
- credible.

Avoid:
- biker/tattoo-shop clichés;
- skull-and-flame imagery;
- excessive grunge;
- spray-paint textures across entire backgrounds;
- neon accent colors;
- cyberpunk;
- "luxury" gold;
- oversized pill buttons;
- glassmorphism;
- dashboard-like cards;
- generic AI-generated marketing-site composition.

## Core visual model

Think:

> **a sketchbook exhibited inside a contemporary gallery**

Graffiti and pencil marks are punctuation, not the canvas.

The tattoo photography is the dominant artwork.

---

# 4. Typography

Prototype with readily available licensed/free fonts:

- **Primary sans:** `Inter Tight`, `Geist`, or the closest suitable available neo-grotesk.
- **Display serif:** `Instrument Serif`.

If licensed assets are supplied later, support replacing these with:
- a Neue Haas Grotesk / Helvetica-style grotesk;
- a PP Editorial-style high-contrast serif.

Never download or bundle unlicensed commercial font files.

Use `next/font` where practical.

Typography should use extreme scale contrast:
- tiny editorial labels;
- restrained readable body copy;
- oversized display type that becomes part of the composition.

Suggested scale:

```css
--text-micro: clamp(0.625rem, 0.55vw, 0.75rem);
--text-body: clamp(0.95rem, 0.9vw, 1.1rem);
--text-lead: clamp(1.35rem, 2vw, 2.1rem);
--text-section: clamp(3rem, 7vw, 7.5rem);
--text-display: clamp(5rem, 13vw, 14rem);
```

Large headings:
- line-height around `0.84–0.94`;
- negative tracking where appropriate;
- no arbitrary wrapping that destroys composition.

Micro typography:
- compact;
- letter-spaced where useful;
- used for index numbers, location, category, year, progress and navigation.

Develop a **Zymosis-specific typographic motif** rather than copying Oscar Akermo's separated-letter styling. A possible direction is a controlled split such as `ZYMO / SIS`, but implement it only if it works visually.

---

# 5. Color and surfaces

Initial palette:

```css
--ink: #0a0a0a;
--paper: #f2f1ed;
--paper-dim: #d8d6d0;
--graphite: #77736d;
--hairline-dark: rgba(255,255,255,.16);
--hairline-light: rgba(0,0,0,.15);
```

Primary mode should be near-black / warm-off-white with photography providing visual richness.

Do not add a brand accent color unless the real artist assets establish one.

Use subtle texture only if:
- it is extremely low contrast;
- it resembles paper/graphite;
- it does not harm image quality or page performance.

---

# 6. Grid and layout

Use an editorial grid, not a card grid.

Desktop:
- 12-column logical grid;
- generous fluid outer gutters;
- irregular image alignment;
- intentional asymmetry;
- large negative-space intervals;
- sections may span `100svh` or more when composition needs it.

Mobile:
- preserve hierarchy and whitespace;
- do not merely shrink desktop positions;
- avoid horizontal overflow;
- artwork must remain prominent;
- simplify parallax and pointer-dependent behavior.

Build layout primitives for:
- `PageShell`
- `Grid`
- `Section`
- `EditorialLabel`
- `DisplayHeading`
- `ImageFrame`

Avoid hardcoded absolute-position magic numbers unless the layout specifically needs an art-directed composition and has responsive fallbacks.

---

# 7. Site architecture

Implement these public routes:

```text
/
 /work
 /work/[slug]          optional in MVP if modal/detail treatment is chosen
 /about
 /available            flash / available designs
 /book                 multi-step inquiry
 /contact              simple fallback/general contact
 /privacy
```

Optional later:
```text
/admin
```

Global:
- preloader / entrance system;
- persistent minimal header;
- full-screen menu;
- smooth-scroll provider;
- page transition layer;
- footer;
- reduced-motion behavior;
- analytics attribution.

---

# 8. Homepage composition

Create the homepage in this order.

## A. Preloader / entrance

Goal: establish mood and hide unstable asset/layout loading without forcing an artificial long wait.

Visual concept:

```text
ZYMOSIS                                      00
```

Progress advances using actual critical-asset readiness where feasible.

At completion:
- progress reaches `100`;
- typography subtly resolves/recomposes;
- a fullscreen mask/curtain exits;
- hero photography is revealed;
- navigation enters;
- scrolling unlocks.

Constraints:
- do not hold a loaded page hostage for a fixed 3–5 second animation;
- returning visitors can get a shortened entrance during the same session;
- skip or greatly reduce it for `prefers-reduced-motion`;
- no fake progress that stalls at arbitrary values.

Target entrance duration when assets are ready: approximately 1.1–1.8 seconds.

## B. Hero

Identity is the hero, not the CTA.

Suggested composition:

```text
ZYMOSIS
TATTOO

small:
INDEPENDENT TATTOO ARTIST
[CITY / COUNTRY]

small CTA:
START A PROJECT ↗

[editorial portrait / tattoo crop]
```

Use oversized typography, one or two images, negative space, and subtle motion.

No generic hero subtitle centered under a headline.

## C. Artist statement

A concise oversized statement, e.g. temporary placeholder:

> Tattooing between sketch, gesture and structure.

Do **not** treat placeholder copy as final approved artist wording.

## D. Selected work

Show 6–10 curated pieces with irregular editorial composition.

Each item may expose micro metadata:
- index;
- category/style;
- year;
- optional location.

Use visual hierarchy, not cards.

CTA: `VIEW ALL WORK ↗`.

## E. Available work / flash

Present a small selection of bookable designs.

State clearly when artwork is available, reserved or tattooed.

CTA: `VIEW AVAILABLE WORK ↗`.

## F. Process

Keep this editorial, not icon-driven:

```text
01  IDEA
02  DIRECTION
03  TATTOO
```

Use short copy and strong type.

## G. Artist / about preview

One portrait/studio image plus concise statement.

CTA: `ABOUT ZYMOSIS ↗`.

## H. Final conversion section

Large ending:

```text
HAVE SOMETHING
IN MIND?

START A PROJECT ↗
```

Follow with tiny contact/location/Instagram/legal details.

---

# 9. Work page

The work page should function as a curated exhibition.

Requirements:
- strong page-opening title;
- irregular responsive image layout;
- lazy loading below the fold;
- image reveal on entry;
- restrained internal parallax;
- optional filtering only if the real portfolio is large enough to justify it;
- no Masonry library unless it meaningfully improves the design;
- no infinite scroll in MVP.

Possible categories:
- selected;
- sketch;
- black & grey;
- lettering/graffiti;
- healed.

Do not create empty filters for categories with insufficient real content.

Each work image must have meaningful alt text or be marked decorative when appropriate.

---

# 10. Available / flash page

Purpose:
make available designs discoverable without reducing them to e-commerce products.

Each design can include:
- title/internal name;
- image;
- size guidance;
- placement guidance;
- status;
- price guidance if the artist chooses;
- notes;
- inquiry CTA.

Statuses:
- `available`
- `reserved`
- `tattooed`
- `hidden`

CTA pre-fills the inquiry flow with the selected design identifier.

Do not implement checkout in MVP unless requested later.

---

# 11. About page

The About page should remain highly visual.

Suggested structure:
1. display title;
2. portrait;
3. concise artist philosophy;
4. background/influences;
5. approach to custom work;
6. location/travel information;
7. selected studio/sketchbook imagery;
8. CTA to start an inquiry.

Do not generate fake credentials, awards, clients, publications or biography details.

Use clear placeholders for unknown content.

---

# 12. Full-screen menu

The menu is an experience, not a default drawer.

Desktop example:

```text
ZYMOSIS

01  WORK
02  AVAILABLE
03  ABOUT
04  BOOK

INSTAGRAM
EMAIL
[CITY]
```

Interaction:
- fullscreen overlay;
- staggered text entry;
- background preview image may change on desktop hover;
- close behavior must be obvious and keyboard accessible;
- Escape closes;
- focus is trapped while open;
- focus returns to the trigger;
- body scroll locks.

Mobile:
- no hover-dependent functionality;
- simplify previews if necessary.

---

# 13. Motion system

Motion is central, but must remain controlled.

## Principles
- motion reveals hierarchy;
- motion should feel physical and editorial;
- nothing should wobble/bounce unless conceptually justified;
- avoid animation on every element;
- avoid long blocking sequences;
- target transforms and opacity for performance.

## Standard easing

Prefer a small tokenized set, e.g.:

```ts
export const EASE = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.76, 0, 0.24, 1],
}
```

GSAP equivalents may use `power4.out`, `expo.out`, etc. when visually appropriate.

## Text reveal

Use clipped line/word reveals:
- initial `yPercent: 105–120`;
- final `yPercent: 0`;
- duration ~0.7–1.1s;
- short stagger.

Do not split text in a way that damages screen-reader reading order.

## Image reveal

Image wrapper:
- `overflow: clip/hidden`;
- mask/clip-path or transformed reveal.

Image:
- starts around `scale: 1.04–1.08`;
- resolves to `1`;
- optional internal `yPercent` movement.

## Parallax

Subtle:
- usually within ±3–6%;
- disable/reduce on mobile where it creates crop or performance problems.

## Scroll-linked effects

Use GSAP ScrollTrigger for:
- scrubbed image motion;
- section progress;
- pinned editorial compositions only when genuinely useful.

Avoid excessive pinned sections.

## Page transitions

Use Motion/GSAP intentionally:
- route click;
- transition layer or title enters;
- route changes;
- new page reveals.

Do not create navigation latency for its own sake.

## Custom cursor

Desktop fine-pointer devices only.
Possible states:
- default;
- `VIEW`;
- `OPEN`;
- `CLAIM`;
- arrow.

Requirements:
- never hide the native cursor until the custom cursor is mounted and working;
- disable on touch/coarse pointers;
- pointer must never interfere with click targets.

## Reduced motion

`prefers-reduced-motion: reduce` must:
- remove smooth scroll;
- remove custom cursor tracking if necessary;
- remove parallax/scrub;
- replace complex reveals with simple opacity or no animation;
- preserve all information and interactions.

---

# 14. Inquiry / booking funnel

The booking experience is a primary product feature.

Route: `/book`

It should feel like part of the exhibition, not a Typeform clone.

Use a progressive multi-step form.

Suggested steps:

### Step 1 — Intent
- custom piece;
- available design;
- consultation / unsure.

### Step 2 — Idea
- free-text description;
- optional style direction.

### Step 3 — Placement
- body area select;
- optional body-placement photo.

Do not build a complex interactive body map in MVP unless it can be done accessibly and without delaying launch.

### Step 4 — Size
- approximate centimeters;
- allow "not sure".

### Step 5 — References
- upload inspiration/reference images;
- support multiple files;
- communicate accepted formats and limits.

### Step 6 — Timing
- preferred date/window;
- flexibility;
- optional travel constraints.

### Step 7 — Budget
- configurable ranges;
- "need guidance" option.

### Step 8 — Contact
- name;
- email;
- Instagram handle;
- optional phone;
- age confirmation;
- consent/privacy acknowledgement.

### Step 9 — Review
Show concise summary before submission.

### Success
- visually strong confirmation;
- reference number;
- expectation for response window as a configurable content value;
- links back to Instagram/work.

Do not promise a specific response time until artist confirms it.

---

# 15. Form behavior and validation

Use:
- React Hook Form;
- Zod;
- server-side validation before persistence;
- client-side validation for immediate UX;
- accessible inline errors;
- robust loading and retry states.

Requirements:
- preserve form state between steps;
- do not lose state on accidental previous-step navigation;
- prevent duplicate rapid submissions;
- validate file type and file size server-side;
- sanitize filenames;
- rate limit public submissions;
- include a bot-defense strategy that does not destroy UX;
- never expose private service-role credentials client-side.

Spam protection preference:
1. honeypot;
2. rate limiting;
3. Turnstile only if needed.

---

# 16. Lead source attribution / ManyChat

The site must preserve attribution from Instagram and ManyChat.

Recognize URL parameters such as:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
ref
mc_flow
ig_content
```

Persist first-touch and latest-touch attribution for the inquiry session.

Store useful context on submission.

Example:

```json
{
  "utm_source": "instagram",
  "utm_medium": "manychat",
  "utm_campaign": "flash_drop",
  "utm_content": "reel_184",
  "mc_flow": "book_custom"
}
```

Do not collect unnecessary personal information.

---

# 17. Data model

Use Supabase/Postgres when backend configuration is available.

Create typed models/migrations for:

## `portfolio_works`
- id uuid
- slug text unique
- title text nullable
- category text nullable
- description text nullable
- image_url text
- image_alt text
- width int nullable
- height int nullable
- year int nullable
- featured boolean
- sort_order int
- published boolean
- created_at timestamptz
- updated_at timestamptz

## `available_designs`
- id uuid
- slug text unique
- title text nullable
- image_url text
- image_alt text
- status enum/text
- size_guidance text nullable
- placement_guidance text nullable
- price_guidance text nullable
- notes text nullable
- sort_order int
- published boolean
- created_at timestamptz
- updated_at timestamptz

## `inquiries`
- id uuid
- reference_code text unique
- intent text
- selected_design_id uuid nullable
- idea text
- placement text nullable
- size_text text nullable
- preferred_timing text nullable
- budget_range text nullable
- name text
- email text
- instagram_handle text nullable
- phone text nullable
- age_confirmed boolean
- privacy_consent boolean
- status text default `new`
- source_json jsonb
- created_at timestamptz
- updated_at timestamptz

## `inquiry_files`
- id uuid
- inquiry_id uuid
- storage_path text
- kind text
- original_filename text
- mime_type text
- size_bytes bigint
- created_at timestamptz

Apply Row Level Security appropriately.
Public users must not be able to list or read other inquiries.

Do not create database migrations against a live project without explicit credentials/approval.

If Supabase is not configured, implement a clean repository/service interface and a safe development fallback rather than hardcoding production secrets.

---

# 18. Email notifications

When an inquiry succeeds:

### Artist notification
Include:
- reference code;
- lead/contact data;
- project summary;
- selected design if any;
- reference-file links using secure access patterns;
- source attribution;
- admin/review link when available.

### Visitor acknowledgement
Include:
- confirmation;
- reference code;
- short project summary;
- clear statement that submission is not automatically an accepted appointment;
- configurable next-step copy.

Use Resend when configured.

Do not claim email was sent if the provider call fails. Persist submission independently where practical and expose a recoverable notification failure.

---

# 19. Content management strategy

MVP priority:
1. ship excellent public experience;
2. make portfolio data easy to replace;
3. avoid spending half the project on admin tooling.

If Supabase is configured, structure content so a small admin can be added later.

For the initial build, seed data may live in typed fixture files, clearly marked as temporary.

Do not invent finished tattoo images. Use:
- supplied artist assets;
- clearly labeled development placeholders;
- neutral placeholder blocks when assets are absent.

Never scrape/reuse Oscar Akermo's images or other artists' copyrighted work in the production site.

---

# 20. SEO and social

Implement:
- metadata API;
- canonical URLs;
- descriptive title templates;
- Open Graph/Twitter metadata;
- `sitemap.xml`;
- `robots.txt`;
- structured data appropriate for an artist/local business only when real fields are known;
- semantic headings;
- meaningful page descriptions.

Do not keyword-stuff.

Potential search concepts:
- artist name;
- Zymosis Tattoo;
- tattoo artist + real location;
- actual tattoo styles once confirmed.

Do not create fake geographic service areas.

---

# 21. Analytics events

Create a typed analytics wrapper.

Track:
- `page_view`
- `portfolio_item_view`
- `work_cta_click`
- `available_design_view`
- `available_design_inquiry_click`
- `book_start`
- `book_step_complete`
- `book_reference_upload`
- `book_submit`
- `book_success`
- `book_error`
- `instagram_click`
- `email_click`

Properties can include:
- page;
- work/design slug;
- step;
- source attribution.

Never send free-text tattoo ideas, email addresses, phone numbers, uploaded filenames or other sensitive form fields to analytics.

---

# 22. Accessibility

Target WCAG 2.2 AA where reasonably achievable.

Requirements:
- semantic HTML;
- visible keyboard focus;
- keyboard-accessible menu and gallery controls;
- focus trap for modal/menu;
- escape key support;
- labels for every form control;
- errors associated with controls;
- contrast-conscious micro text;
- reduced-motion support;
- appropriate alt text;
- no text embedded solely inside images;
- minimum practical hit areas;
- preserve zoom;
- do not use scroll hijacking.

Smooth scrolling may enhance scrolling, but must not prevent normal keyboard, touch, anchor or browser navigation.

---

# 23. Performance

This is an image-heavy portfolio; performance is a design requirement.

Targets:
- strong Core Web Vitals;
- avoid layout shift;
- reserve image aspect ratios;
- responsive image sizes;
- modern compressed formats via framework/image CDN;
- preload only truly critical assets;
- avoid loading the entire gallery at full resolution;
- lazy load below-fold artwork;
- dynamically import noncritical interaction code when useful;
- kill GSAP timelines/ScrollTriggers cleanly on unmount;
- avoid multiple requestAnimationFrame loops doing overlapping work.

Performance rule:
**Do not trade a measurable UX regression for a decorative animation.**

---

# 24. Responsive breakpoints

Treat breakpoints as composition changes rather than just width changes.

Test at minimum:
- 375×667
- 390×844
- 430×932
- 768×1024
- 1024×768
- 1366×768
- 1440×900
- 1728×1117
- 1920×1080

Use fluid values wherever possible.

---

# 25. Code architecture

Suggested structure:

```text
src/
  app/
    (site)/
      page.tsx
      work/
      available/
      about/
      book/
      contact/
      privacy/
    api/
      inquiries/
  components/
    layout/
    motion/
    navigation/
    portfolio/
    available/
    booking/
    ui/
  features/
    inquiries/
    portfolio/
    analytics/
  lib/
    animation/
    analytics/
    attribution/
    supabase/
    validation/
  content/
  styles/
  types/
```

Use Server Components by default.

Use Client Components only when interaction/browser APIs require them.

Do not put `"use client"` at the top of large page trees simply because one nested element animates.

Create focused motion components/hooks.

Keep business logic out of presentational components.

---

# 26. Core reusable components

Build reusable primitives such as:

- `Preloader`
- `SmoothScrollProvider`
- `CustomCursor`
- `SiteHeader`
- `FullscreenMenu`
- `PageTransition`
- `DisplayHeading`
- `EditorialLabel`
- `SplitTextReveal`
- `ImageReveal`
- `ParallaxImage`
- `MagneticLink` only if tasteful
- `WorkGallery`
- `WorkItem`
- `AvailableDesignCard` (visually editorial, not SaaS-card style)
- `BookingFlow`
- `BookingProgress`
- `ReferenceUpload`
- `InquirySummary`
- `SiteFooter`

Do not over-abstract components before repeated patterns exist.

---

# 27. Error and empty states

Design them intentionally.

Examples:
- no available flash: explain that new designs are released periodically and provide Instagram CTA;
- upload error: retain other form data;
- submission error: allow retry without re-entering everything;
- missing image: graceful neutral placeholder;
- 404: art-directed but fast and accessible.

---

# 28. Security / privacy

Because inquiry forms collect personal information:
- keep secrets server-side;
- use environment variables;
- validate/sanitize server inputs;
- rate limit submissions;
- restrict storage access;
- use signed URLs where private uploads need retrieval;
- avoid exposing raw storage buckets if references may include body photos;
- define retention policy as a configurable operational requirement;
- include a privacy page;
- collect only required data;
- do not log sensitive payloads in production.

Treat uploaded body/reference images as private inquiry data unless the artist explicitly publishes them later under a separate workflow.

---

# 29. Implementation workflow

Do NOT attempt the entire build in one uncontrolled code dump.

Follow these phases.

## Phase 0 — repository assessment
- inspect project;
- report current stack;
- identify conflicts;
- propose file plan;
- list required environment variables;
- identify missing artist content.

## Phase 1 — foundation
- initialize/update Next.js;
- global CSS/design tokens;
- typography;
- base layout;
- navigation shell;
- accessibility foundation;
- fixture content;
- no heavy animation yet.

Run:
- formatter;
- lint;
- typecheck;
- build.

## Phase 2 — homepage visual implementation
- hero;
- selected work;
- available work;
- process;
- about preview;
- final CTA;
- responsive compositions.

Do visual QA before adding elaborate motion.

## Phase 3 — motion system
- Lenis;
- preloader;
- text reveals;
- image reveals;
- parallax;
- menu transitions;
- page transitions;
- reduced-motion fallback.

Profile animation performance.

## Phase 4 — secondary pages
- Work;
- Available;
- About;
- Contact;
- Privacy.

## Phase 5 — booking funnel
- state model;
- validation;
- uploads;
- review;
- success/error states;
- responsive and keyboard QA.

## Phase 6 — backend/integrations
- Supabase;
- migrations;
- RLS;
- storage;
- inquiry endpoint/server action;
- Resend;
- attribution.

Do not invent credentials. Use `.env.example`.

## Phase 7 — SEO/analytics/performance
- metadata;
- structured data;
- sitemap;
- analytics wrapper/events;
- image tuning;
- bundle inspection;
- Core Web Vitals.

## Phase 8 — final QA
- responsive;
- keyboard;
- reduced motion;
- browser back/forward;
- form persistence;
- upload validation;
- 404;
- loading/error behavior;
- production build.

---

# 30. Cursor working behavior

When you begin:

1. Do not immediately generate 50 files.
2. Read the project documentation.
3. Inspect repository state.
4. Produce a concise implementation plan and dependency diff.
5. Then implement Phase 1.
6. After each substantial phase, run available verification scripts.
7. Fix warnings/errors you caused before continuing.
8. Keep a running `docs/IMPLEMENTATION_STATUS.md` with:
   - completed;
   - current;
   - blocked;
   - content TODOs;
   - technical debt.
9. Never silently change a major product decision.
10. When real content is missing, use explicit `TODO_CONTENT` fixtures rather than invented biography/pricing/credentials.

---

# 31. Definition of done for MVP

The MVP is complete only when:

- homepage feels intentionally art-directed on desktop and mobile;
- navigation and menu work by mouse, touch and keyboard;
- gallery loads efficiently;
- available-design flow can lead into inquiry;
- inquiry can be completed end to end;
- server validates data;
- configured persistence works;
- reference images are handled privately;
- success/failure states are robust;
- attribution is captured;
- metadata and sitemap exist;
- reduced motion works;
- no console errors;
- no broken routes;
- lint/typecheck/build pass;
- no production secrets are committed;
- placeholder content is clearly identifiable;
- there is no unauthorized copying of Oscar Akermo or another artist's assets.

---

# 32. First task

Start now with **Phase 0 only**.

Read the referenced docs and rules. Inspect the repository. Then respond with:

1. current repository assessment;
2. proposed architecture;
3. files/folders you intend to create or change;
4. dependency additions/removals;
5. environment variables required;
6. artist content/assets still needed;
7. risks or assumptions;
8. exact Phase 1 implementation sequence.

Do not implement Phase 1 until that assessment is complete.
