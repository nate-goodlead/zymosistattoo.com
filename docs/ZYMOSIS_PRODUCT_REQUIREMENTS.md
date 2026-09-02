# Zymosis Tattoo — Product, Design & Technical Requirements

**Domain:** zymosistattoo.com  
**Document type:** PRD + design specification + implementation plan  
**Status:** Build-ready draft  
**Primary inspiration:** contemporary editorial/gallery websites, especially the design philosophy of Oscar Akermo's current portfolio site  
**Important:** Inspiration is directional. The production website must have original layouts, copy, assets, and brand expression.

---

# 1. Executive summary

Zymosis Tattoo is an independent tattoo-artist portfolio website designed primarily for traffic arriving from Instagram and future ManyChat automations.

The website has two simultaneous jobs:

1. **Brand / portfolio:** present the artist as a serious contemporary artist rather than a commodity tattoo service.
2. **Conversion / qualification:** turn high-intent visitors into structured, useful tattoo inquiries without damaging the premium gallery experience.

The visual direction is:

> **70% modern art gallery / editorial**
> **20% sketchbook / pencil / drawing process**
> **10% restrained graffiti / street influence**

The intended result is quiet, high quality, image-led, tactile, and highly art-directed.

---

# 2. Business context

## Acquisition model

Primary:
- Instagram profile;
- Instagram reels/posts;
- Instagram stories;
- ManyChat DM/comment automations.

Secondary:
- direct traffic;
- referrals;
- organic search;
- QR codes / physical cards;
- repeat clients.

Typical funnel:

```text
Instagram content
    ↓
DM/comment trigger
    ↓
ManyChat conversation
    ↓
zymosistattoo.com/?utm_source=instagram&utm_medium=manychat...
    ↓
Portfolio / available work
    ↓
Start a project
    ↓
Qualified inquiry
    ↓
Artist review
    ↓
Manual acceptance / pricing / scheduling
```

---

# 3. Product goals

## Primary goals

### G1 — Artistic positioning
The first impression should be "artist / exhibition / craft", not "local tattoo booking template".

### G2 — Portfolio consumption
Visitors should quickly see enough strong work to understand whether the artist's visual language is for them.

### G3 — Qualified inquiries
The form must provide enough information for the artist to make an initial decision without a long DM exchange.

### G4 — Instagram conversion
The website must preserve acquisition context so the team can later identify which content and ManyChat flows generate inquiries.

### G5 — Maintainability
Portfolio and available designs must be structured so future content management does not require redesigning pages.

### G6 — Mobile excellence
Instagram traffic will be heavily mobile. The mobile site is not a reduced afterthought.

---

# 4. Non-goals for MVP

Do not build these unless scope changes:

- full client portal;
- automated tattoo quotation engine;
- public account creation;
- appointment scheduling engine;
- deposit/checkout flow;
- marketplace;
- complex interactive 3D body selector;
- AI tattoo generation;
- large bespoke CMS;
- chat widget;
- community/social features.

Architecture should not prevent future scheduling/deposit/admin features.

---

# 5. Target users

## U1 — Instagram discovery visitor
Saw a reel, story, post or recommendation.

Needs:
- immediate visual confirmation;
- style understanding;
- location;
- frictionless path to inquire.

## U2 — High-intent custom client
Already likes the work and wants a custom tattoo.

Needs:
- process clarity;
- expectations;
- structured project request;
- reference uploads.

## U3 — Flash/available-design buyer
Wants one of the artist's existing designs.

Needs:
- availability;
- size/placement guidance;
- direct inquiry path tied to that design.

## U4 — Researching visitor
Interested but not ready.

Needs:
- work;
- artist story;
- Instagram link;
- low pressure.

---

# 6. Brand principles

1. **Artwork before UI.**
2. **Whitespace is an active design element.**
3. **Typography can be imagery.**
4. **Motion should reveal, not decorate.**
5. **Sketch/graffiti marks are accents.**
6. **No generic tattoo clichés.**
7. **No generic startup UI.**
8. **Small amounts of friction are acceptable if they increase perceived craft and lead quality.**
9. **Accessibility and performance are part of premium design.**

