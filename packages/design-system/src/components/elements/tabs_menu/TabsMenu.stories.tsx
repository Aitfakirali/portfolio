import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { TabsMenu } from './TabsMenu';

const meta: Meta<typeof TabsMenu> = {
  title: 'Components/TabsMenu',
  component: TabsMenu,
};

const tabs = [
  {
    id: 1,
    title: 'Affectations',
    number: 150,
  },
  {
    id: 2,
    title: 'Suivi de dossiers',
    number: 230,
  },
  {
    id: 3,
    title: 'Habilitation CRC',
    number: 0,
  },
  {
    id: 4,
    title: 'Reporting',
    number: 0,
  },
];

export default meta;
type Story = StoryObj<typeof TabsMenu>;

const Template = (args: React.ComponentProps<typeof TabsMenu>) => {
  const [activeTab, setActiveTab] = useState(args.activeTab);

  useEffect(() => {
    setActiveTab(args.activeTab);
  }, [args.activeTab]);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <TabsMenu
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
      <TabsMenu variant='default' tabs={tabs} activeTab={1} />
      <p>Table Tabs</p>
      <TabsMenu variant='table' tabs={tabs} activeTab={1} />
    </div>
  ),
};
