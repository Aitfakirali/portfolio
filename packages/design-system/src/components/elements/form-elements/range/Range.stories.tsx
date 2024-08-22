import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Range, RangeProps } from './Range';

const meta: Meta<typeof Range> = {
  title: 'Form elements/Range',
  component: Range,
};

export default meta;

type Story = StoryObj<typeof Range>;

const Template = ({ ...args }: RangeProps) => {
  const [selected, setSelected] = useState(args.value || 0);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const selectedValue = e.currentTarget.value;
    setSelected(parseInt(selectedValue));
  };
  return (
    <Range name='range' onChange={onChange} value={selected} min={0} max={3} />
  );
};

export const Primary: Story = {
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithDefaultValue: Story = {
  args: {
    value: 2,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
