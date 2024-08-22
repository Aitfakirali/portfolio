import { render, screen } from '@testing-library/react';

import { ToggleLabel } from '../ToggleLabel';

describe('ToggleLabel', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <ToggleLabel
        variant='default'
        label='Toggle Switch'
        onChange={handleChange}
      />,
    );

    expect(screen.getByText('Toggle Switch')).toBeInTheDocument();
  });
});
