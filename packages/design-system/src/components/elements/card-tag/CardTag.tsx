import React from 'react';

import { Badge } from '../badge/Badge';
import { Text } from '../typography/Text';

const theme = {
  default: {
    container:
      'p-4 border border-gray-200 bg-white flex gap-5 justify-between w-fit items-center',
    badgeVariant: 'base' as const,
  },
  grayBg: {
    container:
      'p-4 border border-gray-200 bg-gray-50 flex gap-5 justify-between w-fit items-center',
    badgeVariant: 'base' as const,
  },
};

interface CardProps {
  /**
   *
   */
  title: string;

  /**
   *
   */
  badgeLabel?: string;

  /**
   *
   */
  variant?: keyof typeof theme;

  /**
   *
   */
  actionButton?: React.ReactNode;
}

export const CardTag = ({
  title,
  badgeLabel,
  variant = 'default',
  actionButton,
}: CardProps) => {
  return (
    <div className={theme[variant].container}>
      <Text>{title}</Text>
      {actionButton ??
        (badgeLabel && (
          <Badge
            label={badgeLabel}
            variant={theme[variant].badgeVariant}
            size='lg'
          />
        ))}
    </div>
  );
};
