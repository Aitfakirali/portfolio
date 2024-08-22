import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

// eslint-disable-next-line
const meta: Meta<typeof Badge> = {
  title: 'primitives/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    variant: 'base',
    label: 'Label',
    size: 'lg',
  },
} satisfies Story;

export const Variants: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Badge label='Base' variant='base' />
        <Badge label='Error' variant='danger' />
        <Badge label='Primary' variant='primary' />
        <Badge label='Success' variant='success' />
        <Badge label='Warning' variant='warning' />
        <Badge label='Indigo' variant='indigo' />
        <Badge label='Info' variant='info' />
        <Badge label='Pink' variant='pink' />
      </div>
    </div>
  ),
};

export const FilledVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Badge fill label='Base' variant='base' />
        <Badge fill label='Error' variant='danger' />
        <Badge fill label='Primary' variant='primary' />
        <Badge fill label='Success' variant='success' />
        <Badge fill label='Warning' variant='warning' />
        <Badge fill label='Indigo' variant='indigo' />
        <Badge fill label='Info' variant='info' />
        <Badge fill label='Pink' variant='pink' />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-x-5'>
        <Badge variant='base' label='Small' />
        <Badge variant='base' size='md' label='Medium' />
        <Badge variant='base' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='danger' label='Small' />
        <Badge variant='danger' size='md' label='Medium' />
        <Badge variant='danger' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='warning' label='Small' />
        <Badge variant='warning' size='md' label='Medium' />
        <Badge variant='warning' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='success' label='Small' />
        <Badge variant='success' size='md' label='Medium' />
        <Badge variant='success' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='info' label='Small' />
        <Badge variant='info' size='md' label='Medium' />
        <Badge variant='info' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='primary' label='Small' />
        <Badge variant='primary' size='md' label='Medium' />
        <Badge variant='primary' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='indigo' label='Small' />
        <Badge variant='indigo' size='md' label='Medium' />
        <Badge variant='indigo' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='purple' label='Small' />
        <Badge variant='purple' size='md' label='Medium' />
        <Badge variant='purple' size='lg' label='Large' />
      </div>
      <div className='flex items-center gap-x-5'>
        <Badge variant='pink' label='Small' />
        <Badge variant='pink' size='md' label='Medium' />
        <Badge variant='pink' size='lg' label='Large' />
      </div>
    </div>
  ),
};
