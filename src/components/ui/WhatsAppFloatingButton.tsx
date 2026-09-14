import React, { useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import gsap from 'gsap';
import { siteContent } from '../../content/siteContent';

// ---------------------------------------------------------------------------
// WhatsApp SVG glyph
// Lucide-react does not ship a WhatsApp icon.
// This inline path is the canonical WhatsApp brand mark (vector-accurate).
// Exported so Footer.tsx and ConnectMe.tsx can reuse it without duplication.
// ---------------------------------------------------------------------------
export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.22-.17-.47-.29" />
  </svg>
);

// ---------------------------------------------------------------------------
// Shared visual constants
// ---------------------------------------------------------------------------
const BTN_SIZE = 'w-[54px] h-[54px] sm:w-[58px] sm:h-[58px]';
const BTN_SHARED =
  `${BTN_SIZE} flex items-center justify-center rounded-full ` +
  'shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_26px_rgba(0,0,0,0.24)] ' +
  'transition-transform duration-200 hover:scale-105 active:scale-95 ' +
  'focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2';

// ---------------------------------------------------------------------------
// FloatingContactActions
// Persistent stacked FABs: Phone (top) + WhatsApp (bottom), fixed bottom-right.
// Coordinated live availability effect:
// 1. Soft outer halo (gentle opacity rise & fall)
// 2. Breathing micro-scale (1 -> 1.025 -> 1, power2.inOut)
// 3. Expanding pulse ring (scale 1 -> 1.16, opacity 0.22 -> 0)
// WhatsApp starts at 0s, Phone starts with ~1.0s offset.
// All continuous motion is completely bypassed when prefers-reduced-motion is active.
// ---------------------------------------------------------------------------
export const FloatingContactActions: React.FC = () => {
  const { client } = siteContent;

  // ── WhatsApp href ────────────────────────────────────────────────────────
  const waNumber = client?.whatsappNumber || '';
  const waDigits = waNumber.replace(/\D/g, '');
  const waHref =
    waDigits.length >= 7
      ? `https://wa.me/${waDigits}`
      : `https://wa.me/?text=Hello%20Bindhu,%20I%20would%20like%20to%20consult%20about%20health%20insurance`;

  // ── Phone href — safe: never renders malformed tel: links ───────────────
  const rawPhone = client?.phoneNumber || '';
  const phoneDigits = rawPhone.replace(/\D/g, '');
  const phoneHref = phoneDigits.length >= 7 ? `tel:+${phoneDigits}` : undefined;

  // ── Animation refs ───────────────────────────────────────────────────────
  const waHaloRef = useRef<HTMLSpanElement>(null);
  const waRingRef = useRef<HTMLSpanElement>(null);
  const waBreatheRef = useRef<HTMLDivElement>(null);

  const phoneHaloRef = useRef<HTMLSpanElement>(null);
  const phoneRingRef = useRef<HTMLSpanElement>(null);
  const phoneBreatheRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // ── WhatsApp Live Effect (starts at 0s) ──────────────────────────────
      // 1. Breathing micro-scale (1 -> 1.025 -> 1)
      gsap.fromTo(
        waBreatheRef.current,
        { scale: 1 },
        {
          scale: 1.025,
          duration: 2.6,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
        }
      );

      // 2. Soft outer halo (gentle rise & fall)
      gsap.fromTo(
        waHaloRef.current,
        { opacity: 0.1 },
        {
          opacity: 0.35,
          duration: 2.6,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
        }
      );

      // 3. Expanding pulse ring (scale 1 -> 1.16, opacity 0.22 -> 0)
      gsap.fromTo(
        waRingRef.current,
        { scale: 1, opacity: 0.22 },
        {
          scale: 1.16,
          opacity: 0,
          duration: 2.0,
          ease: 'power2.out',
          repeat: -1,
          repeatDelay: 0.5,
        }
      );

      // ── Phone Live Effect (phase-offset ~1.0s) ───────────────────────────
      // 1. Breathing micro-scale (1 -> 1.025 -> 1)
      gsap.fromTo(
        phoneBreatheRef.current,
        { scale: 1 },
        {
          scale: 1.025,
          duration: 2.6,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: 1.0,
        }
      );

      // 2. Soft outer halo (gentle rise & fall)
      gsap.fromTo(
        phoneHaloRef.current,
        { opacity: 0.1 },
        {
          opacity: 0.35,
          duration: 2.6,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: 1.0,
        }
      );

      // 3. Expanding pulse ring (scale 1 -> 1.16, opacity 0.22 -> 0)
      gsap.fromTo(
        phoneRingRef.current,
        { scale: 1, opacity: 0.22 },
        {
          scale: 1.16,
          opacity: 0,
          duration: 2.0,
          ease: 'power2.out',
          repeat: -1,
          repeatDelay: 0.5,
          delay: 1.0,
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <aside
      aria-label="Floating contact actions"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 pointer-events-auto flex flex-col-reverse gap-[11px]"
    >
      {/* ── WhatsApp ─────────────────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center">
        {/* Soft outer halo */}
        <span
          ref={waHaloRef}
          aria-hidden="true"
          className="absolute -inset-1 sm:-inset-1.5 rounded-full bg-[#25D366] blur-[6px] opacity-0 pointer-events-none"
        />
        {/* Expanding pulse ring */}
        <span
          ref={waRingRef}
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 pointer-events-none"
        />
        {/* Breathing button container */}
        <div ref={waBreatheRef} className="relative z-10 flex items-center justify-center">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={`${BTN_SHARED} bg-[#25D366] hover:bg-[#20bd5a] text-white focus-visible:ring-[#25D366]/40`}
          >
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
            <span className="sr-only">Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ── Phone ────────────────────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center">
        {/* Soft outer halo */}
        <span
          ref={phoneHaloRef}
          aria-hidden="true"
          className="absolute -inset-1 sm:-inset-1.5 rounded-full bg-action-primary blur-[6px] opacity-0 pointer-events-none"
        />
        {/* Expanding pulse ring */}
        <span
          ref={phoneRingRef}
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-action-primary opacity-0 pointer-events-none"
        />
        {/* Breathing button container */}
        <div ref={phoneBreatheRef} className="relative z-10 flex items-center justify-center">
          {phoneHref ? (
            <a
              href={phoneHref}
              aria-label="Call by phone"
              className={`${BTN_SHARED} bg-action-primary hover:bg-action-primary/90 text-white focus-visible:ring-action-primary/40`}
            >
              <Phone className="w-[22px] h-[22px] sm:w-6 sm:h-6 text-white" strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">Call by phone</span>
            </a>
          ) : (
            /* Placeholder state — rendered but non-functional until phoneNumber is set */
            <button
              type="button"
              disabled
              aria-label="Phone number not yet configured"
              title="Update client.phoneNumber in src/content/siteContent.ts to enable this button"
              className={`${BTN_SHARED} bg-action-primary/70 text-white cursor-not-allowed`}
            >
              <Phone className="w-[22px] h-[22px] sm:w-6 sm:h-6 text-white" strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">Phone (pending configuration)</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

// ---------------------------------------------------------------------------
// Back-compat alias — keeps any existing import of WhatsAppFloatingButton
// compiling without change. App.tsx will be updated to the canonical name.
// ---------------------------------------------------------------------------
export const WhatsAppFloatingButton = FloatingContactActions;

