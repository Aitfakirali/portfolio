import { render, screen } from '@testing-library/react';

import { CardNumbers } from '../Kpi';

describe('KPI', () => {
  it('should render', () => {
    render(
      <CardNumbers
        title='Chiffre d’affaires 2'
        currentAmount={990}
        currentAmountSymbol='K Dhs'
        currentDate='Depuis Janvier'
        prevAmount={930}
        prevAmountSymbol='KDhs'
        prevDate='Même période 2019'
        shipValue={2.4}
        shipType='up'
      />,
    );

    expect(screen.getByText('Chiffre d’affaires 2')).toBeInTheDocument();
  });
});
