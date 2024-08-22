import { render, screen } from '@testing-library/react';

import { Radio } from '../Radio';

describe('Radio', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(<Radio onChange={handleChange} label='Radio Button' />);

    expect(screen.getByText('Radio Button')).toBeInTheDocument();
  });
});
