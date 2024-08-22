import React from 'react';

import { RadioImage } from './RadioImage';
import { imgProps } from '../../../../types/image';

type Item = {
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
  icon?: string;
  /**
   *
   */
  legend?: string;
  /**
   *
   */
  image: imgProps;
  /**
   *
   */
  disabled?: boolean;
};

interface RadioImageGroupProps {
  /**
   *
   */
  items: Item[];
  /**
   *
   */
  name: string;
  /**
   *
   */
  selected?: string;
  /**
   *
   */
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  /**
   *
   */
  className?: string;
}

export const RadioImageGroup = ({
  items,
  name,
  selected = '1',
  onChange,
  className,
}: RadioImageGroupProps) => {
  return (
    <div className={className}>
      {items.map(({ label, value, icon, image, disabled }) => {
        return (
          <RadioImage
            key={value}
            name={name}
            label={label}
            value={value}
            checked={value === selected}
            disabled={disabled}
            icon={icon ?? 'tick-square'}
            onChange={onChange}
            image={image}
          />
        );
      })}
    </div>
  );
};
