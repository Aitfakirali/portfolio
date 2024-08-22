import type { Meta } from '@storybook/react';

import { CardInfo } from './CardInfo';
import { Button } from '../button/Button';

const meta: Meta<typeof CardInfo> = {
  title: 'Components/Card Info',
  component: CardInfo,
};

export default meta;

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

export const CardInfoExample = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
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
      />
    </div>
  );
};
