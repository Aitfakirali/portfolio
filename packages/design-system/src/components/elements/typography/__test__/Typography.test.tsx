import { render, screen } from '@testing-library/react';

import { Text } from '../Text';

describe('Button', () => {
  it('should render', () => {
    render(<Text>This is a parapgraph</Text>);
    expect(screen.getByText('This is a parapgraph')).toBeInTheDocument();
  });
});
