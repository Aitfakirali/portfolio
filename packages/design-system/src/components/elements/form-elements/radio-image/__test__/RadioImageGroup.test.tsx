/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { RadioImageGroup } from '../RadioImageGroup';

const items = [
  {
    label: 'Sélectionner',
    value: '1',
    legend: 'Alpha',
    image: {
      src: '/images/Mobile.png',
    },
  },
  {
    label: 'Sélectionner',
    value: '2',
    legend: 'Beta',
    image: {
      src: '/images/Mobile.png',
    },
  },
  {
    label: 'Sélectionner',
    value: '3',
    legend: 'GAMA',
    image: {
      src: '/images/Mobile.png',
    },
    disabled: true,
  },
];

describe('RadioImageGroup', () => {
  it('Should render', () => {
    const onChange = jest.fn();
    render(
      <RadioImageGroup
        items={items}
        name='radio-choice-procedure-group'
        onChange={onChange}
        className='flex w-full gap-x-3'
      />,
    );
  });

  it('Should render with selected', () => {
    const onChange = jest.fn();
    render(
      <RadioImageGroup
        items={items}
        selected='2'
        name='radio-choice-procedure-group'
        onChange={onChange}
        className='flex w-full gap-x-3'
      />,
    );
  });
});
