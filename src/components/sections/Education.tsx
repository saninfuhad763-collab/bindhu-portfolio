import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../motion/Reveal';

/**
 * Phase 9 — Insurance Education / Editorial Guidance
 *
 * Implements an editorial question index / expandable guide:
 * - Desktop (>=1024px): Two-column editorial composition (Left: Sticky section narrative;
 *   Right: Editorial question index with inline disclosure).
 * - Mobile (<1024px): Stacked single-column accessible accordion with >=48px touch targets.
 *
 * Adheres strictly to the locked design system:
 * - Alternating paper rhythm: Soft Linen canvas (`bg-canvas-alt`, #F4F3EE)
 * - Typography: Lora display + Plus Jakarta Sans interface
 * - Content Safety: 100% provisional, market-neutral educational questions
 *   with zero unverified product, carrier, or regulatory advice.
 */
export const Education: React.FC = () => {
  const { education } = siteContent;
  const [openId, setOpenId] = useState<string | null>(education.topics[0]?.id || 'edu-1');

  const toggleTopic = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="education"
      className="py-12 sm:py-16 lg:py-28 bg-canvas-alt border-t border-border-subtle/80 relative"
      aria-labelledby="education-heading"
    >
      <Container size="standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Introduction (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal variant="fade-right">
              <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
                {education.eyebrow}
              </span>
              <h2
                id="education-heading"
                className="font-display text-section-h2 text-brand-primary leading-tight mb-4"
              >
                {education.headline}
              </h2>
              <p className="font-body text-body-large text-content-secondary leading-relaxed mb-6">
                {education.description}
              </p>
              <div className="p-4 rounded-xl bg-canvas border border-border-subtle/80">
                <span className="font-body text-xs font-semibold text-action-primary uppercase tracking-wider block mb-1">
                  Clarity Before Commitment
                </span>
                <p className="font-body text-body-small text-content-secondary leading-relaxed">
                  Consultative guidance means asking the right questions first, so you make informed decisions on your own timeline.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Question Index */}
          <Reveal variant="fade-left" delay={0.1} className="lg:col-span-7">
            <div className="divide-y divide-border-subtle border-y border-border-subtle">
              {education.topics.map((topic) => {
                const isOpen = openId === topic.id;
                return (
                  <div key={topic.id} className="py-6 first:pt-0 last:pb-0 transition-colors">
                    {/* Question Header Button */}
                    <h3>
                      <button
                        type="button"
                        onClick={() => toggleTopic(topic.id)}
                        className="w-full min-h-[56px] flex items-start justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-lg py-2"
                        aria-expanded={isOpen}
                        aria-controls={`edu-answer-${topic.id}`}
                        id={`edu-question-${topic.id}`}
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <span
                            className={`font-body text-xs font-semibold px-2.5 py-1 rounded transition-colors mt-0.5 flex-shrink-0 ${
                              isOpen
                                ? 'bg-action-primary text-white'
                                : 'bg-canvas text-content-muted group-hover:text-action-primary border border-border-subtle'
                            }`}
                          >
                            {topic.number}
                          </span>
                          <div>
                            <span
                              className={`font-display text-card-h3 block leading-snug transition-colors ${
                                isOpen
                                  ? 'text-brand-primary font-semibold'
                                  : 'text-content-primary group-hover:text-brand-primary'
                              }`}
                            >
                              {topic.question}
                            </span>
                            <span className="font-body text-xs text-content-muted block mt-1">
                              {topic.summary}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`mt-1 w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                            isOpen
                              ? 'bg-action-primary/10 border-action-primary/30 text-action-primary'
                              : 'bg-canvas text-content-muted group-hover:text-content-primary'
                          }`}
                          aria-hidden="true"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-action-primary' : ''
                            }`}
                          />
                        </span>
                      </button>
                    </h3>

                    {/* Expandable Answer Region */}
                    {isOpen && (
                      <div
                        id={`edu-answer-${topic.id}`}
                        role="region"
                        aria-labelledby={`edu-question-${topic.id}`}
                        className="mt-4 pl-0 sm:pl-12 pr-0 sm:pr-2 space-y-3"
                      >
                        <div className="p-5 rounded-xl bg-canvas border border-border-subtle/80 shadow-xs">
                          <div className="flex items-center gap-2 mb-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-advisory-accent"
                              aria-hidden="true"
                            />
                            <span className="font-body text-xs text-content-muted font-medium uppercase tracking-wider">
                              {topic.statusLabel}
                            </span>
                          </div>
                          <p className="font-body text-body-regular text-content-secondary leading-relaxed italic">
                            {topic.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
