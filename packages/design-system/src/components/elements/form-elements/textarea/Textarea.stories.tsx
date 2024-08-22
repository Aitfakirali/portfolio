import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Textarea, TextAreaProps } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Form elements/Textarea',
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

const Template = ({ ...args }: TextAreaProps) => {
  return <Textarea {...args} />;
};

export const Primary: Story = {
  args: {
    label: 'Label',
    placeholder: 'This is placeholder',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'This is placeholder',
    disabled: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'This is placeholder',
    hasError: true,
    errorMessage: 'This the error message',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
