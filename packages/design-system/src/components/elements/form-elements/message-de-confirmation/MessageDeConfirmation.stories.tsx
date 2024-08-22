import type { Meta, StoryObj } from '@storybook/react';

import { MessageDeConfirmation } from './MessageDeConfirmation';

const meta: Meta<typeof MessageDeConfirmation> = {
  title: 'components/Message De Confirmation',
  component: MessageDeConfirmation,
};
export default meta;
type Story = StoryObj<typeof MessageDeConfirmation>;

export const MessageConfirmation: Story = {
  args: {
    image: '/images/Saly-26.png',
    title: 'La déclaration de votre client a bien été prise en compte.',
    description:
      'La procédure sélectionnée sera validée dans les plus brefs délais.',
  },
  render: (args) => {
    const _link = {
      src: '/',
      title: 'title',
      target: '_self',
    };
    return (
      <div className='mx-auto flex h-screen max-w-[648px] items-center justify-center'>
        <MessageDeConfirmation {...args} link={_link} />
      </div>
    );
  },
};
