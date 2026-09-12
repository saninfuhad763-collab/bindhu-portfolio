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

## High Priority (Next Milestone: Phase 4 Section Composition — Header + Hero)

- [ ] **Global Header & Navigation Bar**
  - Responsive desktop nav + accessible mobile drawer navigation.
  - Brand identity, phone link placeholder, and "Request a Review" CTA.
- [ ] **Global Layout Structure**
  - Implement accessible Header / Navigation bar with clear CTA and mobile drawer.
  - Implement comprehensive Footer with disclaimers, credentials placeholder, and navigation links.
- [ ] **Hero Section Implementation**
  - High-impact value proposition tailored for health insurance consultation.
  - Primary conversion action (e.g., "Schedule a Free Policy Review").
  - Subtle trust badges / reassurance cues.
- [ ] **Services / Specializations Section**
  - Individual, family, and group/corporate health insurance advisory cards.
  - Clear, jargon-free benefit explanations.
- [ ] **About / Philosophy Section**
  - Independent consultant advantage (advocating for the client, not the insurance company).
  - Human, approachable introduction (placeholder-driven).
- [ ] **Process / How It Works Section**
  - Step-by-step client consultation journey (Assessment → Comparison → Recommendation → Ongoing Support).
- [ ] **FAQ Section**
  - Interactive accordion addressing common health insurance consumer anxieties and questions.
- [ ] **Contact / Consultation Booking CTA Section**
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
