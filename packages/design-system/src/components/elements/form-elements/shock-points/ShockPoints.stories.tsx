import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ShockPoints, ShockPointsItem, ShockPointsProps } from './ShockPoints';

const meta: Meta<typeof ShockPoints> = {
  title: 'Form elements/ShockPoints',
  component: ShockPoints,
};

export default meta;

type Story = StoryObj<typeof ShockPoints>;

const items: ShockPointsItem[] = [
  { position: 'topCenter', title: 'LAT G', value: 'LAT G' },
  { position: 'topRight', title: 'AVG', value: 'AVG' },
  { position: 'topLeft', title: 'ARG', value: 'ARG' },
  { position: 'bottomCenter', title: 'LAT D', value: 'LAT D' },
  { position: 'bottomRight', title: 'AVD', value: 'AVD' },
  { position: 'bottomLeft', title: 'ARD', value: 'ARD' },
  { position: 'rightCenter', title: 'AV', value: 'AV' },
  { position: 'leftCenter', title: 'AR', value: 'AR' },
];

const Template = ({ ...args }: ShockPointsProps) => {
  return (
    <div className='relative'>
      <ShockPoints {...args} name='shockpoint' items={items} />
    </div>
  );
};

export const Primary: Story = {
  render: (args) => {
    return <Template {...args} />;
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: ['AVG', 'AV'],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
