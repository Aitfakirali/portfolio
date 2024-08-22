import { render, screen } from '@testing-library/react';

import { CardInfo } from '../CardInfo';
import { Button } from '../../button/Button';

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

describe('Card Info', () => {
  it('should render', () => {
    render(
      <CardInfo
        elements={elements}
        secondaryAction={
          <Button
            variant='text'
            className='bg-white'
            iconRight='document-download'
            size='medium'
          >
            Éditer décompte
          </Button>
        }
        primaryAction={
          <Button iconRight='arrow-right-1' size='medium'>
            Consulter
          </Button>
        }
      />,
    );
    expect(screen.getByText('Éditer décompte')).toBeInTheDocument();
  });
});
