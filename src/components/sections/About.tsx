import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Reveal } from '../motion/Reveal';

/**
 * About Bindhu Section — Phase 6
 *
 * Implements the approved Warm Editorial design direction:
 * - Asymmetric two-column composition (Left: 4:5 Portrait Frame; Right: Narrative & Philosophy)
 * - Restrained editorial typography: Lora serif for H2 and philosophy titles, Plus Jakarta Sans for body
 * - Warm Ivory base canvas, alternating rhythmically with Trust section's Soft Linen
 * - 3 pure editorial philosophy statements (NO card boxes, preserving distinct visual rhythm)
 * - Secondary text CTA pointing toward #services
 * - Strict content safety: zero unverified credentials, years of experience, or claims
 * - Accessible single H2 heading and H3 philosophy points
 * - GSAP ScrollTrigger reveals (portrait fade-right, narrative fade-left) with 1.015 image hover scale
 */
export const About: React.FC = () => {
  const { about, client } = siteContent;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-canvas py-12 sm:py-16 lg:py-28 overflow-hidden border-b border-border-subtle/70"
    >
      <Container size="standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: 4:5 Portrait Composition (Stacks second on mobile for natural narrative intro) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col items-center lg:items-start lg:sticky lg:top-28">
            <Reveal variant="fade-right" delay={0.06} className="w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none">
              {/* Frame Container with offset tactile paper layer */}
              <div className="relative group">
                <div
                  className="absolute inset-0 -translate-x-2.5 translate-y-2.5 sm:-translate-x-3.5 sm:translate-y-3.5 bg-canvas-alt border border-border-subtle/80 rounded-xl transition-transform duration-500 ease-out group-hover:-translate-x-3 sm:group-hover:-translate-x-4 group-hover:translate-y-3 sm:group-hover:translate-y-4 motion-reduce:transform-none"
                  aria-hidden="true"
                />

                {/* Main Portrait Frame with standard 4:5 ratio */}
                <div
                  className="relative aspect-[4/5] w-full rounded-xl bg-surface border border-border-subtle overflow-hidden shadow-card"
                  role="img"
                  aria-label={about.imageAlt}
                >
                  {about.imageSource ? (
                    <img
                      src={about.imageSource}
                      alt={about.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transform-none"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    /* Intentional Editorial Portrait Placeholder */
                    <div className="w-full h-full bg-canvas-alt flex flex-col justify-between p-6 sm:p-8">
                      {/* Top framing indicator */}
                      <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3">
                        <span className="font-body text-[11px] font-semibold tracking-wider uppercase text-content-muted">
                          About Portrait
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
                          {about.imagePlaceholderLabel}
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

              {/* Editorial Positioning Caption beneath Portrait Frame */}
              {about.caption && (
                <div className="mt-5 pt-3.5 border-t border-border-subtle/70 w-full text-center lg:text-left">
                  <p className="font-display italic text-sm text-content-secondary leading-relaxed">
                    &ldquo;{about.caption}&rdquo;
                  </p>
                </div>
              )}
            </Reveal>
          </div>

          {/* Right Column: Editorial Narrative & Advisory Philosophy */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-start">
            <Reveal variant="fade-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
                <span className="w-5 h-px bg-advisory-accent/60" aria-hidden="true" />
                <span className="font-body text-eyebrow font-semibold uppercase text-advisory-accent tracking-wider">
                  {about.eyebrow}
                </span>
              </div>

              {/* Section Heading (H2) */}
              <h2
                id="about-heading"
                className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight leading-[1.22] mb-6 sm:mb-7"
              >
                {about.headline}
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 font-body text-body-regular text-content-secondary max-w-reading leading-relaxed mb-8 sm:mb-10">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Advisory Philosophy Statements (Editorial micro-grid, no heavy card boxes) */}
              <div className="w-full pt-8 border-t border-border-subtle/80 mb-8 sm:mb-10">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-content-muted block mb-6">
                  Core Advisory Approach
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {about.philosophy.map((item) => (
                    <div key={item.id} className="flex flex-col items-start">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-action-primary flex-shrink-0"
                          aria-hidden="true"
                        />
                        <h3 className="font-display text-body-large font-semibold text-brand-primary">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-body text-small-meta text-content-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary CTA: Link to #services */}
              <a
                href={about.cta.href}
                className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-primary hover:text-action-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded"
              >
                <span>{about.cta.label}</span>
                <ArrowRight
                  className="w-4 h-4 text-action-primary group-hover:translate-x-1 transition-transform motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
