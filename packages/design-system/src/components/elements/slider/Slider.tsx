import { format } from 'date-fns';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import 'keen-slider/keen-slider.min.css';

import { theme } from './theme';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

interface SliderItem {
  /**
   *
   */
  date: Date | string;

  /**
   *
   */
  versementTotal: string | number;

  /**
   *
   */
  versementExceptionnel: number | string;

  /**
   *
   */
  versementPeriodique: number | string;
}

interface SliderProps {
  /**
   *
   */
  elements: SliderItem[];

  /**
   *
   */
  variant?: keyof typeof theme;
}

export const Slider = ({
  variant = 'default',
  elements,
  ...props
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [key, setKey] = useState(false);
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: { origin: 'center', perView: 'auto' },
    detailsChanged: (s) => {
      setCurrentSlide(s.track.details.rel);
    },
    updated: () => {
      setKey(!key);
    },
  });
  return (
    <div className='relative'>
      <div ref={sliderRef} {...props} className='keen-slider mx-auto max-w-5xl'>
        {elements.map((element, index) => (
          <div
            key={element.toString() + key.toString()}
            className='keen-slider__slide min-w-fit p-2'
          >
            <CardSlider
              {...element}
              isCurrent={currentSlide == index}
              variant={variant}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CardSlider = ({
  date,
  versementExceptionnel,
  versementPeriodique,
  versementTotal,
  isCurrent,
  variant = 'default',
}: SliderItem & {
  /**
   *
   */
  isCurrent: boolean;
  /**
   *
   */
  variant?: keyof typeof theme;
}) => {
  return (
    <div
      className={vclsx(
        theme[variant].card,
        isCurrent && theme[variant].current,
      )}
    >
      <div className='flex justify-between'>
        <div className='bg-gray-25 w-fit rounded-md px-2 py-1'>
          <Text
            variant='text-base/Semibold'
            className='text-primary-600 text-center'
          >
            {format(date as Date, 'LLLL')}
            <Text as='p' className='mt-1'>
              {format(date as Date, 'y')}
            </Text>
          </Text>
        </div>
        <Text className='text-end text-gray-600' variant='text-base/Regular'>
          Total des versement
          <Text variant='text-lg/Medium' className='mt-1 text-gray-800'>
            {`${versementTotal ?? '--'} Dhs`}
          </Text>
        </Text>
      </div>

      <div className={theme[variant].innerCard.container}>
        <Text className='text-primary-500'>Versement exceptionnels</Text>
        <Text className='text-gray-700' variant='text-base/Regular'>{`${
          versementExceptionnel ?? '--'
        } Dhs`}</Text>
      </div>

      <div className={theme[variant].innerCard.container}>
        <Text className='text-primary-500'>Versement périodiques</Text>
        <Text className='text-gray-700' variant='text-base/Regular'>{`${
          versementPeriodique ?? '--'
        } Dhs`}</Text>
      </div>
    </div>
  );
};
