import React, { forwardRef, Ref } from 'react';

import { button as baseTheme } from './theme';
import { Icon } from '../icon/Icon';
import { Link } from '../link/Link';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 *
 */
type CustomButtonProps = {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
};
const CustomButton = forwardRef(
  (
    { children, disabled = false, className, ...rest }: CustomButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button disabled={disabled} ref={ref} className={className} {...rest}>
        {children}
      </button>
    );
  },
);

/**
 *
 */
export interface ButtonProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Icon placed as a children.
   */
  icon?: string;
  /**
   * Icon placed after the children.
   */
  iconRight?: string;
  /**
   * Icon placed after the children.
   */
  iconLeft?: string;
  /**
   * Set the original html type of button
   */
  type?: 'button' | 'submit' | 'reset' | null;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The variant to use.
   */
  variant?: keyof typeof baseTheme.variants;
  /**
   * The size of the component.
   */
  size?: keyof typeof baseTheme.size;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Optional click handler.
   */
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href?: string;
  /**
   * Same as target attribute of a, works when href is specified
   */
  target?: string | null;
  /**
   *
   */
  theme?: any;
  /**
   * Indicate
   */
  isLoading?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonPropsOverrides extends ButtonProps {}

const Button = forwardRef(
  (
    {
      children,
      icon,
      iconRight,
      iconLeft,
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'normal',
      disabled = false,
      onClick,
      href,
      isLoading,
      target = null,
      theme = baseTheme,
      ...rest
    }: ButtonProps | ButtonPropsOverrides,
    ref: Ref<HTMLButtonElement | HTMLAnchorElement | null>,
  ) => {
    const ButtonComponent = href ? Link : CustomButton;

    if (href && disabled === true) {
      throw new Error('A link cannot be disabled.');
    }

    return (
      <ButtonComponent
        ref={ref as any}
        disabled={disabled}
        onClick={onClick}
        href={href}
        className={vclsx(
          theme?.base,
          icon ? theme?.size?.[size].icon : theme?.size?.[size].text,
          theme?.variants[variant],
          disabled && theme.disabled.base,
          disabled && theme.disabled[variant],
          className,
        )}
        {...(ButtonComponent === CustomButton ? { type } : {})}
        {...(ButtonComponent === Link ? { target } : {})}
        {...rest}
      >
        {isLoading && (
          <Icon id='loader' className='absolute z-30 h-5 w-5 animate-spin' />
        )}
        <div
          className={vclsx(
            theme?.contentWrapper,
            isLoading ? 'opacity-0' : 'opacity-100',
          )}
        >
          {icon ? (
            <Icon id={icon} className='h-4 w-4' />
          ) : (
            <>
              {iconLeft && <Icon id={iconLeft} className='h-4 w-4' />}
              {children && (
                <Text as='span' variant='text-base/Semibold'>
                  {children}
                </Text>
              )}
              {iconRight && <Icon id={iconRight} className='h-4 w-4' />}
            </>
          )}
        </div>
      </ButtonComponent>
    );
  },
);

export { Button };
