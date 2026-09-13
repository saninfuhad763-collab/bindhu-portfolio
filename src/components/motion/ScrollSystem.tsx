import React, { useEffect, useRef, createContext, useContext, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { MOTION } from './motionConfig';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

interface ScrollSmootherContextValue {
  smoother: ScrollSmoother | null;
  scrollTo: (target: string | HTMLElement, smooth?: boolean) => void;
  isReducedMotion: boolean;
}

const ScrollSmootherContext = createContext<ScrollSmootherContextValue>({
  smoother: null,
  scrollTo: () => {},
  isReducedMotion: false,
});

export const useScrollSmoother = () => useContext(ScrollSmootherContext);

interface ScrollSystemProps {
  children: React.ReactNode;
  header: React.ReactNode;
  skipLink?: React.ReactNode;
}

/**
 * ScrollSystem — Integrates GSAP ScrollSmoother with React & Accessible Sticky Header
 *
 * DOM Architecture:
 * <div id="smooth-wrapper">
 *   {skipLink}
 *   {header} -> Positioned fixed, OUTSIDE #smooth-content to avoid CSS transform trapping
 *   <div id="smooth-content">
 *     {children} -> Contains <main> and <footer>
 *   </div>
 * </div>
 */
export const ScrollSystem: React.FC<ScrollSystemProps> = ({
  children,
  header,
  skipLink,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [smootherInstance, setSmootherInstance] = useState<ScrollSmoother | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleReducedMotionChange);

    // If reduced motion is enabled, do not initialize ScrollSmoother
    if (mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener('change', handleReducedMotionChange);
      };
    }

    // Initialize ScrollSmoother in a GSAP Context for clean React cleanup
    const ctx = gsap.context(() => {
      if (wrapperRef.current && contentRef.current) {
        const smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: MOTION.smoother.smooth,
          smoothTouch: MOTION.smoother.smoothTouch,
          effects: MOTION.smoother.effects,
          normalizeScroll: false,
        });

        setSmootherInstance(smoother);
      }
    });

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
      ctx.revert();
      setSmootherInstance(null);
    };
  }, []);

  // Programmatic scroll helper with sticky header offset
  const scrollTo = (target: string | HTMLElement, smooth = true) => {
    const targetElement =
      typeof target === 'string'
        ? (document.querySelector(target) as HTMLElement | null)
        : target;

    if (!targetElement) return;

    if (smootherInstance && !isReducedMotion) {
      smootherInstance.scrollTo(targetElement, smooth, `top ${MOTION.headerOffset}px`);
    } else {
      const top =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        MOTION.headerOffset;
      window.scrollTo({
        top,
        behavior: isReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  // Global anchor link handler to intercept in-page clicks and respect header offset
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Never hijack modifier clicks or non-primary mouse buttons (middle click, right click, Ctrl/Cmd/Shift/Alt click)
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      // Allow skip link to use standard browser focus movement
      if (href === '#main-content') {
        const main = document.getElementById('main-content');
        if (main) {
          e.preventDefault();
          if (smootherInstance && !isReducedMotion) {
            smootherInstance.scrollTo(main, true, 'top 0px');
          } else {
            main.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
          }
          main.focus();
        }
        return;
      }

      if (href === '#top') {
        e.preventDefault();
        if (smootherInstance && !isReducedMotion) {
          smootherInstance.scrollTo(0, true);
        } else {
          window.scrollTo({ top: 0, behavior: isReducedMotion ? 'auto' : 'smooth' });
        }
        history.pushState(null, '', '#top');
        return;
      }

      const targetEl = document.querySelector(href) as HTMLElement | null;
      if (targetEl) {
        e.preventDefault();
        scrollTo(targetEl);
        history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [smootherInstance, isReducedMotion]);

  // Handle direct hash on initial load and browser back/forward (hashchange)
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#top' || hash === '#main-content') return;

      const targetEl = document.querySelector(hash) as HTMLElement | null;
      if (targetEl) {
        // Small timeout allows ScrollSmoother layout calculation to settle
        setTimeout(() => {
          scrollTo(targetEl);
        }, 150);
      }
    };

    if (smootherInstance) {
      handleHashNavigation();
    }

    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, [smootherInstance]);

  return (
    <ScrollSmootherContext.Provider
      value={{
        smoother: smootherInstance,
        scrollTo,
        isReducedMotion,
      }}
    >
      <div id="smooth-wrapper" ref={wrapperRef} className="w-full">
        {skipLink}
        {header}
        <div id="smooth-content" ref={contentRef} className="w-full">
          {children}
        </div>
      </div>
    </ScrollSmootherContext.Provider>
  );
};
