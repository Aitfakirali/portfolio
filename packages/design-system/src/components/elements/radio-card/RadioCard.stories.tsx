import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { RadioCard } from './RadioCard';
import { Badge } from '../badge/Badge';

const meta: Meta<typeof RadioCard> = {
  title: 'Form elements/RadioCard',
  component: RadioCard,
};

export default meta;

type Story = StoryObj<typeof RadioCard>;

const Template = ({ ...args }: React.ComponentProps<typeof RadioCard>) => {
  const [isChecked, setChecked] = useState(args.checked);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
  };
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <>
      <RadioCard {...args} checked={isChecked} onChange={handleChange} />
    </>
  );
};

const items = [
  { label: 'Ville du sinistre', value: 'Casablanca' },
  { label: 'Nature des dégâts', value: 'Léger' },
  { label: 'Date du sinistre', value: '22 février 2023 ' },
  { label: 'Heure du sinistre', value: 'Heure du sinistre' },
];

export const Primary: Story = {
  args: {
    name: 'label',
    value: 'label 1',
    label: 'Seat leon',
    badge: <Badge variant='success' label='Badge' />,
    elements: items,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const Checked: Story = {
  args: {
    name: 'label',
    value: 'label 1',
    label: 'Seat leon',
    badge: <Badge variant='success' label='Badge' />,
    elements: items,
    disabled: true,
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
