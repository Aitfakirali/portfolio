import type { Meta } from '@storybook/react';

import { CardDetail } from './CardDetail';
import { Text } from '../typography/Text';

const meta: Meta<typeof CardDetail> = {
  title: 'Components/Card Detail',
  component: CardDetail,
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
  {
    label: 'Mode paiement',
    value: 'Virement',
  },
];

export const CardDetailExample = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
      <CardDetail
        elements={elements}
        badgeLabel='RADIOGRAPHIE'
        badgeIcon='car-crush2'
      />
      <CardDetail
        elements={elements.slice(1)}
        badgeLabel='LABO-ANALYSE'
        badgeIcon='car-crush2'
      />
    </div>
  );
};

export const CardDetailExample2 = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
      <CardDetail
        badgeLabel='Clinique palmier Casablanca'
        badgeIcon='car-crush2'
      >
        <div className='space-y-1'>
          <Text className='text-gray-500' variant='text-base/Regular'>
            Avenue des fleures{' '}
          </Text>
          <Text className='text-gray-500' variant='text-base/Regular'>
            0522 464 646
          </Text>
        </div>
      </CardDetail>
    </div>
  );
};
