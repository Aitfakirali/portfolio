import React from 'react';

import { theme } from './theme';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

interface CardInfoItem {
  /**
   *
   */
  label: string;

  /**
   *
   */
  value: string;
}

interface CardInfoProps {
  /**
   *
   */
  elements: CardInfoItem[];

  /**
   *
   */
  variant?: keyof typeof theme;

  /**
   *
   */
  className?: string;

  /**
   *
   */
  primaryAction?: React.ReactNode;

  /**
   *
   */
  secondaryAction?: React.ReactNode;
}

export const CardInfo = ({
  elements,
  variant = 'default',
  className,
  primaryAction,
  secondaryAction,
}: CardInfoProps) => {
  return (
    <div className={vclsx(theme[variant].container, className)}>
      <div className={theme[variant].wrapper}>
        {elements.map((el) => (
          <Text
            key={el.label}
            className='text-gray-700'
            variant='text-base/Regular'
          >
            {el.label} :{' '}
            <Text as='span' variant='text-base/Medium'>
              {el.value}
            </Text>
          </Text>
        ))}

        <div className={theme[variant].actionWrapper}>
          {secondaryAction}
          {primaryAction}
        </div>
      </div>
    </div>
  );
};
