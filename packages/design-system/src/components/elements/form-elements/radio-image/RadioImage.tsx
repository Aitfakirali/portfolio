import React from 'react';

import { theme } from './theme';
import { RadioHtml } from '../radio-html/RadioHtml';
import { Button } from '../../button/Button';
import { Image } from '../../image/Image';
import { imgProps } from '../../../../types/image';
import { vclsx } from '../../../../utils/vclsx';

export interface RadioImageProps {
  /**
   * this is a key description
   */
  key: string;
  /**
   * change the RadioChoiceProcedure checked or unchecked
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  checked?: boolean;
  /**
   *
   */
  disabled?: boolean;
  /**
   *
   */
  value: string;
  /**
   * The text content of the badge
   */
  label?: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  hasError?: boolean;
  /**
   *
   */
  legend?: string;
  /**
   *
   */
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  /**
   *
   */
  icon: string;
  /**
   * override the default style
   */
  className?: string;
  /**
   *
   */
  image: imgProps;
}

export const RadioImage = ({
  variant = 'default',
  checked = true,
  disabled,
  value,
  label,
  name,
  hasError,
  onChange,
  legend = 'Fig 1.2',
  image,
}: RadioImageProps) => {
  return (
    <RadioHtml
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
    >
      <div
        className={vclsx(
          theme[variant].wrapper.base,
          checked
            ? theme[variant].wrapper.checked
            : theme[variant].wrapper.unchecked,
          hasError && theme[variant].error,
          disabled ? theme[variant].wrapper.disabled : checked,
        )}
      >
        <div className={theme[variant].imageWrapper}>
          <Image
            className='relative z-10 h-full w-full object-cover'
            src={image?.src}
            alt={image?.alt ?? 'Hifad express'}
            width={image?.width ? +image?.width : 343}
            height={image?.height ? +image?.height : 277}
            unoptimized
          />
        </div>
        <p
          className={vclsx(
            theme[variant]?.legend?.base,
            checked
              ? theme?.[variant]?.legend?.checked
              : theme?.[variant]?.legend?.unchecked,
            disabled && theme?.[variant]?.legend?.disabled,
            hasError && theme?.[variant]?.legend?.hasError,
          )}
        >
          {legend}
        </p>
        <Button
          size='medium'
          iconLeft='tick-circle'
          type='button'
          variant={checked ? 'green' : 'secondary'}
          className={vclsx(theme[variant].btn.base)}
        >
          {label}
        </Button>
      </div>
    </RadioHtml>
  );
};
