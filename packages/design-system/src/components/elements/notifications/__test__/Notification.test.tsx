import { render, screen } from '@testing-library/react';

import { Notification } from '../Notification';

describe('Notification', () => {
  it('should render info the notification', () => {
    render(
      <Notification
        variant='info'
        title='Info'
        message='This is an info message'
      />,
    );

    expect(screen.getByText('Info')).toBeInTheDocument();
    expect(screen.getByText('This is an info message')).toBeInTheDocument();
    expect(screen.getByTestId('notification')).toHaveClass(
      'bg-primary-25 border-primary-300',
    );
  });

  it('should render success the notification', () => {
    render(
      <Notification
        variant='success'
        title='Success'
        message='This is a success message'
      />,
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('This is a success message')).toBeInTheDocument();
    expect(screen.getByTestId('notification')).toHaveClass(
      'bg-success-25 border-success-300',
    );
  });

  it('should render warning the notification', () => {
    render(
      <Notification
        variant='warning'
        title='Warning'
        message='This is a warning message'
      />,
    );

    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('This is a warning message')).toBeInTheDocument();
    expect(screen.getByTestId('notification')).toHaveClass(
      'bg-warning-25 border-warning-300',
    );
  });

  it('should render error the notification', () => {
    render(
      <Notification
        variant='error'
        title='Error'
        message='This is an error message'
      />,
    );

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
    expect(screen.getByTestId('notification')).toHaveClass(
      'bg-error-25 border-error-300',
    );
  });
});
