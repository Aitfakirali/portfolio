import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { RadioGroup, RadioGroupProps } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form elements/RadioGroup',
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const Template = ({ ...args }: RadioGroupProps) => {
  return (
    <RadioGroup
      {...args}
      options={args.options}
      className='item-center flex gap-x-5'
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

export const WithDisabled: Story = {
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

export const WithChecked: Story = {
  args: {
    options: [
      { label: 'Oui', value: 'oui' },
      { label: 'Non', value: 'non' },
      { label: 'Other', value: 'other' },
    ],
    defaultValue: 'oui',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithCheckedAndDisabled: Story = {
  args: {
    options: [
      { label: 'Oui', value: 'oui' },
      { label: 'Non', value: 'non', disabled: true },
      { label: 'Other', value: 'other' },
    ],
    defaultValue: 'oui',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
