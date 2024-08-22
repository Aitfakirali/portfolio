import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Radio, RadioProps } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Form elements/Radio',
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

const Template = ({ ...args }: RadioProps) => {
  const [isChecked, setChecked] = useState(args.checked);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
  };
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <>
      <Radio {...args} checked={isChecked} onChange={handleChange} />
    </>
  );
};

export const Primary: Story = {
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'label',
  },
  render: (args) => {
    return (
      <div className='flex items-center gap-x-3'>
        <Template {...args} />
        <Template {...args} checked={true} />
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    hasError: true,
    label: 'label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
