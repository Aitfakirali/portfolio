import { useEffect, useState } from 'react';

import { toggle } from './theme';
import { Toggle } from '../../toggle/Toggle';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/vclsx';

/**
 *
 */
export interface ToggleLabelProps {
  /**
   * variant to use
   */
  variant?: keyof typeof toggle;
  /**
   * Label of the element
   */
  label: string;
  /**
   * If disabled
   */
  disabled?: boolean;
  /**
   * If checked by default
   */
  checked?: boolean;
  /**
   * The callback function that is triggered when the state changes
   */
  onChange(checked: boolean): void;
}

/**
 *
 */
export const ToggleLabel = ({
  variant = 'default',
  label,
  disabled,
  checked,
  onChange,
  ...rest
}: ToggleLabelProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  /**
   *
   */
  const handleWrapperClick = () => {
    setIsChecked((prev) => {
      return !prev;
    });
  };

  return (
    <div
      onClick={!disabled ? handleWrapperClick : undefined}
      className={vclsx(
        toggle[variant].wrapper,
        disabled && 'cursor-not-allowed',
      )}
      {...rest}
    >
      <Text
        variant='text-base/Medium'
        className={vclsx(
          disabled
            ? toggle[variant].label.disabled
            : toggle[variant].label.enabled,
          'whitespace-nowrap',
        )}
      >
        {label}
      </Text>
      <Toggle disabled={disabled} onChange={onChange} checked={isChecked} />
    </div>
  );
};
