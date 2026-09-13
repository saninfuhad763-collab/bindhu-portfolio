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

---

## Decision 020 — Global Typography & Spatial Rhythm Alignment (Velora Reference)
- **Status:** Approved / Implemented
- **Date:** 2026-09-13
- **Context:** Visual inspection of the supplied Velora reference confirmed that the primary divergence between Bindhu and the reference was Bindhu's reliance on a literary serif font (Lora) for headings and minor section spacing variance. Velora employs an authoritative, high-density geometric sans-serif heading system with tight optical leading, negative letter-spacing, and generous, disciplined whitespace.
- **Decision:**
  - **Option B Selected:** Replaced `Lora` with `Plus Jakarta Sans` as the unified typography family across the entire application (both display headings and body copy).
  - **Font Imports:** Removed `Lora` entirely from Google Fonts. Loaded `Plus Jakarta Sans` (weights 400, 500, 600, 700) in `index.html`. Reduced font network payload and eliminated font weight overhead.
  - **Scale & Leading Tokens:**
    - `hero-h1`: `clamp(2.25rem, 4.5vw, 3.5rem)`, `leading: 1.16`, `tracking: -0.025em`, font-semibold (600).
    - `section-h2`: `clamp(1.875rem, 3.2vw, 2.625rem)`, `leading: 1.2`, `tracking: -0.02em`, font-semibold (600).
    - `card-h3`: `1.375rem` (22px), `leading: 1.3`, `tracking: -0.015em`, font-semibold (600).
    - `h4`: `1.125rem` (18px), `leading: 1.4`, `tracking: -0.01em`, font-semibold (600).
    - `body-large` / `body-lead`: `1.1875rem` (19px), `leading: 1.65`, `tracking: -0.005em`.
    - `body-regular`: `1.0625rem` (17px), `leading: 1.65`, `tracking: 0`.
    - `body-small`: `0.875rem` (14px), `leading: 1.6`, `tracking: 0.005em`.
    - `eyebrow`: `0.8125rem` (13px), `leading: 1.4`, `tracking: 0.08em`, uppercase/semibold.
  - **Global Spacing Normalization:**
    - Section padding normalized across all content sections (Trust, About, Services, Process, Education, Social Proof, FAQ, Contact) to `py-14 sm:py-16 lg:py-24` (56px mobile / 64px tablet / 96px desktop).
    - Section intro margin normalized to `mb-8 sm:mb-12 lg:mb-16`.
    - Card padding normalized to `p-6 sm:p-7 lg:p-8` with `rounded-xl`.
  - **Trust Icon Removal:**
    - All 4 Lucide icons and emblem badge boxes removed from `TrustValue.tsx`. Cards converted to pure typographic, dignified editorial pillars.
- **Verification:**
  - Build passed: 0 TypeScript errors, 0 Vite warnings.
  - Bundle size: JS 350.65 kB (116.86 kB gzip), CSS 37.94 kB (7.08 kB gzip), HTML 2.08 kB (0.83 kB gzip).
  - Runtime verified via Chrome DevTools MCP: 0 console errors, 0 warnings across 1440, 1280, 1024, 768, 390, 320px with zero horizontal overflow.

---

