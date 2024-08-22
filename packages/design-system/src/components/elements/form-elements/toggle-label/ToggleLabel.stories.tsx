import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ToggleLabel, ToggleLabelProps } from './ToggleLabel';

const meta: Meta<typeof ToggleLabel> = {
  title: 'Form elements/ToggleLabel',
  component: ToggleLabel,
};

export default meta;

type Story = StoryObj<typeof ToggleLabel>;

const Template = ({ ...args }: ToggleLabelProps) => {
  return <ToggleLabel {...args} />;
};

export const Primary: Story = {
  args: {
    label: 'This is label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Enabled: Story = {
  args: {
    checked: true,
    label: 'This is label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    label: 'This is label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'This is label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
