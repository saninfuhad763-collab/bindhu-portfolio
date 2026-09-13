# Project Decisions — Bindhu Portfolio

This document records established architectural, design, operational, and organizational decisions. Only confirmed decisions are documented here.

---

## Decision 001 — Project Responsibility Model
- **Status:** Established
- **Date:** 2026-09-12
- **Context:** The development and design of the Bindhu health insurance consultant portfolio is a collaborative effort between ChatGPT and Antigravity.
- **Roles & Responsibilities:**
  - **ChatGPT:**
    - Planner & Product Strategist
    - UX / Design Strategist
    - Creative Director
    - Architecture Planner
    - Reviewer & Implementation Prompt Engineer
  - **Antigravity:**
    - Implementer & Code Author
    - Repository Inspector & Environment Maintainer
    - Reference-Site Inspector & UX Analyst
    - Project-State & Context System Maintainer (`.ai/` custodian)

---

## Decision 002 — Content Authenticity & Placeholder Constraint
- **Status:** Established
- **Date:** 2026-09-12
- **Context:** Final client personal information, licensing, awards, insurer associations, and experience details are not yet provided.
- **Decision:**
  - All content, copy, metrics, and profiles will strictly use clearly marked placeholder indicators.
  - Never fabricate real credentials, certifications, awards, client counts, insurer partnerships, or testimonials.
  - Content must clearly represent the *type* and *structure* of information that will eventually be provided without asserting false claims.

---

## Decision 003 — Reference Site Usage Methodology
- **Status:** Established
- **Date:** 2026-09-12
- **Reference URL:** `https://themewagon.github.io/Ethos/`
- **Decision:**
  - The reference website is for design inspiration, UX structure analysis, and behavioral patterns only.
  - **Strict No-Clone Policy:** Do NOT copy the reference site's exact layout, copy, branding, color schemes, graphics, imagery, component combinations, or distinctive visual identity.
  - Process to follow: **Inspect → Analyze → Identify Principles → Abstract → Reinterpret → Create**.

---

## Decision 004 — Content Decoupling Architecture
- **Status:** Established
- **Date:** 2026-09-12
- **Context:** Real client copy and assets will arrive at a later phase after the core portfolio structure is implemented.
- **Decision:**
  - Content, copy, navigation items, FAQs, and service details will be organized in a centralized content/data structure separate from the UI components.
  - Replacing placeholders with genuine client information in the future must not require redesigning components, altering layouts, or refactoring CSS.

---

## Decision 005 — Reference Analysis Findings & Anti-Clone Boundaries
- **Status:** Established
- **Date:** 2026-09-12
- **Context:** Live inspection of `https://themewagon.github.io/Ethos/` completed via browser instrumentation.
- **Decision:**
  - **Retain / Abstract:** Generous vertical rhythm (uncluttered whitespace), editorial typography scale, progressive disclosure accordion for service depths, clear section pacing (introductory display statement followed by structured details).
  - **Reject / Avoid:**
    - Dark tech-noir color palette (`#0b0a15`, `#1d1b37`) — too cold/aloof for healthcare.
    - Watermark background numbers (`01`, `02`) and decorative vertical line elements (`.right-vert-line`).
    - Graphic design portfolio / Behance showcase gallery (irrelevant for a health insurance consultant).
    - `Download CV` header CTA (inappropriate for prospective health insurance clients).
    - Passive `mailto:` link in place of an interactive, low-friction inquiry form.

---

