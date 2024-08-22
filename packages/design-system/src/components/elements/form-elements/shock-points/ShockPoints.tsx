import clsx from 'clsx';
import React, { useState } from 'react';

import { theme } from './theme';
import { Image } from '../../image/Image';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils';

export type ShockPointsItem = {
  /**
   *
   */
  position: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  value: string;
};

export interface ShockPointsProps {
  /**
   * Name of the input
   */
  name: string;
  /**
   * Default selected values
   */
  defaultValue?: string[];
  /**
   * Specifies options
   */
  items: ShockPointsItem[];
  /**
   * The callback function that is triggered when the state changes
   */
  onChange?(value: string[]): void;
  /**
   *
   */
  label?: string;
  /**
   *
   */
  hasError?: boolean;
  /**
   *
   */
  testidPrefix?: string;

  /**
   *
   */
  className?: string;
}

/**
 *
 */
export const ShockPoints = ({
  name,
  defaultValue = [],
  items,
  onChange,
  label,
  hasError,
  testidPrefix,
  className,
}: ShockPointsProps) => {
  const [selectedElements, setSelectedElements] =
    useState<string[]>(defaultValue);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const selectedValue = e.currentTarget.value;
    setSelectedElements((prev: string[]) => {
      if (!isExist(selectedValue)) {
        const updatedState = [...prev, selectedValue];
        if (onChange) {
          onChange(updatedState);
        }
        return updatedState;
      } else {
        const updatedState = selectedElements.filter((item) => {
          return item != selectedValue;
        });
        if (onChange) {
          onChange(updatedState);
        }
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
    <div className={vclsx('space-y-1', className)}>
      {label && (
        <Text variant='text-base/Regular' className='text-primary-800 mb-4'>
          {label}
        </Text>
      )}
      <div className='relative mx-auto flex w-full max-w-xs items-center justify-center p-6 md:rotate-90 md:py-16'>
        <div className='h-auto w-auto'>
          <Image
            alt='car'
            src='/images/car-mobile.png'
            width={249}
            height={493}
            className='h-auto w-auto'
            priority
          />
        </div>
        {items.map(({ position, title, value }, index) => {
          return (
            <ShockPoint
              key={index}
              name={name}
              position={position}
              text={title}
              value={value}
              onChange={handleChange}
              checked={isExist(value)}
              hasError={hasError}
              data-testid={testidPrefix && `${testidPrefix}_${value}`}
            />
          );
        })}
      </div>
    </div>
  );
};

/**
 *
 */
interface ShockPointProps {
  /**
   *
   */
  position: string;
  /**
   *
   */
  text: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  value: string;
  /**
   *
   */
  onChange(e: React.FormEvent<HTMLInputElement>): any;
  /**
   *
   */
  checked: boolean;
  /**
   *
   */
  hasError?: boolean;
}

/**
 *
 */
const ShockPoint = ({
  position,
  text,
  name,
  value,
  onChange,
  checked,
  hasError,
  ...rest
}: ShockPointProps) => {
  return (
    <label>
      <div
        className={clsx(
          theme.position[position as keyof typeof theme.position],
          theme.wrapper.base,
          checked ? theme.wrapper.checked : theme.wrapper.unchecked,
          hasError && theme.wrapper.error,
        )}
      >
        <input
          name={name}
          value={value}
          type='checkbox'
          className='absolute h-0 w-0 opacity-0'
          onChange={onChange}
          {...rest}
        />
        <Text as='span' variant='text-sm/Semibold'>
          {text}
        </Text>
      </div>
    </label>
  );
};
