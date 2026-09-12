import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteContent } from '../../content/siteContent';

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
 */
export const Hero: React.FC = () => {
  const { hero, client } = siteContent;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-canvas pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-28 overflow-hidden"
    >
      <Container size="standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow / Context Category */}
            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-5 h-px bg-advisory-accent/60" aria-hidden="true" />
              <span className="font-body text-eyebrow font-semibold uppercase text-advisory-accent tracking-wider">
                {hero.eyebrow}
              </span>
            </div>

            {/* Primary Headline (H1) */}
            <h1
              id="hero-heading"
              className="font-display text-hero-h1 font-semibold text-brand-primary tracking-tight mb-5 sm:mb-6 leading-[1.18]"
            >
              {hero.headline}
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-body-large text-content-secondary max-w-reading mb-8 sm:mb-10 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* Dual CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              <Button
                variant="primary"
                size="md"
                href={hero.primaryCta.href}
                className="w-full sm:w-auto shadow-sm"
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

            {/* Reassurance Note */}
            <div className="flex items-center gap-2.5 text-content-muted">
              <span
                className="w-1.5 h-1.5 rounded-full bg-action-primary flex-shrink-0"
                aria-hidden="true"
              />
              <p className="font-body text-small-meta text-content-muted">
                {hero.reassuranceNote}
              </p>
            </div>
          </div>

          {/* Right Column: Portrait Composition & Visual Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none">
              {/* Subtle background decorative paper layer for editorial depth */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 bg-canvas-alt border border-border-subtle/80 rounded-xl"
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
                    className="w-full h-full object-cover"
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
