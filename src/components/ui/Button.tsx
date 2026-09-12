import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'advisory' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

/**
 * Button Primitive
 * Accessible, tactile, restrained component adhering to the 48px touch target rule
 * and locked design system tokens.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-body font-semibold transition-colors duration-200 rounded text-button select-none touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-action-primary text-white hover:bg-action-hover active:bg-action-hover shadow-sm',
    secondary:
      'bg-transparent border-[1.5px] border-brand-primary text-brand-primary hover:bg-canvas-alt active:bg-canvas-alt',
    advisory:
      'bg-advisory-accent text-white hover:bg-advisory-hover active:bg-advisory-hover shadow-sm',
    ghost:
      'bg-transparent text-content-primary hover:bg-canvas-alt active:bg-canvas-alt',
  };

  const sizeClasses = {
    sm: 'min-h-[44px] px-4 text-small-meta gap-2',
    md: 'min-h-[48px] px-6 text-button gap-2.5',
    lg: 'min-h-[54px] px-8 text-base gap-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0" aria-hidden="true">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};