## Decision 006 — Information Architecture Strategy for Bindhu
- **Status:** Established
- **Date:** 2026-09-12
- **Decision:** Reorganize the reference's developer/agency sequence into a healthcare consultation conversion funnel:
  1. Header with direct Consultation CTA.
  2. Reassuring Hero with clear value proposition and dual CTAs.
  3. Immediate Trust Bar / Key Advisor Principles.
  4. About Bindhu (human story, independent fiduciary/advocate stance).
  5. Core Advisory Services (Individual, Family, Senior/Medicare, Small Business).
  6. The 4-Step Consultation Process (Assessment → Comparison → Recommendation → Ongoing Support).
  7. Client Guidance / Insurance Education (Demystifying jargon, replacing the developer "portfolio").
  8. Client Stories & Testimonials (clearly labeled placeholders).
  9. Frequently Asked Questions (interactive accordion reducing friction).
  10. Consultation Booking & Inquiry Form (replacing raw mailto).
  11. Footer with compliance disclosures and professional licensing placeholders.

---

## Decision 007 — Final Typography System
- **Status:** Locked
- **Date:** 2026-09-12
- **Display / Heading Font:** `Lora` (Contemporary humanist serif with calligraphic warmth and grounded dignity).
- **Body / Interface Font:** `Plus Jakarta Sans` (Open-counter geometric/humanist sans-serif for hyper-legible UI, inputs, and policy text).
- **Rationale:** Avoids high-contrast Didones (Playfair) that feel cold or elitist, and avoids generic clinical sans-serifs. Lora provides human warmth, empathy, and consultative authority; Plus Jakarta Sans ensures crisp precision.

---

## Decision 008 — Final Color System
- **Status:** Locked
- **Date:** 2026-09-12
- **Base Surfaces:** Warm Ivory (`#FBFBF9`), Soft Linen (`#F4F3EE`), Pure White (`#FFFFFF`).
- **Primary Brand / Authority:** Deep Maritime Slate (`#1A2B3C`) — 13.5:1 contrast on Ivory (AAA).
- **Vitality / Primary Action:** Calming Eucalyptus (`#2E6F5E`) — 5.2:1 contrast on White (AA).
- **Guidance Accent (Terracotta Justification):** Warm Terracotta (`#C46849`) — strictly used for human attention cues, advisory badges, and open enrollment notices; avoids alarmist red or startup-y orange.
- **Text System:** Charcoal Slate (`#1E293B`) for primary text, Slate (`#475569`) for secondary, Soft Slate (`#64748B`) for meta.

---

## Decision 009 — Trust Architecture & Authenticity Segregation
- **Status:** Locked
- **Date:** 2026-09-12
- **Constraint:** Zero unverified claims in production.
- **Rule:** Strict architectural segregation between:
  1. *Always-Available Trust Mechanisms:* Clear educational comparisons, transparent consultation steps, zero-friction privacy-conscious contact forms, accessible typography, and professional visual poise.
  2. *Verified-Later Fields:* License numbers, carrier logos, client counts, awards, and testimonials remain labeled placeholders until verified by Bindhu. Never use unverified claims as factual assertions.

---

## Decision 010 — Frontend Stack & Tooling Selection
- **Status:** Implemented
- **Date:** 2026-09-12
- **Decision:** Scaffold the client portfolio using **React 18 + Vite 6 + TypeScript 5.7 + Tailwind CSS 3.4 + PostCSS**.
- **Rationale:**
  - Fast, modern, zero runtime overhead, high developer ergonomics.
  - Avoids legacy frameworks (jQuery, Bootstrap, Slick) identified in the Ethos reference.
  - TypeScript provides compile-time safety across design tokens and the centralized content schema.
  - Tailwind CSS config cleanly codifies all approved semantic color, typography, spacing, and shadow tokens.

---

## Decision 011 — Market Neutrality & Jurisdiction Safeguard
- **Status:** Implemented
- **Date:** 2026-09-12
- **Decision:** Omit hardcoded regional or U.S.-specific healthcare constructs (Medicare A/B/D, HMO/PPO, OOPM, US subsidies) from production copy until the client's operating jurisdiction is confirmed.
- **Implementation:** Education topics and policy concepts are structured as neutral placeholders (`[Coverage Concepts — Pending Client Market Confirmation]`) within the centralized `SiteContent` store.

---

