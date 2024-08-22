import { render, screen } from '@testing-library/react';

import { Input } from '../Input';

describe('Input', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(<Input onChange={handleChange} placeholder='Name' />);

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });
});
