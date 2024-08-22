import React from 'react';

import { variants } from './theme';
import { vclsx } from '../../../utils';

/**
 *
 */
type ContainerProps = {
  /**
   *
   */
  children?: React.ReactNode;
  /**
   *
   */
  layout?: keyof typeof variants.container;
  /**
   *
   */
  spacing?: keyof typeof variants.spacing;
  /**
   *
   */
  bgPadding?: keyof typeof variants.background;
  /**
   *
   */
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 *
 */
const Container: React.FC<ContainerProps> = ({
  children,
  layout = 'base',
  spacing = 'base',
  bgPadding = 'none',
  className = '',
  ...props
}) => {
  return (
    <div
      className={vclsx(
        variants.container[layout],
        variants.spacing[spacing],
        variants.background[bgPadding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container };
