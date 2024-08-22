import { render, screen } from '@testing-library/react';

import { BarChart } from '../Barchart';

describe('Card recap', () => {
  it('Should render', () => {
    render(
      <BarChart
        height={250}
        width={400}
        data={[
          {
            'Épargne constituée': '200.2',
            'Cumul versements': '100.4',
            date: '2019-03-09',
          },
          {
            'Épargne constituée': '72.2',
            'Cumul versements': '63.4',
            date: '2020-01-09',
          },
          {
            'Épargne constituée': '100.2',
            'Cumul versements': '10.4',
            date: '2022-01-09',
          },
          {
            'Épargne constituée': '200.2',
            'Cumul versements': '100.4',
            date: '2023-03-09',
          },
        ]}
      />,
    );
    expect(screen.getByText('Épargne constituée')).toBeInTheDocument();
  });
});
