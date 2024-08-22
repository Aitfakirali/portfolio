import { render, screen } from '@testing-library/react';

import { CardTag } from '../CardTag';

describe('Card recap', () => {
  it('Should render', () => {
    render(
      <CardTag badgeLabel='1 437 493 Dhs' title='Total Épargne constituée' />,
    );
    expect(screen.getByText('Total Épargne constituée')).toBeInTheDocument();
  });
});
