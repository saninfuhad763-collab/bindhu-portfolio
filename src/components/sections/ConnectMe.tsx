import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../layout/Container';
import { siteContent } from '../../content/siteContent';
import { useScrollSmoother } from '../motion/ScrollSystem';
import { Mail, ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppFloatingButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Connect Me — Final Consultation & Direct Contact Section
 *
 * Implements the approved Warm Editorial design direction:
 * - Placement: Mounted immediately before Footer (FAQ -> Connect Me -> Footer)
 * - Semantic ID: id="contact" preserving all global consultation anchor links
 * - Composition: Balanced two-column editorial layout
 *   - Left: Dignified introduction, narrative reassurance, and privacy notice
 *   - Right: Two primary conversion cards (WhatsApp Messaging & Direct Email)
 * - Safe Placeholders: Zero invented phone numbers, emails, addresses, or claims
 * - Motion: Viewport-triggered GSAP entrance (y: 24px -> 0, power3.out, restrained stagger)
 */
export const ConnectMe: React.FC = () => {
  const { connectMe, client } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const { isReducedMotion } = useScrollSmoother();

  const data = connectMe || {
    eyebrow: 'Connect With Me',
    headline: 'Let’s discuss your health coverage with clarity and care.',
    description:
      'Whether you have questions about policy options, need assistance evaluating an existing plan, or want a calm second opinion—reach out for an unhurried, pressure-free conversation.',
    privacyNotice:
      'Privacy notice: Please do not include sensitive health records or medical history in initial messages.',
    whatsappNumber: client?.whatsappNumber || '[ WhatsApp Number ]',
    emailAddress: client?.emailPlaceholder || '[ Email Address ]',
    channels: [
      {
        id: 'channel-whatsapp',
        label: 'WhatsApp Messaging',
        value: client?.whatsappNumber || '[ WhatsApp Number ]',
        note: 'Direct messaging for quick questions & consultation scheduling',
      },
      {
        id: 'channel-email',
        label: 'Direct Email',
        value: client?.emailPlaceholder || '[ Email Address ]',
        note: 'Detailed policy inquiries & document review requests',
      },
    ],
  };

  // Coordinated GSAP Scroll Entrance
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const prefersReduced =
        typeof window !== 'undefined' &&
        (window.matchMedia('(prefers-reduced-motion: reduce)').matches || isReducedMotion);

      const intro = el.querySelector<HTMLElement>('.connect-intro');
      const actionCards = el.querySelectorAll<HTMLElement>('.connect-card');

      if (prefersReduced) {
        if (intro) gsap.set(intro, { opacity: 1, y: 0, clearProps: 'transform' });
        if (actionCards.length > 0) gsap.set(actionCards, { opacity: 1, y: 0, clearProps: 'transform' });
        return;
      }

      // Initial state
      if (intro) gsap.set(intro, { opacity: 0, y: 24 });
      if (actionCards.length > 0) gsap.set(actionCards, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });

      // 1. Intro narrative reveal
      if (intro) {
        tl.to(
          intro,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          0
        );
      }

      // 2. Action elements reveal with subtle stagger
      if (actionCards.length > 0) {
        tl.to(
          actionCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          0.14
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isReducedMotion]);

  // Safe WhatsApp URL generation
  const digitsOnly = (data.whatsappNumber || '').replace(/\D/g, '');
  const whatsappHref =
    digitsOnly.length >= 7
      ? `https://wa.me/${digitsOnly}`
      : `https://wa.me/?text=Hello%20Bindhu,%20I%20would%20like%20to%20consult%20about%20health%20insurance`;

  const emailHref = `mailto:${data.emailAddress}`;

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="connect-heading"
      className="py-16 sm:py-20 lg:py-24 bg-canvas border-t border-border-subtle/80 relative overflow-hidden"
    >
      <Container size="standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Positioning & Guidance Reassurance */}
          <div className="connect-intro lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
              <span className="w-5 h-px bg-advisory-accent/60" aria-hidden="true" />
              <span className="font-body text-eyebrow font-semibold uppercase text-advisory-accent tracking-wider">
                {data.eyebrow}
              </span>
            </div>

            {/* Section Heading (H2) */}
            <h2
              id="connect-heading"
              className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight mb-4 sm:mb-5"
            >
              {data.headline}
            </h2>

            {/* Narrative Description */}
            <p className="font-body text-body-large text-content-secondary leading-relaxed mb-6 sm:mb-8">
              {data.description}
            </p>

            {/* Core Reassurances List */}
            <ul className="space-y-2.5 mb-8" role="list">
              <li className="flex items-center gap-2.5 text-content-secondary">
                <CheckCircle2 className="w-4 h-4 text-action-primary shrink-0" aria-hidden="true" />
                <span className="font-body text-sm">Strictly independent, client-first guidance</span>
              </li>
              <li className="flex items-center gap-2.5 text-content-secondary">
                <CheckCircle2 className="w-4 h-4 text-action-primary shrink-0" aria-hidden="true" />
                <span className="font-body text-sm">Unhurried consultations tailored to your situation</span>
              </li>
              <li className="flex items-center gap-2.5 text-content-secondary">
                <CheckCircle2 className="w-4 h-4 text-action-primary shrink-0" aria-hidden="true" />
                <span className="font-body text-sm">Zero carrier sales pressure or plan quotas</span>
              </li>
            </ul>

            {/* Privacy Notice Box */}
            <div className="p-4 rounded-xl bg-surface border border-border-subtle/80 max-w-lg shadow-xs">
              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-action-primary mt-0.5 shrink-0" aria-hidden="true" />
                <p className="font-body text-xs text-content-muted leading-relaxed">
                  {data.privacyNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Action Pathway Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 w-full">
            {/* Primary Action Card: WhatsApp */}
            <div className="connect-card p-6 sm:p-7 rounded-2xl bg-surface border border-border-subtle shadow-card hover:border-action-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-action-primary/10 flex items-center justify-center text-action-primary">
                      <WhatsAppIcon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-action-primary block">
                        Primary Direct Channel
                      </span>
                      <h3 className="font-display text-lg font-semibold text-brand-primary tracking-tight">
                        WhatsApp Consultation
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="font-body text-[13px] text-content-secondary leading-relaxed mb-4">
                  Direct messaging for quick questions, plan comparison inquiries, or scheduling an unhurried introductory call.
                </p>

                <div className="py-2 px-3 rounded-lg bg-canvas-alt/70 border border-border-subtle/60 text-xs font-mono text-content-muted mb-5">
                  {data.whatsappNumber}
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp [Placeholder]"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-action-primary hover:bg-action-hover text-white font-body text-sm font-semibold shadow-xs hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-white/90" aria-hidden="true" />
              </a>
            </div>

            {/* Secondary Action Card: Direct Email */}
            <div className="connect-card p-6 sm:p-7 rounded-2xl bg-surface border border-border-subtle shadow-card hover:border-action-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-action-primary/10 flex items-center justify-center text-action-primary">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-content-muted block">
                        Written Inquiries
                      </span>
                      <h3 className="font-display text-lg font-semibold text-brand-primary tracking-tight">
                        Direct Email
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="font-body text-[13px] text-content-secondary leading-relaxed mb-4">
                  Send detailed background information, policy document reviews, or non-urgent health coverage questions.
                </p>

                <div className="py-2 px-3 rounded-lg bg-canvas-alt/70 border border-border-subtle/60 text-xs font-mono text-content-muted mb-5">
                  {data.emailAddress}
                </div>
              </div>

              <a
                href={emailHref}
                aria-label="Send an Email [Placeholder]"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-surface border border-border-subtle hover:border-brand-primary/60 text-brand-primary hover:bg-canvas-alt font-body text-sm font-semibold shadow-xs transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4 text-action-primary" aria-hidden="true" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-4 h-4 text-content-muted" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
