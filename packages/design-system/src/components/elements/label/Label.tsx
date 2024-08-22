import React from 'react';

import { theme } from './theme';
import { Text, TextVariants } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 * Label props.
 */
interface LabelProps {
  /**
   * The variant to use.
   */
  variant?: TextVariants;
  /**
   * The content of the label.
   */
  children: React.ReactNode;
  /**
   *
   */
  className?: string;
}

/**
 * Label component.
 */
export const Label = ({
  variant = 'text-sm/Medium',
  children,
  className = '',
  ...rest
}: LabelProps) => {
  return (
    <label {...rest}>
      <Text
        variant={variant}
        className={vclsx(theme.base, className)}
        as='span'
      >
        {children}
      </Text>
    </label>
  );
};
