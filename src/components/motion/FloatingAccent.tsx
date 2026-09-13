import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MOTION, BREAKPOINTS } from './motionConfig';

interface FloatingAccentProps {
  children: React.ReactNode;
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

/**
 * FloatingAccent — Subtle ambient floating animation for small decorative shapes or badge icons.
 * Follows strict restraint per Responsive Motion Constitution:
 * - Desktop: 3–6px range (token: 4px)
 * - Tablet: 2–4px range (token: 3px)
 * - Mobile: 0–2px or disabled (disabled for performance and touch stability)
 * - Reduced Motion: OFF (fixed at y: 0)
 * - Managed cleanly via gsap.matchMedia()
 */
export const FloatingAccent: React.FC<FloatingAccentProps> = ({
  children,
  distance,
  duration = MOTION.duration.floating,
  delay = 0,
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
        reduceMotion: BREAKPOINTS.reduceMotion,
      },
      (context) => {
        const { isDesktop, isTablet, isMobile, reduceMotion } =
          context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

        // Disabled on mobile (<768px) and reduced motion per Constitution
        if (reduceMotion || isMobile) {
          gsap.set(el, { y: 0 });
          return;
        }

        const effectiveDistance =
          distance ?? (isDesktop ? MOTION.desktop.floatingY : isTablet ? MOTION.tablet.floatingY : 0);

        gsap.to(el, {
          y: -effectiveDistance,
          duration,
          delay,
          ease: MOTION.ease.ambient,
          repeat: -1,
          yoyo: true,
        });
      }
    );

    return () => mm.revert();
  }, [distance, duration, delay]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
};
