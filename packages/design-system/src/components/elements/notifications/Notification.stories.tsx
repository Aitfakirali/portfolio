import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  args: {
    variant: 'info',
    title: 'This is a title',
    message:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    onClose: undefined,
  },
};

const notifications: React.ComponentProps<typeof Notification>[] = [
  {
    variant: 'default',
    message: 'lorem ipsum dolor sit amet',
    title: 'Default',
    link: '#',
    onClose: () => alert('close'),
  },
  {
    variant: 'success',
    message: 'lorem ipsum dolor sit amet',
    title: 'Success',
    link: '#',
    onClose: () => alert('close'),
  },
  {
    variant: 'info',
    message:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    title: 'Info',
    link: '#',
    onClose: () => alert('close'),
  },
  {
    variant: 'warning',
    message: 'lorem ipsum dolor sit amet',
    title: 'Warning',
    link: '#',
    onClose: () => alert('close'),
  },
  {
    variant: 'error',
    message: 'lorem ipsum dolor sit amet',
    title: 'Error',
    link: '#',
    onClose: () => alert('close'),
  },
];

export const Variants: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {notifications.map((notification, index) => (
        <Notification key={index} {...notification} />
      ))}
    </div>
  ),
};

export const WithDismiss: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {notifications.map((notification, index) => (
        <Notification key={index} {...notification} link={undefined} />
      ))}
    </div>
  ),
};

export const WithLink: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {notifications.map((notification, index) => (
        <Notification key={index} {...notification} onClose={undefined} />
      ))}
    </div>
  ),
};

export const WithNoActions: Story = {
  render: () => (
    <div className='flex flex-col gap-8'>
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          {...notification}
          onClose={undefined}
          link={undefined}
        />
      ))}
    </div>
  ),
};