---

# 7. Inspiration analysis

The Oscar Akermo website is useful as a *reference model* because its visible information architecture emphasizes:
- a minimal global nav;
- oversized artist identity;
- "Exploring art through tattooing" style positioning;
- image-heavy work exploration;
- a separate Work page;
- dedicated About and Contact pages;
- subtle conversion CTAs rather than aggressive commerce.

Zymosis should borrow the principles:
- art first;
- extreme type scale;
- asymmetric editorial composition;
- negative space;
- small navigation;
- expressive movement.

Zymosis must not duplicate:
- Oscar's exact page compositions;
- exact typography treatment;
- wording;
- image sequencing;
- artworks;
- source code;
- proprietary fonts/assets.

---

# 8. Information architecture

```text
Home
├── Selected work
├── Available work
├── Process
├── About preview
└── Start a project

Work
├── All/selected work
└── Optional individual work detail

Available
└── Available designs

About
├── Artist
├── Philosophy
├── Influences
└── Process/location

Book
├── Intent
├── Idea
├── Placement
├── Size
├── References
├── Timing
├── Budget
├── Contact
├── Review
└── Confirmation

Contact
Privacy
```

---

# 9. Global layout system

## Desktop
- 12-column logical grid.
- Fluid side padding approximately `clamp(20px, 2.5vw, 52px)`.
- Full-bleed imagery only when composition calls for it.
- Large intervals between content clusters.
- No universal `max-width: 1200px` box around the entire experience.
- Body copy should remain readable even when the artboard is wide.

## Tablet
- collapse art-directed offsets where they reduce clarity;
- preserve hierarchy;
- avoid awkward center-only layouts.

## Mobile
- prioritize portrait photography;
- preserve large typography but clamp responsibly;
- simplify image offsets;
- avoid sideways-scrolling gimmicks;
- show primary CTA without aggressive sticky UI.

---

# 10. Visual identity

## 10.1 Color

Core:
- Ink: `#0A0A0A`
- Paper: `#F2F1ED`
- Paper dim: `#D8D6D0`
- Graphite: `#77736D`

The website may invert sections between ink/paper.

Avoid decorative gradients by default.

## 10.2 Typography

Prototype:
- Sans: **Inter Tight** or **Geist**
- Display serif: **Instrument Serif**

Commercial upgrade if licensed assets are supplied:
- neutral Swiss/neo-grotesk;
- high-contrast editorial serif.

### Type behaviors
- display copy can occupy 20–50% of viewport height;
- micro labels approximately 10–12px equivalent;
- body copy approximately 15–18px;
- large type line-height 0.84–0.95;
- body line-height 1.45–1.65.

## 10.3 Lines
Use hairlines for:
- dividers;
- labels;
- progress;
- menu edges;
- form rows.

Avoid boxed cards.

## 10.4 Texture
Optional paper/graphite texture:
- extremely subtle;
- CSS/generated asset if possible;
- must not look distressed/grungy;
- should compress well.

## 10.5 Sketchbook language
Potential elements:
- hand-drawn arrows;
- measurement ticks;
- pencil circles;
- small annotation copy;
- crossing-out or rewritten micro phrases;
- registration marks;
- sketch numbers.

Use sparingly.

## 10.6 Graffiti language
Potential elements:
- one occasional handwritten mark;
- deconstructed wordmark;
- crop/overlap;
- marker-like annotation.

Avoid:
- spray-can overlays;
- bright street-art color fields;
- repeated tags;
- fake wall textures.

---

# 11. Global navigation

Desktop header:
- Zymosis identity/wordmark;
- Work;
- Available;
- About;
- Book;
- Menu trigger if using reduced nav.

Possible minimal form:
```text
ZYMOSIS        WORK    ABOUT    BOOK        MENU
```

