import React, { Fragment, ReactNode } from 'react';

import { vclsx } from '../../../../utils/vclsx';

interface RadioHtmlProps {
  /**
   *
   */
  name?: string;
  /**
   *
   */
  value?: string;
  /**
   *
   */
  onChange(e: React.FormEvent<HTMLInputElement>): any;
  /**
   *
   */
  disabled?: boolean;
  /**
   *
   */
  children: ReactNode;
  /**
   *
   */
  className?: string;
}

/**
 *
 */
export const RadioHtml = ({
  name,
  value,
  onChange,
  disabled,
  children,
  className,
  ...rest
}: RadioHtmlProps) => {
  return (
    <label className={vclsx('relative', className)}>
      <input
        name={name}
        value={value}
        type='radio'
        onChange={onChange}
        className='absolute h-0 w-0 opacity-0'
        disabled={disabled}
        {...rest}
      />
      <Fragment>{children}</Fragment>
    </label>
  );
};
