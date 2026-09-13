import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BREAKPOINTS } from './motionConfig';

export type GradientVariant = 'hero' | 'services' | 'contact';

export interface AnimatedGradientProps {
  /** Target section visual context */
  variant: GradientVariant;
  /** Optional container class names */
  className?: string;
}

interface OrbConfig {
  className: string;
  style: React.CSSProperties;
  driftX: number;
  driftY: number;
  scale: number;
  duration: number;
  delay: number;
}

interface VariantConfig {
  orbA: OrbConfig;
  orbB: OrbConfig;
}

const VARIANT_CONFIGS: Record<GradientVariant, VariantConfig> = {
  // Hero: Calibrated warm Terracotta dawn behind portrait balanced with calming Eucalyptus grounding
  hero: {
    orbA: {
      className: 'w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] lg:w-[600px] lg:h-[600px] -top-16 -right-16 rounded-full',
      style: {
        background: 'radial-gradient(circle at center, rgba(196, 104, 73, 0.085) 0%, rgba(196, 104, 73, 0.03) 38%, transparent 68%)',
      },
      driftX: 28,
      driftY: -20,
      scale: 1.03,
      duration: 13,
      delay: 0,
    },
    orbB: {
      className: 'w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] -bottom-16 -left-12 rounded-full',
      style: {
        background: 'radial-gradient(circle at center, rgba(46, 111, 94, 0.07) 0%, rgba(46, 111, 94, 0.025) 42%, transparent 72%)',
      },
      driftX: -24,
      driftY: 22,
      scale: 0.98,
      duration: 11.5,
      delay: 1.0,
    },
  },
  // Services: Calibrated Eucalyptus diffusion behind detail panel with subtle Terracotta accent
  services: {
    orbA: {
      className: 'w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] lg:w-[580px] lg:h-[580px] top-10 -right-20 rounded-full',
      style: {
        background: 'radial-gradient(circle at center, rgba(46, 111, 94, 0.075) 0%, rgba(46, 111, 94, 0.025) 40%, transparent 68%)',
      },
      driftX: -22,
      driftY: 26,
      scale: 1.02,
      duration: 14,
      delay: 0.6,
    },
    orbB: {
      className: 'w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] -bottom-16 left-4 rounded-full',
      style: {
        background: 'radial-gradient(circle at center, rgba(196, 104, 73, 0.065) 0%, rgba(196, 104, 73, 0.02) 38%, transparent 68%)',
      },
      driftX: 20,
      driftY: -18,
      scale: 0.97,
      duration: 12,
      delay: 0,
    },
  },
  // Contact: Calibrated inviting Eucalyptus atmosphere supporting consultation booking with Terracotta grounding
  contact: {
    orbA: {
      className: 'w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] lg:w-[580px] lg:h-[580px] -top-12 -right-16 rounded-full',
      style: {
        background: 'radial-gradient(circle at center, rgba(46, 111, 94, 0.085) 0%, rgba(46, 111, 94, 0.03) 42%, transparent 70%)',
      },
      driftX: 25,
      driftY: -25,
      scale: 1.03,
      duration: 13.5,
      delay: 1.2,
    },
    orbB: {
      className: 'w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] -bottom-16 left-0 rounded-full',
      style: {
        background: 'radial-gradient(circle at center, rgba(196, 104, 73, 0.07) 0%, rgba(196, 104, 73, 0.025) 40%, transparent 68%)',
      },
      driftX: -20,
      driftY: 20,
      scale: 0.98,
      duration: 15,
      delay: 0,
    },
  },
};

/**
 * AnimatedGradient — Selective ambient background gradient layer.
 *
 * Implements editorial atmosphere through slow-drifting, pure CSS radial gradients:
 * - Desktop (≥1024px): 14–19s gentle multi-axis drift (16–24px) with subtle scaling
 * - Tablet (768–1023px): ~50% reduced drift amplitude (8–12px)
 * - Mobile (<768px): Motion disabled; static radial gradient preserved for zero-overhead depth
 * - Reduced Motion: Motion disabled; static radial gradient preserved
 * - Pointer Safety: pointer-events-none, select-none, aria-hidden=true
 * - Transform Ownership: Independent absolute background layer (z-0), zero collision with content
 */
export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  variant,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);

  const config = VARIANT_CONFIGS[variant];

  useEffect(() => {
    const orbA = orbARef.current;
    const orbB = orbBRef.current;
    if (!orbA || !orbB) return;

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

        // Mobile (<768px) and Reduced Motion: Keep static CSS gradient without animation
        if (reduceMotion || isMobile) {
          gsap.set([orbA, orbB], { x: 0, y: 0, scale: 1, clearProps: 'transform' });
          return;
        }

        const scaleFactor = isDesktop ? 1.0 : isTablet ? 0.5 : 0;

        const tweenA = gsap.to(orbA, {
          x: config.orbA.driftX * scaleFactor,
          y: config.orbA.driftY * scaleFactor,
          scale: config.orbA.scale,
          duration: config.orbA.duration,
          delay: config.orbA.delay,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        const tweenB = gsap.to(orbB, {
          x: config.orbB.driftX * scaleFactor,
          y: config.orbB.driftY * scaleFactor,
          scale: config.orbB.scale,
          duration: config.orbB.duration,
          delay: config.orbB.delay,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        return () => {
          tweenA.kill();
          tweenB.kill();
          gsap.set([orbA, orbB], { x: 0, y: 0, scale: 1, clearProps: 'transform' });
        };
      }
    );

    return () => mm.revert();
  }, [variant, config]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`.trim()}
    >
      <div
        ref={orbARef}
        className={`absolute pointer-events-none select-none will-change-transform ${config.orbA.className}`}
        style={config.orbA.style}
      />
      <div
        ref={orbBRef}
        className={`absolute pointer-events-none select-none will-change-transform ${config.orbB.className}`}
        style={config.orbB.style}
      />
    </div>
  );
};
