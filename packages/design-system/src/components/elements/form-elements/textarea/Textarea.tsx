import React, { forwardRef, Ref, useEffect, useState } from 'react';

import { textarea } from './theme';
import { Label } from '../../label/Label';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/vclsx';

/**
 *
 */
export interface TextAreaProps {
  /**
   * Variant to use
   */
  variant?: keyof typeof textarea;
  /**
   * Textarea placeholder
   */
  placeholder?: string;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange?(e: React.FormEvent<HTMLTextAreaElement>): void;
  /**
   * Label
   */
  label?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Specifies whether the textarea has error
   */
  hasError?: boolean;
  /**
   * The error message to be displayed
   */
  errorMessage?: string;
  /**
   * How many rows the textarea will contains
   */
  rows?: number;
  /**
   * Max characters to
   */
  maxLength?: number;
  /**
   *  Specifies if the textarea could be resized
   */
  resize?: boolean;
  /**
   *  Specifies if the textarea is disabled
   */
  disabled?: boolean;
  /**
   *
   */
  name?: string;
  /**
   *
   */
  value?: string;
}
export const Textarea = forwardRef(
  (
    {
      variant = 'default',
      placeholder,
      onChange,
      label,
      disabled,
      description,
      hasError,
      errorMessage,
      rows = 1,
      maxLength,
      resize = true,
      name,
      value,
      ...rest
    }: TextAreaProps,
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange && onChange(e);
      setCurrentValue(e.currentTarget.value);
    };

    return (
      <div className='relative w-full'>
        {label && <Label>{label}</Label>}
        <textarea
          value={currentValue}
          ref={ref}
          className={vclsx(
            textarea[variant].base,
            !resize && textarea[variant].resize,
            hasError && textarea[variant].hasError,
            disabled && textarea[variant].disabled,
          )}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          {...rest}
        />
        {errorMessage && hasError && (
          <Text
            as='span'
            variant='text-sm/Regular'
            className={textarea[variant].errorMessage}
          >
            {errorMessage}
          </Text>
        )}
        {description && (
          <Text
            as='span'
            variant='text-sm/Regular'
            className={textarea[variant].description}
          >
            {description}
          </Text>
        )}
      </div>
    );
  },
);
