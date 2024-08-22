import React, { ReactNode } from 'react';

import { Icon } from '../icon/Icon';
import { Image } from '../image/Image';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

type Element = {
  /**
   *
   */
  icon: string;
  /**
   *
   */
  label: string;
};

type CardWithIconProps = {
  /**
   * the source of the icon
   */
  src: string;
  /**
   * the title of the card
   */
  title?: string;
  /**
   * small description
   */
  description?: string;
  /**
   * list of elements to show under the description
   */
  elements?: Element[];
  /**
   * override the default classNames
   */
  className?: string;

  /**
   * add element to the card
   */
  content?: ReactNode;
};

export const CardWithIcon: React.FC<CardWithIconProps> = ({
  src,
  title,
  description,
  elements,
  content,
  className,
}) => {
  return (
    <div
      className={vclsx(
        'bg-primary-25 max-w-fit space-y-4 rounded-lg p-4',
        className,
      )}
    >
      <div className='relative max-w-fit'>
        <div className='bg-primary-50 absolute inset-0 rounded-full' />
        <Image
          src={src}
          alt='hero card'
          width={74}
          height={74}
          className='relative z-10'
        />
      </div>
      {title && (
        <Text className='text-primary-700' variant='text-md/Medium'>
          {title}
        </Text>
      )}
      {description && <Text className='text-primary-700'>{description}</Text>}
      {content}
      <div className='space-y-2'>
        {elements?.map((element, index) => (
          <div key={index} className='text-primary-700 flex gap-2'>
            <Icon id={element.icon} className='h-4 w-4' />
            <Text>{element.label}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};
