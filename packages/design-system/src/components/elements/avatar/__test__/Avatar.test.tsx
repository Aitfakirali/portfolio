import { render, screen } from '@testing-library/react';

import { Avatar } from '../Avatar';

describe('test Avatar component', () => {
  it('should render the component', () => {
    render(<Avatar />);
  });

  it('should render an image by default', () => {
    render(<Avatar data-testid='image' />);
    const image = screen.getByTestId('image');
    expect(image.tagName).toEqual('IMG');
  });

  it('should render an svg', () => {
    render(<Avatar variant='placeholder' data-testid='image' />);
    const svgElement = document.querySelector('svg');

    expect(svgElement).toBeInTheDocument();
  });

  it('should render a span', () => {
    render(<Avatar variant='initials' />);
    const spanElement = document.querySelector('span');

    expect(spanElement).toBeInTheDocument();
  });
});