## Decision 021 — Final Responsive Motion System Baseline & Checkpoint
- **Status:** Approved / Checkpointed
- **Date:** 2026-09-13
- **Context:** Following the completion and checkpointing of global typography normalization (`feat: align typography and spacing system`), the responsive motion architecture was reviewed to establish the final baseline prior to client asset onboarding.
- **Decision:**
  - **Motion Baseline Locked:** Confirmed the unified motion system architecture across all five defined tiers without modifying existing animation behavior or adding third-party libraries:
    1. **Desktop (>=1024px):** GSAP ScrollSmoother enabled (`smooth: 0.8`, `effects: true`), independent Hero page-load entrance timeline, pinned Advisory Services split-panel navigation, fine-pointer-gated hover interactions, and selective subtle floating accents (`y: 3px`).
    2. **Tablet (768–1023px):** Simplified vertical scroll reveals (`y: 16px`), reduced stagger (`80ms`), disabled pin-scrolling in Services for natural scroll flow, and restrained floating motion.
    3. **Mobile (<768px):** ScrollSmoother disabled (`smoothTouch: 0`), native momentum scrolling preserved, lateral animations converted to upward fades (`y: 14px`), reduced stagger (`70ms`), touch-friendly interactive states, and floating motion disabled.
    4. **Narrow Mobile (<=360px):** Minimal displacement (`y: 10px`), zero lateral animation, reduced stagger (`50ms`), and decorative motion disabled to prevent viewport overflow or clipping.
    5. **Reduced Motion (`prefers-reduced-motion: reduce`):** Complete bypass of animations, zero transforms applied, instantaneous component rendering, and native scrolling.
  - **Atmospheric Gradients:** Selective multi-layer radial background gradients maintained in Hero, Services, and Contact with `aria-hidden="true"` and non-blocking background positioning.
  - **Services Visual Language:** Retained pure typographic navigation with category numbers (`01`, `02`, `03`, `04`), title, subtitle, and directional indicators; no category pictograms.
- **Verification:**
  - Build passed: `tsc -b && vite build` completed cleanly with 0 TypeScript errors and 0 Vite warnings.
  - Runtime verified: 0 console errors, 0 warnings across 1440, 1280, 1024, 768, 390, and 320px viewports with zero horizontal overflow (`scrollWidth <= innerWidth`).

---

## Decision 022 — Services Navigator — Editorial Row Treatment
- **Status:** Implemented / Pending Review
- **Date:** 2026-09-13
- **Context:** The previous four desktop left-side Advisory Services selectors used floating rounded cards (`rounded-xl p-5 border shadow-card` with `space-y-3` and pill-badged numbers). This produced a generic dashboard card appearance that competed with the right-side detail panel and diverged from the calm, typography-first editorial language of the website.
- **Decision:**
  - **Rejection of Generic Card Style:** Replaced the 4 floating card boxes with an editorial navigation index.
  - **Editorial Row Architecture:** Implemented a unified line-divided index bounded by subtle hairline borders (`divide-y divide-border-subtle/80 border-y border-border-subtle/80`) matching the editorial patterns established in Education and FAQ.
  - **Typography & Number Hierarchy:**
    - Primary: Service category title (`font-display text-base lg:text-[1.0625rem] leading-snug`, `Plus Jakarta Sans`), font-semibold when active, medium when inactive.
    - Secondary: Service short label / subtitle (`font-body text-xs`, `text-content-secondary` when active, `text-content-muted` when inactive).
    - Tertiary: Pure tabular monospace numerals (`font-mono text-xs sm:text-sm font-semibold tabular-nums tracking-wider`), highlighted with `text-action-primary` when active and quiet `text-content-muted` when inactive, eliminating artificial badge containers.
  - **Active State:** Restrained and unmistakable: full-height vertical eucalyptus rail (`w-1 bg-action-primary`), subtle crisp white surface fill (`bg-surface`), darker title text, and eucalyptus-accented number and directional arrow. No heavy shadows or thick glow rings.
  - **Inactive & Hover State:** Sits flat on the Soft Linen canvas (`bg-transparent`), receiving a gentle wash (`hover:bg-surface/40`) and subtle arrow glide (`translate-x-1`) on hover without card lift.
  - **Preserved Scope:** Zero changes to right-side detail panel, service data/content, mobile/tablet accordion, desktop sticky ScrollTrigger pinning, keyboard navigation, or ARIA semantics.
- **Verification:**
  - Build: `tsc -b && vite build` passed with 0 errors, 0 warnings.
  - Runtime: 0 console errors, 0 warnings across 1440px, 1024px, 768px, 390px, and 320px viewports with zero horizontal overflow (`scrollWidth <= innerWidth`).