## Decision 012 — Global Header & Navigation Architecture
- **Status:** Implemented
- **Date:** 2026-09-12
- **Decision:**
  - **Brand Representation:** Restrained typographic brand treatment combining `Lora` 600 bold for "Bindhu" and `Plus Jakarta Sans` 500 tracking-wider uppercase for "HEALTH INSURANCE CONSULTANT", avoiding premature logo asset requirements.
  - **Navigation Structure:** 5 primary anchor targets (About, Services, How It Works, Guidance, FAQ) plus primary action button ("Book a Consultation" -> `#contact`).
  - **Scroll Stabilization:** Sticky header (`z-40`) with progressive background opacity (`bg-canvas/90` to `bg-canvas/95`), subtle backdrop blur (`backdrop-blur-md`), and hairline bottom border (`border-border-subtle`) triggered when scroll exceeds 20px. Replaces the jarring height resizing and theatrical animation from the reference site.
  - **Mobile Drawer:** Full-fidelity Warm Ivory panel with 48px touch targets, Lucide Menu/Close toggle, background scroll lock (`overflow: hidden`), and keyboard dismiss listener (Escape key).
  - **Accessibility Compliance:** WCAG 2.1 AA bypass link ("Skip to main content"), accessible `aria-expanded` and `aria-controls` bindings, 48px minimum touch targets, and visible focus rings (`:focus-visible`).

---

## Decision 013 — ScrollSmoother Desktop Smoothness Calibration
- **Status:** Implemented (Uncommitted working tree)
- **Date:** 2026-09-13
- **Context:** User feedback indicated scrolling felt slightly rigid: *"The scrolling does not feel extremely smooth enough."*
- **Tested Values:**
  - `0.8`: Previous baseline. Overly tight; mouse wheel increments felt slightly stepped.
  - `1.0`: Standard default. Improved, but conservative for an editorial slow-living design.
  - `1.15`: **Selected**. Fluid, velvety glide; luxurious momentum without lag, drift, or overshoot.
  - `1.25`: Over-smoothed. Inertia continues past stopping intention, causing reading disconnect.
- **Decision:** Calibrate `ScrollSmoother.smooth` and `MOTION.duration.smoothScroll` to `1.15`. Maintain `smoothTouch: 0` for 100% native mobile touch scrolling.
- **Uncommitted Status:** Changes in `motionConfig.ts` and `Services.tsx` remain uncommitted pending subsequent motion refinements.

---

## Decision 014 — Hero Entrance Choreography Calibration
- **Status:** Implemented (Uncommitted working tree)
- **Date:** 2026-09-13
- **Previous Behavior:** The initial Hero entrance sequence stretched to ~1.50–1.60s. The portrait and reassurance note were placed at the tail end of a serial chain, so they were still actively animating when users initiated their first scroll down the page, colliding visually with the incoming Trust section.
- **Root Cause:** Fixed uniform durations without sufficient overlap delayed the portrait start to $t \approx 0.75\text{s}$, ending past $1.50\text{s}$.
- **New Choreography:** Pure page-load timeline (independent of ScrollTrigger) with element-specific durations and overlapping entrance offsets:
  - Group A (Identity/Eyebrow): starts at $t = 0.04\text{--}0.06\text{s}$, duration 0.28–0.42s
  - Group B (Primary Message/H1): starts at $t \approx 0.18\text{s}$, duration 0.36–0.52s
  - Group C (Supporting Message/Subheadline): starts at $t \approx 0.34\text{s}$, duration 0.32–0.46s
  - Group D (Actions/Dual CTAs): starts at $t \approx 0.46\text{s}$, duration 0.28–0.42s
  - Group E (Reassurance Note): starts at $t \approx 0.60\text{s}$, duration 0.24–0.36s
  - Group F (Portrait Composition): starts in parallel with CTAs at $t \approx 0.50\text{s}$ ($x: 20\text{px}$, scale $0.985 \rightarrow 1.0$ on desktop; $x: 0, y: 12\text{--}16\text{px}$ on tablet/mobile), completing simultaneously with copy between $t \approx 0.80\text{s}$ (mobile) and $1.13\text{s}$ (desktop).
