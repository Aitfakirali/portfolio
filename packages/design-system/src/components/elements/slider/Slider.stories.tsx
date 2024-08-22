import { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

// eslint-disable-next-line
const meta: Meta<typeof Slider> = {
  title: 'primitives/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    elements: [
      {
        date: new Date('2020-10-20'),
        versementExceptionnel: 1000,
        versementPeriodique: 1000,
        versementTotal: 2000,
      },
      {
        date: new Date('2020-10-20'),
        versementExceptionnel: 1000,
        versementPeriodique: 1000,
        versementTotal: 2000,
      },
      {
        date: new Date('2020-04-20'),
        versementExceptionnel: 1000,
        versementPeriodique: 1000,
        versementTotal: 2000,
      },
    ],
  },
};
