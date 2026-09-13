import React, { useState, useRef, useEffect } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteContent } from '../../content/siteContent';
import { ChevronDown, Check, ArrowRight } from 'lucide-react';
import { Reveal } from '../motion/Reveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BREAKPOINTS } from '../motion/motionConfig';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Phase 7 — Advisory Services Section
 *
 * Implements an interactive progressive-disclosure pattern:
 * - Desktop (>=1024px): Asymmetrical two-column editorial composition with a
 *   sticky situation navigator (01–04) that stays anchored while the right detail panel flows.
 *   Uses native CSS position: sticky (top-28 = 112px accounting for the 80px fixed header + 32px breathing room)
 *   supplemented with ScrollTrigger pin under ScrollSmoother to bridge the ancestor transform.
 * - Mobile (<1024px): Accessible accordion with >=48px touch targets,
 *   visible focus rings, and explicit ARIA semantics.
 *
 * Adheres strictly to the locked design system:
 * - Alternating paper rhythm: Soft Linen canvas (`bg-canvas-alt`, #F4F3EE)
 * - Typography: Lora display + Plus Jakarta Sans interface
 * - Content Safety: Neutral categories with zero unverified carrier or product claims
 */
export const Services: React.FC = () => {
  const { services } = siteContent;
  const [activeId, setActiveId] = useState<string>(services.items[0]?.id || 'service-personal');
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(services.items[0]?.id || 'service-personal');

  const sectionRef = useRef<HTMLElement>(null);
  const navigatorRef = useRef<HTMLDivElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const panelContentRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  const activeService = services.items.find((item) => item.id === activeId) || services.items[0];

  // Restrained content transition on tab selection change (Desktop)
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const contentEl = panelContentRef.current;
    if (!contentEl) return;

    const isReduced = window.matchMedia(BREAKPOINTS.reduceMotion).matches;
    if (isReduced) {
      gsap.set(contentEl, { opacity: 1, y: 0, clearProps: 'transform' });
      return;
    }

    // Short visual transition: opacity + 12px translate (settles quickly, no bounce)
    gsap.fromTo(
      contentEl,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        clearProps: 'transform',
      }
    );
  }, [activeId]);

  // Desktop sticky pinning integration:
  // Pure CSS `position: sticky; top: 112px;` handles standard document flow.
  // When ScrollSmoother is active on desktop, ScrollTrigger pinning bridges the transform
  // on #smooth-content, locking the navigator at top: 112px until the panel ends.
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: BREAKPOINTS.desktop,
        reduceMotion: BREAKPOINTS.reduceMotion,
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };

        if (!isDesktop || reduceMotion) return;

        const nav = navigatorRef.current;
        const panel = detailPanelRef.current;
        const section = sectionRef.current;
        if (!nav || !panel || !section) return;

        // Sticky boundary: Starts when navigator hits 112px below viewport top (80px header + 32px breathing room),
        // stops when panel bottom reaches the bottom of the sticky navigator
        const st = ScrollTrigger.create({
          trigger: nav,
          start: 'top top+=132',
          endTrigger: panel,
          end: () => `bottom top+=${132 + nav.offsetHeight}`,
          pin: nav,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        return () => {
          st.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const itemsCount = services.items.length;
    let nextIndex = -1;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % itemsCount;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + itemsCount) % itemsCount;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = itemsCount - 1;
    }
    if (nextIndex >= 0) {
      const nextItem = services.items[nextIndex];
      setActiveId(nextItem.id);
      const nextTab = document.getElementById(`service-tab-${nextItem.id}`);
      nextTab?.focus();
    }
  };

  // Hover Profile B: Component-scoped pointer-tracking 3D tilt (max ±2°, perspective 1000, y: -2px)
  const handleTabPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (
      typeof window === 'undefined' ||
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia(BREAKPOINTS.reduceMotion).matches
    ) {
      return;
    }

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -Number(((y / (rect.height / 2)) * 2).toFixed(2));
    const rotateY = Number(((x / (rect.width / 2)) * 2).toFixed(2));

    gsap.to(target, {
      transformPerspective: 1000,
      rotateX,
      rotateY,
      y: -2,
      duration: 0.15,
      ease: 'power1.out',
      overwrite: 'auto',
    });
  };

  const handleTabPointerLeave = (e: React.PointerEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => {
    if (
      typeof window === 'undefined' ||
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia(BREAKPOINTS.reduceMotion).matches
    ) {
      return;
    }

    const target = e.currentTarget;
    gsap.to(target, {
      transformPerspective: 1000,
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.35,
      ease: 'power2.out',
      clearProps: 'transform',
      overwrite: 'auto',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-12 sm:py-16 lg:py-28 bg-canvas-alt border-t border-border-subtle/80 relative"
      aria-labelledby="services-heading"
    >
      <Container size="standard">
        {/* Section Intro Header */}
        <Reveal variant="fade-up" className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
            {services.eyebrow}
          </span>
          <h2
            id="services-heading"
            className="font-display text-section-h2 text-brand-primary leading-tight mb-4"
          >
            {services.headline}
          </h2>
          <p className="font-body text-body-large text-content-secondary leading-relaxed">
            {services.description}
          </p>
        </Reveal>

        {/* Desktop Progressive Disclosure (>=1024px) */}
        <Reveal variant="fade-up" delay={0.08} className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-stretch relative">
          {/* Left Column: Situation Navigator Index */}
          <div className="lg:col-span-5 relative">
            <div
              ref={navigatorRef}
              className="lg:sticky space-y-3"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Advisory service areas"
            >
              {services.items.map((item, index) => {
                const isSelected = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`service-tab-${item.id}`}
                    aria-selected={isSelected}
                    aria-controls={`service-panel-${item.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    onPointerMove={handleTabPointerMove}
                    onPointerLeave={handleTabPointerLeave}
                    onBlur={handleTabPointerLeave}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left p-5 rounded-xl transition-colors duration-200 border flex items-center justify-between gap-4 group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 ${
                      isSelected
                        ? 'bg-surface border-action-primary/60 shadow-card ring-1 ring-action-primary/20 text-brand-primary'
                        : 'bg-surface/50 hover:bg-surface border-border-subtle hover:border-border-strong text-content-secondary hover:text-brand-primary'
                    }`}
                  >
                    {/* Active vertical accent pill on left border */}
                    <span
                      className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-200 ${
                        isSelected ? 'bg-action-primary opacity-100' : 'bg-transparent opacity-0'
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex items-center gap-3.5 flex-1 min-w-0 pl-1">
                      <span
                        className={`font-body text-xs font-semibold px-2.5 py-1 rounded transition-colors shrink-0 ${
                          isSelected
                            ? 'bg-action-primary text-white'
                            : 'bg-canvas-alt text-content-muted group-hover:text-content-secondary group-hover:bg-canvas-alt/80'
                        }`}
                      >
                        {item.number}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span
                          className={`font-display text-base lg:text-lg leading-snug truncate transition-colors ${
                            isSelected
                              ? 'text-brand-primary font-semibold'
                              : 'text-content-primary group-hover:text-brand-primary'
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="font-body text-xs text-content-muted truncate mt-0.5">
                          {item.shortLabel}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                        isSelected
                          ? 'text-action-primary translate-x-1'
                          : 'text-content-muted group-hover:text-content-secondary group-hover:translate-x-1'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Detail Card */}
          <div ref={detailPanelRef} className="lg:col-span-7">
            {activeService && (
              <div
                id={`service-panel-${activeService.id}`}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`service-tab-${activeService.id}`}
                className="bg-surface border border-border-subtle rounded-2xl p-8 lg:p-10 shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <div ref={panelContentRef}>
                  {/* Panel Top Metadata */}
                  <div className="flex items-center justify-between gap-4 flex-wrap pb-5 border-b border-border-subtle/80">
                    <div className="flex items-center gap-2">
                      <span className="font-body text-xs font-semibold px-2.5 py-1 rounded bg-action-primary/10 text-action-primary">
                        {activeService.number}
                      </span>
                      <span className="font-body text-xs text-content-muted uppercase tracking-wider font-medium">
                        {activeService.category}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body text-content-muted bg-canvas-alt border border-border-subtle">
                      <span className="w-1.5 h-1.5 rounded-full bg-advisory-accent" aria-hidden="true" />
                      {activeService.verificationStatus || activeService.verificationNotice}
                    </span>
                  </div>

                  {/* Service Heading & Summary */}
                  <div className="mt-6 mb-8">
                    <h3 className="font-display text-card-h2 text-brand-primary leading-tight mb-3">
                      {activeService.title}
                    </h3>
                    <p className="font-body text-body-regular text-content-secondary leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>

                  {/* Who This Is For Box */}
                  <div className="p-5 rounded-xl bg-canvas-alt/70 border border-border-subtle/80 mb-6">
                    <p className="font-body text-eyebrow font-semibold text-brand-primary uppercase tracking-wider mb-1.5">
                      Who This Guidance Is For
                    </p>
                    <p className="font-body text-body-small text-content-secondary leading-relaxed">
                      {activeService.audience}
                    </p>
                  </div>

                  {/* Scope: What We Evaluate Together */}
                  <div className="mb-6">
                    <p className="font-body text-eyebrow font-semibold text-brand-primary uppercase tracking-wider mb-3">
                      What We Evaluate Together
                    </p>
                    <ul className="space-y-2.5">
                      {activeService.advisoryScope.map((scopeItem, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 w-5 h-5 rounded-full bg-action-primary/10 text-action-primary flex items-center justify-center flex-shrink-0"
                            aria-hidden="true"
                          >
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </span>
                          <span className="font-body text-body-small text-content-secondary leading-relaxed">
                            {scopeItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Outcome Reassurance Box */}
                  <div className="p-5 rounded-xl bg-canvas border border-border-subtle mb-8">
                    <p className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider mb-1">
                      Expected Outcome
                    </p>
                    <p className="font-body text-body-small text-content-primary leading-relaxed font-medium">
                      {activeService.expectedOutcome}
                    </p>
                  </div>

                  {/* Detail Panel Footer & CTA */}
                  <div className="pt-6 border-t border-border-subtle/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Button
                      href={services.cta.href}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                      className="flex-shrink-0 whitespace-nowrap"
                    >
                      {services.cta.label}
                    </Button>
                    <p className="font-body text-small-meta text-content-muted">
                      Zero sales obligation · Independent consultative evaluation
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Mobile & Tablet Accessible Accordion (<1024px) */}
        <Reveal variant="fade-up" delay={0.08} className="lg:hidden block space-y-3.5">
          {services.items.map((item) => {
            const isOpen = mobileOpenId === item.id;
            return (
              <div
                key={item.id}
                className="bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-card transition-all"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setMobileOpenId(isOpen ? null : item.id)}
                    className="w-full min-h-[56px] p-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`service-mobile-panel-${item.id}`}
                    id={`service-mobile-header-${item.id}`}
                  >
                    <div className="flex items-center gap-3.5 pr-2">
                      <span
                        className={`font-body text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                          isOpen
                            ? 'bg-action-primary text-white'
                            : 'bg-action-primary/10 text-action-primary'
                        }`}
                      >
                        {item.number}
                      </span>
                      <div>
                        <span className="font-display text-card-h3 text-brand-primary block leading-snug">
                          {item.shortLabel}
                        </span>
                        <span className="font-body text-xs text-content-muted block mt-0.5">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-content-secondary transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-action-primary' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`service-mobile-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`service-mobile-header-${item.id}`}
                    className="px-5 pb-6 pt-2 border-t border-border-subtle/80 space-y-5"
                  >
                    {/* Verification Notice */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body text-content-muted bg-canvas-alt border border-border-subtle">
                        <span className="w-1.5 h-1.5 rounded-full bg-advisory-accent" aria-hidden="true" />
                        {item.verificationStatus || item.verificationNotice}
                      </span>
                    </div>

                    {/* Summary Description */}
                    <p className="font-body text-body-small text-content-secondary leading-relaxed">
                      {item.description}
                    </p>

                    {/* Who This Is For */}
                    <div className="p-4 rounded-lg bg-canvas-alt/70 border border-border-subtle/80">
                      <p className="font-body text-eyebrow font-semibold text-brand-primary uppercase tracking-wider mb-1">
                        Who This Is For
                      </p>
                      <p className="font-body text-body-small text-content-secondary leading-relaxed">
                        {item.audience}
                      </p>
                    </div>

                    {/* What We Evaluate Together */}
                    <div>
                      <p className="font-body text-eyebrow font-semibold text-brand-primary uppercase tracking-wider mb-2.5">
                        What We Evaluate Together
                      </p>
                      <ul className="space-y-2">
                        {item.advisoryScope.map((scope, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="mt-0.5 w-4 h-4 rounded-full bg-action-primary/10 text-action-primary flex items-center justify-center flex-shrink-0"
                              aria-hidden="true"
                            >
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </span>
                            <span className="font-body text-body-small text-content-secondary leading-relaxed">
                              {scope}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expected Outcome */}
                    <div className="p-4 rounded-lg bg-canvas border border-border-subtle">
                      <p className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider mb-1">
                        Expected Outcome
                      </p>
                      <p className="font-body text-body-small text-content-primary leading-relaxed font-medium">
                        {item.expectedOutcome}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Button
                        href={services.cta.href}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                        className="w-full sm:w-auto justify-center whitespace-nowrap"
                      >
                        {services.cta.label}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
};
