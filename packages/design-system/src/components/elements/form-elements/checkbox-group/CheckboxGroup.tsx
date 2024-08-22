import React, { useState } from 'react';

import { Checkbox } from '../checkbox/Checkbox';

/**
 *
 */
export type Item = {
  /**
   *
   */
  value: string;
  /**
   *
   */
  label: string;
  /**
   *
   */
  disabled?: boolean;
};
/**
 *
 */
export interface CheckboxGroupProps {
  /**
   * name of checkebox group
   */
  name: string;
  /**
   * Specifies options
   */
  options: Item[];
  /**
   * Default selected value
   */
  defaultValue?: string[];
  /**
   * The callback function that is triggered when the state changes
   */
  onChange(e: Array<string>): void;
  /**
   * ClassName of the wrapper of the checkboxes
   */
  className?: string;
}

/**
 *
 */
export const CheckboxGroup = ({
  name,
  options,
  defaultValue = [],
  onChange,
  className,
}: CheckboxGroupProps) => {
  const [selectedElements, setSelectedElements] =
    useState<string[]>(defaultValue);

  /**
   *
   */
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const selectedValue = e.currentTarget.value;
    setSelectedElements((prev: string[]) => {
      if (!isExist(selectedValue)) {
        const updatedState = [...prev, selectedValue];
        onChange(updatedState);
        return updatedState;
      } else {
        const updatedState = selectedElements.filter((item) => {
          return item != selectedValue;
        });
        onChange(updatedState);
        return updatedState;
      }
    });
  };

  /**
   *
   */
  const isExist = (value: string) => {
    const element = selectedElements.find((item) => {
      return item == value;
    });
    if (element) {
      return true;
    }
    return false;
  };

  return (
    <div className={className}>
      {options.map(({ value, label, disabled }) => {
        const isChecked = isExist(value);
        return (
          <Checkbox
            key={value}
            name={name}
            value={value}
            label={label}
            disabled={disabled ? disabled : false}
            onChange={handleChange}
            checked={isChecked}
          />
        );
      })}
    </div>
  );
};
