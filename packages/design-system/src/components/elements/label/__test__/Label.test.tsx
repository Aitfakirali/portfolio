import { render, screen } from '@testing-library/react';

import { Label } from '../Label';

describe('Label', () => {
  it('should render', () => {
    render(<Label>Label</Label>);

    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('should render with variant', () => {
    render(<Label variant='text-sm/Bold'>Label</Label>);

    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});
