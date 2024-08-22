import { render, screen } from '@testing-library/react';

import { Badge } from '../Badge';

describe('Breadcrumb component', () => {
  it('should render the component', () => {
    render(<Badge label='Badge' />);
  });

  it('should render the component with variant base', () => {
    render(<Badge label='Label' variant='base' data-testid='badge' />);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('bg-gray-100', 'text-gray-700');
  });

  it('should render the component with variant primary', () => {
    render(<Badge label='Label' variant='primary' data-testid='badge' />);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('bg-primary-50 text-primary-500');
  });

  it('should render a link component', () => {
    render(<Badge label='Label' variant='base' href='/' data-testid='link' />);
    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
