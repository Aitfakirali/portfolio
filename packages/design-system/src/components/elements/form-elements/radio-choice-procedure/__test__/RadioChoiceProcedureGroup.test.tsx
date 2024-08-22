/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { RadioChoiceProcedureGroup } from '../RadioChoiceProcedureGroup';

const items = [
  {
    label: 'Sélectionnée',
    value: '1',
    title: 'Alpha',
    content: 'lorem',
    recommanded: true,
    image: '/images/Hifad express.png',
  },
  {
    label: 'Sélectionnée',
    value: '2',
    title: 'Beta',
    content: 'lorem',
    image: '/images/Expertise à distance.png',
  },
];

describe('RadioChoiceProcedureGroup', () => {
  it('Should render', () => {
    const handleChange = jest.fn();
    render(
      <RadioChoiceProcedureGroup
        onChange={handleChange}
        name='button-icon'
        items={items}
        testidPrefix='test_id'
      />,
    );
  });
});
