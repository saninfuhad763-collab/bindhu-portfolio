import React from 'react';
import { ShieldCheck, Users, Heart } from 'lucide-react';

export interface HeroOfferBenefit {
  icon: 'shield' | 'users' | 'heart';
  label: string;
}

export interface HeroOfferConfig {
  tagline: string;
  headline: string;
  supportingText?: string;
  renewalDiscountPrefix: string;
  renewalDiscountHighlight: string;
  renewalDiscountSuffix: string;
  benefits: HeroOfferBenefit[];
  subBanner: {
    line1Prefix: string;
    line1Highlight: string;
    line1Suffix: string;
    line2Highlight: string;
    line2Suffix: string;
  };
  linkHref?: string;
  ariaLabel?: string;
}

export const DEFAULT_HERO_OFFER: HeroOfferConfig = {
  tagline: '',
  headline: 'Guidance that feels clear.',
  supportingText: 'Simple support for every step of your coverage journey.',
  renewalDiscountPrefix: '',
  renewalDiscountHighlight: '',
  renewalDiscountSuffix: '',
  benefits: [
    { icon: 'shield', label: 'Trusted Guidance' },
    { icon: 'users', label: 'Personalized Support' },
    { icon: 'heart', label: 'Healthier Tomorrow' },
  ],
  subBanner: {
    line1Prefix: '',
    line1Highlight: '',
    line1Suffix: '',
    line2Highlight: '',
    line2Suffix: '',
  },
  linkHref: '#contact',
  ariaLabel: 'Guidance that feels clear. Simple support for every step of your coverage journey.',
};

interface HeroOfferBannerProps {
  offer?: Partial<HeroOfferConfig>;
  className?: string;
}

export const HeroOfferBanner: React.FC<HeroOfferBannerProps> = ({
  offer: propOffer,
  className = '',
}) => {
  const offer: HeroOfferConfig = {
    ...DEFAULT_HERO_OFFER,
    ...propOffer,
    benefits: propOffer?.benefits || DEFAULT_HERO_OFFER.benefits,
    headline: propOffer?.headline || DEFAULT_HERO_OFFER.headline,
    supportingText: propOffer?.supportingText || DEFAULT_HERO_OFFER.supportingText,
  };

  const renderIcon = (type: HeroOfferBenefit['icon']) => {
    switch (type) {
      case 'shield':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#2E6F5E] flex-shrink-0" aria-hidden="true" />;
      case 'users':
        return <Users className="w-3.5 h-3.5 text-[#2E6F5E] flex-shrink-0" aria-hidden="true" />;
      case 'heart':
        return <Heart className="w-3.5 h-3.5 text-[#2E6F5E] flex-shrink-0 fill-[#2E6F5E]/20" aria-hidden="true" />;
      default:
        return <ShieldCheck className="w-3.5 h-3.5 text-[#2E6F5E] flex-shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <aside
      aria-label={offer.ariaLabel}
      className={`relative w-fit max-w-full select-none pl-7 sm:pl-8 md:pl-9 lg:pl-12 ${className}`}
    >
      <a
        href={offer.linkHref || '#contact'}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-xl sm:rounded-2xl"
      >
        {/* Compact Horizontal Trust Card with responsive Overlapping Graphic */}
        <div className="relative rounded-xl sm:rounded-2xl border border-canvas bg-gradient-to-br from-[#EFF6F1] via-[#F6FAF7] to-[#EBF4EE] pl-[38px] sm:pl-10 md:pl-11 lg:pl-12 pr-3 sm:pr-3.5 md:pr-4.5 lg:pr-5 py-2.5 sm:py-3 md:py-3.5 lg:py-4 shadow-[0_6px_18px_rgba(15,23,42,0.12),0_2px_6px_rgba(20,74,58,0.06)] sm:shadow-[0_8px_24px_rgba(15,23,42,0.14),0_3px_8px_rgba(20,74,58,0.08)]">
          {/* Subtle light sheen on top-right clipped to card corners */}
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-bl from-white/60 to-transparent rounded-tr-xl sm:rounded-tr-2xl" />
          </div>

          {/* Left Shield Graphic — responsively scaled & translated, no shadow on logo itself */}
          <div className="absolute left-0 top-1/2 -translate-x-[52%] sm:-translate-x-[58%] md:-translate-x-[60%] lg:-translate-x-[65%] -translate-y-1/2 h-[72%] sm:h-[78%] md:h-[90%] lg:h-[92%] max-h-full z-10 pointer-events-none flex items-center justify-center">
            <img
              src="/images/hero-offer-shield-trans.webp"
              alt="Family health insurance protection"
              width={100}
              height={90}
              loading="eager"
              decoding="async"
              className="h-full w-auto object-contain motion-reduce:transform-none"
            />
          </div>

          {/* Right Text Block: Heading, Subtitle & Horizontal Benefits */}
          <div className="relative z-10 flex flex-col justify-center">
            {/* Bold Dominant Heading */}
            <h3 className="font-display text-[13.5px] sm:text-[14px] md:text-[14.5px] lg:text-[15px] font-bold text-[#144A3A] tracking-tight leading-snug">
              {offer.headline}
            </h3>

            {/* Smaller Subordinate Supporting Copy */}
            <p className="font-body text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12.5px] text-[#2E453D]/85 font-normal leading-normal sm:leading-relaxed mt-0.5 sm:mt-1">
              {offer.supportingText}
            </p>

            {/* Three Benefits Row (Horizontal where space permits, natural wrap on narrow) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-2 sm:gap-x-2.5 md:gap-x-3.5 lg:gap-x-4 gap-y-1 mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3">
              {offer.benefits.map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-1 sm:gap-1.5 flex-shrink-0"
                >
                  {renderIcon(b.icon)}
                  <span className="font-body text-[11.5px] sm:text-[11.5px] md:text-[11.5px] lg:text-[11.5px] font-medium text-[#1E3E34] tracking-tight leading-none whitespace-nowrap">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </aside>
  );
};
