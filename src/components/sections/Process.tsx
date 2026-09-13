import React from 'react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Reveal } from '../motion/Reveal';

/**
 * Phase 8 — Consultation Process / How It Works
 *
 * Implements a calm, guided editorial timeline/journey:
 * - Desktop (>=1024px): Four horizontal steps distributed across a subtle hairline axis.
 * - Mobile (<1024px): Clean vertical timeline with left-anchored progression markers.
 * - Staged GSAP reveal sequence (01 -> 02 -> 03 -> 04).
 *
 * Adheres strictly to the locked design system:
 * - Alternating paper rhythm: Warm Ivory canvas (`bg-canvas`, #FBFBF9)
 * - Typography: Lora display + Plus Jakarta Sans interface
 * - Content Safety: Neutral 4-step progression (Start -> Clarify -> Explore -> Decide)
 *   with zero unverified operational, regulatory, or outcome guarantees.
 */
export const Process: React.FC = () => {
  const { process } = siteContent;

  return (
    <section
      id="process"
      className="py-12 sm:py-16 lg:py-28 bg-canvas border-t border-border-subtle/80 relative"
      aria-labelledby="process-heading"
    >
      <Container size="standard">
        {/* Section Intro Header */}
        <Reveal variant="fade-up" className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
          <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
            {process.eyebrow}
          </span>
          <h2
            id="process-heading"
            className="font-display text-section-h2 text-brand-primary leading-tight mb-4"
          >
            {process.headline}
          </h2>
          <p className="font-body text-body-large text-content-secondary leading-relaxed">
            {process.description}
          </p>
        </Reveal>

        {/* Desktop Horizontal Timeline (>=1024px) */}
        <div className="hidden lg:block relative">
          {/* Subtle Horizontal Connector Line */}
          <div
            className="absolute top-[18px] left-[18px] right-[18px] h-[1px] bg-border-subtle"
            aria-hidden="true"
          />

          <Reveal variant="fade-up" delay={0.06} stagger={0.10} selector="li">
            <ol className="grid grid-cols-4 gap-8 relative list-none p-0 m-0">
              {process.steps.map((step) => (
                <li key={step.id} className="relative flex flex-col">
                  <div className="flex flex-col h-full">
                    {/* Step Marker & Short Label */}
                    <div className="flex items-center gap-3 mb-6 relative">
                      <span
                        className="w-9 h-9 rounded-full bg-canvas border border-border-subtle text-action-primary font-body text-xs font-semibold flex items-center justify-center shadow-xs z-10 ring-4 ring-canvas"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                      <span className="font-body text-eyebrow font-semibold text-content-muted tracking-wider uppercase">
                        {step.shortLabel}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display text-card-h3 text-brand-primary mb-2.5 leading-snug">
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
          </Reveal>
        </div>

        {/* Mobile Vertical Timeline (<1024px) */}
        <div className="lg:hidden block">
          <Reveal variant="fade-up" delay={0.06} stagger={0.07} selector="li">
            <ol className="relative border-l border-border-subtle ml-4 sm:ml-5 space-y-9 sm:space-y-11 pl-6 sm:pl-8 list-none m-0">
              {process.steps.map((step) => (
                <li key={step.id} className="relative">
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
                    <h3 className="font-display text-card-h3 text-brand-primary mb-2 leading-snug">
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
          </Reveal>
        </div>

        {/* Reassurance Note */}
        {process.reassuranceText && (
          <Reveal variant="fade-up" delay={0.12} className="mt-10 sm:mt-14 lg:mt-20 pt-8 border-t border-border-subtle/80 text-center">
            <p className="font-body text-body-regular text-content-secondary max-w-reading mx-auto italic">
              "{process.reassuranceText}"
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
};
