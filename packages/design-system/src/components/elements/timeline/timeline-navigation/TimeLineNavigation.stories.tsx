import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TimeLineNavigation } from './TimeLineNavigation';

const meta: Meta<typeof TimeLineNavigation> = {
  title: 'TimeLine/TimeLineNavigation',
  component: TimeLineNavigation,
};
export default meta;
type Story = StoryObj<typeof TimeLineNavigation>;

export const primary: Story = {
  args: {
    sections: [
      {
        index: 1,
        current: false,
        name: 'Assistance',
      },
      {
        index: 2,
        current: true,
        name: 'Déclaration',
      },
      {
        index: 3,
        current: false,
        name: 'Missionnement',
      },
      {
        index: 5,
        current: false,
        name: 'Accord',
      },
      {
        index: 6,
        current: false,
        name: 'Fin des travaux',
      },
      {
        index: 4,
        current: false,
        name: 'Règlement',
      },
    ],
  },
  render: (args) => (
    <div className='flex'>
      <TimeLineNavigation {...args} />
      <div className='flex-1'></div>
    </div>
  ),
};
