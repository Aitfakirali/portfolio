import clsx from 'clsx';
import React from 'react';

import { badge } from './theme';
import { Icon } from '../icon/Icon';
import { Link } from '../link/Link';
import { Text } from '../typography/Text';

/**
 *
 */
type BadgeVariantType = keyof typeof badge.variants;

/**
 *
 */
type BadgeSizeType = keyof typeof badge.sizes;

/**
 *
 */
type BadgeProps = Omit<
  React.ComponentProps<typeof Link>,
  'children' | 'variant'
> & {
  /**
   * The id of the icon to be rendered inside the badge.
   */
  icon?: string;
  /**
   * The text content of the badge
   */
  label: string;
  /**
   * Render the badge as a link
   */
  href?: string;
  /**
   * change the badge shape and color
   */
  variant?: BadgeVariantType;
  /**
   * the size of the badge
   */
  size?: BadgeSizeType;
  /**
   * override the default style
   */
  className?: string;
  /**
   *
   */
  children?: React.ReactNode;

  /**
   *
   */
  fill?: boolean;
};

const textVariants = {
  sm: 'text-sm/Medium',
  md: 'text-base/Medium',
  lg: 'text-base/Medium',
  xl: 'text-md/Medium',
} as const;

/**
 *
 */
export const Badge: React.FC<BadgeProps> = ({
  icon,
  label,
  href,
  variant = 'base',
  size = 'sm',
  // color = 'neutral',
  className = '',
  fill = false,
  ...rest
}) => {
  const Component = href ? Link : 'span';
  return (
    <Component
      href={href}
      className={clsx(
        badge?.base,
        //  badge?.colors?.[color],
        badge?.sizes?.[size],
        badge?.variants?.[variant],
        fill && badge?.fillVariants?.[variant],
        className,
      )}
      {...rest}
    >
      {icon && <Icon id={icon} className={clsx(badge.icon)} />}
      <Text variant={textVariants?.[size]}>{label}</Text>
    </Component>
  );
};
