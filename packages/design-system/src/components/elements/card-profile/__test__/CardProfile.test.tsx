import { render, screen } from '@testing-library/react';

import { CardProfile } from '../CardProfile';

describe('Card Profile', () => {
  it('should render', () => {
    render(
      <CardProfile
        title={
          <p>
            Prime totale <br /> des contrats en cours
          </p>
        }
        subtitle='derniers 12 mois'
        number='23 049 DH'
      />,
    );

    expect(screen.getByText('derniers 12 mois')).toBeInTheDocument();
  });
});
