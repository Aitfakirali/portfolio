import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { RadioChoiceIconGroup } from './RadioChoiceIconGroup';

const meta: Meta<typeof RadioChoiceIconGroup> = {
  title: 'Form elements/RadioChoiceIconGroup',
  component: RadioChoiceIconGroup,
};

export default meta;

type Story = StoryObj<typeof RadioChoiceIconGroup>;

const Template = ({
  ...args
}: React.ComponentProps<typeof RadioChoiceIconGroup>) => {
  const [selected, setSelected] = useState(args.value);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
  };
  return (
    <RadioChoiceIconGroup
      {...args}
      className='grid gap-3'
      value={selected}
      onChange={handleChange}
    />
  );
};

export const Primary: Story = {
  args: {
    options: [
      {
        value: '1',
        label: 'Mise à disposition',
        description:
          "Vous pouvez récupérer le montant d'indemnisation dans une agence bancaire",
        image: '/bank.svg',
      },
      {
        value: '2',
        label: 'Paiement par chèque ',
        description:
          "Vous pouvez récupérer un chèque contenant le montant de l'indemnisation",
        image: '/cheque.svg',
      },
      {
        value: '3',
        label: 'Virement',
        description:
          'Votre indemnisation vous sera versée sur votre compte bancaire directement',
        image: '/virement.svg',
      },
    ],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
