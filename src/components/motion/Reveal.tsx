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
  className?: string;
  as?: React.ElementType;
}

/**
 * Reveal — Reusable editorial reveal component powered by GSAP & ScrollTrigger.
 * Uses GPU-accelerated transforms (translateY, translateX) and opacity.
 * Conforms to the Responsive Motion Constitution:
 * - Desktop: Subtle horizontal/vertical reveals (16-24px target)
 * - Tablet: Simplified vertical reveals (14-16px target)
 * - Mobile: Native-friendly fade-up only (12-16px target), lateral motion converted to vertical
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

        // 1. Reduced Motion: Immediate display with zero motion
        if (reduceMotion) {
          gsap.set(el, { opacity: 1, x: 0, y: 0 });
          return;
        }

        // 2. Responsive token resolution
        let effectiveDistance = distance;
        let effectiveDuration = duration;

        if (isNarrowMobile) {
          effectiveDistance = effectiveDistance ?? MOTION.narrowMobile.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.narrowMobile.duration;
        } else if (isMobile) {
          effectiveDistance = effectiveDistance ?? MOTION.mobile.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.mobile.duration;
        } else if (isTablet) {
          effectiveDistance = effectiveDistance ?? MOTION.tablet.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.tablet.duration;
        } else {
          // Desktop (≥1024px)
          effectiveDistance = effectiveDistance ?? MOTION.desktop.revealY;
          effectiveDuration = effectiveDuration ?? MOTION.desktop.duration;
        }

        // 3. Responsive translation vectors:
        // Desktop: allows subtle horizontal reveals (16-24px).
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
        const effectiveDelay = isMobile || isNarrowMobile ? Math.min(delay, 0.08) : delay;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: initialX,
            y: initialY,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: effectiveDuration,
            delay: effectiveDelay,
            ease: MOTION.ease.editorial,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    );

    return () => mm.revert();
  }, [variant, delay, duration, distance]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
};
