import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: 'row' | 'col';
  gap?: '1' | '2' | '3' | '4' | '6' | '8' | '10' | '12';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Stack Primitive
 * Flexbox utility enforcing the approved 8pt spatial token scale.
 */
export const Stack: React.FC<StackProps> = ({
  as: Component = 'div',
  direction = 'col',
  gap = '4',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  children,
  className = '',
  ...props
}) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const gapClasses = {
    '1': 'gap-1', // 4px
    '2': 'gap-2', // 8px
    '3': 'gap-3', // 12px
    '4': 'gap-4', // 16px
    '6': 'gap-6', // 24px
    '8': 'gap-8', // 32px
    '10': 'gap-10', // 40px
    '12': 'gap-12', // 48px
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';

  return (
    <Component
      className={`flex ${directionClasses[direction]} ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${wrapClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
