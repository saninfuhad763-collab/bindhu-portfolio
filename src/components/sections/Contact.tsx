import React from 'react';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { Shield, ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';
import { FloatingAccent } from '../motion/FloatingAccent';
import { AnimatedGradient } from '../motion/AnimatedGradient';

/**
 * Phase 12 — Consultation & Contact Section
 *
 * Implements the primary conversion section of the website:
 * - Purpose: Turn accumulated trust into a comfortable, pressure-free next step.
 * - Visual Rhythm: Warm Ivory canvas (`bg-canvas`, #FBFBF9), continuing the alternating
 *   paper cadence (Social Proof: Ivory → FAQ: Linen → Contact: Ivory).
 * - Composition: Editorial two-column layout (Left: Editorial positioning & expectation guidance;
 *   Right: Restrained, polished contact panel).
 * - Multi-Mode Architecture: Supports 'placeholder' | 'direct' | 'form'.
 *   Default active mode is 'placeholder' until verified client contact channels are provided.
 * - Strict Privacy Rule: Explicit prominent notice discouraging submission of medical/health data.
 * - Content Safety: Zero fake phone numbers, emails, calendar links, office locations, or fake endpoints.
 */
export const Contact: React.FC = () => {
  const { contact } = siteContent;

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-24 bg-canvas border-t border-border-subtle/80 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <AnimatedGradient variant="contact" />
      <Container size="standard" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Positioning & Expectations */}
          <Reveal variant="fade-right" className="lg:col-span-7">
            {/* Eyebrow */}
            <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
              {contact.eyebrow}
            </span>

            {/* Section Heading */}
            <h2
              id="contact-heading"
              className="font-display text-section-h2 text-brand-primary tracking-tight leading-tight mb-5"
            >
              {contact.headline}
            </h2>

            {/* Section Description */}
            <p className="font-body text-body-lead text-content-secondary leading-relaxed max-w-xl mb-10">
              {contact.description}
            </p>

            {/* Reassurance & Expectation Points */}
            <div className="pt-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-content-muted block mb-5">
                What to expect from an initial conversation
              </span>

              <ul className="space-y-6" role="list">
                {contact.expectations.map((exp, index) => (
                  <li key={exp.id} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/10 flex items-center justify-center font-body text-xs font-semibold mt-0.5"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="font-body text-body-regular font-semibold text-content-primary">
                        {exp.title}
                      </h3>
                      <p className="font-body text-small-meta text-content-secondary mt-1 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right Column: Contact Panel (Mode Driven) */}
          <Reveal variant="fade-left" delay={0.08} className="lg:col-span-5">
            <div className="bg-surface border border-border-subtle rounded-2xl p-6 sm:p-8 lg:p-9 shadow-card relative">
              {/* MODE 1: PLACEHOLDER (Current default state before verified contact channels) */}
              {contact.mode === 'placeholder' && (
                <div>
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary font-body text-xs font-medium">
                    <FloatingAccent
                      axis="y"
                      distanceY={3}
                      duration={5.8}
                      delay={2.8}
                      opacityMin={0.85}
                      opacityMax={1.0}
                      className="inline-flex flex-shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-action-primary block" aria-hidden="true" />
                    </FloatingAccent>
                    {contact.placeholderState.badge}
                  </div>

                  {/* Panel Title */}
                  <h3 className="font-display text-card-h3 text-brand-primary mt-4 tracking-tight leading-snug">
                    {contact.placeholderState.title}
                  </h3>

                  {/* Panel Description */}
                  <p className="font-body text-body-regular text-content-secondary mt-2.5 leading-relaxed">
                    {contact.placeholderState.description}
                  </p>

                  {/* Guidance Box for Preparation */}
                  <div className="mt-6 p-5 rounded-xl bg-canvas-alt/70 border border-border-subtle/70">
                    <p className="font-body text-xs font-semibold text-content-primary uppercase tracking-wider mb-3">
                      {contact.placeholderState.guidanceTitle}
                    </p>
                    <ul className="space-y-2.5 text-small-meta text-content-secondary" role="list">
                      {contact.placeholderState.guidanceItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-action-primary/60 mt-1.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Privacy Notice Notice Callout */}
                  <div className="mt-6 pt-5 border-t border-border-subtle/80 flex items-start gap-3">
                    <Shield
                      className="w-4 h-4 text-action-primary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="font-body text-xs text-content-muted leading-relaxed">
                      <strong className="font-semibold text-content-secondary">Privacy notice: </strong>
                      {contact.privacyNotice}
                    </p>
                  </div>
                </div>
              )}

              {/* MODE 2: DIRECT CONTACT (For verified direct channels: phone, email, booking) */}
              {contact.mode === 'direct' && contact.directContact && (
                <div className="space-y-6">
                  <h3 className="font-display text-card-h3 text-brand-primary">
                    Reach Out Directly
                  </h3>
                  <p className="font-body text-body-regular text-content-secondary">
                    Choose the consultation format that is most convenient for you.
                  </p>

                  <div className="space-y-3 pt-2">
                    {contact.directContact.bookingUrl && (
                      <a
                        href={contact.directContact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl border border-border-subtle hover:border-action-primary/40 bg-canvas hover:bg-canvas-alt transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-action-primary" />
                          <span className="font-body text-sm font-medium text-content-primary">
                            Schedule a Conversation
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-action-primary group-hover:translate-x-0.5 transition-all" />
                      </a>
                    )}

                    {contact.directContact.phone && (
                      <a
                        href={`tel:${contact.directContact.phone.replace(/\D/g, '')}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-border-subtle hover:border-action-primary/40 bg-canvas hover:bg-canvas-alt transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-action-primary" />
                          <span className="font-body text-sm font-medium text-content-primary">
                            {contact.directContact.phone}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-action-primary group-hover:translate-x-0.5 transition-all" />
                      </a>
                    )}

                    {contact.directContact.email && (
                      <a
                        href={`mailto:${contact.directContact.email}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-border-subtle hover:border-action-primary/40 bg-canvas hover:bg-canvas-alt transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-action-primary" />
                          <span className="font-body text-sm font-medium text-content-primary">
                            {contact.directContact.email}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-content-muted group-hover:text-action-primary group-hover:translate-x-0.5 transition-all" />
                      </a>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border-subtle/80 flex items-start gap-3">
                    <Shield className="w-4 h-4 text-action-primary flex-shrink-0 mt-0.5" />
                    <p className="font-body text-xs text-content-muted leading-relaxed">
                      <strong className="font-semibold text-content-secondary">Privacy notice: </strong>
                      {contact.privacyNotice}
                    </p>
                  </div>
                </div>
              )}

              {/* MODE 3: FORM WORKFLOW (Future verified form request submission) */}
              {contact.mode === 'form' && contact.form && (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-4"
                  noValidate
                >
                  <h3 className="font-display text-card-h3 text-brand-primary">
                    Send an Inquiry
                  </h3>

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-body text-xs font-semibold text-content-primary uppercase tracking-wider mb-1.5"
                    >
                      {contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border-subtle bg-canvas text-content-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-body text-xs font-semibold text-content-primary uppercase tracking-wider mb-1.5"
                    >
                      {contact.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border-subtle bg-canvas text-content-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-inquiry"
                      className="block font-body text-xs font-semibold text-content-primary uppercase tracking-wider mb-1.5"
                    >
                      {contact.form.inquiryLabel}
                    </label>
                    <textarea
                      id="contact-inquiry"
                      name="inquiry"
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-border-subtle bg-canvas text-content-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Callout */}
                  <div className="py-2 flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-action-primary flex-shrink-0 mt-0.5" />
                    <p className="font-body text-xs text-content-muted leading-relaxed">
                      {contact.privacyNotice}
                    </p>
                  </div>

                  <Button variant="primary" type="submit" className="w-full">
                    {contact.form.submitButtonLabel}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
