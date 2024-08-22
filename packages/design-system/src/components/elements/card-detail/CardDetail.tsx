import React from 'react';

import { theme } from './theme';
import { Badge } from '../badge/Badge';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

interface CardDetailItem {
  /**
   *
   */
  label: string;
  /**
   *
   */
  value: string;
}

interface CardDetailProps {
  /**
   *
   */
  badgeLabel: string;

  /**
   *
   */
  variant?: keyof typeof theme;

  /**
   *
   */
  elements?: CardDetailItem[];

  /**
   *
   */
  className?: string;

  /**
   *
   */
  badgeIcon?: string;

  /**
   *
   */
  children?: React.ReactNode;
}

export const CardDetail = ({
  badgeIcon,
  badgeLabel,
  variant = 'default',
  elements,
  className,
  children,
}: CardDetailProps) => {
  return (
    <div className={vclsx(theme[variant].container, className)}>
      <Badge size='xl' icon={badgeIcon} label={badgeLabel} variant='base' />
      {children ||
        (elements && (
          <div className='grid grid-cols-2 gap-4'>
            {elements.map((element) => (
              <div key={element.label} className='w-full space-y-1'>
                <Text variant='text-base/Regular' className='text-primary'>
                  {element.label}
                </Text>
                <Text variant='text-base/Medium' className='text-gray-600'>
                  {element.value}
                </Text>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
