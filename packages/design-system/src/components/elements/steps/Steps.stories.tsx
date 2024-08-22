import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Steps } from './Steps';

const meta: Meta<typeof Steps> = {
  title: 'Components/Steps',
  component: Steps,
};

export default meta;
type Story = StoryObj<typeof Steps>;

const Template = () => {
  const steps = [
    'Type de déclaration',
    'Choix de procédure',
    'Données administratives',
    'Validation',
  ].map((step) => ({
    title: step,
    subtitle: step,
  }));
  const [active, setActive] = useState(0);
  return (
    <Steps steps={steps} active={active} onClick={(num) => setActive(num)} />
  );
};

export const Primary: Story = {
  render: () => <Template />,
};

export const Variants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {Array.from({ length: 4 }, (_, index) => (
        <Steps
          key={index}
          steps={[
            'Type de déclaration',
            'Choix de procédure',
            'Données administratives',
            'Validation',
          ].map((step) => ({
            title: step,
            subtitle: step,
          }))}
          active={index}
        />
      ))}
    </div>
  ),
};
