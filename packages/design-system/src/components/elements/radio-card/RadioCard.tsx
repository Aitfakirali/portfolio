import React, { useRef } from 'react';

import { theme } from './theme';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

interface RadioCardProps {
  /**
   *
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  name?: string;
  /**
   *
   */
  value: string | number;
  /**
   *
   */
  onChange?(e: React.FormEvent<HTMLInputElement>): any;

  /**
   *
   */
  disabled?: boolean;
  /**
   *
   */
  checked?: boolean;

  /**
   *
   */
  elements?: {
    /**
     *
     */
    label: string;
    /**
     *
     */
    value: string;
  }[];

  /**
   *
   */
  badge?: React.ReactNode;

  /**
   *
   */
  label: string;
}

export const RadioCard = ({
  variant = 'default',
  name,
  value,
  onChange,
  label,
  disabled,
  checked = false,
  elements,
  badge,
}: RadioCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={vclsx(
        theme[variant].wrapper.base,
        checked && theme[variant].wrapper.checked,
        disabled && theme[variant].disabled,
      )}
      onClick={() => {
        if (disabled) return;
        inputRef.current?.click();
      }}
    >
      <div className={theme[variant].topSection}>
        <input
          ref={inputRef}
          name={name}
          value={value}
          type='radio'
          onChange={onChange}
          className='h-5 w-5'
          disabled={disabled}
          checked={checked}
        />
        {label && (
          <Text variant='text-base/Medium' className='text-primary-700'>
            {label}
          </Text>
        )}

        {badge && <div className='flex flex-1 justify-end'>{badge}</div>}
      </div>
      {elements && (
        <div className='border-primary-200 mt-4 flex flex-col gap-y-4 rounded-md border-2 bg-white p-4'>
          {elements.map(({ label, value }, index) => (
            <dl key={index} className='flex justify-between'>
              <Text as='dt' className='text-gray-500'>
                {label}
              </Text>
              <Text as='dd' className='text-primary-700'>
                {value}
              </Text>
            </dl>
          ))}
        </div>
      )}
    </div>
  );
};
