import { render, screen } from '@testing-library/react';

import { RadioHtml } from '../RadioHtml';

describe('RadioHtml', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(<RadioHtml onChange={handleChange}>Radio Html</RadioHtml>);

    expect(screen.getByText('Radio Html')).toBeInTheDocument();
  });
});
