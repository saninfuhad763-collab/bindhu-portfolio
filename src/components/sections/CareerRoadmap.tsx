import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Reveal } from '../motion/Reveal';
import { useScrollSmoother } from '../motion/ScrollSystem';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Career Roadmap / Professional Journey Section — Bindhu Portfolio
 *
 * Implements the approved Warm Editorial design direction:
 * - Asymmetric two-column composition (Left: Sticky Section Introduction & Client Verification Notice; Right: Vertical Milestone Progression)
 * - Subtle continuous progression line with compact node markers
 * - Disciplined editorial typography and whitespace
 * - Strict content safety: 100% placeholder-driven with zero invented credentials, dates, employers, or metrics
 * - Dedicated GSAP ScrollTrigger AOS-style entrance motion (y: 28px -> 0, opacity: 0 -> 1, duration: 0.85s, power3.out, restrained stagger)
 */
export const CareerRoadmap: React.FC = () => {
  const { careerRoadmap } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const { isReducedMotion } = useScrollSmoother();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !careerRoadmap) return;

    const ctx = gsap.context(() => {
      // Check reduced motion preference (via hook or system media query)
      const prefersReduced =
        typeof window !== 'undefined' &&
        (window.matchMedia('(prefers-reduced-motion: reduce)').matches || isReducedMotion);

      const milestoneElements = el.querySelectorAll<HTMLElement>('.roadmap-milestone');
      if (!milestoneElements || milestoneElements.length === 0) return;

      if (prefersReduced) {
        // Immediate display without motion for accessibility
        milestoneElements.forEach((item) => {
          const content = item.querySelector('.milestone-content');
          const node = item.querySelector('.milestone-node');
          if (content) gsap.set(content, { opacity: 1, y: 0, clearProps: 'transform' });
          if (node) gsap.set(node, { opacity: 1 });
        });
        return;
      }

      // Initial state: opacity: 0, y: 28px for content blocks; soft opacity: 0 for node anchors
      milestoneElements.forEach((item) => {
        const content = item.querySelector('.milestone-content');
        const node = item.querySelector('.milestone-node');
        if (content) gsap.set(content, { opacity: 0, y: 28 });
        if (node) gsap.set(node, { opacity: 0 });
      });

      // AOS-style viewport-triggered reveal with ScrollTrigger.batch for natural sequencing
      ScrollTrigger.batch(milestoneElements, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
          batch.forEach((item, index) => {
            const content = item.querySelector('.milestone-content');
            const node = item.querySelector('.milestone-node');

            if (content) {
              gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 0.85,
                delay: index * 0.12,
                ease: 'power3.out',
                clearProps: 'transform',
              });
            }

            if (node) {
              gsap.to(node, {
                opacity: 1,
                duration: 0.6,
                delay: index * 0.12,
                ease: 'power2.out',
              });
            }
          });
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [careerRoadmap, isReducedMotion]);

  if (!careerRoadmap) return null;

  return (
    <section
      ref={sectionRef}
      id="career-roadmap"
      aria-labelledby="career-roadmap-heading"
      className="bg-canvas py-14 sm:py-16 lg:py-24 border-b border-border-subtle/70 relative"
    >
      <Container size="standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Introduction & Verification Notice (Sticky on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <Reveal variant="fade-up">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
                <span className="w-5 h-px bg-advisory-accent/60" aria-hidden="true" />
                <span className="font-body text-eyebrow font-semibold uppercase text-advisory-accent tracking-wider">
                  {careerRoadmap.eyebrow}
                </span>
              </div>

              {/* Section Heading (H2) */}
              <h2
                id="career-roadmap-heading"
                className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight mb-4 sm:mb-5"
              >
                {careerRoadmap.headline}
              </h2>

              {/* Narrative Description */}
              <p className="font-body text-body-regular text-content-secondary max-w-reading leading-relaxed mb-6 sm:mb-8">
                {careerRoadmap.description}
              </p>

              {/* Editorial Client Notice Callout */}
              <div className="p-4 sm:p-5 rounded-xl bg-surface border border-border-subtle shadow-xs max-w-reading">
                <p className="font-mono text-[11px] uppercase tracking-wider text-action-primary font-semibold mb-1">
                  Professional Notice
                </p>
                <p className="font-body text-xs text-content-muted leading-relaxed">
                  {careerRoadmap.disclaimer}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Refined Vertical Progression Timeline with AOS-style GSAP Reveal */}
          <div className="lg:col-span-7 w-full">
            <ol className="relative list-none p-0 m-0">
              {/* Subtle Continuous Progression Spine Line (Stable & Stationary) */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-3 bottom-5 w-px bg-border-subtle"
                aria-hidden="true"
              />

              {careerRoadmap.milestones.map((milestone) => (
                <li
                  key={milestone.id}
                  className="roadmap-milestone relative pl-8 sm:pl-10 pb-9 sm:pb-12 last:pb-1"
                >
                  {/* Compact Milestone Anchor Marker (Anchored to Spine) */}
                  <div
                    className="milestone-node absolute left-[7px] sm:left-[9px] -translate-x-1/2 top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-surface border-2 border-action-primary flex items-center justify-center ring-4 ring-canvas z-10"
                    aria-hidden="true"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-action-primary" />
                  </div>

                  {/* Milestone Content Block (AOS Animated Unit) */}
                  <div className="milestone-content">
                    {/* Period & Phase Eyebrow */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold text-action-primary tracking-wider">
                        {milestone.phase}
                      </span>
                      <span className="text-border-subtle text-xs" aria-hidden="true">
                        •
                      </span>
                      <span className="font-body text-eyebrow font-semibold uppercase tracking-wider text-content-muted">
                        {milestone.period}
                      </span>
                    </div>

                    {/* Milestone Title (H3) */}
                    <h3 className="font-display text-card-h3 font-semibold text-brand-primary tracking-tight mb-2">
                      {milestone.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="font-body text-[13px] text-content-secondary leading-relaxed max-w-prose mb-3">
                      {milestone.description}
                    </p>

                    {/* Core Advisory Scope Badge */}
                    <div className="inline-flex items-baseline gap-2 py-1 px-2.5 rounded bg-surface border border-border-subtle/70 shadow-xs text-xs">
                      <span className="font-body font-semibold uppercase tracking-wider text-content-muted text-[10.5px] shrink-0">
                        Advisory Scope:
                      </span>
                      <span className="font-body font-medium text-brand-primary">
                        {milestone.focus}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
};
