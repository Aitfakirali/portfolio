import { render, screen } from '@testing-library/react';

import { RadioCard } from '../RadioCard';

describe('RadioCard', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <RadioCard
        value='1'
        label='label'
        name='radio-icon'
        onChange={handleChange}
      />,
    );

    expect(screen.getByText('label')).toBeInTheDocument();
  });
});
