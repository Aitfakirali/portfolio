import { fireEvent, render, screen } from '@testing-library/react';

import { InputPassword } from '../InputPassword';

describe('input password', () => {
  it('should render', () => {
    render(<InputPassword data-testid='input password' />);
    expect(screen.getByTestId('input password')).toBeInTheDocument();
  });

  it('Should toggle password visibility', () => {
    const { getByRole, getByTestId } = render(
      <InputPassword data-testid='input password' />,
    );

    const inputElement = getByTestId('input password');
    fireEvent.click(getByRole('button'));
    expect(inputElement).toHaveAttribute('type', 'text');
    fireEvent.click(getByRole('button'));
    expect(inputElement).toHaveAttribute('type', 'password');
  });
});
