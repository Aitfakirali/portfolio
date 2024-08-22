import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { toggle } from './theme';

/**
 *
 */
interface ToggleProps {
  /**
   * The variant to use.
   */
  variant?: keyof typeof toggle;
  /**
   * a function to call when the toggle is clicked.
   */
  onChange(checked: boolean): void;
  /**
   * The class name to add to the toggle.
   */
  className?: string;
  /**
   * Whether the toggle is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the toggle is checked.
   */
  checked?: boolean;
}

/**
 *
 */
export const Toggle = ({
  variant = 'default',
  className = '',
  disabled = false,
  onChange,
  checked = false,
}: ToggleProps) => {
  const [enabled, setEnabled] = useState(checked);
  /**
   *
   */
  const handleChange = (checked: boolean) => {
    setEnabled(checked);
    onChange(checked);
  };

  useEffect(() => {
    setEnabled(checked);
    onChange(checked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <Switch
      checked={enabled}
      onChange={!disabled ? handleChange : undefined}
      className={clsx(
        enabled
          ? toggle[variant].switch.enabled
          : toggle[variant].switch.disabled,
        toggle[variant].switch.className,
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <span
        className={clsx(
          enabled
            ? toggle[variant].switch.span.enabled
            : toggle[variant].switch.span.disabled,
          toggle[variant].switch.span.className,
        )}
      />
    </Switch>
  );
};
