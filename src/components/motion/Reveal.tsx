import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION, BREAKPOINTS } from './motionConfig';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number | boolean;
  selector?: string;
  start?: string;
  className?: string;
  as?: React.ElementType;
}

/**
 * Reveal — Reusable editorial reveal component powered by GSAP & ScrollTrigger.
 * Uses GPU-accelerated transforms (translateY, translateX) and opacity.
 * Conforms to the Responsive Motion Constitution:
 * - Desktop: Subtle horizontal/vertical reveals (16-22px target), calibrated start ('top 84%')
 * - Tablet: Simplified vertical reveals (12-16px target), calibrated start ('top 85%')
 * - Mobile: Native-friendly fade-up only (10-14px target), lateral motion converted to vertical, start ('top 86%')
 * - Narrow Mobile: Compact 10px vertical reveal
 * - Reduced Motion: Immediate display with zero transforms and zero delay
 * - Managed via gsap.matchMedia() responsive animation context for deterministic breakpoint reverting.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration,
  distance,
  stagger,
  selector,
  start,
  className = '',
  as: Component = 'div',
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: BREAKPOINTS.desktop,
        isTablet: BREAKPOINTS.tablet,
        isMobile: BREAKPOINTS.mobile,
        isNarrowMobile: BREAKPOINTS.narrowMobile,
        reduceMotion: BREAKPOINTS.reduceMotion,
      },
      (context) => {
        const { isDesktop, isTablet, isMobile, isNarrowMobile, reduceMotion } =
          context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
            isMobile: boolean;
            isNarrowMobile: boolean;
            reduceMotion: boolean;
          };

        // 1. Resolve animation targets
        const targets = selector
          ? el.querySelectorAll(selector)
          : stagger
          ? el.children
          : el;

        // 2. Reduced Motion: Immediate display with zero motion
        if (reduceMotion) {
          gsap.set(targets, { opacity: 1, x: 0, y: 0, clearProps: 'transform' });
          return;
        }

        // 3. Responsive token resolution
        let effectiveDistance = distance;
        let effectiveDuration = duration;
        let effectiveStart = start;
        let effectiveStagger = 0;

        if (isNarrowMobile) {
          effectiveDistance = effectiveDistance ?? MOTION.narrowMobile.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.narrowMobile.duration;
          effectiveStart = effectiveStart ?? MOTION.narrowMobile.triggerStart;
          if (stagger) {
            effectiveStagger =
              typeof stagger === 'number'
                ? Math.min(stagger, MOTION.narrowMobile.stagger)
                : MOTION.narrowMobile.stagger;
          }
        } else if (isMobile) {
          effectiveDistance = effectiveDistance ?? MOTION.mobile.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.mobile.duration;
          effectiveStart = effectiveStart ?? MOTION.mobile.triggerStart;
          if (stagger) {
            effectiveStagger =
              typeof stagger === 'number'
                ? Math.min(stagger, MOTION.mobile.stagger)
                : MOTION.mobile.stagger;
          }
        } else if (isTablet) {
          effectiveDistance = effectiveDistance ?? MOTION.tablet.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.tablet.duration;
          effectiveStart = effectiveStart ?? MOTION.tablet.triggerStart;
          if (stagger) {
            effectiveStagger =
              typeof stagger === 'number'
                ? Math.min(stagger, MOTION.tablet.stagger)
                : MOTION.tablet.stagger;
          }
        } else {
          // Desktop (≥1024px)
          effectiveDistance = effectiveDistance ?? MOTION.desktop.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.desktop.duration;
          effectiveStart = effectiveStart ?? MOTION.desktop.triggerStart;
          if (stagger) {
            effectiveStagger =
              typeof stagger === 'number'
                ? stagger
                : MOTION.desktop.stagger;
          }
        }

        // 4. Responsive translation vectors:
        // Desktop: allows subtle horizontal reveals (16-22px).
        // Tablet/Mobile/Narrow: lateral animations convert to vertical 'fade-up' to prevent shearing and overflow.
        let initialX = 0;
        let initialY = 0;

        switch (variant) {
          case 'fade-up':
            initialY = effectiveDistance;
            break;
          case 'fade-left':
            if (isDesktop) {
              initialX = effectiveDistance;
            } else {
              initialY = effectiveDistance;
            }
            break;
          case 'fade-right':
            if (isDesktop) {
              initialX = -effectiveDistance;
            } else {
              initialY = effectiveDistance;
            }
            break;
          case 'fade':
          default:
            break;
        }

        // Reduced delay on mobile/narrow viewports
        const effectiveDelay = isMobile || isNarrowMobile ? Math.min(delay, 0.06) : delay;

        gsap.set(targets, {
          opacity: 0,
          x: initialX,
          y: initialY,
        });

        gsap.to(targets, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: effectiveDuration,
          delay: effectiveDelay,
          stagger: effectiveStagger > 0 ? effectiveStagger : undefined,
          ease: MOTION.ease.editorial,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: effectiveStart,
            once: true,
          },
        });
      }
    );

    return () => mm.revert();
  }, [variant, delay, duration, distance, stagger, selector, start]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
};
