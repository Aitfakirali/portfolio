import type { Meta, StoryObj } from '@storybook/react';
import parse from 'date-fns/parse';
import { useState } from 'react';

import { DatePicker } from './DatePicker';
import { DatePickerProps } from './types';

const meta: Meta<typeof DatePicker> = {
  title: 'Form elements/DatePicker',
  component: DatePicker,
};
export default meta;
type Story = StoryObj<typeof DatePicker>;
const Template = ({ ...args }: DatePickerProps) => {
  const [selected, setSelected] = useState<Date | undefined>(args?.value);
  return (
    <>
      <DatePicker
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
      <div>{'date' + selected}</div>
    </>
  );
};
export const DatePickerMaxDate: Story = {
  args: {
    value: new Date(),
    maxDate: parse('20/07/2023', 'dd/MM/yyyy', new Date()),
    label: 'datepicker1',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
export const DatePickerSimple: Story = {
  args: {
    disabled: false,
    label: 'datepicker1',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
export const DatePickerMinDate: Story = {
  args: {
    minDate: parse('20/06/2023', 'dd/MM/yyyy', new Date()),
    label: 'datepicker1',
    hasError: false,
    errorMessage: 'youssef',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const DatePickerDisabled: Story = {
  args: {
    minDate: parse('20/06/2023', 'dd/MM/yyyy', new Date()),
    disabled: true,
    label: 'datepicker1',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
