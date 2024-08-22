import { render } from '@testing-library/react';
import React from 'react';

import { CardWithIcon } from '../CardWithIcon';

describe('CardWithIcon', () => {
  it('Should render', () => {
    render(
      <CardWithIcon
        src='/images/Hifad express.png'
        description='Pour traiter au mieux votre demande, nous avons besoin des informations suivantes :'
        elements={[
          {
            icon: 'component',
            label: 'La nature de votre sinistre',
          },
          {
            icon: 'calendar',
            label: 'La date et l’heure du sinistre',
          },
          {
            icon: 'location',
            label: 'La ville du sinistre',
          },
          {
            icon: 'car-crush2',
            label: 'La nature des dégats',
          },
        ]}
      />,
    );
  });
});
