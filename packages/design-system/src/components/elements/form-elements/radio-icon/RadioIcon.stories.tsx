import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { RadioIcon, RadioIconProps } from './RadioIcon';

const meta: Meta<typeof RadioIcon> = {
  title: 'Form elements/RadioIcon',
  component: RadioIcon,
};

export default meta;

type Story = StoryObj<typeof RadioIcon>;

const Template = ({ ...args }: RadioIconProps) => {
  const [isChecked, setChecked] = useState(args.checked);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
  };
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <RadioIcon {...args} checked={isChecked} onChange={handleChange} />
    </div>
  );
};

export const Primary: Story = {
  args: {
    label: 'This is label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Checked: Story = {
  args: {
    label: 'This is label',
    checked: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    label: 'This is label',
    disabled: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
export const DisabledChecked: Story = {
  args: {
    label: 'This is label',
    disabled: true,
    checked: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Error: Story = {
  args: {
    label: 'This is label',
    hasError: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithDescription: Story = {
  args: {
    label: 'This is label',
    description: 'This description',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
