import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  size?: 'standard' | 'narrow' | 'wide';
  children: React.ReactNode;
}

/**
 * Container Primitive
 * Enforces the 1200px max content width and responsive gutters.
 */
export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  className = '',
  size = 'standard',
  children,
  ...props
}) => {
  const sizeClasses = {
    standard: 'max-w-container',
    narrow: 'max-w-reading',
    wide: 'max-w-7xl',
  };

  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
