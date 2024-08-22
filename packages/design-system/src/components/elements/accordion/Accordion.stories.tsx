import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Accordion } from './Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordionContent = [
  {
    id: '1',
    title: <span>Element 1</span>,
    caption: 'Devis en attente d’approbation du client',
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
    title: <span>Element 2</span>,
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
    title: <span>Element 3</span>,
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
      <Accordion allowMultiple={false} items={accordionContent} />
    </>
  );
};
