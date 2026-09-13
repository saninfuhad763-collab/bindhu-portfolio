import React from 'react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Check } from 'lucide-react';
import { Reveal } from '../motion/Reveal';

/**
 * Phase 10 — Verified Social Proof Framework
 *
 * Implements a verified social-proof framework:
 * - Strict Authenticity Rule: Renders public stories ONLY when status === 'verified'
 *   AND approvedForPublication === true.
 * - Editorial Availability State: When no verified stories exist, displays an elegant,
 *   compact reserved editorial space communicating genuine client privacy and verification standards.
 * - Visual Rhythm: Warm Ivory canvas (`bg-canvas`, #FBFBF9), continuing the alternating paper cadence
 *   (Hero: Ivory → Trust: Linen → About: Ivory → Services: Linen → Process: Ivory → Education: Linen → Social Proof: Ivory).
 * - Compact vertical footprint: Preserves mobile length discipline.
 */
export const SocialProof: React.FC = () => {
  const { socialProof } = siteContent;

  // Strict publication filter: only render stories verified by client with publication approval
  const verifiedStories = (socialProof.stories || []).filter(
    (story) => story.status === 'verified' && story.approvedForPublication === true
  );
  const hasVerifiedStories = verifiedStories.length > 0;

  return (
    <section
      id="stories"
      className="py-14 sm:py-16 lg:py-24 bg-canvas border-t border-border-subtle/80 relative"
      aria-labelledby="stories-heading"
    >
      <Container size="standard">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <Reveal variant="fade-up">
            {/* Eyebrow */}
            <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
              {socialProof.eyebrow}
            </span>

            {/* Section Heading */}
            <h2
              id="stories-heading"
              className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight mb-4"
            >
              {socialProof.headline}
            </h2>

            {/* Description */}
            <p className="font-body text-body-large text-content-secondary leading-relaxed max-w-reading mx-auto mb-3">
              {socialProof.description}
            </p>

            {/* Positioning Line */}
            {socialProof.supportingLine && (
              <p className="font-body text-body-small text-content-muted italic max-w-reading mx-auto mb-8">
                {socialProof.supportingLine}
              </p>
            )}

            {/* Restrained Hairline Divider */}
            <div className="w-12 h-px bg-border-subtle mx-auto mb-8" aria-hidden="true" />
          </Reveal>

          {/* Content Display: Verified Stories OR Reserved Editorial Frame */}
          <Reveal variant="fade-up" delay={0.08}>
            {hasVerifiedStories ? (
              <div className="space-y-6 text-left">
                {verifiedStories.map((story) => (
                  <article
                    key={story.id}
                    className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-card"
                  >
                    {story.situation && (
                      <span className="font-body text-xs font-semibold text-action-primary uppercase tracking-wider block mb-2">
                        {story.situation}
                      </span>
                    )}
                    {story.quote && (
                      <blockquote className="font-display text-card-h3 text-brand-primary leading-snug mb-4">
                        “{story.quote}”
                      </blockquote>
                    )}
                    <footer className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-border-subtle text-small-meta text-content-muted">
                      <span>{story.clientContext || 'Verified Client'}</span>
                      {story.outcome && (
                        <span className="font-medium text-action-primary">{story.outcome}</span>
                      )}
                    </footer>
                  </article>
                ))}
              </div>
            ) : (
              /* Reserved Editorial Frame */
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-card text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-action-primary" aria-hidden="true" />
                  <span className="font-body text-xs font-semibold text-action-primary uppercase tracking-wider">
                    {socialProof.availabilityNotice.badge}
                  </span>
                </div>

                <h3 className="font-display text-card-h3 text-brand-primary mb-2">
                  {socialProof.availabilityNotice.title}
                </h3>

                <p className="font-body text-body-regular text-content-secondary leading-relaxed mb-6">
                  {socialProof.availabilityNotice.description}
                </p>

                {/* Commitments List */}
                <div className="pt-5 border-t border-border-subtle/80 space-y-3">
                  {socialProof.availabilityNotice.commitments.map((commitment, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full bg-action-primary/10 text-action-primary flex items-center justify-center flex-shrink-0"
                        aria-hidden="true"
                      >
                        <Check className="w-2.5 h-2.5" aria-hidden="true" />
                      </span>
                      <span className="font-body text-xs sm:text-body-small text-content-secondary leading-normal">
                        {commitment}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
