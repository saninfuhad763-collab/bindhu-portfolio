import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { siteContent } from '../../content/siteContent';

/**
 * Global Header & Navigation
 *
 * Implements the locked Warm Editorial design direction:
 * - Restrained text brand treatment for Bindhu
 * - Clear, semantic navigation items matching final IA
 * - Progressive scroll stabilization (no jarring theatrical resize or dark modal)
 * - Accessible 48px touch targets and full keyboard navigation
 * - Warm Ivory / Maritime Slate mobile navigation drawer
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Passive scroll listener for subtle background stabilization with rAF throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape and trap focus inside drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMobileMenuOpen) return;

      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }

      if (e.key === 'Tab') {
        const trigger = document.querySelector<HTMLElement>('header button[aria-controls="mobile-navigation-menu"]');
        const drawer = document.getElementById('mobile-navigation-menu');
        if (!drawer || !trigger) return;

        const focusables = [
          trigger,
          ...Array.from(drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')),
        ];
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock background scrolling when mobile navigation drawer is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { header } = siteContent;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-border-subtle shadow-card'
          : 'bg-canvas/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <Container size="standard">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity / Logo */}
          <a
            href="#top"
            className="flex flex-col group py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded select-none"
            aria-label={`${header.brandName} — ${header.brandDescriptor}`}
          >
            <span className="font-display text-[26px] sm:text-[28px] font-bold text-brand-primary tracking-tight leading-none group-hover:text-action-primary transition-colors">
              {header.brandName}
            </span>
            <span className="font-body text-[10px] sm:text-[10.5px] font-semibold text-content-muted tracking-[0.14em] uppercase mt-1 sm:mt-1.5 leading-none">
              {header.brandDescriptor}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" aria-label="Main Navigation">
            <ul className="flex items-center space-x-1">
              {header.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="px-3.5 py-2 font-body text-button font-medium text-content-secondary hover:text-brand-primary rounded touch-target flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Primary Action */}
          <div className="hidden lg:flex items-center">
            <Button variant="primary" size="md" href={header.ctaHref}>
              {header.ctaLabel}
            </Button>
          </div>

          {/* Mobile Navigation Trigger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="touch-target w-12 h-12 inline-flex items-center justify-center rounded text-brand-primary hover:bg-canvas-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring transition-colors group"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-canvas border-b border-border-subtle shadow-card"
        >
          <Container size="standard" className="py-6">
            <nav aria-label="Mobile Navigation Links">
              <ul className="space-y-1">
                {header.navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 font-body text-body-regular font-medium text-content-primary hover:text-action-primary hover:bg-canvas-alt rounded touch-target transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 pt-6 border-t border-border-subtle">
              <Button
                variant="primary"
                size="md"
                fullWidth
                href={header.ctaHref}
                onClick={closeMobileMenu}
              >
                {header.ctaLabel}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
