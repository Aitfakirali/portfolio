import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'normal',
    children: 'Button',
    disabled: false,
  },
};
export const Variants: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='text'>Text</Button>
      </div>
    </div>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-x-12'>
        <Button variant='primary' size='medium'>
          Medium
        </Button>
        <Button variant='primary' size='normal'>
          Normal
        </Button>
      </div>
      <div className='flex items-center gap-x-12'>
        <Button variant='secondary' size='medium'>
          Medium
        </Button>
        <Button variant='secondary' size='normal'>
          Normal
        </Button>
      </div>
      <div className='flex items-center gap-x-12'>
        <Button variant='outline' size='medium'>
          Medium
        </Button>
        <Button variant='outline' size='normal'>
          Normal
        </Button>
      </div>
      <div className='flex items-center gap-x-12'>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='normal'>
          Normal
        </Button>
      </div>
    </div>
  ),
};
export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Button variant='primary' iconLeft='call'>
          Button
        </Button>
        <Button variant='secondary' iconLeft='calendar'>
          Button
        </Button>
        <Button variant='outline' iconRight='archive-tick'>
          Button
        </Button>
        <Button variant='text' iconRight='clipboard-check'>
          Button
        </Button>
      </div>
    </div>
  ),
};
export const States: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Button variant='primary' disabled={true}>
          Primary
        </Button>
        <Button variant='secondary' disabled={true}>
          secondary
        </Button>
        <Button variant='outline' disabled={true}>
          outline
        </Button>
        <Button variant='text' disabled={true}>
          text
        </Button>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Button variant='primary' isLoading={true}>
          Primary
        </Button>
      </div>
    </div>
  ),
};
