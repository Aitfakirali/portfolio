import { render, screen } from '@testing-library/react';

import { Toggle } from '../Toggle';

describe('Toggle', () => {
  const onChange = jest.fn();

  it('should render the toggle', () => {
    render(<Toggle onChange={onChange} />);

    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('the toggle should be disabled', () => {
    render(<Toggle disabled={true} onChange={onChange} />);

    expect(screen.getByRole('switch')).toHaveClass('cursor-not-allowed');
  });

  it('the toggle should be checked', () => {
    render(<Toggle onChange={onChange} checked={true} />);

    expect(screen.getByRole('switch')).toHaveClass('bg-success-600');
  });
});
