import React, { useRef, useEffect } from 'react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollSmoother } from '../motion/ScrollSystem';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Phase 8 — Consultation Process / How It Works
 *
 * Implements a calm, guided editorial timeline/journey:
 * - Desktop (>=1024px and >=800px height): Four horizontal steps with scroll-driven pinned progression.
 *   - Phase A: Steps 01 -> 02 -> 03 -> 04 reveal sequentially through scroll.
 *   - Phase B: Brief Step 04 hold/settling moment for full comprehension.
 *   - Phase C: Next section (Education) begins rising from below and smoothly overlaps
 *     the lower portion of How It Works.
 *   - Phase D: How It Works pin releases naturally beneath the incoming next section;
 *     normal page scrolling resumes with zero visual jump.
 * - Mobile / Tablet / Short Viewports: Clean natural document flow (no pinning) with
 *   all steps fully visible and zero layout trap.
 * - Reduced Motion: Immediate static rendering with zero translation, pinning, or scrub delay.
 */
export const Process: React.FC = () => {
  const { process } = siteContent;

  const sectionRef = useRef<HTMLElement>(null);
  const pinnedWrapperRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const mobileStepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const reassuranceRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  const { isReducedMotion } = useScrollSmoother();

  useEffect(() => {
    const section = sectionRef.current;
    const pinnedWrapper = pinnedWrapperRef.current;
    if (!section || !pinnedWrapper) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 1024px) and (min-height: 800px)',
        isMobile: '(max-width: 1023px), (max-height: 799px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };

        const steps = stepRefs.current.filter(Boolean) as HTMLLIElement[];
        const mobileSteps = mobileStepRefs.current.filter(Boolean) as HTMLLIElement[];
        const header = headerRef.current;
        const reassurance = reassuranceRef.current;
        const spacer = spacerRef.current;

        // Reduced motion, mobile, or short viewport: clean natural flow without pinning
        if (reduceMotion || isReducedMotion || !isDesktop) {
          if (spacer) spacer.style.display = 'none';
          if (pinnedWrapper) gsap.set(pinnedWrapper, { clearProps: 'transform' });
          if (header) gsap.set(header, { opacity: 1, y: 0, clearProps: 'transform,opacity' });
          if (steps.length > 0) gsap.set(steps, { opacity: 1, y: 0, clearProps: 'transform,opacity' });
          if (mobileSteps.length > 0) gsap.set(mobileSteps, { opacity: 1, y: 0, clearProps: 'transform,opacity' });
          if (reassurance) gsap.set(reassurance, { opacity: 1, y: 0, clearProps: 'transform,opacity' });

          const frame = requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
          return () => {
            cancelAnimationFrame(frame);
          };
        }

        // --- DESKTOP PINNED SEQUENCE WITH OVERLAPPING NEXT SECTION ---
        if (spacer) spacer.style.display = 'block';

        // Pre-pin baseline states
        if (header) gsap.set(header, { opacity: 1, y: 0, force3D: true });
        if (steps.length > 0) {
          steps.forEach((step, i) => {
            gsap.set(step, {
              opacity: i === 0 ? 0.35 : 0.15,
              y: 18,
              force3D: true,
            });
          });
        }
        if (reassurance) gsap.set(reassurance, { opacity: 0.2, y: 12, force3D: true });

        // Master Timeline attached to ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: pinnedWrapper,
            pinType: 'transform',
            pinSpacing: false, // Allows natural page scroll to carry #education over pinnedWrapper
            start: 'top top+=64', // Pins directly beneath fixed header with refined compact offset
            end: 'bottom top+=64', // Pins until section bottom reaches offset
            scrub: true, // Clean 1:1 sync with ScrollSmoother eliminating double-easing micro-jitter
            anticipatePin: 0, // Eliminates pre-pin shift/stutter
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        // ── PHASE A: Steps 01–04 reveal sequentially through scroll ──────

        // Step 01 illuminates and settles
        if (steps[0]) {
          tl.to(
            steps[0],
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              force3D: true,
            },
            0.1
          );
        }

        // Step 02 illuminates and settles
        if (steps[1]) {
          tl.to(
            steps[1],
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              force3D: true,
            },
            0.8
          );
        }

        // Step 03 illuminates and settles
        if (steps[2]) {
          tl.to(
            steps[2],
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              force3D: true,
            },
            1.5
          );
        }

        // Step 04 illuminates and settles
        if (steps[3]) {
          tl.to(
            steps[3],
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              force3D: true,
            },
            2.2
          );
        }

        // Reassurance text settles alongside Step 04
        if (reassurance) {
          tl.to(
            reassurance,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              force3D: true,
            },
            2.4
          );
        }

        // ── PHASE B: Brief Step 04 hold/settling moment ───────────────────
        tl.to({}, { duration: 0.6 });

        // ── PHASE C & D: Next section overlaps and pin releases ──────────
        tl.to({}, { duration: 1.2 });

        const frame = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
        return () => {
          cancelAnimationFrame(frame);
        };
      }
    );

    return () => {
      mm.revert();
    };
  }, [isReducedMotion]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-canvas border-t border-border-subtle/80 relative z-10"
      aria-labelledby="process-heading"
    >
      {/* Pinned Viewport Stage for Desktop */}
      <div
        ref={pinnedWrapperRef}
        className="w-full py-12 lg:py-16 will-change-transform"
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <Container size="standard">
          {/* Section Intro Header */}
          <div ref={headerRef} className="max-w-3xl mb-10 sm:mb-12 lg:mb-14">
            <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
              {process.eyebrow}
            </span>
            <h2
              id="process-heading"
              className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight mb-4"
            >
              {process.headline}
            </h2>
            <p className="font-body text-body-large text-content-secondary leading-relaxed">
              {process.description}
            </p>
          </div>

          {/* Desktop Horizontal Timeline (>=1024px) */}
          <div className="hidden lg:block relative">
            <ol className="grid grid-cols-4 gap-8 relative list-none p-0 m-0">
              {process.steps.map((step, index) => (
                <li
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative flex flex-col"
                >
                  <div className="flex flex-col h-full">
                    {/* Step Marker & Short Label */}
                    <div className="inline-flex items-center gap-3 mb-6 relative z-10 bg-canvas pr-2.5">
                      <span
                        className="w-9 h-9 rounded-full bg-canvas border border-border-subtle text-action-primary font-body text-xs font-semibold flex items-center justify-center shadow-xs ring-4 ring-canvas"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                      <span className="font-body text-eyebrow font-semibold text-content-muted tracking-wider uppercase">
                        {step.shortLabel}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display text-card-h3 font-semibold text-brand-primary tracking-tight mb-2.5 leading-snug">
                      <span className="sr-only">Step {step.number}: </span>
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-body text-body-small text-content-secondary leading-relaxed mb-5 flex-1">
                      {step.description}
                    </p>

                    {/* Expected Outcome Callout */}
                    <div className="pt-3 border-t border-border-subtle/70 mt-auto">
                      <span className="font-body text-xs text-content-muted block mb-0.5">
                        Outcome
                      </span>
                      <span className="font-body text-xs font-medium text-brand-primary">
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile Vertical Timeline (<1024px) */}
          <div className="lg:hidden block">
            <ol className="relative border-l border-border-subtle ml-4 sm:ml-5 space-y-9 sm:space-y-11 pl-6 sm:pl-8 list-none m-0">
              {process.steps.map((step, index) => (
                <li
                  key={step.id}
                  ref={(el) => {
                    mobileStepRefs.current[index] = el;
                  }}
                  className="relative"
                >
                  <div>
                    {/* Numbered Marker Anchored on Vertical Line */}
                    <span
                      className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-canvas border border-border-subtle text-action-primary font-body text-xs font-semibold flex items-center justify-center shadow-xs ring-4 ring-canvas"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    {/* Micro Label */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider">
                        {step.shortLabel}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display text-card-h3 font-semibold text-brand-primary tracking-tight mb-2 leading-snug">
                      <span className="sr-only">Step {step.number}: </span>
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-body text-body-small text-content-secondary leading-relaxed mb-3.5">
                      {step.description}
                    </p>

                    {/* Outcome Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-canvas-alt/70 border border-border-subtle/80">
                      <span className="font-body text-xs text-content-muted">Outcome:</span>
                      <span className="font-body text-xs font-medium text-brand-primary">
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Reassurance Note */}
          {process.reassuranceText && (
            <div
              ref={reassuranceRef}
              className="mt-8 sm:mt-10 lg:mt-12 pt-6 border-t border-border-subtle/80 text-center"
            >
              <p className="font-body text-body-regular text-content-secondary max-w-reading mx-auto italic">
                "{process.reassuranceText}"
              </p>
            </div>
          )}
        </Container>
      </div>

      {/* Dedicated Scroll Track for Desktop Pinning & Natural Overlap Handoff */}
      <div
        ref={spacerRef}
        className="hidden [@media(min-width:1024px)_and_(min-height:800px)]:block h-[1300px]"
        aria-hidden="true"
      />
    </section>
  );
};
