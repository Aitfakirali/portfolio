import { render, screen } from '@testing-library/react';

import { Container } from '../Container';

describe('Container', () => {
  it('should render', () => {
    render(
      <Container className='h-56 bg-gray-200' data-testid='container'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          explicabo, obcaecati omnis iusto labore non officia illum odit quod
          harum adipisci, amet aperiam quos magni molestias aliquam vel neque
          quis!
        </p>
      </Container>,
    );

    expect(screen.getByTestId('container')).toBeInTheDocument();
  });
});
