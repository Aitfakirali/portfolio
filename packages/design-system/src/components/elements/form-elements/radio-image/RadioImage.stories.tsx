import type { Meta, StoryObj } from '@storybook/react';

import { RadioImage } from './RadioImage';

const meta: Meta<typeof RadioImage> = {
  title: 'Form elements/RadioImage',
  component: RadioImage,
};

export default meta;
type Story = StoryObj<typeof RadioImage>;

export const Primary: Story = {
  args: {
    name: 'button-icon',
    legend: 'Fig 1.2',
    image: {
      src: '/images/Mobile.png',
    },
    key: '',
    value: '',
    icon: 'tick-square',
    label: 'selectionner',
  },
  render: (args) => (
    <div className='max-w-[350px]'>
      <RadioImage {...args} />
    </div>
  ),
};
