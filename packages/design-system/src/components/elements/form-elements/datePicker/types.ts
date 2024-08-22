import { MouseEvent, MouseEventHandler } from 'react';
import { DateRange } from 'react-day-picker';

import { theme } from './theme';
/**
 * Props for the SuffixCalendar component.
 */
export interface IPropsSuffixCalendar {
  /**
   * Function called when the calendar is clicked.
   */
  onClick: MouseEventHandler<SVGSVGElement>;
  /**
   * The variant of the SuffixCalendar.
   */
  variant: keyof typeof theme;
  /**
   * Specifies if the SuffixCalendar is disabled or not.
   */
  disabled: boolean;
  /**
   * Whether the data range has a value
   */
  filled: boolean;
  /**
   * Reset handler
   */
  onResetClick: (e: MouseEvent<SVGSVGElement>) => void;
}

/**
 * Props for the DatePicker component.
 */
export interface DatePickerProps {
  /**
   * The error message to display.
   */
  errorMessage?: string;
  /**
   * Specifies if the DatePicker has an error.
   */
  hasError?: boolean;
  /**
   * The selected date value.
   */
  value?: Date;
  /**
   * Callback function called when the date value changes.
   * @param {Date} date - The selected date.
   */
  onChange: (date?: Date) => void;
  onReset?: () => void;
  /**
   * The label for the DatePicker.
   */
  label?: string;
  /**
   * The variant of the DatePicker.
   */
  variant?: keyof typeof theme;
  /**
   * Specifies if the DatePicker is disabled or not.
   */
  disabled?: boolean;
  /**
   * The minimum selectable date.
   */
  minDate?: Date;
  /**
   * The maximum selectable date.
   */
  maxDate?: Date;
  /**
   * The placeholder text for the DatePicker input.
   */
  placeholder?: string;
  /**
   * ClassName allow you to add styles.
   */
  className?: string;
}

/**
 * Props for the RangeDatePicker component.
 */
export interface RangeDatePickerProps {
  /**
   * The error message to display.
   */
  errorMessage?: string;
  /**
   * Specifies if the RangeDatePicker has an error.
   */
  hasError?: boolean;
  /**
   * The selected date range value.
   */
  value?: DateRange;
  /**
   * Callback function called when the date range value changes.
   * @param {DateRange} dateRange - The selected date range.
   */
  onChange: (dateRange?: DateRange) => void;
  onReset?: () => void;
  /**
   * The label for the RangeDatePicker.
   */
  label?: string;
  /**
   * The variant of the RangeDatePicker.
   */
  variant?: keyof typeof theme;
  /**
   * Specifies if the RangeDatePicker is disabled or not.
   */
  disabled?: boolean;
  /**
   * The minimum selectable date.
   */
  minDate?: Date;
  /**
   * The maximum selectable date.
   */
  maxDate?: Date;
  /**
   * The placeholder text for the RangeDatePicker input.
   */
  placeholder?: string;
  /**
   * ClassName allow you to add styles.
   */
  className?: string;
}
