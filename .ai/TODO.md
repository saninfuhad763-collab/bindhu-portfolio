# Project Backlog & Task Tracker — Bindhu Portfolio

---

## High Priority (Immediate Next Steps)

- [x] **Reference Website Inspection & Deep Analysis** *(Completed 2026-09-12)*
  - Target URL: `https://themewagon.github.io/Ethos/`
  - Inspected DOM, computed styles, responsive behavior via browser instrumentation.
  - Abstracted core design principles and defined anti-clone boundaries.
- [x] **Final Creative Direction & Design System Specification** *(Completed 2026-09-12)*
  - Locked single typography pairing (Lora + Plus Jakarta Sans).
  - Locked semantic color system (Warm Ivory, Maritime Slate, Eucalyptus, Terracotta).
  - Defined 8pt spatial grid, component language, and restrained motion system.
  - Locked 11-section Information Architecture and separated verified vs placeholder trust architecture.
  - Codified 12-rule Design Constitution.
- [x] **Git Repository Initialization** *(Completed 2026-09-12)*
  - Initialized repository on branch `main`.
  - Configured comprehensive `.gitignore`.
- [x] **Technical Architecture & Stack Scaffolding** *(Completed 2026-09-12)*
  - Scaffolded React 18 + Vite 6 + TypeScript 5.7 + Tailwind CSS 3.4 project.
  - Implemented design tokens in `tailwind.config.js` and `src/styles/globals.css`.
  - Loaded Google Fonts (`Lora` and `Plus Jakarta Sans`) with `font-display: swap`.
  - Created layout and UI primitives: `Container`, `Button`, `SectionHeading`, `Stack`.
  - Verified clean TypeScript compilation and production build (`npm run build`).
- [x] **Centralized Placeholder Data Architecture** *(Completed 2026-09-12)*
  - Created `src/types/content.ts` and `src/content/siteContent.ts`.
  - Strictly enforced unverified claims placeholder policy and market-neutral education topics.
- [x] **Phase 3 Final Verification & Milestone Commit** *(Completed 2026-09-12)*
  - Browser verification (fonts, colors, layout, primitives) via Chrome DevTools MCP.
  - Responsive sanity-check (1440px to 320px) with zero horizontal overflow.
  - Accessibility audit (semantic heading hierarchy, 48px touch targets, focus rings).
  - Clean production build (`npm run build`) passing with zero errors or warnings.
  - Working tree committed cleanly.

---

## High Priority (Active Milestone: Core Section Composition)

- [x] **Global Header & Navigation Bar (Phase 4A)** *(Completed 2026-09-12)*
  - Responsive desktop nav (About, Services, How It Works, Guidance, FAQ) + accessible mobile drawer navigation.
  - Typographic brand identity (Lora + Plus Jakarta Sans).
  - Primary conversion action ("Book a Consultation" -> `#contact`).
  - Subtle scroll stabilization with backdrop blur and hairline border.
  - WCAG 2.1 AA "Skip to main content" bypass link, 48px touch targets, Escape key dismiss.
- [x] **Hero Section Implementation (Phase 4B)** *(Completed 2026-09-12)*
  - Reassuring, human value proposition: "Clear guidance for protecting what matters most."
  - Single semantic H1 page title in Lora bold serif.
  - Dual conversion CTAs ("Book a Consultation" -> `#contact`, "Explore Guidance" -> `#education`).
  - 4:5 aspect ratio portrait placeholder container with tactile offset paper layer.
  - Responsive 7:5 asymmetric desktop layout transitioning to clean single-column mobile flow.
- [x] **Trust & Value Anchor Section (Phase 5)** *(Completed 2026-09-12)*
  - Eyebrow: "Why The Experience Feels Different"
  - Headline: "Clarity first. Confidence follows."
  - 4 non-factual value pillars: Clear Guidance, Personalized Support, Straightforward Process, Plain-Language Explanations.
  - Asymmetric desktop layout (Left: Section Heading & Intro; Right: 2x2 Pillar Grid).
  - Soft Linen background (`bg-canvas-alt`) providing natural visual transition from Hero.
