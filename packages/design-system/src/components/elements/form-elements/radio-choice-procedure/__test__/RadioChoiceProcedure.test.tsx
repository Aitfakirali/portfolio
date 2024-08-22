/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { RadioChoiceProcedure } from '../RadioChoiceProcedure';

describe('RadioChoiceProcedure', () => {
  it('Should render', () => {
    const handleChange = jest.fn();
    render(
      <RadioChoiceProcedure
        onChange={handleChange}
        name='button-icon'
        label='Sélectionnée'
        title='Hifad express'
        content='La procédure Hifad vous garantit un remboursement en moins de 48h dans le cas d’un accord avec l’expert mandaté...'
        recommanded={true}
        image='/images/Hifad express.png'
        key=''
        value=''
        icon='tick-square'
        hasError={true}
        disabled={true}
      />,
    );
  });

  it('Should render checked', () => {
    const handleChange = jest.fn();
    render(
      <RadioChoiceProcedure
        onChange={handleChange}
        name='button-icon'
        label='Sélectionnée'
        title='Hifad express'
        content='La procédure Hifad vous garantit un remboursement en moins de 48h dans le cas d’un accord avec l’expert mandaté...'
        recommanded={false}
        image='/images/Hifad express.png'
        key=''
        value=''
        icon='tick-square'
        checked={true}
      />,
    );
  });

  it('Should render unchecked', () => {
    const handleChange = jest.fn();
    render(
      <RadioChoiceProcedure
        onChange={handleChange}
        name='button-icon'
        label='Sélectionnée'
        title='Hifad express'
        content='La procédure Hifad vous garantit un remboursement en moins de 48h dans le cas d’un accord avec l’expert mandaté...'
        recommanded={false}
        image='/images/Hifad express.png'
        key=''
        value=''
        icon='tick-square'
        checked={false}
      />,
    );
  });
});
