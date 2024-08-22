import React, { useState } from 'react';

import { RadioImageGroup } from './RadioImageGroup';
import { imgProps } from '../../../../types/image';

type Item = {
  /**
   *
   */
  label: string;
  /**
   *
   */
  value: string;
  /**
   *
   */
  icon?: string;
  /**
   *
   */
  legend?: string;
  /**
   *
   */
  image: imgProps;
  /**
   *
   */
  disabled?: boolean;
};

const items: Item[] = [
  {
    label: 'Sélectionner',
    value: '1',
    legend: 'Hifad express',
    image: {
      src: '/images/Mobile.png',
    },
  },
  {
    label: 'Sélectionner',
    value: '2',
    legend: 'Expertise à distance',
    image: {
      src: '/images/Mobile.png',
    },
  },
  {
    label: 'Sélectionner',
    value: '3',
    legend: 'RMA Services',
    image: {
      src: '/images/Mobile.png',
    },
    disabled: true,
  },
];

const Template = () => {
  const [selected, setSelected] = useState();
  const onChange = (e: any) => {
    setSelected(e.target?.value);
  };

  return (
    <RadioImageGroup
      items={items}
      selected={selected}
      name='radio-choice-procedure-group'
      onChange={onChange}
      className='flex w-full gap-x-3'
    />
  );
};

export const RadioImageGroupStories = Template.bind({});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Form elements/RadioImageGroup',
};
