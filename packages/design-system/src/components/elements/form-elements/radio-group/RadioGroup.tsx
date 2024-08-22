import React, { useEffect, useState } from 'react';

import { Radio } from '../radio/Radio';
import { Text } from '../../typography/Text';

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
  disabled?: boolean;
};

/**
 *
 */
export interface RadioGroupProps {
  /**
   * The name property of all input[type="checkbox"] children
   */
  name?: string;
  /**
   * Specifies options
   */
  options: item[];
  /**
   * Default selected value
   */
  defaultValue?: string;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange(e: string): any;
  /**
   * Label of the radio group
   */
  label?: string;
  /**
   * If it have error
   */
  hasError?: boolean;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * ClassName that gonna be provided to the wrapper of radio group
   */
  className?: string;
  /**
   *
   */
  testidPrefex?: string;
}

/**
 *
 */
export const RadioGroup = ({
  name,
  options,
  defaultValue,
  onChange,
  label,
  hasError,
  className,
  errorMessage,
  testidPrefex,
}: RadioGroupProps) => {
  const [selectedElement, setSelectedElement] = useState(defaultValue);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSelectedElement(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  useEffect(() => {
    setSelectedElement(defaultValue);
  }, [defaultValue]);

  return (
    <div className=''>
      <Text variant='text-base/Regular' className='text-primary-800 mb-4'>
        {label}
      </Text>
      <div className={className}>
        {options.map(({ label, value, disabled }, index) => {
          return (
            <Radio
              key={index}
              name={name}
              checked={selectedElement === value}
              label={label}
              value={value}
              onChange={handleChange}
              disabled={disabled ? disabled : false}
              hasError={hasError}
              data-testid={testidPrefex && `${testidPrefex}_${value}`}
            />
          );
        })}
      </div>
      {hasError && (
        <span className='text-error-500 mt-1 text-sm font-normal'>
          {errorMessage}
        </span>
      )}
    </div>
  );
};
