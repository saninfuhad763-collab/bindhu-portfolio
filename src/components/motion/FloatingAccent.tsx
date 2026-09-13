import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MOTION, BREAKPOINTS } from './motionConfig';

export interface FloatingAccentProps {
  children: React.ReactNode;
  /** Global distance scalar or default displacement in pixels */
  distance?: number;
  /** Explicit horizontal displacement in pixels */
  distanceX?: number;
  /** Explicit vertical displacement in pixels */
  distanceY?: number;
  /** Animation duration in seconds (defaults to MOTION.duration.floating = 5.0) */
  duration?: number;
  /** Initial delay in seconds for organic phase offsetting (default: 0) */
  delay?: number;
  /** Directional movement axis: 'y' (default), 'x', or 'both' */
  axis?: 'y' | 'x' | 'both';
  /** Optional minimum opacity for subtle ambient breathing (e.g. 0.82) */
  opacityMin?: number;
  /** Optional maximum opacity for subtle ambient breathing (default: 1) */
  opacityMax?: number;
  className?: string;
  as?: React.ElementType;
}

/**
 * FloatingAccent — Subtle ambient floating animation for small decorative shapes or badge icons.
 * Follows strict restraint per Responsive Motion Constitution:
 * - Desktop (≥1024px): 3–7px range, 4–8s duration, organic phase variation
 * - Tablet (768–1023px): 2–4px range (~65% scale), 5–8s duration
 * - Mobile (<768px): Disabled (y: 0, x: 0) for touch stability and battery efficiency
 * - Narrow Mobile (≤360px): Disabled
 * - Reduced Motion: OFF (fixed at neutral with clearProps: 'transform')
 * - Managed cleanly via gsap.matchMedia() with absolute pointer safety
 */
export const FloatingAccent: React.FC<FloatingAccentProps> = ({
  children,
  distance,
  distanceX,
  distanceY,
  duration = MOTION.duration.floating,
  delay = 0,
  axis = 'y',
  opacityMin,
  opacityMax,
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
          gsap.set(el, { x: 0, y: 0, opacity: 1, clearProps: 'transform' });
          return;
        }

        const scaleFactor = isDesktop ? 1 : isTablet ? 0.65 : 0;
        const defaultDist = isDesktop ? MOTION.desktop.floatingY : MOTION.tablet.floatingY;
        const baseDist = distance ?? defaultDist;

        const effectiveX =
          (distanceX !== undefined
            ? distanceX
            : axis === 'x' || axis === 'both'
            ? baseDist
            : 0) * scaleFactor;

        const effectiveY =
          (distanceY !== undefined
            ? distanceY
            : axis === 'y' || axis === 'both'
            ? baseDist
            : 0) * scaleFactor;

        const vars: gsap.TweenVars = {
          duration,
          delay,
          ease: MOTION.ease.ambient,
          repeat: -1,
          yoyo: true,
        };

        if (effectiveY !== 0) {
          vars.y = -effectiveY;
        }
        if (effectiveX !== 0) {
          vars.x = effectiveX;
        }

        if (opacityMin !== undefined && opacityMax !== undefined) {
          gsap.set(el, { opacity: opacityMin });
          vars.opacity = opacityMax;
        }

        const tween = gsap.to(el, vars);

        return () => {
          tween.kill();
          gsap.set(el, { x: 0, y: 0, clearProps: 'transform' });
        };
      }
    );

    return () => mm.revert();
  }, [distance, distanceX, distanceY, duration, delay, axis, opacityMin, opacityMax]);

  return (
    <Component
      ref={elementRef}
      className={`pointer-events-none select-none ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </Component>
  );
};
