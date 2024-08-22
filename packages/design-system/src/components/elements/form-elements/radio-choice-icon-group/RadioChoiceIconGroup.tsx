import React from 'react';

import { RadioChoiceIcon } from '../radio-choice-icon/RadioChoiceIcon';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils';
/**
 *
 */
type item = {
  /**
   *
   */
  label: string;
  /**
   *
   */
  value: string;
  /**
   *
   */
  image: string;
  /**
   *
   */
  description: string;
};

export interface RadioIconGroupProps {
  /**
   * 	Specifies options
   */
  options: item[];
  /**
   * Group Name
   */
  name: string;
  /**
   * Default selected value
   */
  value?: string;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  /**
   * ClassName the will be applied of wrapper of the group
   */
  className?: string;

  /**
   *
   */
  hasError?: boolean;

  /**
   *
   */
  errorMessage?: string;

  /**
   *
   */
  testidPrefex?: string;
}

/**
 *
 */
export const RadioChoiceIconGroup = ({
  options,
  name,
  value,
  onChange,
  className,
  hasError,
  errorMessage,
  testidPrefex,
}: RadioIconGroupProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className={vclsx('', className)}>
        {options.map((item) => {
          return (
            <RadioChoiceIcon
              key={item.value}
              name={name}
              {...item}
              checked={item.value === value}
              onChange={onChange}
              hasError={hasError}
              data-testid={testidPrefex && `${testidPrefex}_${item.value}`}
            />
          );
        })}
      </div>
      {errorMessage && (
        <Text variant='text-sm/Regular' className='text-red-500'>
          {errorMessage}
        </Text>
      )}
    </div>
  );
};
