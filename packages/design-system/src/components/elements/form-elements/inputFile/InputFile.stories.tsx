import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { InputFile } from './InputFile';
import { InputFileProps } from './types';
const meta: Meta<typeof InputFile> = {
  title: 'Form elements/InputFile',
  component: InputFile,
};

export default meta;

type Story = StoryObj<typeof InputFile>;

const Template = ({ ...args }: InputFileProps) => {
  return (
    <div className='w-full'>
      <InputFile {...args} />
    </div>
  );
};
export const Primary: Story = {
  args: {
    label: 'Label',
    documentTypes: [
      { value: 'Devis', label: 'Devis' },
      { value: 'Contrat', label: 'Contrat' },
      { value: 'Voiture', label: 'Voiture' },
    ],
  },
  render: ({ ...args }) => {
    return <Template {...args} />;
  },
};

export const WithDefaultFiles: Story = {
  args: {
    label: 'Label',
    accept: 'application/pdf',
    documentTypes: [
      { value: 'Devis', label: 'Devis' },
      { value: 'Contrat', label: 'Contrat' },
      { value: 'Voiture', label: 'Voiture' },
    ],
    defaultValue: [
      {
        name: 'IMG-20230524-WA0007.jpg',
        type: 'image',
        documentType: 'Contrat',
        file: 'https://www.orimi.com/pdf-test.pdf',
      },
    ],
  },
  render: ({ ...args }) => {
    return <Template {...args} />;
  },
};
