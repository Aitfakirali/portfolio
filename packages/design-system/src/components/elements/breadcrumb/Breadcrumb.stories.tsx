import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Breadcrumb } from './Breadcrumb';

const meta = {
  title: 'primitives/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

const pages = [
  { id: '1', name: 'Projects', href: '#', current: false },
  { id: '2', name: 'Project Nero', href: '#', current: false },
  {
    id: '3',
    name: 'Project Nero - 1.0',
    href: '#',
    current: false,
  },
  {
    id: '4',
    name: 'Project Nero - 1.0 - 1.1',
    href: '#',
    current: false,
  },
  {
    id: '5',
    name: 'Project Nero - 1.0 - 1.1 - 1.2',
    href: '#',
    current: true,
  },
];

export const Primary = {
  args: {
    variant: 'default',
    pages,
  },
  argTypes: {
    variant: {
      defaultValue: 'default',
      control: { type: 'select' },
      options: ['default'],
    },
    homeUrl: {
      defaultValue: '#',
      control: { type: 'text' },
    },
    showLimit: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} satisfies Story;

export const BreadcrumbWithLimit = {
  render: () => {
    return <Breadcrumb pages={pages} showLimit={true} />;
  },
} satisfies Story;
