import type { Meta, StoryObj } from '@storybook/react';
import parse from 'date-fns/parse';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { DatePickerWithRange } from './DatePickerWithRange';
import { RangeDatePickerProps } from './types';

const meta: Meta<typeof DatePickerWithRange> = {
  title: 'Form elements/DatePickerWithRange',
  component: DatePickerWithRange,
};
export default meta;
type Story = StoryObj<typeof DatePickerWithRange>;
const Template = ({ ...args }: RangeDatePickerProps) => {
  const [selected, setSelected] = useState<DateRange | undefined>(args.value);
  return (
    <>
      <DatePickerWithRange
        errorMessage={args?.errorMessage}
        onChange={setSelected}
        hasError={args?.hasError}
        value={selected}
        minDate={args?.minDate}
        maxDate={args?.maxDate}
        disabled={args.disabled}
        label={args?.label}
        placeholder={args.placeholder}
      />
      <div className='mt-96'>
        {'date' + selected?.from?.toDateString() + selected?.to?.toDateString()}
      </div>
    </>
  );
};
export const DatePickerRangeSimple: Story = {
  args: {
    maxDate: parse('20/06/2023', 'dd/MM/yyyy', new Date()),
    label: 'DatePicker max date',
    hasError: false,
    errorMessage: 'required',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
export const DatePickerRangeMaxDate: Story = {
  args: {
    maxDate: parse('20/06/2023', 'dd/MM/yyyy', new Date()),
    label: 'DatePicker max date',
    hasError: false,
    errorMessage: 'required',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const DatePickerRangeMinDate: Story = {
  args: {
    minDate: parse('20/06/2023', 'dd/MM/yyyy', new Date()),
    label: 'DatePicker min date',
    hasError: false,
    errorMessage: 'required',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const DatePickerRangeDisabled: Story = {
  args: {
    value: {
      to: parse('20/06/2023', 'dd/MM/yyyy', new Date()),
      from: parse('25/06/2023', 'dd/MM/yyyy', new Date()),
    },
    label: 'DatePicker Disabled',
    disabled: true,
    hasError: false,
    errorMessage: 'required',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const DatePickerRangeWithInitialState: Story = {
  args: {
    value: {
      to: parse('20/06/2023', 'dd/MM/yyyy', new Date()),
      from: parse('25/06/2023', 'dd/MM/yyyy', new Date()),
    },
    label: 'DatePicker Disabled',

    hasError: false,
    errorMessage: 'required',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