### Decision 023: Advisory Services Continuous Scroll-Linked Editorial Experience & Architectural Card Redesign
- **Status:** Implemented / Pending Review
- **Date:** 2026-09-13
- **Context:** The initial scroll-driven implementation used discrete threshold triggers (`p >= 0.75`, etc.) that triggered one-off React state changes and fixed-duration animations, creating a discrete UI state-switching feeling rather than a continuous scrolling narrative. In addition, the right-side card used a nested container/dashboard layout with multiple pill badges and bordered blocks that competed with content.
- **Decision:**
  - **Master Scrubbed Timeline Architecture:** Replaced discrete threshold triggers with a single master GSAP timeline scrubbed continuously via ScrollTrigger (`scrub: 0.5`) across a calibrated 2000px scroll runway.
  - **Physical Spatial Continuity:** Co-located all 4 service panels in the same CSS grid area (`col-start-1 row-start-1`). Scrolling forward causes the active card to dissolve and drift subtly upward (`y: 0 -> -24px`) while the incoming card ascends and settles from below (`y: 24px -> 0`). Scrolling in reverse naturally and mathematically reverses the exact choreography with 1:1 physical continuity.
  - **Continuous Left Rail & Progress Indicator:** Implemented a continuous active rail marker on the left index that physically glides down the vertical track in lockstep with the scrubbed timeline, paired with a smoothly expanding progress bar (25% to 100%) and clean tabular counter (`01 / 04`).
  - **Removal of 3D Tilt:** Eliminated the pointer-based 3D tilt micro-interaction on the index tabs to maintain a dignified, understated editorial atmosphere and avoid competing canvas transforms.
  - **Architectural Editorial Surface Redesign:** Redesigned the right-side card from a multi-box dashboard panel into an architectural editorial folio:
    - Removed nested background boxes around "Who This Guidance Is For" in favor of pure typographic architecture (`border-t border-border-subtle/40` and uppercase eyebrow).
    - Removed green circle pill backgrounds from checklist checkmarks for crisp, refined icon alignment.
    - Replaced the boxed "Expected Outcome" container with an understated left-bordered editorial pullout rail (`border-l-2 border-action-primary/40`).
    - Replaced pill badges in the header with a quiet architectural title (`01 / PERSONAL GUIDANCE`) and subtle status dot.
  - **Viewport Clearance & Spacing Calibration:** Pinned at `start: 'top top+=96'` and tightened internal card padding/margins (`p-5 sm:p-6 xl:p-7`), capping total card height at ~650px and guaranteeing +20px positive bottom clearance even on 1024x768 viewports, +40px on 1280x800, and +150px on 1440x900.
  - **Harmonized Mobile Accordion (<1024px):** Updated the interior of the mobile accordion items to mirror the exact same architectural typography, checklist, and pullout styling.
  - **Zero Content Alteration:** 100% of existing service descriptions, checklist items, audience copy, expected outcomes, and CTAs preserved.
- **Verification:**
  - Build: `tsc -b && vite build` succeeded with 0 errors, 0 warnings (16.43s).
  - Runtime: 0 console errors, 0 warnings across desktop (1440, 1280, 1024px) and mobile (390, 320px).
  - Viewport fit verified with positive bottom clearance on all tested desktop heights.
  - Scrubbed forward and reverse scroll verified with DevTools script evaluation.

---

## Decision 024: Advisory Services Reading Runway & Section Clearance Recalibration
- **Status:** Implemented / Pending Review
- **Date:** 2026-09-13
- **Context:** Following the initial continuous scroll implementation (Decision 023), runtime UX inspection revealed that users could not comfortably read all four Advisory Services cards before the pinned section released, and the subsequent "How It Works" (`#process`) section began intruding into the viewport prematurely while Service 04 was still being read.
- **Root Cause Analysis:**
  1. *Insufficient Scroll Runway:* The 2000px runway provided only ~356px of reading scroll per card, rushing users into subsequent transitions before text could be digested.
  2. *Section Clearance Gap:* While `stage` was pinned at `top: 96px`, `#services` only had `padding-bottom: 96px`. In any viewport taller than 792px, the distance from `top: 96px` to the bottom of `#services` was smaller than the viewport height, causing `#process` to enter the bottom of the screen while the pin was still active.
  3. *Premature Service 04 Release:* Service 04 had an inadequate final plateau before the ScrollTrigger pin released, pushing the card offscreen prematurely.
  4. *Crossfade Ghosting:* Outgoing and incoming cards both held opacity > 0.5 simultaneously during transition, causing overlapping text clash.
  5. *Vertical Pressure at 1024×768:* Card height at 650px left only ~20px bottom clearance on 768px height viewports.
