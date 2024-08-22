import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Input, InputProps } from './Input';
import { Icon } from '../../icon/Icon';

const meta: Meta<typeof Input> = {
  title: 'Form elements/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const Template = ({ ...arg }: InputProps) => {
  return (
    <div className='w-[300px]'>
      <Input {...arg} placeholder='This is placeholder' />
    </div>
  );
};

export const Primary: Story = {
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

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithDescription: Story = {
  args: {
    description: 'This the description',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    description: 'This the description',
  },
  render: (args) => {
    return (
      <div>
        <div className='mb-4'>
          <Template
            {...args}
            prefix={<Icon id='profile' className='h-5 w-5' />}
          />
        </div>
        <Template
          {...args}
          suffix={<Icon id='profile' className='h-5 w-5' />}
        />
      </div>
    );
  },
};

export const WithError: Story = {
  args: {
    hasError: true,
    errorMessage: 'This the description',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
