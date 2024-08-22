import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TimeLineCard } from './TimeLineCard';
import { Button } from '../../button/Button';

const meta: Meta<typeof TimeLineCard> = {
  title: 'TimeLine/TimeLineCard',
  component: TimeLineCard,
};
export default meta;
type Story = StoryObj<typeof TimeLineCard>;

export const primary: Story = {
  args: {
    dateTraitement: '01/01/2010',
    listInfos: [
      {
        libelle: 'Appel Constateur',
        value: '01/01/2010',
        documents: [
          {
            name: 'avatar.png',
            type: 'image',
            documentLabel: 'Photo',
            isNew: false,
            file: '/image/avatar.png',
            documentType: '',
          },
        ],
      },
      {
        libelle: 'Appel Remorquage',
        value: '-',
        actions: ['modify'],
        actionsMapping: {
          modify: (
            <Button variant='text' iconRight='edit-2'>
              Modify
            </Button>
          ),
        },
      },
    ],
    title: 'Assistance',
    state: 'completed',
    isLoading: false,
    hidden: false,
    actions: ['vhr'],
    actionsMapping: {
      vhr: <Button className='mt-2 w-full'>Demand de VHR</Button>,
    },
    userInfo: {
      name: 'Intermédiaire XYZ',
      id: 'Int948274',
      avatar: '/images/avatar.png',
    },
    badge: {
      content: 'Prévu le -- Février 2022',
    },
  },
  render: (args) => <TimeLineCard {...args} />,
};
