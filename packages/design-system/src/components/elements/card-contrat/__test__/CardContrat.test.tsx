import { render, screen } from '@testing-library/react';

import { CardContrat } from '../CardContrat';

const elements = [
  {
    label: 'Montant payé',
    date: '1 221.00 Dhs',
  },
  {
    label: 'Date de décision',
    date: '15 janvier 2023',
  },
  {
    label: 'Type de déclaration',
    date: 'Déclaration de maladie',
  },
  {
    label: 'Mode paiement',
    date: 'Virement',
  },
];

describe('Card Contrat', () => {
  it('should render', () => {
    render(<CardContrat elements={elements} nom='Soufiane ait fakir' />);

    expect(screen.getByText('Soufiane ait fakir')).toBeInTheDocument();
  });
});
