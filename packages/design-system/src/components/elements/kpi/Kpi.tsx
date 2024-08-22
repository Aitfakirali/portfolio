import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 *
 */
interface ShipProps {
  /**
   *
   */
  value: number;
  /**
   *
   */
  type: 'up' | 'down';
}

/**
 *
 */
const Ship = ({ value, type }: ShipProps) => {
  return (
    <div
      className={vclsx(
        'flex items-center gap-x-1 rounded-full px-2 py-1',
        type === 'up' ? 'bg-success-600' : 'bg-error-600',
      )}
    >
      <Icon
        id={type === 'up' ? 'arrow-up-1' : 'arrow-down-1'}
        className='h-5 w-5'
      />
      <Text variant='text-md/Medium' className='text-white'>
        {value}%
      </Text>
    </div>
  );
};
/**
 *
 */
interface cardNumbersProps {
  /**
   *
   */
  title?: string;
  /**
   *
   */
  currentAmount?: number;
  /**
   *
   */
  currentAmountSymbol?: string;
  /**
   *
   */
  currentDate?: string;
  /**
   *
   */
  prevAmount?: number;
  /**
   *
   */
  prevAmountSymbol?: string;
  /**
   *
   */
  prevDate?: string;
  /**
   *
   */
  shipValue?: number;
  /**
   *
   */
  shipType?: 'up' | 'down';
}

/**
 *
 */
export const CardNumbers = ({
  title,
  currentAmount,
  currentAmountSymbol,
  currentDate,
  prevAmount,
  prevAmountSymbol,
  prevDate,
  shipValue,
  shipType,
}: cardNumbersProps) => {
  return (
    <div className='bg-primary-700 flex flex-col rounded p-4 text-white'>
      <Text as='p' variant='text-md/Medium' className='mb-4'>
        {title}
      </Text>
      <div className='mb-6'>
        <div className='mb-2 flex items-center justify-between'>
          <div className='flex items-center gap-x-1'>
            <Text as='h3' variant='text-2xl/Bold' className='text-white'>
              {currentAmount}
            </Text>
            <Text variant='text-base/Regular' className='text-white'>
              {currentAmountSymbol}
            </Text>
          </div>
          {shipValue !== undefined && shipType && (
            <Ship type={shipType} value={shipValue} />
          )}
        </div>
        <div>
          <Text variant='text-base/Medium' as='span' className='text-white'>
            {currentDate}
          </Text>
        </div>
      </div>
      <div className='mt-auto'>
        <div className='flex items-center gap-x-1'>
          <Text variant='text-lg/Medium' className='text-white'>
            {prevAmount} {prevAmountSymbol}
          </Text>
        </div>
        <div>
          <Text variant='text-base/Medium' as='span' className='text-white'>
            {prevDate}
          </Text>
        </div>
      </div>
    </div>
  );
};
