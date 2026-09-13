import React from 'react';
import { Container } from './Container';
import { siteContent } from '../../content/siteContent';
import { ArrowUpRight } from 'lucide-react';

/**
 * Phase 13 — Footer & Site Closing
 *
 * Implements the global site footer:
 * - Reinforces Bindhu's identity with text brand mark and professional descriptor.
 * - Concise, neutral positioning closing copy.
 * - Semantic navigation reusing the 6 anchor targets (#about, #services, #process, #education, #faq, #contact).
 * - Safe consultation pathway preserved via anchor link to #contact.
 * - Safe, non-fabricated legal/compliance area with educational disclaimer and clear placeholder note.
 * - Visual Design: Deep Maritime Slate canvas (`bg-brand-primary`, #1A2B3C), Warm Ivory text (`text-canvas`),
 *   subtle borders, and generous yet compact vertical spacing.
 * - Accessibility: Semantic `<footer>` with role="contentinfo", `<nav aria-label="Footer Navigation">`,
 *   accessible touch targets, and high-contrast text (>10:1 contrast ratio).
 */
export const Footer: React.FC = () => {
  const { footer, client } = siteContent;

  return (
    <footer
      className="bg-brand-primary text-canvas border-t border-brand-hover relative"
      role="contentinfo"
    >
      <Container size="standard">
        <div className="py-12 lg:py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Column 1: Brand & Closing Positioning */}
            <div className="md:col-span-5 lg:col-span-5">
              <a
                href="#top"
                className="inline-flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded py-1 select-none"
                aria-label={`${client.name} — ${client.professionalTitle}`}
              >
                <span className="font-display text-2xl font-semibold text-canvas tracking-tight group-hover:text-action-primary transition-colors">
                  {client.name}
                </span>
                <span className="font-body text-[11px] font-medium text-canvas-alt/70 tracking-wider uppercase mt-0.5">
                  {client.professionalTitle}
                </span>
              </a>

              <p className="font-body text-sm text-canvas-alt/80 max-w-sm mt-3.5 leading-relaxed">
                {footer.positioning}
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-4 lg:col-span-4">
              <span className="font-body text-xs font-semibold text-canvas-alt/60 uppercase tracking-wider block mb-3.5">
                Navigation
              </span>

              <nav aria-label="Footer Navigation">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2" role="list">
                  {footer.navigationLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="font-body text-sm text-canvas-alt/80 hover:text-canvas transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded py-1 inline-flex items-center min-h-[44px] sm:min-h-0"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Consultation Pathway */}
            <div className="md:col-span-3 lg:col-span-3">
              <span className="font-body text-xs font-semibold text-canvas-alt/60 uppercase tracking-wider block mb-3.5">
                Consultation
              </span>

              <p className="font-body text-sm text-canvas-alt/80 leading-relaxed mb-3">
                {footer.contactNote}
              </p>

              <a
                href={footer.contactCtaHref}
                className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-action-primary hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded py-1 min-h-[44px] sm:min-h-0 group"
              >
                <span>{footer.contactCtaLabel}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Bottom Legal & Compliance Row */}
          <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
            {/* Educational Disclaimer */}
            <p className="font-body text-xs text-canvas-alt/60 leading-relaxed max-w-4xl">
              {footer.disclaimer}
            </p>

            {/* Regulatory Notice Placeholder */}
            <p className="font-body text-xs text-canvas-alt/50 leading-relaxed max-w-4xl">
              {footer.regulatoryNote}
            </p>

            {/* Copyright & Safe Legal Placeholder Note */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-canvas-alt/50 border-t border-white/5">
              <span>{footer.copyright}</span>
              <span className="italic">
                {footer.legalNotice}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
