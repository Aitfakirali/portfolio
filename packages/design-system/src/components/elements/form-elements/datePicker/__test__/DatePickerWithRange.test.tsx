import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { DateRange } from 'react-day-picker';
import { act } from 'react-dom/test-utils';

import { DatePickerWithRange } from '../DatePickerWithRange';

test('DatePickerWithRange renders correctly and selects a date range', async () => {
  const onChange = jest.fn();
  const selectedRange = {
    from: new Date(2023, 5, 23), // June 23, 2023
    to: new Date(2023, 5, 25), // June 25, 2023
  };
  render(
    <DatePickerWithRange
      label='Select a date range'
      onChange={onChange}
      value={selectedRange}
      variant='default'
      disabled={false}
      placeholder='DD/MM/YYYY-DD/MM/YYYY'
      minDate={new Date(2023, 0, 1)} // January 1, 2023
      maxDate={new Date(2023, 11, 31)} // December 31, 2023
      hasError={false}
      errorMessage=''
      className=''
    />,
  );

  await act(async () => {
    // Open the calendar
    fireEvent.click(screen.getByTestId('calendar-icon'));
  });

  expect(screen.getByText('juin 2023')).toBeInTheDocument();
});

describe('DatePicker range autocomplete / - ', () => {
  test('should format input value correctly when typing a date', () => {
    const setDate = (date?: DateRange) => {
      date;
    };
    render(
      <DatePickerWithRange
        label='Date'
        onChange={setDate}
        placeholder='test'
      />,
    );

    const input = screen.getByTestId('buttonDatepicker') as HTMLInputElement;
    fireEvent.click(input);
    const previousMonthButton = screen.getByTestId('buttonNavprevious');
    const nextMonthButton = screen.getByTestId('buttonNavnext');
    const iconeDatepicker = screen.getByTestId('buttonDatepicker');
    fireEvent.click(previousMonthButton);
    fireEvent.click(nextMonthButton);
    const confirmerDate = screen.getByTestId('confirmer-date');
    fireEvent.click(confirmerDate);
    fireEvent.click(iconeDatepicker);
    fireEvent.change(input, { target: { value: '26/03/1999-27/03/1999' } });

    expect(input?.value).toBe('26/03/1999-27/03/1999');
  });
});
