import { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress';

// eslint-disable-next-line
const meta: Meta<typeof Progress> = {
  title: 'primitives/Progress',
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Progress label',
    percentage: 50,
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Progress label='Base' variant='neutral' percentage={100} />
        <Progress label='Success' variant='success' percentage={40} />
      </div>
      <div className='flex items-center gap-x-12'>
        <Progress label='Error' variant='error' percentage={30} />
        <Progress label='Warning' variant='warning' percentage={78} />
      </div>
    </div>
  ),
};

export const TableProgress: Story = {
  render: () => (
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-x-12'>
        <Progress
          label='Base'
          variant='neutral'
          percentage={90}
          suffix='/'
          total={100}
        />
        <Progress
          label='Success'
          variant='success'
          percentage={40}
          suffix='/'
          total={100}
        />
      </div>
      <div className='flex items-center gap-x-12'>
        <Progress
          label='Error'
          variant='error'
          percentage={30}
          suffix='/'
          total={30}
        />
        <Progress
          label='Warning'
          variant='warning'
          percentage={78}
          suffix='/'
          total={100}
        />
      </div>
    </div>
  ),
};
