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
- **Uncommitted Status:** Checkpointed and pushed in `6fc27e6 feat: refine motion and services interaction`.

---

## Decision 016 — Advisory Services Sticky Navigator & Flowing Detail Composition
- **Status:** Implemented (Uncommitted working tree)
- **Date:** 2026-09-13
- **Context:** The Advisory Services section previously presented a static two-column layout on desktop where both columns scrolled identically, losing the situation navigator context as the user scrolled through the detailed service card. Furthermore, switching service tabs lacked a refined editorial content transition, and the left-side items lacked distinct interactive affordance.
- **Architectural Solution:**
  - **CSS Sticky & Grid Architecture:** Desktop (>=1024px) utilizes an asymmetrical 5:7 two-column grid with `items-stretch`. The left column (`lg:col-span-5 relative`) stretches to match the natural document flow height of the right detail panel (~873px). The navigator container is configured with native CSS `position: sticky` (`className="lg:sticky space-y-3"`).
  - **ScrollSmoother Pinning Bridge:** Because ScrollSmoother transforms `#smooth-content` on desktop, native CSS `position: sticky` cannot establish a viewport-relative pinning boundary. A lightweight ScrollTrigger pin was integrated via `gsap.matchMedia()` (`start: 'top top+=132'`, `endTrigger: panel`, `end: () => 'bottom top+=' + (132 + nav.offsetHeight)`, `pin: nav`, `pinSpacing: false`). This keeps the navigator pinned at `top: 115px` (~34px clearance below the 81px fixed header) throughout panel scrolling, then unpins cleanly when the panel bottom aligns with the navigator bottom (sub-pixel difference <=0.7px), preventing any overlap with `#process`.
  - **Desktop/Mobile Split:** `<1024px` preserves the accessible accordion architecture. Desktop sticky pinning and tab mechanics are cleanly bypassed on mobile/tablet.
  - **Interactive Affordance & Active State:**
    - Each navigator item includes clear typographic hierarchy: prominent number badge (`item.number`), display title (`item.category`), and subtitle (`item.shortLabel`).
    - Right-edge directional arrow (`ArrowRight`) glides 4px on hover (`translate-x-1`) and locks in place when active.
    - Active item features an editorial vertical Eucalyptus accent bar on the left edge (`w-1 rounded-r-full bg-action-primary`), subtle card surface (`bg-surface border-action-primary/60 shadow-card ring-1 ring-action-primary/20`), and active badge treatment.
    - Fine-pointer hover incorporates subtle `-translate-y-0.5` lift and border darkening without 3D tilt.
    - Visible focus rings (`focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2`) ensure keyboard navigation accessibility.
  - **Content Transition Strategy:**
    - The outer card shell maintains fixed positioning and geometry to eliminate layout jitter.
    - Changing panel content is wrapped in `panelContentRef`.
    - Tab switches trigger a short, restrained GSAP transition (`opacity: 0 -> 1`, `y: 12px -> 0px`, `duration: 0.30s`, `ease: 'power2.out'`, `clearProps: 'transform'`).
    - Initial page-load reveal is bypassed (`isInitialRender`) so the section entrance is owned solely by `Reveal.tsx`.
    - Page scroll position is strictly preserved (0 scroll displacement during tab switching).
  - **Accessibility Preservation:**
    - Full WAI-ARIA tab semantics maintained (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`).
    - Full keyboard navigation supported (`ArrowDown`, `ArrowUp`, `Home`, `End` with wrap-around and automatic focus transfer).
    - Reduced-motion preference (`prefers-reduced-motion: reduce`) verified: immediate state and content updates with zero transforms and zero delay.
- **Verification:** Verified at 1440px, 1280px, 1024px, 768px, 390px, and 320px viewports. Zero horizontal overflow (`scrollWidth <= innerWidth`). All interactive touch targets >= 48px. Clean production build verified (`tsc -b && vite build` code 0).
- **Status:** Checkpointed and pushed in `feat: enhance advisory services interaction`.

---

## Decision 017 — Premium Hover & Pointer Interaction System (Motion Fix 5)
- **Status:** Implemented (Uncommitted working tree)
- **Date:** 2026-09-13
- **Context & Problem:** While the editorial typography and layout hierarchy were validated, interactive affordances previously relied on inconsistent micro-interactions. The site required a cohesive, bespoke, restrained hover and pointer interaction architecture that elevates perceived quality without generic SaaS tropes (no cursor followers, magnetic buttons, or excessive tilt).
- **Core Design Principles:**
  1. *Subtle & Intentional:* Micro-movements strictly bounded (buttons: -1px to -2px lift; cards: max ±2° tilt; images: 1.015–1.018 scale).
  2. *Strict Transform Ownership:* Outer wrappers (`Reveal`, grid cells, `.pin-spacer`) own entrance reveals, responsive layout, and ScrollTrigger pinning; inner interactive elements exclusively own hover/pointer transforms.
  3. *Clean Return to Neutral:* All pointer-driven GSAP tweens specify `clearProps: 'transform'`, leaving zero permanent inline transforms in the DOM.
  4. *Input Safety & Progressive Enhancement:* Pointer-tracking 3D tilts are gated to `(pointer: fine)` and bypass `prefers-reduced-motion: reduce`. Touch devices (`pointer: coarse`) remain completely unaffected with zero sticky-hover artifacts.
  5. *Calm Informational Restraint:* Static non-clickable content (Trust pillars, Process steps, Social proof reserved frame, legal disclosures) remains completely unanimated on hover.
- **5 Distinct Interaction Profiles Implemented:**
  - **Profile A (Buttons - Primary, Secondary, Advisory):** -2px micro-lift (`hover:-translate-y-0.5`), refined shadow (`hover:shadow-card-hover`), active return (`active:translate-y-0`), and 3–4px directional arrow glide (`group-hover:translate-x-1`) with `motion-reduce:transform-none`. Zero 3D tilt.
  - **Profile B (Service Cards / Desktop Tabs):** Component-scoped pointer-tracking 3D tilt (`transformPerspective: 1000`, `rotateX: max ±2°`, `rotateY: max ±2°`, `y: -2px`, smooth return to neutral on leave `duration: 0.35, ease: 'power2.out', clearProps: 'transform'`), gated to `(pointer: fine)` and `!prefers-reduced-motion`.
  - **Profile C (Editorial Portraits):** Hero portrait scale `1.018` with decorative paper offset response (`translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4`); About portrait scale `1.015` with paper offset response (`-translate-x-3 sm:-translate-x-4 translate-y-3 sm:translate-y-4`). Both bounded by `overflow-hidden` 4:5 frames.
  - **Profile D (Interactive Icons):** Mobile menu toggle in Header (`group-hover:scale-105`), FAQ expand button (`group-hover:scale-105`), Education expand chevron (`group-hover:scale-105`), Footer consultation link (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`).
  - **Profile E (Interactive Disclosure Rows):** FAQ and Education accordion rows receive a gentle background wash on hover (`hover:bg-surface/50 rounded-xl transition-colors duration-200`).
  - **Static Content:** Trust pillars, Process steps, Social Proof reserved frame, Disclosures left completely unanimated.
