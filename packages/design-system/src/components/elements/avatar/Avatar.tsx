import clsx from 'clsx';
import { ReactNode } from 'react';

import { avatar } from './theme';
import { Image } from '../image/Image';

const DEFAULT_AVATAR_IMAGE =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

/**
 *
 */
interface AvatarProps {
  /**
   * React node that should be rendered inside the avatar ( used only in variant 'initials')
   */
  children?: ReactNode;
  /**
   * override the default style
   */
  className?: string;
  /**
   * changes the appearance
   */
  variant?: 'default' | 'placeholder' | 'initials';
  /**
   * change the size of the avatar
   */
  size?: 'normal' | 'small' | 'large'; // You might want to update this according to your theme's sizes
  /**
   * the alt of the image
   */
  alt?: string;
  /**
   * the source of the image
   */
  src?: string;
  [x: string]: any; // for the rest parameter
}

/**
 *
 */
export const Avatar = ({
  children,
  className = '',
  variant = 'default',
  size = 'normal',
  alt = '',
  src = DEFAULT_AVATAR_IMAGE,
  ...rest
}: AvatarProps) => {
  // textSizes
  if (variant === 'placeholder') {
    return (
      <div
        className={clsx(avatar[variant].base, avatar.size[size], className)}
        {...rest}
      >
        <svg
          className={avatar[variant].svg}
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
        </svg>
      </div>
    );
  } else if (variant === 'initials') {
    return (
      <span
        className={clsx(avatar[variant].base, avatar.size[size], className)}
        {...rest}
      >
        <span
          className={clsx(
            avatar[variant].text,
            avatar[variant].textSizes[size],
          )}
        >
          {children}
        </span>
      </span>
    );
  }

  return (
    <Image
      className={clsx(avatar[variant].base, avatar.size[size], className)}
      src={src}
      alt={alt}
      width={100}
      height={100}
      {...rest}
    />
  );
};
