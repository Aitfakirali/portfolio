import { render } from '@testing-library/react';
import React from 'react';

import { CardReleve } from '../CardReleve';

describe('CardReleve', () => {
  it('Should render', () => {
    render(
      <CardReleve
        title='Vehicule A'
        number='10'
        description='Prenait un stationnement'
      />,
    );
  });
});
