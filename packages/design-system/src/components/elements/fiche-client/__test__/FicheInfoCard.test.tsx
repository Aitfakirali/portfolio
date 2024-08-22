import { render } from '@testing-library/react';
import React from 'react';

import { FicheInfoCard } from '../FicheInfoCard';

describe('FicheInfoCard', () => {
  it('Should render', () => {
    render(
      <FicheInfoCard
        iconeId='car'
        content={[
          { titre: 'Produit', description: 'Auto' },
          { titre: 'Produit', description: 'Auto' },
          { titre: 'Produit', description: 'Auto' },
          { titre: 'Produit', description: 'Auto' },
        ]}
        buttonLabel='Poursuivre'
        iconRight='arrow-right-1'
      />,
    );
  });
});
