import { Meta, StoryObj } from '@storybook/react';

import { ReclamationCard } from './ReclamationCard';

const meta: Meta<typeof ReclamationCard> = {
  title: 'primitives/ReclamationCard',
  component: ReclamationCard,
} satisfies Meta<typeof ReclamationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Vous-avez un souci ?',
    description: 'On est ici pour vous aidez, Lorem ispom  dolor aset',
    icon: 'add-square',
  },
};

export const Variant: Story = {
  args: {
    title: 'Vous-avez un souci ?',
    description: 'On est ici pour vous aidez, Lorem ispom  dolor aset',
    icon: 'add-square',
    variant: 'primary',
  },
};
