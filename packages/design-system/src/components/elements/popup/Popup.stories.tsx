import { Meta, StoryObj } from '@storybook/react';

import { Popup } from './Popup';
import { Container } from '../container/Container';
import { Heading } from '../Heading/Heading';
import { Text } from '../typography/Text';

// eslint-disable-next-line
const meta: Meta<typeof Popup> = {
  title: 'primitives/Popup',
  component: Popup,
} satisfies Meta<typeof Popup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    isShown: true,
    heading: (
      <div className='p-4'>
        <Heading>Title</Heading>
      </div>
    ),
    variant: 'slideLeft',
    children: (
      <>
        <hr />
        <Container className='w-80 py-4'>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            dignissimos maxime deserunt eligendi magnam asperiores ducimus
            explicabo error. Distinctio illo qui quae quos cumque impedit porro
            doloremque ducimus ullam temporibus.
          </Text>
        </Container>
      </>
    ),
  },
} satisfies Story;
