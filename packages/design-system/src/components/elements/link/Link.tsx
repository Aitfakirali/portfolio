import clsx from 'clsx';
import { default as NextLink } from 'next/link';
import { forwardRef, MouseEventHandler, ReactNode } from 'react';

import { link } from './theme';

/**
 * link component props
 */
interface LinkProps {
  /**
   *  href of the link
   */
  href?: string;
  /**
   *  react node component to be rendered inside the link
   */
  children: ReactNode;
  /**
   *  override the default style
   */
  className?: string;
  /**
   *  change the style of the link
   */
  variant?: keyof typeof link;
  /**
   *  handler to be called when the link is clicked
   */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  /**
   * the title of the link
   */
  title?: string;

  target?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href = '#.',
      children,
      className = '',
      variant = 'default',
      onClick,
      title = '',
      target,
      ...rest
    },
    ref,
  ) => {
    /**
     *
     */
    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      if (typeof onClick === 'function') {
        onClick(event);
      }
    };

    return (
      <NextLink
        href={href}
        // passHref
        ref={ref}
        className={clsx(className, link[variant])}
        title={title}
        onClick={handleClick}
        target={target}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);
