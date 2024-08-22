/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { TimeLineCard } from '../TimeLineCard';

describe('Widgets > Timeline > TimeLineCard', () => {
  it('Should render', () => {
    render(
      <TimeLineCard
        dateTraitement='01/01/2010'
        title='Assistance'
        state='completed'
        listInfos={[
          {
            libelle: 'Appel Constateur',
            value: '01/01/2010',
          },
          {
            libelle: 'Appel Remorquage',
            value: '02/01/2010',
          },
        ]}
      />,
    );
  });

  it('Should render with disabled state', () => {
    render(
      <TimeLineCard
        dateTraitement='01/01/2010'
        title='Assistance'
        state='disabled'
        listInfos={[
          {
            libelle: 'Appel Constateur',
            value: '01/01/2010',
          },
          {
            libelle: 'Appel Remorquage',
            value: '02/01/2010',
          },
        ]}
      />,
    );
  });

  it('Should render with active state', () => {
    render(
      <TimeLineCard
        dateTraitement='01/01/2010'
        title='Assistance'
        state='active'
        listInfos={[
          {
            libelle: 'Appel Constateur',
            value: '01/01/2010',
          },
          {
            libelle: 'Appel Remorquage',
            value: '02/01/2010',
          },
        ]}
      />,
    );
  });
});