- **Responsive Behavior:** Conforms to Responsive Motion Constitution across 1440, 1280, 1024, 768, 390, and 320px viewports. Zero horizontal overflow (`scrollWidth <= window.innerWidth`).
- **Reduced Motion:** Handled via `gsap.matchMedia()`: immediate `gsap.set()` applies `opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform'`. No timeline or delay is executed.
- **Uncommitted Status:** Changes in `Hero.tsx`, `motionConfig.ts` (Motion Fix 1), and `Services.tsx` (UI Fix 10) remain strictly uncommitted in the working tree pending subsequent motion fixes.

---

## Decision 015 — Scroll-Reveal Choreography, Grouping & Trigger Calibration
- **Status:** Implemented (Uncommitted working tree)
- **Date:** 2026-09-13
- **Previous Behavior:** All reveals used an uncalibrated hardcoded trigger (`start: 'top 88%'`) without stagger or descendant target support. At 1440x900 desktop viewport, Trust section top (777px) sat above 88% (792px) on initial page load ($Y=0$), triggering prematurely during the Hero entrance. Trust pillars and Process steps lifted as heavy monolithic blocks. Services selector lacked reveal coverage. Missing `clearProps` left permanent inline transforms.
- **Root Cause:** Uniform `start: 'top 88%'` was both too late for scrolling momentum and too high for sections just below the fold. `Reveal.tsx` lacked grouping and stagger orchestration.
- **New Trigger Strategy:**
  - Calibrated responsive trigger tokens: Desktop `top 84%` (756px in 900px viewport, preventing premature trigger at $Y=0$), Tablet `top 85%`, Mobile `top 86%`, Narrow Mobile `top 86%`.
  - Upgraded `Reveal.tsx` to support `stagger`, `selector`, custom `start`, and automatic `clearProps: 'transform'` upon completion.
  - Implemented `gsap.set()` initialization to ensure all targets are primed in hidden state before ScrollTrigger fires, followed by `gsap.to()` execution.
- **Section-by-Section Choreography:**
  - **Trust**: Heading leads; 4 pillars enter with 90ms grouped stagger (desktop) / 70ms (mobile) via `selector=".group"`.
  - **About**: Coordinated entry; narrative leads, portrait follows with 60ms delay.
  - **Services**: Section heading leads; desktop navigator and mobile accordion enter as cohesive regions (`delay={0.08}`) without altering internal tab/accordion mechanics.
  - **Process**: 4 journey steps stagger sequentially ($0.10\text{s}$ desktop, $0.07\text{s}$ mobile) along the horizontal/vertical line; connector line remains structural.
  - **Education, Social Proof, FAQ, Contact**: Coordinated group entries with calibrated delays (`0.08s`).
  - **Footer**: Zero reveals (quiet landing).
- **Responsive Behavior:** Conforms to Responsive Motion Constitution across 1440, 1280, 1024, 768, 390, and 320px viewports. Zero horizontal overflow (`scrollWidth <= innerWidth`).
- **Reveal Density:** Active DOM instances increased by only 1 (from 16 to 17) to provide coverage for Services navigator, while eliminating monolithic card blocks via internal staggers.
- **Reduced Motion:** Verified: `prefers-reduced-motion: reduce` bypass immediately runs `gsap.set(targets, { opacity: 1, x: 0, y: 0, clearProps: 'transform' })`. Zero delays, zero tweens, zero transforms.
- **Selective Screenshots:** 2 captures: 1440px desktop Trust section and 390px mobile Trust section.
- **Uncommitted Status:** All modifications across `Reveal.tsx`, `motionConfig.ts`, sections, and documentation remain strictly uncommitted.
