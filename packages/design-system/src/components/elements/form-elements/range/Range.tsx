import React, { useEffect, useState } from 'react';

import { range } from './theme';

export interface RangeProps {
  /**
   * Name of range input
   */
  name?: string;
  /**
   * Max value
   */
  max: number;
  /**
   * Min value
   */
  min: number;
  /**
   * Range current value
   */
  value: number;
  /**
   * Thumb variant
   */
  thumb?: string;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

/**
 *
 */
export const Range = ({
  name,
  max,
  min,
  value,
  thumb = 'defaultThumb',
  onChange,
  ...rest
}: RangeProps) => {
  const [rangeValue, setRangeValue] = useState(() => {
    if (value) {
      return ((value / max) * 100).toString();
    }
    return undefined;
  });

  useEffect(() => {
    setRangeValue(((value / max) * 100).toString());
  }, [max, value]);

  /**
   *
   */
  const handleRangeChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const pourcentage = (parseInt(value) / max) * 100;
    setRangeValue(pourcentage.toString());
    if (onChange) {
      onChange(event);
    }
  };

  const trackStyle = {
    background: `linear-gradient(to right, #1E65EB 0%, #1E65EB ${rangeValue}%, #E8F0FF ${rangeValue}%, #E8F0FF 100%)`,
    height: '4px',
    width: '100%',
    borderRadius: '5px',
  };

  return (
    <input
      name={name}
      onChange={handleRangeChange}
      type='range'
      value={value}
      className={range.input[thumb as keyof typeof range.input]}
      min={min}
      max={max}
      style={{ ...trackStyle }}
      id='inputRange'
      {...rest}
    />
  );
};
