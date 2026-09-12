import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: 'default' | 'advisory' | 'muted';
  title: string;
  titleAs?: 'h1' | 'h2' | 'h3';
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * SectionHeading Primitive
 * Standardized typography composition for section headers adhering to the
 * Lora / Plus Jakarta Sans pairing and editorial spacing.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'default',
  title,
  titleAs: TitleComponent = 'h2',
  description,
  align = 'left',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  const eyebrowVariantClasses = {
    default: 'text-action-primary',
    advisory: 'text-advisory-accent',
    muted: 'text-content-secondary',
  };

  const titleSizeClasses = {
    h1: 'text-hero-h1',
    h2: 'text-section-h2',
    h3: 'text-card-h3',
  };

  return (
    <div className={`space-y-3 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <div
          className={`font-body text-eyebrow font-semibold uppercase tracking-wider ${eyebrowVariantClasses[eyebrowVariant]}`}
        >
          {eyebrow}
        </div>
      )}

      <TitleComponent className={`font-display ${titleSizeClasses[TitleComponent]} font-semibold text-content-primary tracking-tight`}>
        {title}
      </TitleComponent>

      {description && (
        <p className="font-body text-body-large text-content-secondary max-w-reading leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
