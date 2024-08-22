import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { RangeImage, RangeImageProps } from './RangeImage';

const image =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

const meta: Meta<typeof RangeImage> = {
  title: 'Form elements/RangeImage',
  component: RangeImage,
};

export default meta;

type Story = StoryObj<typeof RangeImage>;
const items = [
  { label: 'label1', image: image },
  { label: 'label1', image: image },
  { label: 'label1', image: image },
];
const Template = ({ ...args }: RangeImageProps) => {
  return <RangeImage {...args} />;
};

export const Primary: Story = {
  render: (args) => {
    return <Template {...args} items={items} />;
  },
};

export const WithDefaultValue: Story = {
  args: {
    value: 1,
  },
  render: (args) => {
    return <Template {...args} items={items} />;
  },
};
