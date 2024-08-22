import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { FicheInfoCard } from './FicheInfoCard';

const meta: Meta<typeof FicheInfoCard> = {
  title: 'Components/Fiche Info Card',
  component: FicheInfoCard,
};
export default meta;
type Story = StoryObj<typeof FicheInfoCard>;
const Template = () => {
  return (
    <div className='relative w-[392px]'>
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
      />
    </div>
  );
};

export const Primary: Story = {
  render: () => {
    return <Template />;
  },
};
