import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  it('should render', () => {
    render(<Button variant='primary'>This is a primary button</Button>);

    expect(screen.getByText('This is a primary button')).toBeInTheDocument();
  });

  it('type sould be equal to submit', () => {
    render(
      <Button data-testid='button' type='submit' variant='primary'>
        This is a primary button
      </Button>,
    );

    expect(screen.getByTestId('button').getAttribute('type')).toBe('submit');
  });

  it('should be disabled', () => {
    render(
      <Button
        data-testid='button'
        type='submit'
        disabled={true}
        variant='primary'
      >
        This is a primary button
      </Button>,
    );

    expect(screen.getByTestId('button')).toBeDisabled();
  });

  it('will call onClick', () => {
    const onClick = jest.fn();
    render(
      <Button data-testid='button' onClick={onClick} variant='primary'>
        This is a primary button
      </Button>,
    );

    fireEvent.click(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('will not call onClick when disabled', () => {
    const onClick = jest.fn();
    render(
      <Button
        data-testid='button'
        disabled={true}
        onClick={onClick}
        variant='primary'
      >
        This is a primary button
      </Button>,
    );

    fireEvent.click(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should display icon', () => {
    const { container } = render(
      <Button data-testid='button' iconRight='alert'>
        Button with an icon
      </Button>,
    );

    expect(
      container.querySelector('svg > use')?.getAttribute('href'),
    ).toContain('alert');
  });

  it('should display a link', () => {
    render(
      <Button
        data-testid='link-button'
        href='https://www.google.com'
        target='_self'
      >
        Button as a link
      </Button>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByTestId('link-button').getAttribute('href')).toBe(
      'https://www.google.com',
    );
    expect(screen.getByTestId('link-button').getAttribute('target')).toBe(
      '_self',
    );
  });

  it('link cannot have a disabled state', () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    expect(() => {
      render(
        <Button
          data-testid='link-button'
          href='https://www.google.com'
          target='_self'
          disabled={true}
        >
          Button as a disabled link
        </Button>,
      );
    }).toThrow();
  });
});
