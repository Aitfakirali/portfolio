import clsx from 'clsx';
import React from 'react';

import { typography } from './theme';

/**
 * TextVariants
 */
export type TextVariants = keyof typeof typography;

/**
 * TextProps
 */
interface TextProps {
  /**
   * The variant to use.
   */
  variant?: TextVariants;
  /**
   * Instruct the component to render its wrapper element as something else
   */
  as?: keyof React.JSX.IntrinsicElements;
  /**
   * Override css classes.
   */
  className?: string;
  /**
   * The content of Text.
   */
  children: React.ReactNode;
}

/**
 * Text
 */
export const Text = ({
  variant = 'text-base/Regular',
  as = 'p',
  className = '',
  children,
  ...props
}: TextProps) => {
  const Component = as ? as : 'p';

  return (
    <Component className={clsx(typography[variant], className)} {...props}>
      {children}
    </Component>
  );
};
