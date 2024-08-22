import { render, screen } from '@testing-library/react';

import { CardDetail } from '../CardDetail';

const elements = [
  {
    label: 'Montant payé',
    value: '1 221.00 Dhs',
  },
  {
    label: 'Date de décision',
    value: '15 janvier 2023',
  },
  {
    label: 'Type de déclaration',
    value: 'Déclaration de maladie',
  },
  {
    label: 'Mode paiement',
    value: 'Virement',
  },
];

describe('Card Detail', () => {
  it('should render', () => {
    render(
      <CardDetail
        elements={elements}
        badgeLabel='RADIOGRAPHIE'
        badgeIcon='car-crush2'
      />,
    );

    expect(screen.getByText('RADIOGRAPHIE')).toBeInTheDocument();
  });
});