- **Architectural Solution & Calibration:**
  1. **Expanded Runway (3200px):** Calibrated the total runway to 3200px (~800px per service cycle), providing generous stationary reading plateaus (~620–800px) where cards remain rock-solid, fully opaque (1.0), and 100% stationary.
  2. **Dedicated 800px Plateau for Service 04:** Service 04 receives a full 1.0 duration plateau ($t = 3.00 \to 4.00$, 800px of travel) before the ScrollTrigger unpins.
  3. **Section Clearance Formula:** Applied `lg:pb-[max(7rem,calc(100vh-620px))]` to `#services`. This guarantees mathematically and visually that across all desktop viewports (768px, 800px, 900px, 1080px), `#process` is positioned at least 30–60px *below* the viewport bottom throughout the entire pin, entering only *after* Service 04 has genuinely finished.
  4. **Decisive Staggered Crossfade (Zero Ghosting):** Outgoing card decisively fades from $1 \to 0$ over the first half of the transition ($t_{\text{start}} \to t_{\text{mid}}$, `power2.in`), followed by the incoming card ascending into place from $0 \to 1$ ($t_{\text{mid}} \to t_{\text{end}}$, `power2.out`). Confirmed via DevTools that at no point are both cards legible simultaneously.
  5. **Card Height Calibration (~510–580px):** Calibrated internal margins, padding (`p-4.5 sm:p-5 lg:p-4.5 xl:p-6`), and responsive pin start (`start: () => (window.innerHeight < 820 ? 'top top+=76' : 'top top+=92')`), producing 509px card height at 1440/1280 and 584px at 1024, delivering 108px to 299px of bottom clearance across all desktop viewports.
  6. **Dynamic Rail Offset Tracking:** Active rail marker tracks each tab's exact `offsetTop` directly, eliminating subpixel rounding discrepancies.
  7. **Plateau-Centered Click Navigation:** Tab clicks smoothly scroll directly to the exact midpoints of the reading plateaus (`[0.0975, 0.3475, 0.5975, 0.8750]`).
- **Verification:**
  - Build: `tsc -b && vite build` passed cleanly with 0 errors, 0 warnings (17.06s).
  - Runtime: Verified 0 console errors, 0 warnings across 1440×900, 1280×800, 1024×768, 390×844, and 320×568.
  - User Journey: Forward (01 $\to$ 04), reverse (04 $\to$ 01), mid-transition interruption, and tab clicks verified via browser automation and screenshots.
  - Section handoff: Confirmed `#process` remains completely invisible until $y > 5850px$, with Service 04 fully readable for 750–800px.

---

## Decision 025: Advisory Services Canonical Timeline Navigation & ScrollTrigger/ScrollSmoother Synchronization Architecture
- **Status:** Implemented & Verified (Uncommitted)
- **Date:** 2026-09-13
- **Context:** Following the reading runway recalibration (Decision 024), user testing revealed an architectural navigation defect: clicking "02 Household Guidance", "03 Transition Guidance", or "04 Specialized Guidance" caused the page to scroll to incorrect document locations or inadvertently exit the pinned Advisory Services section.
- **Root Cause:**
  1. Disconnected Navigation Coordinate Spaces: The previous implementation calculated target scroll positions from decoupled percentage estimates or document formulas that did not track the live ScrollTrigger instance's pin start, anticipatePin, and header offset.
  2. Intermediate Tab-State Thrashing: During smooth scroll travel across multiple service zones, intermediate ScrollTrigger `onUpdate` events repeatedly overwrote `activeId`, causing React tab state and scroll travel to conflict.
  3. Residual Momentum and Desynchronization: Calling uncoordinated scroll methods produced transient inertia overshoots.