Header may invert depending on section background.

Behavior:
- starts transparent/over composition when safe;
- remains readable;
- may collapse/reveal based on scroll direction only if behavior is stable;
- should not constantly animate.

Mobile:
- wordmark;
- menu button;
- optional Book text link if it does not crowd header.

---

# 12. Preloader specification

## Purpose
- control entrance;
- stabilize first visual impression;
- expose identity;
- coordinate critical asset readiness.

## Visual
Near-black screen.
Large or medium `ZYMOSIS`.
Progress `00 → 100`.
Optional tiny location/category label.

## Behavior
1. body locked only while necessary;
2. progress represents reasonable readiness proxy;
3. images/fonts critical to hero loaded;
4. completion timeline starts;
5. wordmark subtly resolves;
6. mask exits vertically or via clipping;
7. hero image reveals;
8. navigation enters;
9. scroll enabled.

## Timing
- aim: 1.1–1.8s on warm/fast load;
- do not add arbitrary wait;
- first session only or shortened repeat version.

## Reduced motion
- no animated progress sequence;
- small fade or direct page.

---

# 13. Homepage detailed requirements

## H1 — Hero

Content:
- ZYMOSIS / TATTOO display identity;
- one/two high quality hero assets;
- real location;
- concise role;
- `START A PROJECT ↗`.

Art direction:
- no centered marketing hero;
- typography can overlap/crop;
- images may sit off-grid;
- make viewport composition intentional.

Motion:
- title line reveal;
- image masked reveal;
- slight pointer/scroll response only on capable desktop devices.

## H2 — Statement

Large artist-positioning sentence.

Content must later be approved by artist.

Temporary working direction:
"Between sketch, gesture and structure."

Use it as placeholder only.

## H3 — Selected Work

6–10 items.

Layout:
- irregular editorial sequence;
- varied image scales;
- whitespace;
- indices.

Interaction:
- subtle image scale;
- optional cursor `VIEW`;
- details/micro copy appear if useful.

## H4 — Available Work preview

3–6 active designs.

Each:
- image;
- title optional;
- status;
- optional size guidance;
- inquiry action.

## H5 — Process

Three editorial steps:
1. Idea
2. Direction
3. Tattoo

Optional fourth:
4. Aftercare

Keep copy short.

## H6 — Artist preview

Image + brief text.

No fake biography.

## H7 — Final CTA

Large statement:
`HAVE SOMETHING IN MIND?`

Action:
`START A PROJECT ↗`

Footer follows.

---

# 14. Work page detailed requirements

## Opening
Large:
`WORK`

Potential Zymosis-specific typographic treatment.

## Gallery
Responsive art-directed layout.

Use:
- aspect-ratio aware images;
- Next image optimization;
- lazy loading;
- small metadata only where useful.

## Detail behavior
MVP options:
A. click opens lightbox/detail overlay;
B. click opens `/work/[slug]`.

Prefer option A if there is little editorial story per tattoo.
Prefer B when tattoos have sketches/process/healed images or meaningful narrative.

Do not build both without reason.

---

# 15. Available page

Opening:
`AVAILABLE WORK`

Explain with one sentence:
these are pre-designed pieces available for tattooing, subject to artist confirmation.

Design item:
- art image;
- status;
- size guidance;
- placement guidance;
- optional price guidance;
- `INQUIRE ABOUT THIS ↗`.

When clicked:
`/book?intent=available&design=<slug>`

Preserve attribution parameters.

If zero designs available:
display an art-directed empty state + Instagram CTA.

---

# 16. About page

Suggested sequence:

```text
ABOUT / THE ARTIST

[portrait]

Large philosophy statement

short biography

[studio/sketchbook images]

INFLUENCES
short copy

PROCESS
short copy

LOCATION / TRAVEL
real information

START A PROJECT ↗
```

Keep text limited enough to preserve visual rhythm.

---

# 17. Contact page

Purpose:
general inquiries only.

