import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form elements/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const Template = ({ ...args }: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
  };

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      value='checkbox'
      name='checkbox'
      onChange={handleChange}
    />
  );
};

export const Primary: Story = {
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
  render: (args) => {
    return (
      <div className='flex gap-x-2'>
        <Template {...args} />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <div className='flex gap-x-2'>
        <Template disabled={true} {...args} />
        <Template disabled={true} checked={true} {...args} />
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    hasError: true,
  },
  render: (args) => {
    return (
      <div className='flex gap-x-2'>
        <Template {...args} />
      </div>
    );
  },
};