- **Verification & Evidence:**
  - Production build (`tsc -b && vite build`) passed cleanly with 0 TypeScript errors and 0 Vite warnings.
  - Runtime validation in Chromium at 1440px desktop (`pointer: fine`) and 390px mobile (`pointer: coarse`).
  - Zero console messages observed.
  - Horizontal overflow verified: `scrollWidth <= innerWidth` across tested viewports.
  - 2 screenshots captured: 1440px desktop Services and 390px mobile Services.
- **Status:** Checkpointed in `feat: add premium hover interactions`.

---

## Decision 018 — Selective Premium Floating Motion (Motion Fix 4)
- **Status:** Checkpointed in `feat: add selective floating motion`.
- **Date:** 2026-09-13
- **Context & Problem:** While the page possessed rich interaction and reveal choreography, ambient background rhythm was minimal. A selective, organic floating motion layer was required to make the interface feel alive and human without becoming gimmicky, hyperactive, or SaaS-like.
- **Core Principles & Exclusions:**
  - Ambient decorative elements only.
  - Strict non-content rule: Zero floating on typography (H1, H2, body), buttons, cards, or portraits.
  - Zero synchronized motion across elements (distinct axes, durations, delays, and amplitudes).
  - Absolute pointer safety: all floating elements marked `pointer-events-none select-none aria-hidden="true"`.
