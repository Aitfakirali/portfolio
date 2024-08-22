import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  args: {
    variant: 'default',
    checked: false,
    disabled: false,
    className: '',
  },
};