Fields:
- name;
- email;
- message.

Alternative contact details:
- Instagram;
- email;
- real city/studio location where publishable.

Tattoo project requests should direct to `/book`.

---

# 18. Booking funnel UX

## General principles
- one conceptual decision per screen where possible;
- strong display typography;
- visible step/progress indicator;
- Back/Continue;
- Enter key behavior does not accidentally submit early;
- preserve state;
- keyboard usable;
- strong success state.

## Steps

### B1 Intent
Question:
`WHAT ARE WE MAKING?`

Options:
- Custom
- Available work
- Not sure / consultation

### B2 Idea
Question:
`TELL ME ABOUT IT.`

Long text field.
Supporting prompt:
subject, mood, references, meaning.

### B3 Placement
Question:
`WHERE DOES IT LIVE?`

Select/list.
Optional placement photo.

### B4 Size
Question:
`HOW BIG?`

Input centimeters or ranges.
`NOT SURE` accepted.

### B5 References
Question:
`SHOW ME THE REFERENCES.`

Multiple uploads.

Accept initially:
- image/jpeg
- image/png
- image/webp

Set a configurable safe max size and validate both client/server.

### B6 Timing
Question:
`WHEN ARE YOU THINKING?`

Options/range + free note.

### B7 Budget
Question:
`WHAT RANGE ARE YOU WORKING WITH?`

Artist must approve ranges before launch.
Include `NEED GUIDANCE`.

### B8 Contact
- name;
- email;
- Instagram;
- phone optional;
- 18+ confirmation;
- privacy consent.

### B9 Review
Project summary.
Editable sections.
Submit.

### B10 Success
Reference code.
Clear non-acceptance wording:
"Your request has been received. An inquiry is not a confirmed appointment."

Artist-approved response expectation to be inserted later.

---

# 19. Form data and privacy

Potentially sensitive:
- contact data;
- body placement photos;
- reference uploads;
- tattoo ideas.

Requirements:
- use private storage for inquiry uploads;
- service role secrets server-only;
- RLS;
- signed/private access for artist review;
- no raw body-image URLs in analytics;
- minimal production logging;
- documented retention approach.

EU/NL-oriented implementation should be capable of supporting GDPR obligations, but legal/privacy copy must be reviewed before production.

---

# 20. Attribution model

Capture:
- first touch;
- latest touch;
- landing path;
- referrer where appropriate;
- UTM values;
- ManyChat identifiers passed in URL.

Persist during booking session.

Suggested type:

```ts
type Attribution = {
  firstTouch?: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
    term?: string
    ref?: string
    mcFlow?: string
    igContent?: string
    landingPath?: string
  }
  latestTouch?: { /* same fields */ }
}
```

Do not use fingerprinting.

---

# 21. Backend model

## portfolio_works
See master prompt for fields.

## available_designs
See master prompt.

## inquiries
See master prompt.

## inquiry_files
See master prompt.

Future:
- clients;
- appointments;
- deposits;
- inquiry notes;
- status history.

Do not add future tables to MVP merely because they are imaginable.

---

# 22. Inquiry lifecycle

Suggested statuses:
- `new`
- `reviewing`
- `needs_info`
- `accepted`
- `declined`
- `closed`

MVP does not require public status tracking.

Artist/admin can initially manage status directly in Supabase if no admin UI exists.

---

# 23. Email flows

## Visitor
Trigger: successful persisted inquiry.

Subject concept:
`Zymosis — inquiry received [REFERENCE]`

Body:
- confirmation;
- concise summary;
- next-step expectations;
- Instagram/site links.

## Artist
Trigger: successful inquiry.

Body:
- high-signal summary;
- lead contact;
- files;
- attribution.

Do not include private file URLs that are permanently public.

---

# 24. Analytics and conversion model

Primary funnel:
1. landing;
2. portfolio engagement;
3. book start;
4. reference upload;
5. submit;
6. success.

