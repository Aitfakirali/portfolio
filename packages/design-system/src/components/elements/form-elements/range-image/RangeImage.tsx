import React, { ReactNode, useState } from 'react';

import { theme } from './theme';
import { Range } from '../range/Range';
import { Image } from '../../image/Image';
import { Text } from '../../typography/Text';
import { imgProps } from '../../../../types/image';
import { vclsx } from '../../../../utils/vclsx';

type StaticImageData = imgProps;

type item = {
  /**
   *
   */
  label: string;
  /**
   *
   */
  image: string | StaticImageData;
};

export interface RangeImageProps {
  /**
   * Variant to use
   */
  variant?: keyof typeof theme;
  /**
   * Name of the range image input
   */
  name?: string;
  /**
   *
   */
  value?: number;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange: (value: number) => void;
  /**
   * Items of the input range image
   */
  items: item[];
  /**
   * classname to override the wrapper styling
   */
  className?: string;

  /**
   *
   */
  errorMessage?: string;

  /**
   *
   */
  hasError?: boolean;

  /**
   *
   */
  defaultValue?: number;
  /**
   *
   */
  label?: string;
  /**
   *
   */
  tooltip?: ReactNode;
}

/**
 *
 */
export const RangeImage = ({
  variant = 'default',
  name,
  value,
  onChange,
  items,
  className,
  errorMessage,
  hasError,
  label,
  tooltip,
  ...rest
}: RangeImageProps) => {
  const [selectedElement, setSelectedElement] = useState(value ?? 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedElement(parseInt(e.currentTarget.value));
    onChange(parseInt(e.currentTarget.value));
  };

  return (
    <div className={vclsx('space-y-3', className)}>
      {label && (
        <div className='mb-4 flex items-center gap-2'>
          <Text variant='text-base/Regular' className='text-primary-800'>
            {label}
          </Text>
          {tooltip && <>{tooltip}</>}
        </div>
      )}
      <div className={theme[variant].image.wrapper}>
        {items.map(({ image }, index) => {
          return (
            <div
              key={index}
              className={vclsx(
                'cursor-pointer',
                theme[variant].image.base,
                +selectedElement == index && theme[variant].image.selected,
              )}
              onClick={() => {
                setSelectedElement(index);
                onChange(index);
              }}
            >
              <Image
                src={typeof image === 'string' ? image : image.src}
                alt='alt'
                fill
                className='absolute inset-0 object-cover'
              />
            </div>
          );
        })}
      </div>
      <div className='py-1'>
        <Range
          name={name}
          value={selectedElement}
          onChange={handleChange}
          min={0}
          max={items.length - 1}
          {...rest}
        />
      </div>
      <div className={theme[variant].label.wrapper}>
        {items.map(({ label }, index) => {
          return (
            <span
              className='cursor-pointer'
              key={index}
              onClick={() => {
                setSelectedElement(index);
                onChange(index);
              }}
            >
              <Text
                as='span'
                variant='text-sm/Medium'
                className={
                  +selectedElement == index
                    ? theme[variant].label.unselected
                    : theme[variant].label.selected
                }
              >
                {label}
              </Text>
            </span>
          );
        })}
      </div>
      {errorMessage && hasError && (
        <Text
          as='span'
          variant='text-sm/Regular'
          className={theme[variant].errorMessage}
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
};
