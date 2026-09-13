# Responsive Motion Constitution — Bindhu Portfolio

All future motion must be responsive by design.
Responsive motion is not an afterthought and must not rely on desktop animation values simply shrinking at smaller widths.

Every animation must define behavior for:
1. Desktop (≥1024px)
2. Tablet (768–1023px)
3. Mobile (<768px)
4. Narrow Mobile (≤360px)
5. Reduced Motion (`prefers-reduced-motion: reduce`)

---

## 1. DESKTOP — ≥1024px
Desktop may use the richest motion treatment.

Allowed:
* subtle horizontal reveals
* Hero lateral choreography
* restrained image movement
* selective ScrollTrigger effects
* optional very subtle parallax
* hover interactions

Horizontal displacement should remain modest.
**Target: 16–24px** (Configured: `revealX: 20px`, `revealY: 20px`)

---

## 2. TABLET — 768–1023px
Motion should simplify.

Prefer:
* vertical reveals (`revealY: 16px`)
* smaller displacement
* reduced stagger (`stagger: 80ms`)
* limited decorative motion (`floatingY: 3px`)
* minimal parallax
* avoid strong horizontal movement near the 1024px transition (`revealX: 0px`)

---

## 3. MOBILE — <768px
Mobile should prioritize:
* readability
* touch interaction
* native scrolling
* visual stability
* battery/performance

Rules:
* disable strong horizontal reveal vectors
* convert lateral animations to `fade-up`
* disable parallax
* reduce floating motion (disabled / 0px)
* reduce stagger (**60–100ms**, configured: `70ms`)
* avoid continuous motion on content
* preserve all touch targets (≥48px)
* never rely on hover

Recommended mobile reveal distance:
**12–16px** (Configured: `revealY: 14px`)

---

## 4. NARROW MOBILE — ≤360px
Treat this as a special constraint.

At 320px especially:
* avoid lateral animation (`revealX: 0px`)
* avoid parallax
* minimize decorative floating (disabled)
* reduce stagger (50ms)
* prioritize immediate readability
* prevent animation-induced clipping (`revealY: 10px`)

Nonessential decorative motion is disabled.

---

## 5. TOUCH DEVICES
Do NOT force desktop-style smooth scrolling onto touch devices.
Maintain:
```text
smoothTouch: 0
```
unless testing proves a better alternative.
Touch devices retain native momentum scrolling.

---

## 6. HOVER
Hover animation is allowed only on pointer-capable devices.
Do NOT make hover states required for understanding or navigation.
Touch interfaces must remain complete without hover.

---

## 7. PARALLAX
Parallax policy:
```text
Desktop:        selective and subtle
Tablet:         very limited
Mobile:         OFF
Reduced Motion: OFF
```
Never apply strong parallax to:
* headings
* body text
* primary CTAs
* interactive controls

---

## 8. FLOATING MOTION
Continuous floating is decorative only.
Use it sparingly.

* **Desktop:** 3–6px (Configured: `4px`)
* **Tablet:** 2–4px (Configured: `3px`)
* **Mobile:** 0–2px or disabled (Configured: `0px` / disabled)

Never continuously float:
* H1
* H2
* body paragraphs
* primary CTAs
* entire cards

---

## 9. IMAGE MOTION
* **Desktop:** Subtle reveal, subtle hover scale, selective parallax
* **Tablet:** Reveal, very small scale
* **Mobile:** Reveal only, no parallax, no strong hover scaling
* **Maximum hover image scale:** **1.015**

---

## 10. TEXT MOTION
Text uses:
* opacity
* small translation
* staggered reveal

Text must not continuously float.
Desktop and mobile use differentiated displacement values.

---

## 11. REDUCED MOTION
When:
```text
prefers-reduced-motion: reduce
```
apply:
* no ScrollSmoother
* no parallax
* no floating loops
* no reveal transforms
* no decorative motion

Content must appear immediately.
Use native browser scrolling.

---

## 12. GSAP IMPLEMENTATION
Use:
```typescript
gsap.matchMedia()
```
for responsive animation setup.
Use responsive animation contexts instead of scattering breakpoint checks throughout individual components.
Each animation must cleanly revert when breakpoint conditions change.

---

## 13. PERFORMANCE
Prefer:
* `transform`
* `opacity`

Avoid:
* layout property animation (`width`, `height`, `margin`, `padding`, `top`, `left`)
* unnecessary ScrollTrigger instances
* excessive DOM animation
* continuous animation of large element groups

Use centralized motion tokens from `src/components/motion/motionConfig.ts`.

---

## 14. RESPONSIVE VERIFICATION
Every major motion implementation must be verified at:
* 1440px
* 1280px
* 1024px
* 768px
* 390px
* 320px

Use automated measurements at all six widths.
Visual screenshots are needed only for representative visual review, not every viewport.

---

## 15. FINAL PRINCIPLE
The goal is not:
**same animation everywhere**

The goal is:
**same motion language, adapted to each device.**
