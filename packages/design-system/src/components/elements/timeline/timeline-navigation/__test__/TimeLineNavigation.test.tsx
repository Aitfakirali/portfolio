import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { TimeLineNavigation } from '../TimeLineNavigation';

describe('Widgets > Timeline > navigation', () => {
  it('Should render', () => {
    const { container } = render(
      <TimeLineNavigation
        sections={[
          {
            index: 1,
            current: false,
            name: 'Assistance',
          },
          {
            index: 2,
            current: true,
            name: 'Déclaration',
          },
          {
            index: 3,
            current: false,
            name: 'Missionnement',
          },
          {
            index: 5,
            current: false,
            name: 'Accord',
          },
          {
            index: 6,
            current: false,
            name: 'Fin des travaux',
          },
          {
            index: 4,
            current: false,
            name: 'Règlement',
          },
        ]}
      />,
    );

    const menuicon = container.querySelector('[href="/icons.svg#menu"]');
    fireEvent.click(menuicon as Element);
  });
});
