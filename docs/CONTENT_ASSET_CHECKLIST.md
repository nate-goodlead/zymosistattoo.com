# Zymosis Tattoo — Content & Asset Checklist

Use this list before replacing development placeholders.

## Brand
- [ ] Final display name: Zymosis / Zymosis Tattoo / other
- [ ] Final wordmark/logo
- [ ] Favicon
- [ ] Social share image
- [ ] Instagram handle
- [ ] Contact email
- [ ] Publishable location
- [ ] Studio name if applicable

## Hero
- [ ] 1 portrait-oriented hero photograph
- [ ] 1 optional secondary hero image
- [ ] Approved role/location line
- [ ] Approved short artistic statement

## Portfolio
For every selected item:
- [ ] Optimized source image
- [ ] Alt-text/context
- [ ] Category/style
- [ ] Year
- [ ] Optional title
- [ ] Optional healed/fresh designation
- [ ] Permission to publish
- [ ] Desired display priority

Recommended launch quantity:
- 12–30 strong images;
- prioritize consistency and quality over volume.

## Available designs / flash
For each:
- [ ] Image
- [ ] Status
- [ ] Optional title
- [ ] Size guidance
- [ ] Placement guidance
- [ ] Price guidance if public
- [ ] Notes
- [ ] Permission to publish

## About
- [ ] Artist portrait
- [ ] Short bio
- [ ] Artistic philosophy
- [ ] Influences
- [ ] Custom-work approach
- [ ] Studio/location
- [ ] Travel/guest information if relevant
- [ ] Sketchbook/studio detail images

## Booking policies
- [ ] Minimum age / ID policy
- [ ] Deposit policy if mentioned
- [ ] Cancellation/rescheduling wording
- [ ] Typical response-time expectation
- [ ] Budget ranges
- [ ] Preferred tattoo sizes
- [ ] Preferred project types
- [ ] Projects the artist will not take
- [ ] Reference-image policy
- [ ] Placement photo policy

## Contact / legal
- [ ] Business/contact email
- [ ] Privacy notice
- [ ] Cookie/analytics decision
- [ ] Data retention decision for rejected/closed inquiries
- [ ] Legal/business identity details where required
- [ ] Terms/booking policy if needed

## Integrations
- [ ] Supabase project
- [ ] Resend account/domain
- [ ] Artist notification email
- [ ] PostHog/analytics decision
- [ ] ManyChat URL parameter conventions
- [ ] Vercel project
- [ ] Domain DNS access

## ManyChat campaign naming proposal
Use stable, lowercase values:

```text
utm_source=instagram
utm_medium=manychat
utm_campaign=<campaign>
utm_content=<post-or-reel-id>
mc_flow=<flow-name>
```

Example:
```text
https://zymosistattoo.com/book
?utm_source=instagram
&utm_medium=manychat
&utm_campaign=flash_drop_sep_2026
&utm_content=reel_184
&mc_flow=flash_interest
```

Do not pass sensitive user information in query parameters.
