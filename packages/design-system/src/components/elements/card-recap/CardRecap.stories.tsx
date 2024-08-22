import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CardRecap } from './CardRecap';
import { Document } from '../form-elements/inputFile/types';

const items = [
  { label: 'Ville du sinistre', value: 'Casablanca' },
  { label: 'Nature des dégâts', value: 'Léger' },
  { label: 'Date du sinistre', value: '22 février 2023 ' },
  { label: 'Heure du sinistre', value: 'Heure du sinistre' },
];

const files: Document[] = [
  {
    name: 'fileName.png',
    type: 'image',
    documentType: 'Contrat',
    file: 'https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
  },
  {
    name: 'anotherFileName.pdf',
    type: 'document',
    documentType: 'Devis',
    file: 'https://www.orimi.com/pdf-test.pdf',
  },
];

const meta = {
  title: 'primitives/CardRecap',
  component: CardRecap,
} satisfies Meta<typeof CardRecap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cardTitle: 'Declaration',
    cardTitleIcon: 'smart-car',
    cardSubtitle: 'Collision',
    cardElements: items,
    badge: 'Contrat',
    files: files,
  },
  render: (args) => {
    return <CardRecap {...args} />;
  },
};
