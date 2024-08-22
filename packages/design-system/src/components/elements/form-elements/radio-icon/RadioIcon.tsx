import React from 'react';

import { theme } from './theme';
import { RadioHtml } from '../radio-html/RadioHtml';
import { Icon } from '../../icon/Icon';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/vclsx';

/**
 *
 */
export interface RadioIconProps {
  /**
   * The variant to use
   */
  variant?: keyof typeof theme;
  /**
   * Is it checked by default
   */
  checked?: boolean;
  /**
   * Value of the radio button
   */
  value?: string;
  /**
   * Radio label
   */
  label?: string;
  /**
   * Radio description
   */
  description?: string | React.JSX.Element;
  /**
   * Radio name
   */
  name?: string;
  /**
   * If it have error
   */
  hasError?: boolean;
  /**
   * If it is disabled
   */
  disabled?: boolean;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  /**
   * The icon id of the radio button
   */
  icon: string | React.JSX.Element;
}

/**
 *
 */
export const RadioIcon = ({
  variant = 'default',
  checked,
  value,
  label,
  description,
  name,
  hasError,
  disabled,
  onChange,
  icon,
  ...rest
}: RadioIconProps) => {
  return (
    <RadioHtml
      value={value}
      name={name}
      onChange={onChange}
      disabled={disabled}
      className='w-full'
      {...rest}
    >
      <div
        aria-disabled={disabled}
        className={vclsx(
          theme[variant].wrapper.base,
          checked
            ? theme[variant].wrapper.checked
            : theme[variant].wrapper.unchecked,
          hasError && theme[variant].error,
          disabled && checked && theme[variant].wrapper.disabledChecked,
          disabled && theme[variant].wrapper.disabled,
        )}
      >
        {typeof icon === 'string' ? (
          <Icon
            id={icon || 'profile'}
            className={vclsx(
              theme[variant].icon.base,
              checked
                ? theme[variant].icon.checked
                : theme[variant].icon.unchecked,
              disabled && theme[variant].icon.disabled,
            )}
          />
        ) : (
          icon
        )}
        <div className='flex h-full flex-col gap-y-1'>
          <Text
            variant='text-base/Medium'
            as='span'
            className={vclsx(
              checked
                ? theme[variant].label.checked
                : theme[variant].label.unchecked,
              disabled && theme[variant].label.disabled,
            )}
          >
            {label}
          </Text>
          {description && (
            <>
              {typeof description === 'string' ? (
                <Text
                  variant='text-base/Regular'
                  as='span'
                  className={vclsx(
                    checked
                      ? theme[variant].description.checked
                      : theme[variant].description.unchecked,
                    disabled && theme[variant].label.disabled,
                  )}
                >
                  {description}
                </Text>
              ) : (
                description
              )}
            </>
          )}
        </div>
      </div>
    </RadioHtml>
  );
};