- **Selected Targets & Movement Profiles:**
  1. *Hero Reassurance Dot:* Y-axis, 4px desktop (2.5px tablet, 0px mobile), 4.8s duration, 0s delay, `sine.inOut`.
  2. *Hero Eyebrow Hairline:* X-axis, 3.5px desktop (2.3px tablet, 0px mobile), 6.2s duration, 0.7s delay, `sine.inOut`, subtle opacity modulation (`0.80 -> 1.0 -> 0.80`).
  3. *About Eyebrow Hairline:* 2D (X+Y) elliptical drift, 3px desktop (2px tablet, 0px mobile), 5.6s duration, 1.4s delay, `sine.inOut`, subtle opacity modulation (`0.80 -> 1.0 -> 0.80`).
  4. *Services Verification Dot:* Y-axis, 3px desktop (2px tablet, 0px mobile), 5.2s duration, 2.1s delay, `sine.inOut`, subtle opacity modulation (`0.85 -> 1.0 -> 0.85`).
  5. *Contact Inquiries Dot:* Y-axis, 3px desktop (2px tablet, 0px mobile), 5.8s duration, 2.8s delay, `sine.inOut`, subtle opacity modulation (`0.85 -> 1.0 -> 0.85`).
- **Responsive & Reduced-Motion Policy:**
  - Desktop (≥1024px): 3–4px amplitude.
  - Tablet (768–1023px): ~65% scaled amplitude (2–2.5px).
  - Mobile (<768px) & Narrow Mobile (≤360px): Disabled (0px displacement, neutral opacity).
  - Reduced Motion (`prefers-reduced-motion: reduce`): Disabled immediately with `clearProps: 'transform'`.
- **Transform Ownership:**
  - Floating accents operate exclusively on innermost decorative child elements.
  - Ancestor wrappers exclusively own entrance reveals (`Reveal.tsx`), pinning (`ScrollTrigger`), and layout flow. Zero transform collision.
- **Verification:**
  - Production build (`tsc -b && vite build`) passed with 0 errors and 0 warnings.
  - Runtime validation across 1440px, 1280px, 1024px, 768px, 390px, and 320px with zero horizontal overflow (`scrollWidth <= innerWidth`).
  - Screenshots captured at 1440px desktop and 390px mobile.

---

