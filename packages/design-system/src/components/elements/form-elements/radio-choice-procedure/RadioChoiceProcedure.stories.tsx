import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { RadioChoiceProcedure } from './RadioChoiceProcedure';

const meta: Meta<typeof RadioChoiceProcedure> = {
  title: 'Form elements/RadioChoiceProcedure',
  component: RadioChoiceProcedure,
};

export default meta;

type Story = StoryObj<typeof RadioChoiceProcedure>;

export const Primary: Story = {
  args: {
    name: 'button-icon',
    label: 'Sélectionnée',
    title: 'Hifad express',
    content:
      'La procédure Hifad vous garantit un remboursement en moins de 48h dans le cas d’un accord avec l’expert mandaté...',
    recommanded: true,
    image: '/images/Hifad express.png',
    key: '',
    value: '',
    icon: 'tick-square',
  },
  render: (args) => (
    <div className='max-w-[350px]'>
      <RadioChoiceProcedure {...args} />
    </div>
  ),
};
