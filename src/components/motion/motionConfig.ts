/**
 * Motion Configuration — Bindhu Portfolio
 *
 * Centralized motion tokens for GSAP animations, ScrollTrigger, and ScrollSmoother.
 * Follows the "Warm Editorial" design principle:
 * Restrained, calm, human, and premium. Never flashy, hyperactive, or SaaS-like.
 */

/**
 * Breakpoint queries for gsap.matchMedia() conforming to the Responsive Motion Constitution
 */
export const BREAKPOINTS = {
  desktop: '(min-width: 1024px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  mobile: '(max-width: 767px)',
  narrowMobile: '(max-width: 360px)',
  reduceMotion: '(prefers-reduced-motion: reduce)',

  // Shared editorial-motion activation conditions — used by TrustValue, CareerRoadmap,
  // Process, and Education to ensure a single consistent responsive breakpoint policy.
  // Activates pinning only when the viewport is both wide enough AND tall enough for
  // the editorial scroll choreography to function safely.
  desktopMotion: '(min-width: 1280px), ((min-width: 1024px) and (min-height: 800px))',
  naturalFlow: '(max-width: 1023px), ((min-width: 1024px) and (max-width: 1279px) and (max-height: 799px))',
} as const;

export const MOTION = {
  // 1. Desktop Tier (≥1024px) — Richest motion, subtle horizontal reveals, lateral Hero
  desktop: {
    revealY: 20,          // 16–22px target
    revealX: 20,          // 16–22px target
    duration: 0.6,        // 0.55–0.70s target
    stagger: 0.09,        // 80–120ms target
    floatingY: 4,         // 3–6px target
    triggerStart: 'top 84%', // Calibrated trigger: visible arrival without late pop
  },

  // 2. Tablet Tier (768–1023px) — Simplified, vertical reveals, reduced stagger
  tablet: {
    revealY: 16,          // 12–16px target
    revealX: 0,           // Vertical reveals preferred
    duration: 0.55,       // 0.50–0.60s target
    stagger: 0.08,        // 70–100ms target
    floatingY: 3,         // 2–4px target
    triggerStart: 'top 85%',
  },

  // 3. Mobile Tier (<768px) — Readability, native scrolling, vertical fade-up only
  mobile: {
    revealY: 14,          // 10–14px target
    revealX: 0,           // Horizontal vectors disabled; converted to fade-up
    duration: 0.5,        // 0.45–0.55s target
    stagger: 0.07,        // 60–90ms target
    floatingY: 0,         // Disabled or ≤2px
    triggerStart: 'top 86%',
  },

  // 4. Narrow Mobile Tier (≤360px) — Compact constraint, immediate readability
  narrowMobile: {
    revealY: 10,          // 6–10px target
    revealX: 0,
    duration: 0.45,       // 0.40–0.50s target
    stagger: 0.05,        // 40–70ms target
    floatingY: 0,
    triggerStart: 'top 86%',
  },

  // 5. Reduced Motion Tier — Instant visibility, zero transforms
  reducedMotion: {
    revealY: 0,
    revealX: 0,
    duration: 0,
    stagger: 0,
    floatingY: 0,
    triggerStart: 'top 100%',
  },

  // Global duration constants
  duration: {
    reveal: 0.6,
    heroSequence: 0.75,
    hover: 0.2,
    floating: 5.0,
    smoothScroll: 1.15,
  },

  // Global displacement defaults (used as fallbacks)
  distance: {
    revealY: 20,
    revealX: 20,
    floatingY: 4,
  },

  // Stagger defaults
  stagger: {
    pillars: 0.1,
    steps: 0.12,
    faq: 0.08,
  },

  // Easing curves
  ease: {
    // Elegant, natural deceleration for editorial reveals
    editorial: 'power2.out',
    // Ultra-smooth curve for subtle transitions
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    // Gentle sine wave for ambient floating accents
    ambient: 'sine.inOut',
    // Tactile micro-interaction feedback
    hover: 'power1.out',
  },

  // ScrollSmoother configuration
  smoother: {
    smooth: 1.15,
    smoothTouch: 0, // Touch devices retain 100% native momentum scrolling
    effects: false, // Parallax disabled globally for stability
  },

  // Sticky header height offset for smooth anchor navigation
  headerOffset: 80,
} as const;

export type MotionConfig = typeof MOTION;
