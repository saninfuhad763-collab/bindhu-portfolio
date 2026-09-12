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
