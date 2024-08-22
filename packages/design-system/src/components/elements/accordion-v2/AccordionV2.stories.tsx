import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AccordionV2 } from './AccordionV2';
import { Badge } from '../badge/Badge';
import { Text } from '../typography/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line
const meta: Meta<typeof AccordionV2> = {
  title: 'Components/AccordionV2',
  component: AccordionV2,
};

export default meta;
type Story = StoryObj<typeof AccordionV2>;

const accordionContent = [
  {
    id: '1',
    title: <span>Dossier N° 5756487</span>,
    caption: (
      <p>
        <p>Déposé le 12 Mars 2023</p>
        <span>ERRAZI Mohammed</span>
        <Text variant='text-base/Semibold'>
          <span className='text-primary'>Montant remboursé</span> : 870.00 Dhs
        </Text>
      </p>
    ),
    badge: <Badge label='Réglé' fill variant='success' />,
    content: (
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    ),
  },
  {
    id: '2',
    title: <span>Situation au 31/12/2023</span>,
    icon: 'Police',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis
        commodo. Aenean et tortor at risus viverra adipiscing. Lacus vestibulum
        sed arcu non odio euismod lacinia at. Lobortis scelerisque fermentum dui
        faucibus in ornare quam.
      </p>
    ),
  },
  {
    id: '3',
    title: <span>Autres indications</span>,
    icon: 'Police',
    content: (
      <p>
        Aenean et tortor at risus viverra adipiscing. Lacus vestibulum sed arcu
        non odio euismod lacinia at. Lobortis scelerisque fermentum dui faucibus
        in ornare quam.
      </p>
    ),
  },
];

export const Primary: Story = {
  args: {
    allowMultiple: true,
    items: accordionContent,
  },
};

export const AccordionMultipleOpener = () => {
  return (
    <>
      <AccordionV2 allowMultiple={false} items={accordionContent} />
    </>
  );
};
