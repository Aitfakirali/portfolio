import React, { useState } from 'react';

import { RadioChoiceProcedureGroup } from './RadioChoiceProcedureGroup';

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
  title: string;
  /**
   *
   */
  content: string;
  /**
   *
   */
  recommanded?: boolean;
  /**
   *
   */
  image: string;
  /**
   *
   */
  disabled?: boolean;
};

const items: Item[] = [
  {
    label: 'Sélectionnée',
    value: '1',
    title: 'Hifad express',
    content:
      'La procédure Hifad vous garantit un remboursement en moins de 48h dans le cas d’un accord avec l’expert mandaté...',
    recommanded: true,
    image: '/images/Hifad express.png',
  },
  {
    label: 'Sélectionnée',
    value: '2',
    title: 'Expertise à distance',
    content:
      'La procédure EAD vous garantit un remboursement en moins de 48h dans le cas d’un accord avec l’expert mandaté...',
    image: '/images/Expertise à distance.png',
  },
  {
    label: 'Sélectionnée',
    value: '3',
    title: 'RMA Services',
    content:
      'La procédure RMA Services vous garantit un service de qualité dans notre centre durant l’ensemble de votre procédure',
    image: '/images/RMA services.png',
    disabled: true,
  },
  {
    label: 'Sélectionnée',
    value: '4',
    title: 'Garage agrée ',
    content:
      'La procédure Hifad vous garantit un remboursement en moins de 24h dans le cas d’un accord avec l’expert mandaté...',
    image: '/images/Garage agrée.png',
  },
  {
    label: 'Sélectionnée',
    value: '5',
    title: 'Procédure normale',
    content:
      'La procédure Hifad vous garantit un remboursement en moins de 24h dans le cas d’un accord avec l’expert mandaté...',
    image: '/images/Procedure normal.png',
  },
];

const Template = () => {
  const [selected, setSelected] = useState();
  const onChange = (e: any) => {
    setSelected(e.target?.value);
  };

  return (
    <div className='py-10'>
      <RadioChoiceProcedureGroup
        items={items}
        selected={selected}
        name='radio-choice-procedure-group'
        onChange={onChange}
        className='flex w-full gap-x-3'
      />
    </div>
  );
};

export const RadioChoiceProcedureGroupStories = Template.bind({});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Form elements/RadioChoiceProcedure',
};
