import { ReactNode } from 'react';

import { theme } from './theme';
import { Icon } from '../icon/Icon';
import { Text, TextVariants } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 *
 */
interface HeadingProps {
  /**
   *
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  textVariant?: TextVariants;
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
  icon?: string;
  /**
   *
   */
  children: ReactNode;
  /**
   *
   */
  separator?: boolean;

  /**
   *
   */
  title?: string;
}
/**
 *
 */
export const Heading = ({
  variant = 'default',
  as,
  icon,
  className = '',
  children,
  title,
  separator = false,
}: HeadingProps) => {
  return (
    <div className={vclsx(theme[variant].container, className)}>
      {icon && <Icon id={icon} className={theme[variant].icon} />}
      {title && (
        <Text
          variant={theme[variant].textVariant}
          className={vclsx(theme[variant].text)}
          as={as}
        >
          {title}
        </Text>
      )}
      {children}
      {separator && <span className='h-px grow bg-gray-200'></span>}
    </div>
  );
};
