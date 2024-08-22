// Input.tsx
import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';

import { input } from './theme';
import { Label } from '../../label/Label';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/index';

/**
 *
 */
export type InputProps = {
  /**
   * Label of the input
   */
  label?: string;
  /**
   * The variant to use.
   */
  variant?: keyof typeof input;
  /**
   * Placeholder of the input
   */
  placeholder?: string;
  /**
   * Icon that gonna be displayed as prefix
   */
  prefix?: ReactNode;
  /**
   * Icon that gonna be displayed as suffix
   */
  suffix?: ReactNode;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
  /**
   * Does input have error
   */
  hasError?: boolean;
  /**
   * The error message for input
   */
  errorMessage?: string;
  /**
   * Input description
   */
  description?: string;
  /**
   * If disable checkbox
   */
  disabled?: boolean;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'prefix'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant = 'default',
      placeholder,
      prefix,
      suffix,
      type = 'text',
      onChange,
      hasError,
      errorMessage,
      description,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={clsx('relative w-full', className)}>
        {type !== 'hidden' && label && <Label>{label}</Label>}
        <div
          className={vclsx(
            input[variant].wrapper.base,
            disabled
              ? input[variant].wrapper.disabled
              : input[variant].wrapper.enabled,
            type === 'hidden' && 'border-none',
            hasError && input[variant].hasError,
          )}
        >
          {prefix && (
            <div className={clsx(input[variant].prefix)}>{prefix}</div>
          )}
          <input
            ref={ref}
            onChange={onChange}
            className={clsx(
              input[variant].input,
              disabled && 'cursor-not-allowed bg-gray-50',
            )}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
          />
          {suffix && !hasError && (
            <div className={clsx(input[variant].sufix)}>{suffix}</div>
          )}
        </div>
        {description && (
          <Text
            variant='text-sm/Regular'
            className={input[variant].description}
          >
            {description}
          </Text>
        )}
        {errorMessage && hasError && (
          <Text
            variant='text-sm/Regular'
            className={input[variant].errorMessage}
          >
            {errorMessage}
          </Text>
        )}
      </div>
    );
  },
);
