import type { Meta, StoryObj } from '@storybook/react';

import { InputPassword } from './InputPassword';
import { InputProps } from '../input/Input';

const meta: Meta<typeof InputPassword> = {
  title: 'Form elements/Password',
  component: InputPassword,
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

const Template = ({ ...args }: InputProps) => {
  return <InputPassword {...args} placeholder='This is placeholder' />;
};

export const Primary: Story = {
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Error: Story = {
  args: {
    hasError: true,
    errorMessage: 'This is error message',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
