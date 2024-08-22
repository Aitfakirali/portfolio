import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Form elements/CheckboxGroup',
  component: CheckboxGroup,
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

const Template = ({ ...args }: CheckboxGroupProps) => {
  const [selected, setSelected] = useState<string[]>(args.defaultValue || []);
  const handleChange = (value: string[]) => {
    setSelected(value);
  };

  return (
    <CheckboxGroup
      {...args}
      className='flex gap-x-3'
      defaultValue={selected}
      name='checkboxGroup'
      onChange={handleChange}
    />
  );
};

export const Primary: Story = {
  args: {
    options: [
      { label: 'Oui', value: 'oui' },
      { label: 'Non', value: 'non' },
      { label: 'Other', value: 'other' },
    ],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithActiveElement: Story = {
  args: {
    options: [
      { label: 'Oui', value: 'oui' },
      { label: 'Non', value: 'non' },
      { label: 'Other', value: 'other' },
    ],
    defaultValue: ['oui'],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithDisabledElement: Story = {
  args: {
    options: [
      { label: 'Oui', value: 'oui' },
      { label: 'Non', value: 'non', disabled: true },
      { label: 'Other', value: 'other' },
    ],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
