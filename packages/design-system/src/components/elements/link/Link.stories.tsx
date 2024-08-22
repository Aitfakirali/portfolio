import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Link } from './Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line

const meta: Meta<typeof Link> = {
  title: 'Primitives/Links',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    title: 'Link',
    children: 'primary',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Variants = () => {
  return (
    <div className='flex flex-col  justify-start gap-9'>
      <Link>This is style of default link</Link>
      <Link variant='permalink'>This is style of default link</Link>
      <Link variant='gold'>This is style of default link</Link>
    </div>
  );
};