Measure:
- visits → booking starts;
- booking starts → submissions;
- source → inquiries;
- specific IG campaign/content → inquiries;
- available design views → inquiries.

Do not treat every scroll as an event.

---

# 25. SEO

Pages:
- Home;
- Work;
- Available;
- About;
- Book;
- Contact.

Requirements:
- unique titles/descriptions;
- canonical;
- OG image;
- image alt;
- sitemap;
- robots;
- JSON-LD only with verified data;
- fast mobile rendering.

Potential structured-data direction:
- `Person`;
- `LocalBusiness`/appropriate business subtype if accurate;
- social profile links.

Never insert unverified address, opening hours, ratings or awards.

---

# 26. Motion design specification

## Motion hierarchy
1. page entrance;
2. major section reveals;
3. image response;
4. micro hover.

If everything moves, nothing feels important.

## Loader
Approx. completion exit: 0.6–0.9s.

## Headings
Reveal: ~0.8–1.1s.

## Images
Reveal: ~1.0–1.3s.

## Micro links
Hover: ~0.2–0.4s.

## Parallax
Slow and tied to scroll.

## Menu
Entry: ~0.6–0.9s with small stagger.

## Page transitions
Keep perceived delay short.

## Mobile
Reduce:
- cursor;
- parallax intensity;
- hover imagery;
- complex pinned effects.

---

# 27. Technical architecture

## Rendering
Use Next.js App Router.

Server Components:
- page shells;
- content;
- SEO;
- data fetching.

Client Components:
- menu state;
- preloader;
- Lenis;
- GSAP timelines;
- booking form;
- uploads;
- custom cursor.

## Styling
Tailwind CSS 4.x + global design tokens.

Use custom CSS where art direction is clearer than long utility strings.

## Motion
- GSAP/ScrollTrigger: timelines, reveal choreography, scrub.
- Lenis: smooth scroll.
- Motion: presence/state/gesture transitions.

Avoid implementing the same animation in two libraries.

---

# 28. Proposed project structure

```text
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── work/
│   │   ├── available/
│   │   ├── about/
│   │   ├── book/
│   │   ├── contact/
│   │   └── privacy/
│   ├── api/
│   │   └── inquiries/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── available/
│   ├── booking/
│   ├── layout/
│   ├── motion/
│   ├── navigation/
│   ├── portfolio/
│   └── ui/
├── content/
├── features/
│   ├── analytics/
│   ├── inquiries/
│   └── portfolio/
├── lib/
│   ├── animation/
│   ├── attribution/
│   ├── analytics/
│   ├── supabase/
│   └── validation/
├── styles/
└── types/
```

---

# 29. Suggested dependencies

Only install when required.

Core:
```text
next
react
react-dom
typescript
tailwindcss
@tailwindcss/postcss
postcss
gsap
lenis
motion
react-hook-form
zod
@hookform/resolvers
@supabase/supabase-js
resend
```

Potential:
- `@supabase/ssr` if auth/admin is introduced.
- bot-protection SDK if required.
- PostHog client/server package if analytics selected.

Avoid:
- Bootstrap;
- Material UI;
- large theme systems;
- multiple smooth scroll libraries;
- multiple form libraries;
- arbitrary animation packages.

---

# 30. Environment variables

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://zymosistattoo.com

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=

RESEND_API_KEY=
INQUIRY_FROM_EMAIL=
INQUIRY_NOTIFICATION_EMAIL=

NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

Only include Turnstile if used.

Never expose service role/API secrets with `NEXT_PUBLIC_`.

---

# 31. Performance budget

Guidelines:
- prioritize hero LCP;
- no unnecessary autoplay video;
- use optimized responsive images;
- use explicit image dimensions/aspect ratio;
- limit initial JS;
- avoid shipping admin code to public routes;
- lazy-load below-fold galleries;
- defer noncritical analytics;
- reduce motion logic on touch/reduced-motion.

