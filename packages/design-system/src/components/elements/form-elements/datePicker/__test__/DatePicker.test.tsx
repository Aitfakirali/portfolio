import { fireEvent, render, screen } from '@testing-library/react';

import { DatePicker } from '../DatePicker';

test('DatePicker renders correctly and selects a date', async () => {
  const onChange = jest.fn();
  const selectedDate = new Date(2023, 5, 23); // June 23, 2023
  render(
    <DatePicker
      label='Select a date'
      onChange={onChange}
      value={selectedDate}
      variant='default'
      disabled={false}
      placeholder='DD/MM/YYYY'
      minDate={new Date(2023, 0, 1)} // January 1, 2023
      maxDate={new Date(2023, 11, 31)} // December 31, 2023
      hasError={false}
      errorMessage=''
      className=''
    />,
  );

  const OpenClickIcon = screen.getByTestId('buttonDatepicker');
  fireEvent.click(OpenClickIcon);

  expect(screen.getByText('juin 2023')).toBeInTheDocument();
});

describe('DatePicker', () => {
  test('should format input value correctly when typing a date', () => {
    const setDate = (date?: Date) => {
      date;
    };
    render(
      <DatePicker
        label='Date'
        onChange={setDate}
        placeholder='test'
        value={new Date()}
      />,
    );
    const input = screen.getByTestId('buttonDatepicker') as HTMLInputElement;
    fireEvent.click(input);
    const previousMonthButton = screen.getByTestId('buttonNavprevious');
    const nextMonthButton = screen.getByTestId('buttonNavnext');
    const iconeDatepicker = screen.getByTestId('buttonDatepicker');
    fireEvent.click(previousMonthButton);
    fireEvent.click(nextMonthButton);
    const buttonJour14 = screen.getByText('14');
    fireEvent.click(buttonJour14);
    fireEvent.click(iconeDatepicker);
    fireEvent.change(input, { target: { value: '26031999' } });
    expect(input?.value).toBe('26/03/1999');
  });
});