- [x] **About Bindhu Section (Phase 6)** *(Completed 2026-09-12)*
  - Asymmetric editorial composition (Left: 4:5 portrait frame with offset paper mat; Right: Narrative & Philosophy).
  - Warm Ivory base canvas (`#FBFBF9`), creating alternating paper rhythm from Trust's Soft Linen.
  - 3 Core Approach statements: "Listen first", "Explain clearly", "Guide thoughtfully" (pure editorial typography, zero card boxes).
  - Secondary text CTA pointing toward `#services` (`Explore advisory areas →`).
  - Zero fabricated credentials, years of experience, or claims.
- [x] **Advisory Services Section (Phase 7)** *(Completed 2026-09-12)*
  - Progressive-disclosure editorial navigator: Desktop 5:7 split (interactive index 01-04 on left, rich selected detail card on right); Mobile accessible accordion with min 56px touch target buttons.
  - Alternating paper rhythm: Soft Linen canvas (`bg-canvas-alt`, `#F4F3EE`) with hairline borders and Eucalyptus active accents.
  - 4 neutral advisory areas: Individual Coverage Planning, Family Coverage Guidance, Life-Stage & Transition Planning, Specialized & Supplementary Guidance.
  - Strict content safety: Zero unverified product/carrier claims, neutral scope notices `[ Advisory scope pending client confirmation ]`.
- [x] **Process / How It Works Section (Phase 8)** *(Completed 2026-09-12)*
  - Guided editorial timeline/journey: Desktop 4-step horizontal distribution with subtle hairline connector; Mobile clean vertical timeline with left-anchored markers.
  - Return to Warm Ivory canvas (`bg-canvas`, `#FBFBF9`), maintaining the paper rhythm.
  - 4 neutral, safe steps: 01 Start with your situation, 02 Clarify what matters, 03 Explore the possibilities, 04 Decide what comes next.
  - Positioning reassurance note below timeline.
  - Zero unverified operational, regulatory, fee, or outcome claims.
- [x] **Insurance Education / Client Guidance Section (Phase 9)** *(Completed 2026-09-12)*
  - Market-neutral educational topics demystifying complex concepts (reinforcing "Clarity before commitment").
  - Desktop 5:7 two-column layout with sticky narrative intro and hairline question index with inline disclosure.
  - Mobile accessible accordion (<1024px) with >=48px touch targets and responsive card padding.
  - Soft Linen canvas (`bg-canvas-alt`, `#F4F3EE`), maintaining paper rhythm (Ivory → Linen → Ivory → Linen → Ivory → Linen).
  - 100% safe, neutral educational questions held with `status: 'pending'` and zero market-specific insurance terms.
  - Verified clean build and DevTools QA across 6 viewports with zero overflow.
- [x] **Pre-Audit GitHub Checkpoint — Commit & Push Preparation** *(Completed 2026-09-12)*
  - Inspect repository status, verify `.gitignore`, clean build, and safety compliance.
  - Create milestone commit covering Header through Insurance Education sections.
  - Prepare for remote push when URL is provided.
- [ ] **Major Composition Audit — Header Through Insurance Education**
  - Holistic visual QA, vertical rhythm, typography scale, paper rhythm, and cross-section harmony review.
- [ ] **Client Stories & Testimonials (Phase 10)**
  - Clearly labeled placeholder testimonials preserving authenticity boundaries.
- [ ] **Frequently Asked Questions (Phase 11)**
  - Interactive accordion addressing consumer anxieties and consultation expectations.
- [ ] **Consultation Booking & Inquiry Form (Phase 12)**
  - Low-friction inquiry form and appointment booking call-to-action.

---

## Low Priority (Refinement, Polish & Hardening)

- [ ] **Micro-Interactions & Animation**
  - Gentle scroll-triggered reveals and button hover states maintaining a calm aesthetic.
- [ ] **Accessibility (a11y) Audit**
  - Verify WCAG 2.1 AA contrast compliance, keyboard focus rings, semantic HTML structure, and screen-reader compatibility.
- [ ] **Cross-Device & Responsive Verification**
  - Verify fluid layouts across mobile (375px+), tablet (768px+), laptop (1024px+), and wide screens (1440px+).
- [ ] **Performance & SEO**
  - Optimize asset loading, meta tags, OpenGraph previews, and performance scores.

---

## Future / Client Onboarding

- [ ] **Client Data Ingestion**
  - Ingest authentic personal details, licensing info, carrier associations, awards, and headshots from Bindhu.
  - Replace placeholder content in the centralized data store with verified client information.
- [ ] **Production Deployment & Domain Setup**
  - Configure production deployment pipeline and custom domain.
