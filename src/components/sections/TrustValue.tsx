import React from 'react';
import { Compass, UserRound, Route, MessageCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Reveal } from '../motion/Reveal';

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
 */
export const TrustValue: React.FC = () => {
  const { trustValue } = siteContent;

  const renderIcon = (iconName: string) => {
    const iconProps = {
      className: 'w-5 h-5 text-brand-primary group-hover:text-action-primary transition-colors duration-200',
      strokeWidth: 1.75,
      'aria-hidden': true,
    };

    switch (iconName) {
      case 'compass':
        return <Compass {...iconProps} />;
      case 'userRound':
        return <UserRound {...iconProps} />;
      case 'route':
        return <Route {...iconProps} />;
      case 'messageCircle':
        return <MessageCircle {...iconProps} />;
      default:
        return <Compass {...iconProps} />;
    }
  };

  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="bg-canvas-alt py-12 sm:py-16 lg:py-24 border-t border-b border-border-subtle/70"
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
                className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight leading-[1.22] mb-4 sm:mb-5"
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
          <Reveal variant="fade-up" delay={0.08} stagger={0.09} selector=".group" className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {trustValue.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="group p-6 sm:p-7 rounded-lg bg-surface border border-border-subtle shadow-card hover:border-action-primary/40 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-start h-full"
                >
                  {/* Icon Emblem */}
                  <div className="w-10 h-10 rounded-md bg-canvas border border-border-subtle flex items-center justify-center mb-4 flex-shrink-0">
                    {renderIcon(pillar.iconName)}
                  </div>

                  {/* Pillar Title (H3) */}
                  <h3 className="font-display text-h4 font-semibold text-brand-primary mb-2 tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="font-body text-small-meta text-content-secondary leading-relaxed">
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
