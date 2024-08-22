import React from 'react';

import { radio } from './theme';
import { RadioHtml } from '../radio-html/RadioHtml';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/vclsx';

/**
 *
 */
export interface RadioProps {
  /**
   * Variant to use
   */
  variant?: keyof typeof radio;
  /**
   * Name of radio input
   */
  name?: string;
  /**
   * value of input
   */
  value?: string;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange(e: React.FormEvent<HTMLInputElement>): any;
  /**
   * Input have error
   */
  hasError?: boolean;
  /**
   * If disable radio input
   */
  disabled?: boolean;
  /**
   * If checked by default
   */
  checked?: boolean;
  /**
   * Input label
   */
  label?: string;
}
/**
 *
 */
export const Radio = ({
  variant = 'default',
  label,
  name,
  value,
  onChange,
  hasError = false,
  disabled,
  checked,
  ...rest
}: RadioProps) => {
  return (
    <RadioHtml
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    >
      <div className={radio[variant].wrapper}>
        <div
          className={vclsx(
            radio[variant].base,
            checked && disabled && radio[variant].disabled.checked,
            !checked && disabled && radio[variant].disabled.unchecked,
            checked && !disabled && radio[variant].enabled.checked,
            !checked && !disabled && radio[variant].enabled.unchecked,
            hasError && radio[variant].error,
          )}
        >
          {checked && (
            <div
              className={vclsx(
                radio[variant].icon.base,
                disabled
                  ? radio[variant].icon.disabled
                  : radio[variant].icon.enabled,
              )}
            ></div>
          )}
        </div>
        <Text
          as='span'
          className={vclsx(
            checked
              ? radio[variant].label.checked
              : radio[variant].label.unchecked,
            disabled && radio[variant].label.disabled,
            hasError && radio[variant].label.error,
          )}
        >
          {label}
        </Text>
      </div>
    </RadioHtml>
  );
};