- **Architectural Solution:**
  1. **Canonical Master Timeline Labels (Single Source of Truth):** Defined `SERVICE_PLATEAU_LABELS` (`['service-01-plateau', 'service-02-plateau', 'service-03-plateau', 'service-04-plateau']`) placed at the exact mathematical center of each reading plateau ($t = [0.39, 1.39, 2.39, 3.50]$).
  2. **Dynamic Target Resolution via `ScrollTrigger.labelToScroll(label)`:** Dynamic query directly against the active ScrollTrigger instance. Evaluates to $y_{\text{target}} = \text{st.start} + (t_{\text{label}} / t_{\text{duration}}) \times (\text{st.end} - \text{st.start})$. Zero hardcoded document coordinates. Automatically adapts across responsive viewport recalculations and `ScrollTrigger.refresh()`.
  3. **Authoritative Scroll Ownership via ScrollSmoother:** Desktop navigation consistently delegates to `smoother.scrollTo(targetScroll, true)` (with smooth fallback to `window.scrollTo` when smoother is inactive).
  4. **Programmatic Navigation Guard:**
     - `isProgrammaticScrollRef` and `targetIndexRef` track intended service during navigation.
     - `onUpdate` suppresses intermediate tab switching while traveling toward destination.
     - Upon reaching target plateau (`targetIdx === targetIndexRef.current`), guard releases cleanly and restores ordinary scroll-driven tracking.
     - Manual gesture interrupt (`wheel`, `touchstart`) immediately releases the guard if the user scrolls manually during travel.
     - Safety fallback timer (3500ms) guarantees guard never locks permanently.
  5. **Pure State Switching for Reduced Motion:** When `prefers-reduced-motion: reduce` is enabled, `handleSelectService` updates active state immediately without scrolling, showing the panel with `display: block` and zero motion.
- **Verification Evidence:**
  - Build: `tsc -b && vite build` succeeded in 12.40s with 0 errors, 0 warnings.
  - Browser Automation: All scenarios passed (01→02→03→04, 04→03→02→01, 02→04, 04→01, unpinned entry→04, mid-transition interrupts, repeat active clicks, manual reverse-scroll recovery).
  - High-Resolution Trajectory: Confirmed 0 target drift (`targetDiff: 0px`, settled at exact label coordinates).
  - Responsive: Verified at 1440×900, 1280×800, 1024×768 desktop; 390×844 and 320×568 mobile (accordion active, 0 desktop pinning, 0 horizontal overflow).

---

## Decision 026: Spatially Stable Two-Part Advisory Services Architecture with Right-to-Left Editorial Motion
- **Status:** Implemented & Verified (Uncommitted)
- **Date:** 2026-09-13
- **Context:** The pinned scroll-driven timeline model in Advisory Services, while mechanically functional, created an undesirable user experience by artificially coupling normal page scrolling with internal service selection. Users were forced to perform multi-thousand-pixel scroll operations to read the four services, and tab selection risked jarring page jumps and potential coordinate desynchronization.
- **Architectural Decision:**
  1. **Complete Decoupling of Page Scroll from Service Selection:**
     - Decommissioned the pinned ScrollTrigger runway, 3200px virtual height, anticipatePin, and scroll-coordinate navigation.
     - Restored standard natural document flow (`About -> Services -> How It Works`) with normal section padding (`py-16 sm:py-20 lg:py-24`).
  2. **Two-Column Spatially Stable Composition:**
     - **Left Column:** 4 selectable service items (01 Personal, 02 Household, 03 Transition, 04 Specialized) presented as a refined editorial index. Tab navigation updates React state (`activeId`) without modifying `window.scrollY`.
     - **Right Column:** Displays the complete content of the selected service in an editorial folio.
  3. **Right-to-Left Directional Editorial Motion:**
     - When switching services, the incoming content enters smoothly from the right edge (`opacity: 0, x: +28px` to `opacity: 1, x: 0` via `power2.out`, 0.35s).
     - Outgoing content exits smoothly with calm dissolution (`opacity: 1 -> 0, x: 0 -> -16px` via `power2.in`, 0.22s).
     - Height stability is guaranteed via CSS grid overlay (`grid-cols-1 grid-rows-1` with `col-start-1 row-start-1`), eliminating layout shifts between cards of slightly differing text lengths.
  4. **Interruptibility:**
     - `gsap.killTweensOf(cards)` is called on every selection change, ensuring that rapid consecutive clicks (e.g. 01 -> 02 -> 04) immediately transition to the newly requested service without queued animation lag or orphaned transforms.
  5. **Reduced Motion:**
     - If `prefers-reduced-motion: reduce` is active, content switches instantaneously (`opacity: 1, x: 0`) without translation or delay.
  6. **Mobile Accordion (<1024px):**
     - Preserved stacked accordion with $\ge 48\text{px}$ touch targets, full keyboard accessibility, and 0 horizontal overflow.
  7. **Global Motion Safety:**
     - Strictly localized to `Services.tsx`. `ScrollSystem.tsx`, global motion config, and all other sections remained completely untouched.
