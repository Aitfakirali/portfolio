import { ReactNode } from 'react';

import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

/**
 * CardProfile props.
 */
export interface CardProfileProps {
  /**
   * Card title
   */
  title?: ReactNode | string;
  /**
   * Card Subtitle
   */
  subtitle?: string;
  /**
   * Card text
   */
  number?: string | number;
  /**
   *
   */
  badge?: ReactNode;

  /**
   *
   */
  className?: string;
}

/**
 *
 */
export const CardProfile = ({
  title,
  subtitle,
  number,
  badge,
  className,
}: CardProfileProps) => {
  return (
    <div
      className={vclsx(
        'flex flex-col rounded-md border border-gray-200 p-4',
        className,
      )}
    >
      <Text
        variant='text-base/Semibold'
        as='div'
        className='text-primary-700 mb-3'
      >
        {title}
      </Text>

      {subtitle && (
        <Text
          variant='text-base/Medium'
          className='text-gold-500 mb-4 flex items-center gap-[6px] italic'
        >
          {subtitle}{' '}
          <Icon
            id='Next'
            width='13'
            height='13'
            className='relative rotate-90'
          />
        </Text>
      )}
      {number && (
        <Text variant='text-xl/Semibold' className='text-primary-500 mt-auto'>
          {number}
        </Text>
      )}
      {badge}
    </div>
  );
};
