import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteContent } from '../../content/siteContent';
import { MOTION, BREAKPOINTS } from '../motion/motionConfig';
import { FloatingAccent } from '../motion/FloatingAccent';

/**
 * Hero Section Component — Bindhu Portfolio
 *
 * Implements the approved Warm Editorial design direction:
 * - Two-column asymmetrical composition on desktop (7:5 ratio)
 * - Single-column natural flow on mobile and tablet
 * - Single H1 page title adhering to responsive typography token `hero-h1`
 * - Dual conversion CTAs with 48px minimum touch targets
 * - 4:5 aspect ratio portrait container with premium placeholder treatment
 * - Strict content decoupling from centralized `siteContent`
 * - Choreographed GSAP entrance sequence managed via gsap.matchMedia() conforming to the Responsive Motion Constitution:
 *   - Desktop (≥1024px): Lateral reveal on portrait, richer entrance sequence
 *   - Tablet (768–1023px): Vertical reveals, reduced displacement (16px)
 *   - Mobile (<768px): Vertical fade-up only (14px), tighter stagger (70ms)
 *   - Narrow Mobile (≤360px): Compact 10px vertical reveal
 *   - Reduced Motion: Immediate display with zero transforms
 */
export const Hero: React.FC = () => {
  const { hero, client } = siteContent;

  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reassuranceRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: BREAKPOINTS.desktop,
        isTablet: BREAKPOINTS.tablet,
        isMobile: BREAKPOINTS.mobile,
        isNarrowMobile: BREAKPOINTS.narrowMobile,
        reduceMotion: BREAKPOINTS.reduceMotion,
      },
      (context) => {
        const { isDesktop, isTablet, isMobile, isNarrowMobile, reduceMotion } =
          context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
            isMobile: boolean;
            isNarrowMobile: boolean;
            reduceMotion: boolean;
          };

        if (reduceMotion) {
          gsap.set(
            [
              eyebrowRef.current,
              headlineRef.current,
              copyRef.current,
              ctaRef.current,
              reassuranceRef.current,
              portraitRef.current,
            ],
            { opacity: 1, x: 0, y: 0 }
          );
          return;
        }

        const distY = isNarrowMobile
          ? MOTION.narrowMobile.revealY
          : isMobile
          ? MOTION.mobile.revealY
          : isTablet
          ? MOTION.tablet.revealY
          : MOTION.desktop.revealY;

        const dur = isNarrowMobile
          ? MOTION.narrowMobile.duration
          : isMobile
          ? MOTION.mobile.duration
          : isTablet
          ? MOTION.tablet.duration
          : MOTION.desktop.duration;

        const staggerOverlap = isMobile || isNarrowMobile ? '-=0.35' : '-=0.45';

        const tl = gsap.timeline({
          defaults: {
            ease: MOTION.ease.editorial,
            duration: dur,
          },
        });

        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: Math.min(12, distY) },
          { opacity: 1, y: 0, delay: 0.1 }
        )
          .fromTo(
            headlineRef.current,
            { opacity: 0, y: distY },
            { opacity: 1, y: 0 },
            staggerOverlap
          )
          .fromTo(
            copyRef.current,
            { opacity: 0, y: distY },
            { opacity: 1, y: 0 },
            staggerOverlap
          )
          .fromTo(
            ctaRef.current,
            { opacity: 0, y: Math.min(14, distY) },
            { opacity: 1, y: 0 },
            staggerOverlap
          )
          .fromTo(
            reassuranceRef.current,
            { opacity: 0, y: Math.min(10, distY) },
            { opacity: 1, y: 0 },
            staggerOverlap
          )
          .fromTo(
            portraitRef.current,
            {
              opacity: 0,
              x: isDesktop ? MOTION.desktop.revealX : 0,
              y: isDesktop ? 0 : distY,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: isDesktop ? MOTION.duration.heroSequence : dur,
            },
            isDesktop ? '-=0.55' : staggerOverlap
          );
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative bg-canvas pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-28 overflow-hidden"
    >
      <Container size="standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow / Context Category */}
            <div ref={eyebrowRef} className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-5 h-px bg-advisory-accent/60" aria-hidden="true" />
              <span className="font-body text-eyebrow font-semibold uppercase text-advisory-accent tracking-wider">
                {hero.eyebrow}
              </span>
            </div>

            {/* Primary Headline (H1) */}
            <h1
              ref={headlineRef}
              id="hero-heading"
              className="font-display text-hero-h1 font-semibold text-brand-primary tracking-tight mb-5 sm:mb-6 leading-[1.18]"
            >
              {hero.headline}
            </h1>

            {/* Supporting Copy */}
            <p ref={copyRef} className="font-body text-body-large text-content-secondary max-w-reading mb-8 sm:mb-10 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* Dual CTAs */}
            <div ref={ctaRef} className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              <Button
                variant="primary"
                size="md"
                href={hero.primaryCta.href}
                className="w-full sm:w-auto shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                variant="secondary"
                size="md"
                href={hero.secondaryCta.href}
                className="w-full sm:w-auto hover:-translate-y-0.5 transition-all duration-200"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Reassurance Note */}
            <div ref={reassuranceRef} className="flex items-center gap-2.5 text-content-muted">
              <FloatingAccent distance={3} duration={4.5} className="flex-shrink-0">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-action-primary block"
                  aria-hidden="true"
                />
              </FloatingAccent>
              <p className="font-body text-small-meta text-content-muted">
                {hero.reassuranceNote}
              </p>
            </div>
          </div>

          {/* Right Column: Portrait Composition & Visual Framing */}
          <div ref={portraitRef} className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none">
              {/* Subtle background decorative paper layer for editorial depth */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 bg-canvas-alt border border-border-subtle/80 rounded-xl transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3"
                aria-hidden="true"
              />

              {/* Main Portrait Frame with standard 4:5 ratio */}
              <div
                className="relative aspect-[4/5] w-full rounded-xl bg-surface border border-border-subtle overflow-hidden shadow-card group"
                role="img"
                aria-label={hero.imageAlt}
              >
                {hero.imageSource ? (
                  <img
                    src={hero.imageSource}
                    alt={hero.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.015]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                ) : (
                  /* Intentional, High-Fidelity Editorial Placeholder */
                  <div className="w-full h-full bg-canvas-alt flex flex-col justify-between p-6 sm:p-8">
                    {/* Top framing bar */}
                    <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3">
                      <span className="font-body text-[11px] font-semibold tracking-wider uppercase text-content-muted">
                        Advisory Portrait
                      </span>
                      <span className="font-body text-[11px] font-medium text-content-muted/80">
                        4:5 Ratio
                      </span>
                    </div>

                    {/* Center silhouette / portrait graphic */}
                    <div className="flex flex-col items-center justify-center my-auto py-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-surface border border-border-subtle flex items-center justify-center mb-4 shadow-sm">
                        <svg
                          className="w-10 h-10 sm:w-12 sm:h-12 text-content-muted/60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>

                      <span className="inline-block px-3 py-1 rounded bg-surface border border-border-subtle text-[11px] font-medium font-body text-content-secondary text-center shadow-xs">
                        {hero.imagePlaceholderLabel}
                      </span>
                    </div>

                    {/* Bottom identity tag */}
                    <div className="pt-3 border-t border-border-subtle/60 text-center sm:text-left">
                      <p className="font-display text-sm font-semibold text-brand-primary">
                        {client.name}
                      </p>
                      <p className="font-body text-[11px] text-content-muted">
                        {client.professionalTitle}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