- **Verification Evidence:**
  - Build: `tsc -b && vite build` succeeded in 15.42s with 0 errors and 0 warnings.
  - Runtime: Verified 0 console errors, 0 warnings across 1440×900, 1280×800, 1024×768 desktop and 390×844, 320×568 mobile.
  - Scroll Stability: Confirmed `window.scrollY` remains 100% stationary (0px change) across all card clicks.
  - Page Flow: Verified 0px gap between Services and Process with smooth, natural scrolling in both directions.

---

## Decision 027: Advisory Services Phase 28 Visual Refinements (Alignment, Counter Removal, autoAlpha Transition)
- **Status:** Implemented & Verified (Uncommitted)
- **Date:** 2026-09-13
- **Context:** Following the Phase 26 spatially stable two-column redesign (Decision 026), three focused visual/interaction refinements were requested: (1) vertically center the left service navigation with the right content panel; (2) completely remove the `04 / 04` counter and `SELECT TO EXPLORE` instruction row; (3) refine the right-to-left transition to an AOS-style `autoAlpha` glide with slightly tuned timing.
- **Changes:**
  1. **Vertical Alignment:** Changed `items-start` to `items-center` on the `lg:grid-cols-12` desktop container. This aligns both flex children (left 5-col nav and right 7-col folio) on their center axes using standard CSS grid alignment. Measured center delta = **0px** at both 1440×900 and 1024×768. No hardcoded `margin-top` required. Stable against content height changes.
  2. **Counter Removal:** Removed the `Editorial Counter Indicator` block containing `0{activeIndex + 1} / 0{services.items.length}` and `Select to explore`. The JSX block is completely gone — no `display:none`, no `aria-hidden` wrapper, no empty replacement. DOM search confirms zero instances of `/ 04` or `select to explore` text at any breakpoint.
  3. **autoAlpha Transition (entering):** Changed from `opacity`+`visibility` pair to GSAP `autoAlpha` (which manages visibility atomically). Entry: `autoAlpha: 0, x: 30` → `autoAlpha: 1, x: 0` in 0.38s, `power2.out`. Exit: `autoAlpha: 0, x: -14` in 0.20s, `power1.in`. `gsap.killTweensOf(cards)` preserves interruptibility.
- **Verification Evidence:**
  - Build: `tsc -b && vite build` in 10.79s with 0 errors, 0 warnings.
  - Centering: `leftCenter = cardCenter = 576.78px` (delta = 0.00001px) at 1440×900; delta = 0px at 1024×768.
  - Counter removal: `hasCounter: false`, `hasSelectToExplore: false` confirmed via deep DOM search.
  - Sequential tab transitions (01→02→03→04, each with 5s settle): all settle at `opacity:'1', visibility:'visible', transform:'matrix(1,0,0,1,0,0)'`.
  - Rapid click (01→02→04): final active = Tab 4, all others hidden, 0px scroll delta.
  - Section gaps: `About→Services = 0px`, `Services→Process ≈ 0px`. 0 ScrollTrigger instances.
  - Mobile: accordion visible at 390×844, 0 console errors.
  - **Note on DevTools rAF throttling:** The Chrome DevTools MCP evaluates scripts with severely throttled requestAnimationFrame (~2 fps in headless mode). GSAP tweens (0.38s + 0.20s) require up to ~4–6 seconds of real wall-clock `setTimeout` wait in evaluate_script tests to settle. In a normal browser tab with active focus and full GPU compositing, the 380ms tween completes in one smooth rAF pass. This is a test harness artifact, not a production behavior issue.
