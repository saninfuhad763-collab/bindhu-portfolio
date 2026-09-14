import React from 'react';
import { ShieldCheck, UserCheck, Route, MessageSquareText, type LucideIcon } from 'lucide-react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Reveal } from '../motion/Reveal';

const PILLAR_ICONS: Record<string, LucideIcon> = {
  compass: ShieldCheck,        // Clear Guidance → shield with check: trusted, protective
  userRound: UserCheck,        // Personalized Support → person with checkmark: confirmed personal care
  route: Route,                // Straightforward Process → route: straightforward path/process
  messageCircle: MessageSquareText, // Plain-Language Explanations → message with text lines: clear dialogue
};

/**
 * Trust & Value Anchor Section — Bindhu Portfolio
 *
 * Implements the approved Warm Editorial design direction:
 * - Asymmetric two-part layout (Left: Section Heading & Description; Right: 2x2 Pillar Cards)
 * - Transitions from Warm Ivory Hero to Soft Linen background for natural editorial rhythm
 * - Strictly non-factual service principles (Clear Guidance, Personalized Support, Straightforward Process, Plain-Language Explanations)
 * - Zero fabricated credentials, ratings, client counts, or carrier logos
 * - Semantic H2 heading and H3 card titles for accessible document hierarchy
 * - Subtle GSAP ScrollTrigger reveals with staggered pillar entry
 * - Pure typographic editorial cards: decorative icons removed for clean, dignified presentation
 */
export const TrustValue: React.FC = () => {
  const { trustValue } = siteContent;

  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="bg-canvas-alt py-14 sm:py-16 lg:py-24 border-t border-b border-border-subtle/70"
    >
      <Container size="standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Section Introduction */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <Reveal variant="fade-up">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
                <span className="w-5 h-px bg-advisory-accent/60" aria-hidden="true" />
                <span className="font-body text-eyebrow font-semibold uppercase text-advisory-accent tracking-wider">
                  {trustValue.eyebrow}
                </span>
              </div>

              {/* Section Heading (H2) */}
              <h2
                id="trust-heading"
                className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight mb-4 sm:mb-5"
              >
                {trustValue.headline}
              </h2>

              {/* Supporting Text */}
              <p className="font-body text-body-regular text-content-secondary max-w-reading leading-relaxed">
                {trustValue.description}
              </p>
            </Reveal>
          </div>

          {/* Right Column: 2x2 Value Pillar Grid */}
          <Reveal variant="fade-up" delay={0.08} stagger={0.09} selector=".trust-pillar" className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {trustValue.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="trust-pillar p-6 sm:p-7 rounded-xl bg-surface border border-border-subtle shadow-card flex flex-col justify-start h-full"
                >
                  {/* Pillar Icon */}
                  {(() => {
                    const Icon = PILLAR_ICONS[pillar.iconName];
                    return Icon ? (
                      <Icon
                        width={26}
                        height={26}
                        strokeWidth={2}
                        className="text-action-primary mb-4 flex-shrink-0"
                        aria-hidden="true"
                      />
                    ) : null;
                  })()}

                  {/* Pillar Title (H3) */}
                  <h3 className="font-display text-h4 font-semibold text-brand-primary mb-2.5 tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="font-body text-[13px] text-content-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
