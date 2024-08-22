import { Meta, StoryObj } from '@storybook/react';

import { CallToAction } from './CallToAction';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line
const meta: Meta<typeof CallToAction> = {
  title: 'Components/CallToAction',
  component: CallToAction,
};

export default meta;
type Story = StoryObj<typeof CallToAction>;

export const Primary: Story = {
  args: {
    title: 'Ajouter un contrat',
    icon: 'element-plus',
  },
};

const elements = [
  {
    title: 'Ajouter un contrat',
    icon: 'element-plus',
  },
  {
    title: 'Suivre mes remboursements',
    icon: 'status-up',
  },
  {
    title: 'Gérer mon contrat',
    icon: 'edit-2',
  },
];

export const Example = () => {
  return (
    <div className='max-w-sm space-y-4'>
      {elements.map((el) => (
        <CallToAction key={el.title} {...el} />
      ))}
    </div>
  );
};
