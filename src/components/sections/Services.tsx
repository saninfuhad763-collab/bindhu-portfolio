import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteContent } from '../../content/siteContent';
import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from '../motion/Reveal';
import { AnimatedGradient } from '../motion/AnimatedGradient';
import { gsap } from 'gsap';
import { useScrollSmoother } from '../motion/ScrollSystem';

/**
 * Advisory Services Section — Spatially Stable Two-Part Interactive Composition
 *
 * Interaction Architecture:
 * - Desktop (>=1024px): Two-column composition in normal, natural document flow.
 *   - Left Column: 4 selectable service items in a clean, minimal editorial index.
 *   - Right Column: Stable editorial folio displaying the full content of the selected service.
 *   - Selection Motion: When switching services, the incoming content enters smoothly
 *     from the right edge (x: +28px -> 0, opacity: 0 -> 1, power2.out, 0.35s) while the
 *     outgoing content cleanly dissolves (x: 0 -> -16px, opacity: 1 -> 0, power2.in, 0.22s).
 *   - Spatially Stable: Switching services NEVER scrolls the page, jumps coordinates,
 *     or interacts with other sections. Page scroll remains 100% normal and predictable.
 *   - Height Stable: CSS grid overlay (col-start-1 row-start-1) prevents layout shifts.
 *   - Interruptible: Rapid consecutive clicks cancel in-flight tweens and immediately
 *     settle on the latest selected service without queued animation lag.
 * - Mobile (<1024px): Stacked accessible accordion with >=48px touch targets,
 *   full keyboard toggle, and zero horizontal overflow.
 * - Reduced Motion: Instantaneous content switching with zero translation or delay.
 */

