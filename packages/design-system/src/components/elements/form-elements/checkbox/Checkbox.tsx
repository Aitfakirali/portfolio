import React from 'react';

import { checkbox } from './theme';
import { Icon } from '../../icon/Icon';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/vclsx';

/**
 *
 */
export interface CheckboxProps {
  /**
   *
   */
  key?: string;
  /**
   * The variant to use.
   */
  variant?: keyof typeof checkbox;
  /**
   * The name property of all input[type="checkbox"] children
   */
  name?: string;
  /**
   * Specifies whether the checkbox is selected
   */
  checked?: boolean;
  /**
   * If disable checkbox
   */
  disabled?: boolean;
  /**
   * If checkbox has error
   */
  hasError?: boolean;
  /**
   * checkbox value
   */
  value?: string;
  /**
   * checkbox label
   */
  label?: string | React.ReactNode;
  /**
   * error message
   */
  errorMessage?: string;
  /**
   *  The callback function that is triggered when the state changes
   */
  onChange?(e: React.FormEvent<HTMLInputElement>): any;

  /**
   * override classNames
   */
  className?: string;
}

/**
 *
 */
export const Checkbox = ({
  variant = 'default',
  name,
  checked,
  disabled,
  hasError,
  value,
  label,
  errorMessage,
  onChange,
  className,
}: CheckboxProps) => {
  return (
    <>
      <label className='inline-block'>
        <div className={vclsx(checkbox[variant].wrapper, className)}>
          <div
            className={vclsx(
              checkbox[variant].checkbox.base,
              !checked &&
                !disabled &&
                checkbox[variant].checkbox.enabled.unchecked,
              checked &&
                !disabled &&
                checkbox[variant].checkbox.enabled.checked,
              !checked &&
                disabled &&
                checkbox[variant].checkbox.disabled.unchecked,
              checked &&
                disabled &&
                checkbox[variant].checkbox.disabled.checked,
              hasError && checkbox[variant].checkbox.error,
            )}
          >
            <input
              type='checkbox'
              value={value}
              name={name}
              className='absolute h-0 w-0 opacity-0'
              onChange={onChange}
              disabled={disabled}
              checked={checked}
            />
            {checked && (
              <Icon
                id='check'
                className='absolute inset-0 m-auto h-3 w-3 text-white'
              />
            )}
          </div>
          {typeof label === 'string' ? (
            <Text
              as='span'
              variant='text-base/Regular'
              className={vclsx(
                checkbox[variant].checkbox.label.base,
                checked && checkbox[variant].checkbox.label.checked,
                disabled && checkbox[variant].checkbox.label.disabled,
              )}
            >
              {label}
            </Text>
          ) : (
            label
          )}
        </div>
        {errorMessage && (
          <span className={checkbox[variant].errorMessage}>{errorMessage}</span>
        )}
      </label>
    </>
  );
};
