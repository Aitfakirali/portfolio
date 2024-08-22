/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { RadioImage } from '../RadioImage';

describe('RadioImage', () => {
  it('Should render', () => {
    render(
      <RadioImage
        name='button-icon'
        legend='Fig 1.2'
        image={{
          src: '/images/Mobile.png',
        }}
        key=''
        value=''
        icon='tick-square'
        label='selectionner'
        onChange={() => {}}
      />,
    );
  });

  it('Should render unchecked', () => {
    render(
      <RadioImage
        name='button-icon'
        image={{
          src: '/images/Mobile.png',
          width: 100,
          height: 100,
        }}
        key=''
        value=''
        icon='tick-square'
        label='selectionner'
        onChange={() => {}}
        checked={false}
        hasError={true}
        disabled={true}
      />,
    );
  });
});