Target qualitative thresholds:
- no visible layout jump on hero;
- interactions remain responsive during scroll;
- mobile experience stays smooth on average modern hardware;
- no animation should cause persistent forced reflow.

---

# 32. Accessibility acceptance criteria

- all core routes keyboard navigable;
- menu focus trapped;
- Escape closes overlays;
- visible focus;
- form labels/errors valid;
- color contrast checked;
- text remains selectable;
- motion reduced when requested;
- touch targets reasonable;
- no hover-only essential information;
- alt text strategy implemented;
- screen reader can understand booking progress.

---

# 33. Browser/device QA

Desktop:
- latest Chrome;
- Safari;
- Firefox;
- Edge.

Mobile:
- iOS Safari;
- Android Chrome.

Test:
- resize;
- rotation;
- 200% zoom;
- keyboard;
- reduced motion;
- slow network;
- failed upload;
- failed submission;
- browser back.

---

# 34. Content requirements before launch

Required:
- final artist display name;
- brand wordmark/logo if any;
- Instagram handle;
- real location;
- contact email;
- hero portrait/tattoo imagery;
- 12–30 portfolio works;
- 3–10 available designs if feature launches;
- approved bio;
- approved artist statement;
- booking policy;
- budget ranges;
- age policy;
- deposit policy wording if mentioned;
- response-time expectation;
- privacy/legal copy;
- social-share image.

The build must remain functional with missing optional content but production launch should not use fabricated information.

---

# 35. Development phases

## P0 Discovery/repo audit
Deliverable:
implementation plan.

## P1 Foundation
Deliverable:
responsive static shell.

## P2 Homepage art direction
Deliverable:
high-fidelity visual homepage.

## P3 Motion
Deliverable:
loader/reveals/scroll/menu.

## P4 Secondary pages
Deliverable:
Work/Available/About/Contact/Privacy.

## P5 Booking UX
Deliverable:
validated frontend flow with development persistence adapter.

## P6 Backend
Deliverable:
Supabase/Storage/Resend.

## P7 Attribution/analytics/SEO
Deliverable:
measurable funnel and complete metadata.

## P8 QA/deployment
Deliverable:
production-ready Vercel release.

---

# 36. MVP acceptance criteria

## Brand
- clearly original Zymosis identity;
- gallery-like;
- sketch/graffiti influence controlled;
- no template feel.

## Homepage
- complete;
- responsive;
- art-directed;
- selected work;
- available preview;
- process;
- artist;
- inquiry CTA.

## Work
- optimized gallery;
- stable layouts;
- real content model.

## Booking
- multi-step;
- validation;
- upload;
- review;
- success;
- robust error handling.

## Backend
- persisted lead;
- secure files;
- source attribution;
- notifications when configured.

## Quality
- TypeScript clean;
- lint clean;
- production build passes;
- accessible;
- reduced motion;
- no console errors;
- no secrets committed.

---

# 37. Future roadmap

Possible Phase 2:
- lightweight authenticated admin;
- portfolio reorder/publish;
- available-design status;
- inquiry pipeline;
- notes;
- booking acceptance;
- Stripe deposit;
- Cal.com/custom scheduling;
- automated accepted/declined emails;
- ManyChat webhook/CRM sync;
- client appointment prep;
- aftercare automation.

Do not let Phase 2 scope delay MVP.

---

# 38. Current technical reference points

These sources were current when this specification was prepared in September 2026:

- Cursor project rules: https://cursor.com/docs/rules
- Next.js App Router: https://nextjs.org/docs/app
- Next.js v16 upgrade/current docs: https://nextjs.org/docs/app/guides/upgrading/version-16
- Tailwind CSS: https://tailwindcss.com/docs
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Motion for React: https://motion.dev/docs/react
- Supabase + Next.js: https://supabase.com/docs/guides/auth/quickstarts/nextjs
- Oscar Akermo reference site: https://www.oscarakermo.com/

Implementation agents should still respect the versions already installed in the repository and check official migration guidance before making major upgrades.
