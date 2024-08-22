import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CaptionProps, useNavigation } from 'react-day-picker';

import { theme } from './theme';
import { Icon } from '../../icon/Icon';
import { Text } from '../../typography/Text';

/**
 *
 */
export function CustomCaption(props: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <div className={theme?.['default']?.customCaption?.container}>
      <div
        className={theme?.['default']?.customCaption?.buttonLeft?.container}
        onClick={() => previousMonth && goToMonth(previousMonth)}
        data-testid='buttonNavprevious'
      >
        <button type='button' disabled={!previousMonth}>
          <Icon
            id='arrow-left-1'
            className={theme?.['default']?.customCaption?.buttonLeft?.icone}
          />
        </button>
      </div>
      <div className='text-center'>
        <Text
          as='div'
          variant='text-md/Medium'
          className={theme?.['default']?.customCaption?.displayDate}
        >
          {format(props.displayMonth, 'MMM yyy', { locale: fr })}
        </Text>
      </div>
      <div
        className={theme?.['default']?.customCaption?.buttonRight?.container}
        onClick={() => nextMonth && goToMonth(nextMonth)}
        data-testid='buttonNavnext'
      >
        <button type='button' disabled={!nextMonth}>
          <Icon
            id='arrow-right-1'
            className={theme?.['default']?.customCaption?.buttonRight?.icone}
          />
        </button>
      </div>
    </div>
  );
}
