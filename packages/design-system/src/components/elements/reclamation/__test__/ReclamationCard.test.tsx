import { render } from '@testing-library/react';
import React from 'react';

import { ReclamationCard } from '../ReclamationCard';

describe('ReclamationCard', () => {
  it('Should render', () => {
    render(
      <ReclamationCard
        title='Vous-avez un souci ?'
        description='On est ici pour vous aidez, Lorem ispom  dolor aset'
        icon='add-square'
      />,
    );
  });
});