## Decision 019 — Selective Animated Gradient System (Motion Fix 7 & 7B Calibration)
- **Status:** Checkpointed in `feat: refine animated gradient atmosphere`.
- **Date:** 2026-09-13
- **Context & Problem:** While the initial gradient architecture was technically sound, initial opacities ($3\%\text{–}5\%$) and broad radii ($640\text{–}680\text{px}$) made the atmospheric presence too subtle to be easily perceived during normal browsing. Motion Fix 7B calibrated opacity, radial focus, and drift speed to achieve clearly perceptible, premium atmospheric depth without becoming dominant or SaaS-like.
- **Selected Areas & Calibrated Profiles:**
  - *Hero:*
    - Orb A (Terracotta dawn warmth behind portrait): Center opacity $0.085$ (tested $0.06\text{–}0.10$), $38\%$ stop at $0.03$, transparent at $68\%$. Dimensions: $600\times 600\text{px}$. Drift: $+28\text{px}, -20\text{px}$, duration $13.0\text{s}$, delay $0.0\text{s}$.
    - Orb B (Eucalyptus grounding behind value prop): Center opacity $0.070$ (tested $0.05\text{–}0.09$), $42\%$ stop at $0.025$, transparent at $72\%$. Dimensions: $540\times 540\text{px}$. Drift: $-24\text{px}, +22\text{px}$, duration $11.5\text{s}$, delay $1.0\text{s}$.
  - *Services:*
    - Orb A (Eucalyptus consultative diffusion behind detail panel): Center opacity $0.075$ (tested $0.06\text{–}0.09$), $40\%$ stop at $0.025$, transparent at $68\%$. Dimensions: $580\times 580\text{px}$. Drift: $-22\text{px}, +26\text{px}$, duration $14.0\text{s}$, delay $0.6\text{s}$.
    - Orb B (Terracotta grounding warmth): Center opacity $0.065$ (tested $0.05\text{–}0.08$), $38\%$ stop at $0.020$, transparent at $68\%$. Dimensions: $500\times 500\text{px}$. Drift: $+20\text{px}, -18\text{px}$, duration $12.0\text{s}$, delay $0.0\text{s}$.
  - *Contact:*
    - Orb A (Eucalyptus welcoming atmosphere supporting booking card): Center opacity $0.085$ (tested $0.06\text{–}0.10$), $42\%$ stop at $0.030$, transparent at $70\%$. Dimensions: $580\times 580\text{px}$. Drift: $+25\text{px}, -25\text{px}$, duration $13.5\text{s}$, delay $1.2\text{s}$.
    - Orb B (Terracotta warmth under editorial column): Center opacity $0.070$ (tested $0.05\text{–}0.09$), $40\%$ stop at $0.025$, transparent at $68\%$. Dimensions: $520\times 520\text{px}$. Drift: $-20\text{px}, +20\text{px}$, duration $15.0\text{s}$, delay $0.0\text{s}$.
  - *Deliberately Excluded:* Header, Trust pillars, About, Process, Education, Social Proof, FAQ, and Footer remain completely free of gradient motion to preserve section cadence, authoritative simplicity, and high contrast.
- **Gradient Movement Strategy:**
  - Gradient animation primarily uses transform-based movement.
  - Pure CSS `radial-gradient` color stops fading naturally to transparent without paint-heavy blur filters (`filter: blur(...)`) or expensive SVG masks.
  - Low-frequency, asynchronous multi-axis drift ($11.5\text{s}–15.0\text{s}$ cycles) with gentle scale modulation ($0.97–1.03$) and `sine.inOut` easing.
  - Decoupled from floating accents ($4.8\text{s}–6.2\text{s}$) and hover interactions, avoiding phase synchronization or harmonic repetition.
- **Responsive & Reduced-Motion Policy:**
  - Desktop (≥1024px): Full calibrated drift ($20–28\text{px}$).
  - Tablet (768–1023px): Reduced amplitude (~50%, $10–14\text{px}$).
  - Mobile (<768px) & Narrow Mobile (≤360px): Motion disabled ($0\text{px}$ displacement); static radial gradients remain visible for zero-overhead background depth.
  - Reduced Motion (`prefers-reduced-motion: reduce`): Motion disabled; transforms cleared via `clearProps: 'transform'`.
- **Accessibility & Transform Ownership:**
  - Gradient layers are rendered with `aria-hidden="true"`, `pointer-events-none select-none`, and `z-0` behind content (`relative z-10`).
  - Local contrast behavior verified: text contrast ratios continue to comfortably exceed WCAG AAA standards ($>13:1$).
- **Verification:**
  - Production build (`tsc -b && vite build`) passed with 0 errors and 0 warnings.
  - No layout instability was observed during local preview testing.
  - Runtime validation across 1440px, 1280px, 1024px, 768px, 390px, and 320px with zero horizontal overflow (`scrollWidth <= innerWidth`).
  - Visual inspection confirmed at 1440px desktop and 390px mobile.
