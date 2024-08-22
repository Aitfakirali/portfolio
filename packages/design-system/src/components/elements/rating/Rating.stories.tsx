import { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

// eslint-disable-next-line
const meta: Meta<typeof Rating> = {
  title: 'primitives/Rating',
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Rating label',
    initialValue: 3,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Rating size='sm' initialValue={Math.floor(Math.random() * 5)} />
        <Rating size='md' initialValue={Math.floor(Math.random() * 5)} />
        <Rating size='lg' initialValue={Math.floor(Math.random() * 5)} />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div>
        <span>Active state</span>
        <div className='flex items-center gap-x-12'>
          <Rating initialValue={Math.floor(Math.random() * 5)} size='sm' />
          <Rating initialValue={Math.floor(Math.random() * 5)} size='md' />
          <Rating initialValue={Math.floor(Math.random() * 5)} size='lg' />
        </div>
      </div>
      <div>
        <span>Disable state</span>
        <div className='flex items-center gap-x-12'>
          <Rating
            initialValue={Math.floor(Math.random() * 5)}
            size='sm'
            disabled
          />
          <Rating
            initialValue={Math.floor(Math.random() * 5)}
            size='md'
            disabled
          />
          <Rating
            initialValue={Math.floor(Math.random() * 5)}
            size='lg'
            disabled
          />
        </div>
      </div>
    </div>
  ),
};
