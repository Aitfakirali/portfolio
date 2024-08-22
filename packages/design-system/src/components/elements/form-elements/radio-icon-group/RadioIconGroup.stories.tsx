import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { RadioIconGroup, RadioIconGroupProps } from './RadioIconGroup';

const meta: Meta<typeof RadioIconGroup> = {
  title: 'Form elements/RadioIconGroup',
  component: RadioIconGroup,
};

export default meta;

type Story = StoryObj<typeof RadioIconGroup>;

const Template = ({ ...args }: RadioIconGroupProps) => {
  const [selected, setSelected] = useState('');
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
  };

  return (
    <RadioIconGroup
      {...args}
      defaultValue={selected}
      onChange={onChange}
      className='flex gap-x-3'
      name='mlml'
    />
  );
};

export const Primary: Story = {
  args: {
    options: [
      { label: 'Oui', value: 'oui', icon: 'plus' },
      { label: 'Non', value: 'non', icon: 'plus' },
      { label: 'Maybe', value: 'maybe', icon: 'plus' },
    ],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
