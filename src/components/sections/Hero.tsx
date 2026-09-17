import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteContent } from '../../content/siteContent';
import { MOTION, BREAKPOINTS } from '../motion/motionConfig';
import { FloatingAccent } from '../motion/FloatingAccent';
import { AnimatedGradient } from '../motion/AnimatedGradient';
import { HeroOfferBanner } from '../ui/HeroOfferBanner';

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
  const offerBannerRef = useRef<HTMLDivElement>(null);
  const reassuranceRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const portraitLabelRef = useRef<HTMLDivElement>(null);

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
              offerBannerRef.current,
              reassuranceRef.current,
              ctaRef.current,
              portraitRef.current,
              portraitLabelRef.current,
            ],
            { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform' }
          );
          return;
        }

        // Responsive displacements conforming to Responsive Motion Constitution
        const distY = isNarrowMobile
          ? MOTION.narrowMobile.revealY
          : isMobile
          ? MOTION.mobile.revealY
          : isTablet
          ? MOTION.tablet.revealY
          : MOTION.desktop.revealY;

        const distX = isDesktop ? MOTION.desktop.revealX : 0;

        // Element-group specific durations tuned for a cohesive ~1.0-1.1s total page-load choreography
        const durHeadline = isNarrowMobile ? 0.36 : isMobile ? 0.42 : isTablet ? 0.48 : 0.52;
        const durCopy = isNarrowMobile ? 0.32 : isMobile ? 0.38 : isTablet ? 0.42 : 0.46;
        const durOffer = isNarrowMobile ? 0.30 : isMobile ? 0.36 : isTablet ? 0.40 : 0.44;
        const durReassurance = isNarrowMobile ? 0.24 : isMobile ? 0.28 : isTablet ? 0.32 : 0.36;
        const durCta = isNarrowMobile ? 0.28 : isMobile ? 0.34 : isTablet ? 0.38 : 0.42;
        const durPortrait = isNarrowMobile ? 0.38 : isMobile ? 0.45 : isTablet ? 0.52 : 0.60;

        const tl = gsap.timeline({
          defaults: {
            ease: MOTION.ease.editorial,
          },
        });

        // Group A: Section Eyebrow
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: Math.min(8, distY) },
          { opacity: 1, y: 0, duration: 0.28, delay: isNarrowMobile ? 0.02 : 0.04 }
        )
          // Group B: Primary Message (H1)
          .fromTo(
            headlineRef.current,
            { opacity: 0, y: distY },
            { opacity: 1, y: 0, duration: durHeadline },
            isDesktop ? '-=0.22' : '-=0.18'
          )
          // Group C: Supporting Message (Subheadline)
          .fromTo(
            copyRef.current,
            { opacity: 0, y: Math.round(distY * 0.8) },
            { opacity: 1, y: 0, duration: durCopy },
            isDesktop ? '-=0.36' : '-=0.28'
          )
          // Group D: Trust / Benefits Banner
          .fromTo(
            offerBannerRef.current,
            { opacity: 0, y: Math.min(10, distY) },
            { opacity: 1, y: 0, duration: durOffer },
            isDesktop ? '-=0.28' : '-=0.22'
          )
          // Group E: Reassurance Note
          .fromTo(
            reassuranceRef.current,
            { opacity: 0, y: Math.min(8, distY) },
            { opacity: 1, y: 0, duration: durReassurance },
            isDesktop ? '-=0.28' : '-=0.22'
          )
          // Group F: Actions (Dual CTAs)
          .fromTo(
            ctaRef.current,
            { opacity: 0, y: Math.min(12, distY) },
            { opacity: 1, y: 0, duration: durCta },
            isDesktop ? '-=0.34' : '-=0.26'
          )
          // Group G: Portrait Composition
          .fromTo(
            portraitRef.current,
            {
              opacity: 0,
              x: distX,
              y: isDesktop ? 0 : distY,
              scale: isDesktop ? 0.985 : 1,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: durPortrait,
              ease: MOTION.ease.editorial,
            },
            isDesktop ? '-=0.55' : isTablet ? '-=0.45' : '-=0.32'
          )
          // Group H: Portrait Name Label
          .fromTo(
            portraitLabelRef.current,
            { opacity: 0, y: Math.min(8, distY) },
            { opacity: 1, y: 0, duration: 0.36 },
            isDesktop ? '-=0.3' : '-=0.2'
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
      className="relative bg-canvas pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-8 lg:pb-20 overflow-hidden"
    >
      <AnimatedGradient variant="hero" />
      <Container size="standard" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* 01. Section Eyebrow */}
            <div ref={eyebrowRef} className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-5 h-px bg-advisory-accent/60" aria-hidden="true" />
              <span className="font-body text-eyebrow font-semibold uppercase text-advisory-accent tracking-wider">
                Guidance That Fits You
              </span>
            </div>

            {/* 02. Primary Headline (H1) */}
            <h1
              ref={headlineRef}
              id="hero-heading"
              className="font-display text-[2rem] sm:text-4xl lg:text-[42px] xl:text-[44px] font-semibold text-brand-primary tracking-tight leading-[1.18] sm:leading-[1.16] mb-3.5 sm:mb-4"
            >
              {hero.headline}
            </h1>

            {/* 03. Supporting Copy */}
            <p ref={copyRef} className="font-body text-base sm:text-lg lg:text-[1.125rem] text-content-secondary max-w-[48ch] mb-4 sm:mb-5 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* 04. Trust / Benefits Banner */}
            <div ref={offerBannerRef} className="w-fit max-w-full mb-2.5 sm:mb-3">
              <HeroOfferBanner />
            </div>

            {/* 05 & 06. Reassurance Note & Actions Group */}
            <div className="w-full flex flex-col items-start translate-y-0 md:translate-y-5 lg:translate-y-8">
              {/* 05. Reassurance Note */}
              <div ref={reassuranceRef} className="flex items-center gap-2 text-content-muted mb-3.5 sm:mb-4">
                <FloatingAccent
                  axis="y"
                  distanceY={3}
                  duration={4.8}
                  delay={0}
                  className="flex-shrink-0"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-action-primary block"
                    aria-hidden="true"
                  />
                </FloatingAccent>
                <p className="font-body text-xs sm:text-small-meta text-content-muted">
                  {hero.reassuranceNote}
                </p>
              </div>

              {/* 06. Dual CTAs (Closing action of left column) */}
              <div ref={ctaRef} className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href={hero.primaryCta.href}
                  className="w-full sm:w-auto"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={hero.secondaryCta.href}
                  className="w-full sm:w-auto"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Composition & Visual Framing */}
          <div ref={portraitRef} className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[380px] xl:max-w-[400px] group">
              {/* Subtle background decorative paper layer for editorial depth */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 bg-canvas-alt border border-border-subtle/80 rounded-xl transition-transform duration-500 ease-out group-hover:translate-x-3 sm:group-hover:translate-x-4 group-hover:translate-y-3 sm:group-hover:translate-y-4 motion-reduce:transform-none"
                aria-hidden="true"
              />

              {/* Main Portrait Frame with standard 4:5 ratio */}
              <div
                className="relative aspect-[4/5] w-full rounded-xl bg-surface border border-border-subtle overflow-hidden shadow-card"
                role="img"
                aria-label={hero.imageAlt}
              >
                {hero.imageSource ? (
                  <img
                    src={hero.imageSource}
                    alt={hero.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.018] motion-reduce:transform-none"
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

              {/* Consultant Name & Title Label (35% inside frame / 65% outside below frame) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[65%] z-20 w-auto max-w-[92%] pointer-events-none">
                <div
                  ref={portraitLabelRef}
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-surface border border-border-subtle shadow-[0_5px_14px_rgba(15,23,42,0.11),0_2px_5px_rgba(20,74,58,0.05)] sm:shadow-[0_7px_18px_rgba(15,23,42,0.13),0_2px_6px_rgba(20,74,58,0.06)] text-center flex flex-col items-center"
                >
                  <span className="font-display text-xs sm:text-sm font-semibold text-brand-primary tracking-tight leading-tight">
                    {client.name}
                  </span>
                  <div className="inline-flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-action-primary flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-[10px] sm:text-[11px] text-content-secondary font-medium tracking-normal leading-tight whitespace-nowrap">
                      Personalized Insurance Guidance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
