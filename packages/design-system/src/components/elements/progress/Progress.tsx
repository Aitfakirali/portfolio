import React from 'react';

import { theme } from './theme';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 *  Progress props type
 */
type ProgressProps = {
  /**
   *  changes the the style of the progress
   */
  variant?: Exclude<keyof typeof theme.variants, 'base'>;
  /**
   *  the label of the progress
   */
  label?: string;
  /**
   *  the amount in % of the progress which is filled
   */
  percentage?: number;

  /**
   *
   */
  suffix?: string;

  /**
   *
   */
  total?: number;
  className?: string;
};

/**
 *  Progress component
 */
export const Progress: React.FC<ProgressProps> = ({
  variant = 'neutral',
  label,
  percentage = 0,
  suffix = '%',
  total,
  className,
}) => {
  const calcPercentage = !total ? percentage : (percentage / total) * 100;

  return (
    <div className={vclsx('w-full', className)}>
      <span className='flex justify-between'>
        {label && (
          <Text variant='text-base/Medium' className='text-gray-600'>
            {label}
          </Text>
        )}
        <Text variant='text-sm/Semibold' className='text-gray-600'>
          {percentage}
          {suffix}
          {total}
        </Text>
      </span>
      <div className={vclsx(theme.variants.base, theme.variants[variant].bar)}>
        <div
          className={theme.variants[variant].progress}
          style={{ width: `${calcPercentage}%` }}
        />
      </div>
    </div>
  );
};
