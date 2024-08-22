import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};

const tabs = [
  {
    id: 1,
    title: 'Auto',
    color: '#F69F14',
  },
  {
    id: 2,
    title: 'Santé',
    color: '#95C11F',
  },
  {
    id: 3,
    title: 'Épargne',
    color: '#82B5DF',
  },
];

export default meta;
type Story = StoryObj<typeof Tabs>;

const Template = (args: React.ComponentProps<typeof Tabs>) => {
  const [activeTab, setActiveTab] = useState(args.activeTab);

  useEffect(() => {
    setActiveTab(args.activeTab);
  }, [args.activeTab]);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <Tabs
      variant={args.variant}
      tabs={tabs}
      activeTab={activeTab}
      onClick={handleClick}
    />
  );
};

export const Primary: Story = {
  args: {
    activeTab: 1,
    variant: 'default',
  },
  render: (args) => <Template {...args} />,
};

export const Variants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      <p>Default Tabs</p>
      <Tabs
        variant='default'
        tabs={tabs}
        activeTab={1}
        onClick={(_id) => _id}
      />
    </div>
  ),
};