export const Services: React.FC = () => {
  const { services } = siteContent;
  const [activeId, setActiveId] = useState<string>(services.items[0]?.id || 'service-personal');
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(services.items[0]?.id || 'service-personal');

  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railMarkerRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number>(0);
  const isInitialMount = useRef<boolean>(true);

  const { isReducedMotion } = useScrollSmoother();

  const activeIndex = services.items.findIndex((item) => item.id === activeId);

  // Position the rail marker on mount and handle resize
  const updateRailMarker = useCallback((index: number, animate = true) => {
    const tabs = tabRefs.current;
    const marker = railMarkerRef.current;
    if (!marker || !tabs[index]) return;

    const targetTab = tabs[index]!;
    const targetY = targetTab.offsetTop;
    const targetHeight = targetTab.offsetHeight || 72;

    if (!animate || isReducedMotion) {
      gsap.set(marker, { y: targetY, height: targetHeight });
    } else {
      gsap.to(marker, {
        y: targetY,
        height: targetHeight,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  }, [isReducedMotion]);

  // Initial setup of cards and rail marker
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    // Set initial card states
    cards.forEach((card, i) => {
      if (i === activeIndex) {
        gsap.set(card, {
          opacity: 1,
          x: 0,
          visibility: 'visible',
          pointerEvents: 'auto',
        });
      } else {
        gsap.set(card, {
          opacity: 0,
          x: 28,
          visibility: 'hidden',
          pointerEvents: 'none',
        });
      }
    });

    updateRailMarker(activeIndex, false);

    // Window resize handler to keep rail marker accurately aligned with tab offsetTop
    const handleResize = () => {
      updateRailMarker(activeIndex, false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth Right-to-Left Editorial Transition on activeIndex change
  useEffect(() => {
    // Skip on very first mount (already configured by initialization effect)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const prevIndex = prevIndexRef.current;
    const newIndex = activeIndex;

    // Always update rail marker position
    updateRailMarker(newIndex, true);

    if (prevIndex === newIndex) return;

    // In reduced motion: instantaneous switch without translations
    if (isReducedMotion) {
      cards.forEach((card, i) => {
        if (i === newIndex) {
          gsap.set(card, {
            opacity: 1,
            x: 0,
            visibility: 'visible',
            pointerEvents: 'auto',
          });
        } else {
          gsap.set(card, {
            opacity: 0,
            x: 0,
            visibility: 'hidden',
            pointerEvents: 'none',
          });
        }
      });
      prevIndexRef.current = newIndex;
      return;
    }

    // Cancel any in-flight card animations to guarantee clean interruption
    cards.forEach((card) => gsap.killTweensOf(card));

    // Immediately park all other inactive cards safely out of view
    cards.forEach((card, i) => {
      if (i !== prevIndex && i !== newIndex) {
        gsap.set(card, {
          opacity: 0,
          x: 28,
          visibility: 'hidden',
          pointerEvents: 'none',
        });
      }
    });

    const outgoingCard = cards[prevIndex];
    const incomingCard = cards[newIndex];

    // Outgoing content: smooth fade and calm leftward exit
    if (outgoingCard) {
      gsap.to(outgoingCard, {
        opacity: 0,
        x: -16,
        duration: 0.22,
        ease: 'power2.in',
        pointerEvents: 'none',
        onComplete: () => {
          gsap.set(outgoingCard, { visibility: 'hidden' });
        },
      });
    }

    // Incoming content: enters smoothly from the right (+28px -> 0) and settles
    if (incomingCard) {
      gsap.fromTo(
        incomingCard,
        {
          opacity: 0,
          x: 28,
          visibility: 'visible',
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: 'power2.out',
          pointerEvents: 'auto',
        }
      );
    }

    prevIndexRef.current = newIndex;
  }, [activeIndex, updateRailMarker, isReducedMotion]);

  // Expose lightweight debug helper for browser automation and verification
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__SERVICES_DEBUG__ = {
        getActiveIndex: () => activeIndex,
        getActiveId: () => activeId,
        selectService: (idx: number) => handleSelectService(idx),
        cards: cardRefs.current,
        tabs: tabRefs.current,
      };
    }
  }, [activeIndex, activeId]);

  // Coordinated Selection (Spurious page scrolls completely eliminated)
  const handleSelectService = (index: number) => {
    const targetItem = services.items[index];
    if (!targetItem) return;
    if (targetItem.id === activeId) return;

    // Pure React state update — NO window.scrollTo, NO smoother.scrollTo, NO page jumping
    setActiveId(targetItem.id);
  };

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
      handleSelectService(nextIndex);
      const nextTab = tabRefs.current[nextIndex];
      nextTab?.focus();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-canvas-alt border-t border-border-subtle/80 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <AnimatedGradient variant="services" />
      <Container size="standard" className="relative z-10">
        {/* Section Intro Header */}
        <Reveal variant="fade-up" className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <span className="font-body text-eyebrow font-semibold text-action-primary uppercase tracking-wider block mb-3">
            {services.eyebrow}
          </span>
          <h2
            id="services-heading"
            className="font-display text-section-h2 font-semibold text-brand-primary tracking-tight mb-4"
          >
            {services.headline}
          </h2>
          <p className="font-body text-body-large text-content-secondary leading-relaxed">
            {services.description}
          </p>
        </Reveal>

        {/* Desktop Two-Column Editorial Stage (>=1024px) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-start relative">
          {/* Left Column: Situation Navigator Index */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Continuous Active Rail Marker */}
              {!isReducedMotion && (
                <div
                  ref={railMarkerRef}
                  className="absolute left-0 w-1 bg-action-primary rounded-full pointer-events-none z-10 transition-transform"
                  style={{ height: '76px', top: 0 }}
                  aria-hidden="true"
                />
              )}

              <div
                className="divide-y divide-border-subtle/80 border-y border-border-subtle/80"
                role="tablist"
                aria-orientation="vertical"
                aria-label="Advisory service areas"
              >
                {services.items.map((item, index) => {
                  const isSelected = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      ref={(el) => {
                        tabRefs.current[index] = el;
                      }}
                      type="button"
                      role="tab"
                      id={`service-tab-${item.id}`}
                      aria-selected={isSelected}
                      aria-controls={`service-panel-${item.id}`}
                      tabIndex={isSelected ? 0 : -1}
                      onKeyDown={(e) => handleTabKeyDown(e, index)}
                      onClick={() => handleSelectService(index)}
                      className={`w-full text-left py-4 px-4 sm:px-5 transition-colors duration-200 flex items-center justify-between gap-4 group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 ${
                        isSelected
                          ? 'bg-surface/90 text-brand-primary'
                          : 'bg-transparent hover:bg-surface/40 text-content-secondary hover:text-brand-primary'
                      }`}
                    >
                      {/* In reduced motion: fallback static active bar */}
                      {isReducedMotion && (
                        <span
                          className={`absolute left-0 top-0 bottom-0 w-1 ${
                            isSelected ? 'bg-action-primary opacity-100' : 'bg-transparent opacity-0'
                          }`}
                          aria-hidden="true"
                        />
                      )}

                      <div className="flex items-center gap-4 flex-1 min-w-0 pl-1">
                        {/* Tabular Monospace Numeral */}
                        <span
                          className={`font-mono text-xs sm:text-sm font-semibold tabular-nums tracking-wider transition-colors shrink-0 ${
                            isSelected
                              ? 'text-action-primary font-bold'
                              : 'text-content-muted group-hover:text-content-secondary'
                          }`}
                        >
                          {item.number}
                        </span>

                        {/* Editorial Title & Subtitle */}
                        <div className="flex flex-col min-w-0">
                          <span
                            className={`font-display text-base lg:text-[1.0625rem] leading-snug truncate transition-colors ${
                              isSelected
                                ? 'text-brand-primary font-semibold'
                                : 'text-content-primary group-hover:text-brand-primary font-medium'
                            }`}
                          >
                            {item.category}
                          </span>
                          <span
                            className={`font-body text-xs truncate mt-0.5 transition-colors ${
                              isSelected
                                ? 'text-content-secondary'
                                : 'text-content-muted group-hover:text-content-secondary'
                            }`}
                          >
                            {item.shortLabel}
                          </span>
                        </div>
                      </div>

                      {/* Directional Arrow */}
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                          isSelected
                            ? 'text-action-primary translate-x-1 opacity-100'
                            : 'text-content-muted/40 group-hover:text-content-secondary group-hover:translate-x-1 opacity-40 group-hover:opacity-100'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Editorial Counter Indicator */}
            <div
              className="pt-4 px-1 flex items-center justify-between text-xs text-content-muted font-mono"
              aria-hidden="true"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-brand-primary tabular-nums">
                  0{activeIndex + 1} / 0{services.items.length}
                </span>
                {/* Slender indicator track */}
                <div className="w-20 h-1 bg-border-subtle/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-action-primary rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${((activeIndex + 1) / services.items.length) * 100}%` }}
                  />
                </div>
              </div>
              <span className="font-body text-[11px] tracking-wider uppercase text-content-muted/80">
                Select to explore
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Architectural Editorial Folio (Height-Stable CSS Grid Overlay) */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full grid grid-cols-1 grid-rows-1">
              {services.items.map((item, index) => {
                const isSelected = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    id={`service-panel-${item.id}`}
                    role="tabpanel"
                    tabIndex={isSelected ? 0 : -1}
                    aria-hidden={!isSelected}
                    aria-labelledby={`service-tab-${item.id}`}
                    className="col-start-1 row-start-1 w-full bg-surface border border-border-subtle/80 rounded-2xl p-6 sm:p-7 xl:p-8 shadow-[0_4px_24px_-4px_rgba(27,42,42,0.04)] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                    style={
                      isReducedMotion
                        ? {
                            display: isSelected ? 'block' : 'none',
                            opacity: 1,
                            transform: 'none',
                            pointerEvents: isSelected ? 'auto' : 'none',
                          }
                        : {
                            opacity: index === 0 ? 1 : 0,
                            transform: 'none',
                            pointerEvents: index === 0 ? 'auto' : 'none',
                          }
                    }
                  >
                    {/* Architectural Eyebrow Header */}
                    <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-border-subtle/60">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-xs font-bold text-action-primary tracking-wider">
                          {item.number}
                        </span>
                        <span className="text-border-subtle/80 font-light text-xs" aria-hidden="true">
                          /
                        </span>
                        <span className="font-body text-xs text-content-muted uppercase tracking-wider font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <span className="font-body text-[11px] text-content-muted/80 tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-advisory-accent" aria-hidden="true" />
                        {item.verificationStatus || item.verificationNotice}
                      </span>
                    </div>

                    {/* Primary Narrative (Title & Summary) */}
                    <div className="mt-4 mb-4">
                      <h3 className="font-display text-xl lg:text-[1.375rem] font-semibold text-brand-primary leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-body-small text-content-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Typographic Grouping: Who This Guidance Is For */}
                    <div className="pt-3 pb-2 border-t border-border-subtle/40">
                      <h4 className="font-body text-[11px] font-semibold text-content-muted uppercase tracking-wider mb-1">
                        Who This Guidance Is For
                      </h4>
                      <p className="font-body text-body-small text-content-secondary leading-relaxed">
                        {item.audience}
                      </p>
                    </div>

                    {/* What We Evaluate Together Checklist */}
                    <div className="mt-3">
                      <h4 className="font-body text-[11px] font-semibold text-content-muted uppercase tracking-wider mb-2">
                        What We Evaluate Together
                      </h4>
                      <ul className="space-y-1.5">
                        {item.advisoryScope.map((scopeItem, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check
                              className="w-3.5 h-3.5 text-action-primary mt-0.5 shrink-0 stroke-[2.25]"
                              aria-hidden="true"
                            />
                            <span className="font-body text-body-small text-content-secondary leading-relaxed">
                              {scopeItem}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expected Outcome Editorial Pullout */}
                    <div className="mt-4 pl-3.5 border-l-2 border-action-primary/50 py-1">
                      <span className="font-body text-[11px] font-semibold text-action-primary uppercase tracking-wider block mb-0.5">
                        Expected Outcome
                      </span>
                      <p className="font-body text-body-small text-brand-primary font-medium leading-relaxed">
                        {item.expectedOutcome}
                      </p>
                    </div>

                    {/* Consultation Action */}
                    <div className="mt-6 pt-4 border-t border-border-subtle/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                );
              })}
            </div>
          </div>
        </div>

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
                    <ArrowRight
                      className={`w-4 h-4 text-content-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-90 text-action-primary' : ''
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
                    className="px-5 pb-6 pt-2 border-t border-border-subtle/80 space-y-4"
                  >
                    {/* Verification Notice */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <span className="font-body text-[11px] text-content-muted/80 tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-advisory-accent" aria-hidden="true" />
                        {item.verificationStatus || item.verificationNotice}
                      </span>
                    </div>

                    {/* Narrative */}
                    <p className="font-body text-body-small text-content-secondary leading-relaxed">
                      {item.description}
                    </p>

                    {/* Who This Is For */}
                    <div className="pt-3 border-t border-border-subtle/40">
                      <p className="font-body text-[11px] font-semibold text-content-muted uppercase tracking-wider mb-1">
                        Who This Is For
                      </p>
                      <p className="font-body text-body-small text-content-secondary leading-relaxed">
                        {item.audience}
                      </p>
                    </div>

                    {/* What We Evaluate Together */}
                    <div>
                      <p className="font-body text-[11px] font-semibold text-content-muted uppercase tracking-wider mb-2">
                        What We Evaluate Together
                      </p>
                      <ul className="space-y-2">
                        {item.advisoryScope.map((scope, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check
                              className="w-3.5 h-3.5 text-action-primary mt-0.5 shrink-0 stroke-[2.25]"
                              aria-hidden="true"
                            />
                            <span className="font-body text-body-small text-content-secondary leading-relaxed">
                              {scope}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expected Outcome Editorial Pullout */}
                    <div className="pl-3.5 border-l-2 border-action-primary/40 py-0.5">
                      <p className="font-body text-[11px] font-semibold text-action-primary uppercase tracking-wider mb-0.5">
                        Expected Outcome
                      </p>
                      <p className="font-body text-body-small text-content-primary leading-relaxed font-medium">
                        {item.expectedOutcome}
                      </p>
                    </div>

                    {/* Mobile Consultation CTA */}
                    <div className="pt-4 border-t border-border-subtle/80 flex flex-col gap-3">
                      <Button
                        href={services.cta.href}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                        className="w-full justify-center"
                      >
                        {services.cta.label}
                      </Button>
                      <p className="font-body text-small-meta text-content-muted text-center">
                        Zero sales obligation · Independent consultative evaluation
                      </p>
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
