import { render, screen } from '@testing-library/react';

import { CardImageLink } from '../CardImageLink';

describe('CardImageLink', () => {
  it('should render', () => {
    render(
      <CardImageLink
        image={{
          src: 'https://picsum.photos/200/300',
          width: 200,
          height: 300,
          alt: 'hello',
        }}
        title='Prospection'
        description='Placeholder text'
        link={{
          href: 'https://www.google.com',
          target: '_self',
        }}
        // link_alt='Découvrir'
      />,
    );

    expect(screen.getByText('Découvrir')).toBeInTheDocument();
  });
});
