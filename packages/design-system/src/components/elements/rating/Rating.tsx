import React from 'react';
import { Rating as RatingComponent } from 'react-simple-star-rating';

import { theme } from './theme';
import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 * rating component props
 */
type RatingProps = {
  /**
   * the label for the rating
   */
  label?: string;
  /**
   * manages the size of the rating
   */
  size?: keyof typeof theme.sizes;
  /**
   * indicates whether the rating is disabled
   */
  disabled?: boolean;
} & Omit<React.ComponentProps<typeof RatingComponent>, 'size'>;

/**
 *
 */
export const Rating: React.FC<RatingProps> = ({
  label,
  size = 'md',
  disabled = false,
  ...overrideProps
}) => {
  return (
    <div>
      {label && <Text className='mb-1 text-gray-600'>{label}</Text>}
      <RatingComponent
        allowHover={!disabled}
        disableFillHover={disabled}
        className={vclsx(disabled ? 'opacity-30' : '')}
        size={24}
        allowFraction
        readonly
        fillIcon={
          <Icon
            id='star-filled'
            className={vclsx(theme.base, theme.sizes[size], theme.icon.filled)}
          />
        }
        emptyIcon={
          <Icon
            id='star-outline'
            className={vclsx(theme.base, theme.sizes[size], theme.icon.outline)}
          />
        }
        {...overrideProps}
      />
    </div>
  );
};
