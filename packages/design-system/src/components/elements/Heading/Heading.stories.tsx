import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Info d’expertise',
    icon: 'calendar',
  },
  render: (args) => {
    return <Heading {...args}></Heading>;
  },
};

export const WithSeparator: Story = {
  args: {
    children: 'Info d’expertise',
    icon: 'calendar',
    separator: true,
  },
  render: (args) => {
    return (
      <Heading {...args} icon='calendar'>
        Info d’expertise
      </Heading>
    );
  },
};
