import type { Meta, StoryObj } from '@storybook/react';

import { CardImageLink } from './CardImageLink';
import img1 from './statics/eye.png';
import img2 from './statics/graphs.png';
import img3 from './statics/pen.png';
import img4 from './statics/reload.png';
import { Container } from '../container/Container';
import { TitleWithIcon } from '../typography/TitleWithIcon';

const meta: Meta<typeof CardImageLink> = {
  title: 'components/Card image link',
  component: CardImageLink,
};
export default meta;
type Story = StoryObj<typeof CardImageLink>;

export const Example1: Story = {
  render: () => {
    const _link = {
      src: '/',
      title: 'title',
      target: '_self',
    };

    return (
      <Container>
        <TitleWithIcon iconId='check-circle-2' className='mb-5 text-[#234585]'>
          accès RAPIDE
        </TitleWithIcon>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
          <CardImageLink
            image={{ src: img1 }}
            title='Prospection'
            description='Placeholder text'
            link={_link}
          />
          <CardImageLink
            image={{ src: img2 }}
            title='Prospection'
            description='Placeholder text'
            link={_link}
          />
          <CardImageLink
            image={{ src: img3 }}
            title='Prospection'
            description='Placeholder text'
            link={_link}
          />
          <CardImageLink
            image={{ src: img4 }}
            title='Prospection'
            description='Placeholder text'
            link={_link}
          />
        </div>
      </Container>
    );
  },
};
