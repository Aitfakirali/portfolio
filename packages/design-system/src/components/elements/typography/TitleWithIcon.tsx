import { ReactNode } from 'react';

import { Text } from './Text';
import { typography } from './theme';
import { Icon } from '../icon/Icon';
import { vclsx } from '../../../utils/vclsx';

/**
 *
 */
interface textProps {
  /**
   *
   */
  variant?: keyof typeof typography;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  as?: keyof React.JSX.IntrinsicElements;
  /**
   *
   */
  iconId?: string | null;
  /**
   *
   */
  appendIcon?: boolean;
  /**
   *
   */
  children: ReactNode;
}

/**
 *
 */
export const TitleWithIcon = ({
  variant = 'text-base/Regular',
  as,
  iconId = null,
  className = '',
  appendIcon = false,
  children,
}: textProps) => {
  return (
    <Text
      variant={variant}
      className={vclsx(className, 'flex items-center gap-2')}
      as={as}
    >
      {appendIcon && iconId && (
        <Icon id={iconId} className='h-5 w-5 shrink-0 grow' />
      )}
      {children}
      {!appendIcon && iconId && <Icon id={iconId} className='h-5 w-5' />}
    </Text>
  );
};
