import React from 'react';

import { theme } from './theme';
import { RadioHtml } from '../radio-html/RadioHtml';
import { Badge } from '../../badge/Badge';
import { Image } from '../../image/Image';
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
  description?: string;
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
  image: string;
  /**
   *
   */
  badgeLabel?: string;
}

/**
 *
 */
export const RadioChoiceIcon = ({
  variant = 'default',
  checked,
  value,
  label,
  description,
  name,
  hasError,
  disabled,
  onChange,
  image,
  badgeLabel,
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
        className={vclsx(
          theme[variant].wrapper.base,
          checked ? theme[variant].wrapper.checked : '',
          hasError ? theme[variant].wrapper.hasError : '',
        )}
      >
        <Image
          src={image}
          alt='radio image'
          width={70}
          height={70}
          className='md:h-24 md:w-24'
        />
        <div
          className={vclsx(
            theme[variant].section,
            checked ? theme[variant].text.checked : '',
          )}
        >
          <Text variant='text-md/Semibold'>{label}</Text>
          <Text variant='text-base/Regular'>{description}</Text>
        </div>
        {checked && (
          <Badge
            size='lg'
            variant='outline'
            className={vclsx(
              theme[variant].btn.base,
              checked ? theme[variant].btn.checked : '',
              !checked ? theme[variant].btn.unchecked : '',
            )}
            label={badgeLabel ?? 'Selectionée'}
          />
        )}
      </div>
    </RadioHtml>
  );
};
