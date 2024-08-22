import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CardWithIcon } from './CardWithIcon';

const meta: Meta<typeof CardWithIcon> = {
  title: 'primitives/CardWithIcon',
  component: CardWithIcon,
};

export default meta;
type Story = StoryObj<typeof CardWithIcon>;

export const Primary: Story = {
  args: {
    src: '/bank.svg',
    title: 'Le saviez-vous ?',
    description:
      'Notre service de mise à disposition pour permet de récupérer votre indemnisation auprès de n’importe quelle agence BMCE dans le royaume.',
  },
  render: (args) => (
    <div className='grid grid-cols-2 p-5 md:grid-cols-3'>
      <CardWithIcon className='pb-20' {...args} />
    </div>
  ),
};

export const CardWithElement: Story = {
  render: () => {
    return (
      <CardWithIcon
        src='/cheque.svg'
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
      />
    );
  },
};
