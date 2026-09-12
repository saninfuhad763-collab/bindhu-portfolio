# Project Context — Bindhu Portfolio

## 1. Project Overview
- **Project Name:** Bindhu Portfolio
- **Purpose:** Premium personal-brand portfolio website for a professional Health Insurance Consultant.
- **Project Type:** Client-facing personal branding & lead/consultation generation website.
- **Repository Location:** `c:\Users\DELL\Desktop\Portfolio`

---

## 2. Client Profile
- **Client Name:** Bindhu
- **Profession:** Health Insurance Consultant
- **Client Information Status:** Not yet provided (Pending real personal background, professional history, licensing, and contact details).
- **Content Policy:** Strictly use clearly identified placeholder copy. Never fabricate credentials, certifications, awards, client counts, insurer partnerships, or testimonials.

---

## 3. Product Vision & Goals
- **Target Audience:** Individuals, families, and professionals seeking clear, trustworthy, and expert health insurance advice and plan selection.
- **Brand Personality / Target Qualities:**
  - Professional
  - Trustworthy
  - Human
  - Calm
  - Approachable
  - Reliable
  - Knowledgeable
  - Caring
  - Modern
  - Premium
- **Core Design Principle:**
  > **Trust + Clarity + Human Connection + Premium Simplicity**
- **Business Goal:** Educate visitors on health insurance complexities, establish immediate trust and credibility, and guide visitors toward scheduling a consultation or inquiry.

---

## 4. Technical Stack (Implemented Foundation)
- **Application Framework:** React 18.3 (`react`, `react-dom`)
- **Build Tooling & Bundler:** Vite 6 (`@vitejs/plugin-react`)
- **Language:** TypeScript 5.7 (strict mode)
- **Styling Architecture:** Tailwind CSS 3.4 + PostCSS + CSS Custom Properties
- **Icons:** Lucide React (lightweight, tree-shakable accessible SVG icons)
- **Fonts:** Google Fonts (`Lora` weights 500/600, `Plus Jakarta Sans` weights 400/500/600) with `font-display: swap`
- **Host Runtime Environment:**
  - Node.js: `v22.22.3`
  - npm: `10.9.8`
  - Git: `2.53.0.windows.3` (Initialized on branch `main`)
  - OS: Windows

---

## 5. Architecture Baseline
- **Structure:**
  - `src/components/layout/` — Layout primitives (`Container.tsx`)
  - `src/components/ui/` — Foundational UI primitives (`Button.tsx`, `SectionHeading.tsx`, `Stack.tsx`)
  - `src/content/` — Centralized content store (`siteContent.ts`)
  - `src/types/` — Type definitions (`content.ts`)
  - `src/styles/` — Global stylesheet & design tokens (`globals.css`)
  - `tailwind.config.js` — Design token mapping (1-to-1 with design system)
- **Content Decoupling:** Complete separation of presentation and copy. No hardcoded claims or regional US-specific concepts. Centralized `SiteContent` model.

---

## 6. Design Direction & System Specification
- **Overall Feel:** Premium simplicity, editorial spaciousness, soothing clarity, human warmth.
- **Typography System (Locked):**
  - Display / Headings: `Lora` (Google Fonts, humanist serif, 500/600 weight)
  - Body / UI / Data: `Plus Jakarta Sans` (Google Fonts, geometric-humanist sans-serif, 400/500/600 weight)
- **Color System (Locked):**
  - Base Surfaces: Warm Ivory (`#FBFBF9`), Soft Linen (`#F4F3EE`), Pure White (`#FFFFFF`)
  - Primary Brand / Anchor: Deep Maritime Slate (`#1A2B3C`)
  - Action / Vitality Accent: Calming Eucalyptus (`#2E6F5E`)
  - Human Attention / Advisory Accent: Warm Terracotta (`#C46849`)
  - Text: Charcoal Slate (`#1E293B`), Supportive Slate (`#475569`), Muted (`#64748B`)
- **Spacing Scale:** 8pt base grid; 1200px max container; generous 96px/72px/56px section rhythm.
- **Component Style:** 8px–12px soft radii, diffused micro-shadows, zero harsh brutalism, zero glossy glassmorphism.
- **Motion Language:** 200–350ms gentle ease-out transitions (`cubic-bezier(0.16, 1, 0.3, 1)`); full `prefers-reduced-motion` compliance.

---

## 7. Reference Inspiration & Analysis
- **Reference Site URL:** `https://themewagon.github.io/Ethos/`
- **Reference Status:** Completed deep live inspection and architectural analysis (2026-09-12).
- **Core Principles Abstracted:**
  - Editorial spacing and unhurried vertical rhythm.
  - Alternating section density (introductory statement → structured card/list details).
  - Clear typography pairing with generous body leading.
  - Interactive progressive disclosure for service details (accordion pattern).
- **Anti-Clone Boundaries Established:**
  - Avoid dark, moody, tech-noir color palette (replace with warm ivory, calm navy, and reassuring sage/terracotta).
  - Avoid watermark background numerals (`01`, `02`) and arbitrary vertical accent lines (`.right-vert-line`).
  - Replace graphic design portfolio grid with educational guidance / plan comparison advisor cards.
  - Replace `Download CV` CTA with consultation booking CTA ("Schedule a Policy Review").

---

## 8. Important Constraints & Rules
1. **Placeholder Integrity:** Use clearly labeled placeholders for all client details until authentic data is provided. Never fabricate factual claims.
2. **Decoupled Content:** Content and copy must be isolated from presentation components for effortless client-data injection later.
3. **No Direct Cloning:** Reference site principles must be abstracted and reinterpreted specifically for health insurance consulting.
4. **Preserve Working Architecture:** Any established project structure must remain clean, standard, and documented.

---

## 9. Current Major Phase
- **Phase 3:** Technical Foundation & Design-System Scaffolding Completed → Ready for Section-Level UI Composition
