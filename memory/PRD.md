# Founders Residency — Landing Page PRD

## Problem statement
Build a single-page landing for "Founders Residency" — a 20-day live-in program for 15 ambitious early-stage founders in Delhi NCR. Inspired by wagmihouse.xyz, themed after the user-provided pixel-art reference image (navy + lime + cream). Apply CTA → https://luma.com/rc82wk5k.

## Architecture
- Frontend-only React app (CRA + craco + Tailwind + shadcn)
- Smooth scroll via Lenis
- Pixel-art SVG illustrations (skyline, rocket, stars, moon, clouds)
- Reveal-on-scroll via IntersectionObserver
- No backend changes

## Implemented (Dec 2025)
- Hero with pixel-art FOUNDERS RESIDENCY title, animated stars, Delhi pixel skyline (India Gate + Qutub Minar + buildings), Build/Network/Collaborate/Grow tagline, stat lines, dual CTAs
- Sticky Navbar with smooth-scroll anchor nav and Apply CTA
- About / "A House of Builders"
- Schedule — 4 phase cards covering Days 1-20
- The Residency — 3 user-provided property images in pixel-bordered tiles + amenities grid
- Who Should Apply — 3 profile cards + "not for you" panel
- Past Founders — 4 testimonials + scrolling logo marquee
- FAQ — animated accordion (6 questions)
- Apply — large CTA section with rocket + Luma link
- Footer with all links

## Backlog (P1/P2)
- P1: Replace placeholder dates/contact email with real info
- P1: Real founder photos & company logos for marquee
- P2: Add subtle pixel-art parallax (multi-layer) in hero
- P2: Add a /apply page that pre-fills Luma fields
- P2: Add a hidden retro arcade easter egg ("press start to begin")
