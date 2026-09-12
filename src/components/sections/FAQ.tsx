import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Plus } from 'lucide-react';

/**
 * Phase 11 — FAQ / Decision-Support Questions
 *
 * Implements a concise, reassuring editorial FAQ list:
 * - Purpose: Remove final hesitation before contact; answers practical questions
 *   for visitors still exploring their options.
 * - Pattern: Clean editorial hairline list (not card boxes, not heavy surfaces).
 * - Visual Rhythm: Soft Linen canvas (`bg-canvas-alt`, #F4F3EE), continuing the alternating
 *   paper cadence (Social Proof: Warm Ivory → FAQ: Soft Linen).
 * - Compact vertical footprint: 5 focused questions with short, calming answers.
 * - Accessibility: Native disclosure controls (<button>), aria-expanded, aria-controls,
 *   role="region", >=48px touch targets, visible focus rings.
 */
export const FAQ: React.FC = () => {
  const { faq } = siteContent;
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-24 bg-canvas-alt border-t border-border-subtle/80 relative"
      aria-labelledby="faq-heading"
    >
      <Container size="standard">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
              {faq.eyebrow}
            </span>

            <h2
              id="faq-heading"
              className="font-display text-section-h2 text-brand-primary leading-tight mb-4"
            >
              {faq.headline}
            </h2>

            <p className="font-body text-body-large text-content-secondary leading-relaxed max-w-reading mx-auto">
              {faq.description}
            </p>
          </div>

          {/* Editorial Hairline FAQ List */}
          <div className="divide-y divide-border-subtle border-y border-border-subtle">
            {faq.items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="transition-colors">
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full min-h-[56px] py-5 flex items-start justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-lg"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <span
                          className={`font-body text-xs font-semibold px-2 py-0.5 rounded transition-colors mt-0.5 flex-shrink-0 ${
                            isOpen
                              ? 'bg-action-primary text-white'
                              : 'text-content-muted group-hover:text-action-primary bg-canvas border border-border-subtle'
                          }`}
                        >
                          {item.number}
                        </span>

                        <span
                          className={`font-display text-card-h3 block leading-snug transition-colors ${
                            isOpen
                              ? 'text-brand-primary font-semibold'
                              : 'text-content-primary group-hover:text-brand-primary'
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={`mt-0.5 w-7 h-7 rounded-full border border-border-subtle flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isOpen
                            ? 'bg-action-primary/10 border-action-primary/30 text-action-primary'
                            : 'bg-canvas text-content-muted group-hover:text-content-primary'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-45 text-action-primary' : 'text-content-muted'
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  {/* Expandable Answer Region */}
                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      className="pb-6 pl-10 sm:pl-12 pr-2 sm:pr-8 text-left"
                    >
                      <p className="font-body text-body-regular text-content-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
