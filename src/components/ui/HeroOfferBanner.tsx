import React from 'react';
import { ShieldCheck, Users, Heart } from 'lucide-react';

export interface HeroOfferBenefit {
  icon: 'shield' | 'users' | 'heart';
  label: string;
}

export interface HeroOfferConfig {
  tagline: string;
  headline: string;
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
  headline: '',
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
  ariaLabel: 'Health insurance guidance and support principles: Trusted Guidance, Personalized Support, and Healthier Tomorrow',
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
      className={`relative w-full max-w-[540px] select-none ${className}`}
    >
      <a
        href={offer.linkHref || '#contact'}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-2xl sm:rounded-3xl"
      >
        {/* Composition: Overlapping Shield + Mint Card */}
        <div className="relative flex items-center pt-1 sm:pt-1.5">
          {/* Left Shield Visual overlapping the card edge */}
          <div className="relative z-10 flex-shrink-0 -mr-5 sm:-mr-7 md:-mr-8 drop-shadow-[0_8px_20px_rgba(27,77,62,0.12)]">
            <img
              src="/images/hero-offer-shield-trans.webp"
              alt="Family health insurance protection with comprehensive advisory coverage"
              width={140}
              height={127}
              loading="eager"
              decoding="async"
              className="w-24 sm:w-28 md:w-32 lg:w-[136px] h-auto object-contain group-hover:scale-[1.03] transition-transform duration-300 motion-reduce:transform-none"
            />
          </div>

          {/* Main Trust Card Panel */}
          <div className="relative flex-1 min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-canvas bg-gradient-to-br from-[#EFF6F1] via-[#F6FAF7] to-[#EBF4EE] pl-6 sm:pl-[28px] md:pl-[30px] pr-4 sm:pr-6 py-3.5 sm:py-4 shadow-[0_4px_22px_-4px_rgba(36,88,76,0.08)] group-hover:shadow-[0_8px_30px_-4px_rgba(36,88,76,0.15)] group-hover:border-canvas transition-all duration-300">
            {/* Subtle light sheen on top-right */}
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/70 to-transparent pointer-events-none rounded-tr-3xl"
              aria-hidden="true"
            />

            {/* Tri-benefit list (Intentional primary content of trust panel) */}
            <div className="flex flex-col justify-center gap-1.5 sm:gap-2">
              {offer.benefits.map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-semibold text-[#144A3A] tracking-tight leading-none"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E0EFE6] border border-[#BCD8C7]/80 flex items-center justify-center flex-shrink-0">
                    {renderIcon(b.icon)}
                  </div>
                  <span className="whitespace-nowrap">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </aside>
  );
};
