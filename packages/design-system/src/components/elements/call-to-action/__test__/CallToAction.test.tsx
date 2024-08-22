import { render, screen } from '@testing-library/react';

import { CallToAction } from '../CallToAction';

describe('Breadcrumb component', () => {
  it('should render the component', () => {
    render(<CallToAction title='Action 1' />);
  });

  it('should render the component with variant base', () => {
    render(<CallToAction title='Action 1' data-testid='action' />);
    const element = screen.getByTestId('action');
    expect(element).toHaveClass('shadow-md', 'hover:shadow-lg');
  });
});
