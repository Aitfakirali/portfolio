import { Meta, StoryObj } from '@storybook/react';

import { CardTag } from './CardTag';
import { Button } from '../button/Button';
import { Text } from '../typography/Text';

const meta = {
  title: 'primitives/CardTag',
  component: CardTag,
} satisfies Meta<typeof CardTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    badgeLabel: '1 437 493 Dhs',
    title: 'Total Épargne constituée',
  },
  render: (args) => {
    return <CardTag {...args} />;
  },
};

export const Variant: Story = {
  args: {
    badgeLabel: '1 437 493 Dhs',
    title: 'Total Épargne constituée',
    actionButton: (
      <Button variant='text' iconRight='document-download'>
        <Text>Télécharger</Text>
      </Button>
    ),
  },
  render: (args) => {
    return <CardTag {...args} />;
  },
};
