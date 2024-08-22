import { render, screen } from '@testing-library/react';

import { Slider } from '../Slider';

const Element = () => {
  return (
    <Slider
      data-testid='slider_1928'
      elements={[
        {
          date: new Date('2020-10-20'),
          versementExceptionnel: 1000,
          versementPeriodique: 1000,
          versementTotal: 2000,
        },
        {
          date: new Date('2020-10-20'),
          versementExceptionnel: 1000,
          versementPeriodique: 1000,
          versementTotal: 2000,
        },
        {
          date: new Date('2020-04-20'),
          versementExceptionnel: 1000,
          versementPeriodique: 1000,
          versementTotal: 2000,
        },
      ]}
    />
  );
};

describe('TabsMenu', () => {
  it('should render the Slider', () => {
    render(<Element />);
    // console.log(document.body.innerHTML);
    expect(screen.getByTestId('slider_1928')).toBeInTheDocument();
  });
});
