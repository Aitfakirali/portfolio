import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CardReleve } from './CardReleve';

const meta: Meta<typeof CardReleve> = {
  title: 'Form elements/CardReleve',
  component: CardReleve,
};

export default meta;
type Story = StoryObj<typeof CardReleve>;

export const Primary: Story = {
  args: {
    title: 'Vehicule A',
    number: '10',
    description: 'Prenait un stationnement',
  },
  render: (args) => (
    <div className='grid grid-cols-2 p-5 md:grid-cols-3'>
      <CardReleve {...args} />
      <CardReleve {...args} />
      <CardReleve {...args} />
    </div>
  ),
};
