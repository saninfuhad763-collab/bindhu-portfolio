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
  tagline: 'Get Exclusive',
  headline: '5% Discount',
  renewalDiscountPrefix: '+ ',
  renewalDiscountHighlight: 'Up to 30%',
  renewalDiscountSuffix: ' Renewal Discount**',
  benefits: [
    { icon: 'shield', label: 'Trusted Guidance' },
    { icon: 'users', label: 'Personalized Support' },
    { icon: 'heart', label: 'Healthier Tomorrow' },
  ],
  subBanner: {
    line1Prefix: 'Buy ',
    line1Highlight: 'Health Insurance',
    line1Suffix: ' Online',
    line2Highlight: 'Save 18%',
    line2Suffix: ' with Zero GST',
  },
  linkHref: '#contact',
  ariaLabel: 'Exclusive health insurance promotional discount and renewal advisory offer',
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
    subBanner: {
      ...DEFAULT_HERO_OFFER.subBanner,
      ...(propOffer?.subBanner || {}),
    },
    benefits: propOffer?.benefits || DEFAULT_HERO_OFFER.benefits,
  };

  const renderIcon = (type: HeroOfferBenefit['icon']) => {
    switch (type) {
      case 'shield':
        return <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E6F5E] flex-shrink-0" aria-hidden="true" />;
      case 'users':
        return <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E6F5E] flex-shrink-0" aria-hidden="true" />;
      case 'heart':
        return <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E6F5E] flex-shrink-0 fill-[#2E6F5E]/20" aria-hidden="true" />;
      default:
        return <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E6F5E] flex-shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <aside
      aria-label={offer.ariaLabel}
      className={`relative w-full max-w-[590px] select-none ${className}`}
    >
      <a
        href={offer.linkHref || '#contact'}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-2xl sm:rounded-3xl"
      >
        {/* Composition: Overlapping Shield + Mint Card */}
        <div className="relative flex items-center pt-1 sm:pt-2">
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

          {/* Main Promotional Card Panel */}
          <div className="relative flex-1 min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-canvas bg-gradient-to-br from-[#EFF6F1] via-[#F6FAF7] to-[#EBF4EE] pl-6 sm:pl-8 md:pl-9 pr-3.5 sm:pr-4 py-3 sm:py-3.5 shadow-[0_4px_22px_-4px_rgba(36,88,76,0.08)] group-hover:shadow-[0_8px_30px_-4px_rgba(36,88,76,0.15)] group-hover:border-canvas transition-all duration-300">
            {/* Subtle light sheen on top-right */}
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/70 to-transparent pointer-events-none rounded-tr-3xl"
              aria-hidden="true"
            />

            {/* Tagline / Category */}
            <span className="block font-body text-xs sm:text-[13px] font-medium text-[#2E453D] tracking-normal leading-tight">
              {offer.tagline}
            </span>

            {/* Primary Discount Headline */}
            <div className="font-display text-2xl sm:text-3xl md:text-[34px] font-bold text-[#144A3A] tracking-tight leading-none my-1 sm:my-1.5">
              {offer.headline}
            </div>

            {/* Renewal Discount Supporting Line */}
            <p className="font-body text-xs sm:text-[13px] text-[#1B4D3E] tracking-tight leading-tight">
              <span>{offer.renewalDiscountPrefix}</span>
              <strong className="font-bold">{offer.renewalDiscountHighlight}</strong>
              <span>{offer.renewalDiscountSuffix}</span>
            </p>

            {/* Hairline Divider */}
            <div className="w-full h-px bg-[#D3E3D6] my-2 sm:my-2.5" aria-hidden="true" />

            {/* Tri-benefit micro-row (single row with responsive scroll/wrap resilience) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-1.5 sm:gap-x-2 gap-y-1 text-[9.5px] sm:text-[11px] font-medium text-[#263D34] leading-tight">
              {offer.benefits.map((b, idx) => (
                <React.Fragment key={b.label}>
                  <div className="inline-flex items-center gap-1 flex-shrink-0">
                    {renderIcon(b.icon)}
                    <span className="whitespace-nowrap">{b.label}</span>
                  </div>
                  {idx < offer.benefits.length - 1 && (
                    <span
                      className="hidden sm:inline-block w-px h-2.5 bg-[#BCD3C3] flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-banner Reassurance Footnote (centered in reference composition) */}
        <div className="mt-2.5 sm:mt-3 text-center">
          <p className="font-display text-xs sm:text-[13.5px] text-[#243530] font-normal leading-tight tracking-tight">
            <span>{offer.subBanner.line1Prefix}</span>
            <strong className="font-bold text-[#144A3A]">{offer.subBanner.line1Highlight}</strong>
            <span>{offer.subBanner.line1Suffix}</span>
          </p>
          <p className="font-display text-[11.5px] sm:text-[13px] text-[#243530] font-normal leading-tight tracking-tight mt-0.5">
            <strong className="font-bold text-[#144A3A]">{offer.subBanner.line2Highlight}</strong>
            <span>{offer.subBanner.line2Suffix}</span>
          </p>
        </div>
      </a>
    </aside>
  );
};
