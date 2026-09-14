import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteContent } from '../../content/siteContent';
import { Check, ArrowRight } from 'lucide-react';
import { AnimatedGradient } from '../motion/AnimatedGradient';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollSmoother } from '../motion/ScrollSystem';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const rightFolioRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railMarkerRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number>(0);
  const isInitialMount = useRef<boolean>(true);

  const [rightCardHeight, setRightCardHeight] = useState<number>(600);

  const { isReducedMotion } = useScrollSmoother();

  const activeIndex = services.items.findIndex((item) => item.id === activeId);

  // Position the rail marker on mount and handle resize
  const updateRailMarker = useCallback((index: number, animate = true) => {
    const tabs = tabRefs.current;
    const marker = railMarkerRef.current;
    if (!marker || !tabs[index]) return;

    const targetTab = tabs[index]!;
    const inset = 10;
    const targetY = targetTab.offsetTop + inset;
    const targetHeight = Math.max((targetTab.offsetHeight || 120) - inset * 2, 24);

    if (!animate || isReducedMotion) {
      gsap.set(marker, { y: targetY, height: targetHeight });
    } else {
      gsap.to(marker, {
        y: targetY,
        height: targetHeight,
        duration: 0.28,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  }, [isReducedMotion]);

  // Dynamically measure right content height and derive left navigation group height (~90%)
  useEffect(() => {
    const el = rightFolioRef.current;
    if (!el) return;

    const measure = () => {
      const activeCardEl = el.querySelector('[role="tabpanel"]:not([style*="display: none"])') as HTMLElement | null;
      const h = activeCardEl?.offsetHeight || el.offsetHeight;
      if (h > 0) {
        setRightCardHeight(h);
      }
    };

    measure();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        measure();
      });
      ro.observe(el);
    }

    window.addEventListener('resize', measure);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Dynamic 90% vertical relationship: leftGroupHeight = rightCardHeight * 0.90
  const interCardGap = 12; // gap-3 in px
  const leftGroupHeight = Math.round(rightCardHeight * 0.90);
  const calculatedCardHeight = Math.round((leftGroupHeight - 3 * interCardGap) / 4);
  const cardHeight = Math.min(Math.max(calculatedCardHeight, 80), 160);

  // Keep rail marker accurately synchronized whenever dimensions or activeIndex update
  useEffect(() => {
    updateRailMarker(activeIndex, false);
  }, [cardHeight, activeIndex, updateRailMarker]);

  // Initial setup of cards and rail marker
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    // Set initial card states
    cards.forEach((card, i) => {
      if (i === activeIndex) {
        gsap.set(card, {
          autoAlpha: 1,
          x: 0,
          pointerEvents: 'auto',
        });
      } else {
        gsap.set(card, {
          autoAlpha: 0,
          x: 6,
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

  // Coordinated GSAP AOS-style Entrance Reveal on initial scroll into viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };

        const header = el.querySelector<HTMLElement>('.services-header');
        const tabs = tabRefs.current.filter(Boolean) as HTMLButtonElement[];
        const rightFolio = rightFolioRef.current;
        const railMarker = railMarkerRef.current;
        const accordions = el.querySelectorAll<HTMLElement>('.services-accordion-item');

        // Accessibility: instantaneous visibility when reduced motion is preferred
        if (reduceMotion || isReducedMotion) {
          if (header) gsap.set(header, { opacity: 1, y: 0, clearProps: 'transform' });
          if (tabs.length > 0) gsap.set(tabs, { opacity: 1, y: 0, clearProps: 'transform' });
          if (rightFolio) gsap.set(rightFolio, { opacity: 1, y: 0, clearProps: 'transform' });
          if (railMarker) gsap.set(railMarker, { opacity: 1 });
          if (accordions.length > 0) gsap.set(accordions, { opacity: 1, y: 0, clearProps: 'transform' });
          return;
        }

        if (isDesktop) {
          // Initial entrance states for desktop elements
          if (header) gsap.set(header, { opacity: 0, y: 24 });
          if (tabs.length > 0) gsap.set(tabs, { opacity: 0, y: 22 });
          if (rightFolio) gsap.set(rightFolio, { opacity: 0, y: 24 });
          if (railMarker) gsap.set(railMarker, { opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top 84%',
              once: true,
            },
          });

          // 1. Section Intro Header: opacity: 0 -> 1, y: 24 -> 0, duration: 0.75s, power3.out
          if (header) {
            tl.to(
              header,
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

          // 2. Left Service Cards: opacity: 0 -> 1, y: 22 -> 0, stagger: 0.12s, duration: 0.75s, power3.out
          if (tabs.length > 0) {
            tl.to(
              tabs,
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: 'power3.out',
                clearProps: 'transform',
              },
              0.12
            );
          }

          // Subtle rail marker fade-in alongside active tab
          if (railMarker) {
            tl.to(
              railMarker,
              {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
              },
              0.24
            );
          }

          // 3. Right Content Card: opacity: 0 -> 1, y: 24 -> 0, duration: 0.80s, power3.out (delayed ~0.14s after left cards start)
          if (rightFolio) {
            tl.to(
              rightFolio,
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'transform',
              },
              0.26
            );
          }
        } else {
          // Mobile & Tablet (<1024px)
          if (header) gsap.set(header, { opacity: 0, y: 20 });
          if (accordions.length > 0) gsap.set(accordions, { opacity: 0, y: 20 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          });

          if (header) {
            tl.to(
              header,
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

          if (accordions.length > 0) {
            tl.to(
              accordions,
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.09,
                ease: 'power3.out',
                clearProps: 'transform',
              },
              0.15
            );
          }
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, [isReducedMotion]);

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
            autoAlpha: 1,
            x: 0,
            pointerEvents: 'auto',
          });
        } else {
          gsap.set(card, {
            autoAlpha: 0,
            x: 0,
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
          autoAlpha: 0,
          x: 6,
          pointerEvents: 'none',
        });
      }
    });

    const outgoingCard = cards[prevIndex];
    const incomingCard = cards[newIndex];

    // Outgoing content: extremely quiet exit (imperceptible dissolve)
    if (outgoingCard) {
      gsap.to(outgoingCard, {
        autoAlpha: 0,
        x: -3,
        duration: 0.22,
        ease: 'power1.in',
        pointerEvents: 'none',
      });
    }

    // Incoming content: ultra-smooth premium fade-in with microscopic drift (+6px -> 0, dominant fade)
    if (incomingCard) {
      gsap.fromTo(
        incomingCard,
        {
          autoAlpha: 0,
          x: 6,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
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
        <div className="services-header max-w-3xl mb-8 sm:mb-12 lg:mb-16">
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
        </div>

        {/* Desktop Two-Column Editorial Stage (>=1024px) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center relative">
          {/* Left Column: Situation Navigator Index */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Continuous Active Rail Marker */}
              {!isReducedMotion && (
                <div
                  ref={railMarkerRef}
                  className="absolute left-0 w-1 bg-action-primary rounded-full pointer-events-none z-10"
                  aria-hidden="true"
                />
              )}

              <div
                className="flex flex-col gap-3 justify-between"
                role="tablist"
                aria-orientation="vertical"
                aria-label="Advisory service areas"
                style={{ height: `${leftGroupHeight}px` }}
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
                      style={{ height: `${cardHeight}px` }}
                      className={`services-nav-card w-full text-left px-4 sm:px-5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 ${
                        isSelected
                          ? 'bg-surface border-border-subtle/90 shadow-xs text-brand-primary'
                          : 'bg-surface/35 hover:bg-surface/75 border-border-subtle/50 hover:border-border-subtle/80 text-content-secondary hover:text-brand-primary'
                      }`}
                    >
                      {/* In reduced motion: fallback static active bar */}
                      {isReducedMotion && (
                        <span
                          className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full ${
                            isSelected ? 'bg-action-primary opacity-100' : 'bg-transparent opacity-0'
                          }`}
                          aria-hidden="true"
                        />
                      )}

                      <div className="flex items-start gap-3.5 sm:gap-4 flex-1 min-w-0">
                        {/* Tabular Monospace Numeral */}
                        <span
                          className={`font-mono text-xs sm:text-sm font-semibold tabular-nums tracking-wider shrink-0 w-6 pt-0.5 transition-colors ${
                            isSelected
                              ? 'text-action-primary font-bold'
                              : 'text-content-muted group-hover:text-content-secondary'
                          }`}
                        >
                          {item.number}
                        </span>

                        {/* Editorial Title & Subtitle - compact vertical grouping */}
                        <div className="flex flex-col min-w-0 flex-1">
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
                            className={`font-body text-xs sm:text-[13px] leading-tight truncate mt-1 transition-colors ${
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
                            ? 'text-action-primary translate-x-0.5 opacity-100'
                            : 'text-content-muted/40 group-hover:text-content-secondary group-hover:translate-x-0.5 opacity-40 group-hover:opacity-100'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Architectural Editorial Folio (Height-Stable CSS Grid Overlay) */}
          <div className="lg:col-span-7 relative">
            <div ref={rightFolioRef} className="relative w-full grid grid-cols-1 grid-rows-1">
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
        <div className="lg:hidden block space-y-3.5">
          {services.items.map((item) => {
            const isOpen = mobileOpenId === item.id;
            return (
              <div
                key={item.id}
                className="services-accordion-item bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-card transition-all"
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
        </div>
      </Container>
    </section>
  );
};
