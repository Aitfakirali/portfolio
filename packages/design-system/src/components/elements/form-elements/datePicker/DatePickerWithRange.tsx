import { Menu, Transition } from '@headlessui/react';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import fr from 'date-fns/locale/fr';
import parse from 'date-fns/parse';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import React, { ChangeEventHandler, useEffect } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';

import { useCloseOnEscAndClickOutside } from '../../../../hooks';

setDefaultOptions({
  locale: fr,
});

import { CustomCaption } from './SharedComponent';
import { theme } from './theme';
import { IPropsSuffixCalendar, RangeDatePickerProps } from './types';
import { dateFormatterRange } from './utils';
import { Input } from '../input/Input';
import { Button } from '../../button/Button';
import { Icon } from '../../icon/Icon';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils';
interface RenderFooterProps {
  /**
   * Function to set the open state of the component.
   */
  setOpen: (val: boolean) => void;
  /**
   * Function called when a day is selected.
   * @param {DateRange} val - The selected day value.
   */
  handleDaySelect: (val?: DateRange) => void;
  /**
   * Function called when a day is selected inside picker don't affect value.
   * @param {DateRange} val - The selected day value.
   */
  SetselectedDateRange: (val?: DateRange) => void;
  /**
   * The selected from datepicker.
   */
  selectedDate?: DateRange;
  /**
   * The selected value.
   */
  value?: DateRange;
  /**
   * The variant of the component.
   */
  variant: keyof typeof theme;
}

const RenderFooter: React.FC<RenderFooterProps> = ({
  handleDaySelect,
  selectedDate,
  variant = 'default',
}) => {
  return (
    <div className={theme[variant]?.renderFooter?.container}>
      <Button
        onClick={() => handleDaySelect(selectedDate)}
        size='medium'
        className={theme[variant]?.renderFooter?.buttons?.confirm}
        data-testid='confirmer-date'
      >
        <Text
          variant='text-base/Semibold'
          className={theme[variant]?.renderFooter?.buttons?.confirmText}
        >
          Confirmer
        </Text>
      </Button>
    </div>
  );
};
/**
 * CustomCaption
 */

export const SuffixCalendar = ({
  onClick,
  variant = 'default',
  disabled = false,
  onResetClick,
  filled,
}: IPropsSuffixCalendar) => {
  return disabled ? (
    <Icon
      id='calendar'
      className={theme[variant]?.textInput?.DisabledsuffixIcone}
    />
  ) : !disabled && filled ? (
    <Icon
      id='close'
      className={theme[variant]?.textInput?.resetIcon}
      onClick={onResetClick}
    />
  ) : (
    <Icon
      onClick={onClick}
      id='calendar'
      className={theme[variant]?.textInput?.suffixIcone}
    />
  );
};

export const DatePickerWithRange: React.FC<RangeDatePickerProps> = ({
  label,
  onChange,
  onReset,
  value,
  variant = 'default',
  disabled = false,
  placeholder = 'DD/MM/YYYY-DD/MM/YYYY',
  minDate,
  maxDate,
  errorMessage,
  hasError,
  className,
  ...rest
}) => {
  const [open, setOpen] = React.useState<boolean>();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [selectedDateRange, setSelectedDateRange] = React.useState<
    DateRange | undefined
  >(() => value);
  const disabledDays = maxDate ? { after: maxDate } : undefined;
  const refDatePicker = useCloseOnEscAndClickOutside(() => setOpen(false));

  const handleInputChangerange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const regex = /^[0-9/-]*$/;
    // const regex =
    //   /^(?:\d{0,2}(?:\/\d{0,2}(?:\/\d{0,4}(?:-\d{0,2}(?:\/\d{0,2}(?:\/\d{0,4})?)?)?)?)?)?$/;

    const inputValue = e.currentTarget.value;
    let formattedValue = inputValue;

    if (!regex.test(inputValue)) {
      setInputValue(formattedValue);
      return;
    }

    if (regex.test(inputValue)) {
      formattedValue = dateFormatterRange(formattedValue);
      setInputValue(formattedValue);
      if (formattedValue) {
        const [startDateString, endDateString] = formattedValue.split('-');
        const startDate = parse(startDateString, 'dd/MM/yyyy', new Date());
        const endDate = parse(endDateString, 'dd/MM/yyyy', new Date());
        if (
          isValid(startDate) &&
          startDate.getFullYear().toString().length === 4
        ) {
          if (
            isValid(endDate) &&
            endDate.getFullYear().toString().length === 4
          ) {
            onChange({ from: startDate, to: endDate });
            setSelectedDateRange({ from: startDate, to: endDate });
            return;
          }
          if (!endDateString) {
            setSelectedDateRange({ from: startDate, to: undefined });
            onChange({ from: startDate, to: undefined });
          }
        } else {
          onChange(undefined);
          setSelectedDateRange(undefined);
        }
      } else {
        onChange(undefined);
        setSelectedDateRange(undefined);
      }
    }
  };
  const handleDaySelect = (date?: DateRange) => {
    onChange(date);
    setSelectedDateRange(date);
    if (date?.from && !date?.to) {
      setInputValue(format(date.from, 'dd/MM/yyyy') + '-');
      setOpen(false);
    } else if (date?.from && date?.to) {
      setInputValue(
        format(date.from, 'dd/MM/yyyy') + '-' + format(date.to, 'dd/MM/yyyy'),
      );
      setOpen(false);
    } else {
      setInputValue('');
    }
  };
  useEffect(() => {
    if (value?.from && !value?.to) {
      setInputValue(format(value.from, 'dd/MM/yyyy') + '-');
    } else if (value?.from && value?.to) {
      setInputValue(
        format(value.from, 'dd/MM/yyyy') + '-' + format(value.to, 'dd/MM/yyyy'),
      );
    } else {
      setInputValue('');
    }
  }, [value?.from, value?.to]);

  return (
    <>
      <div
        className={vclsx(
          'w-full flex-row items-center justify-items-start',
          className,
        )}
        ref={refDatePicker}
      >
        <div
          onClick={() => {
            if (!disabled) {
              setOpen(!open);
            }
          }}
          data-testid='calendar-icon'
        >
          <Input
            label={label}
            disabled={disabled}
            onChange={handleInputChangerange}
            hasError={hasError}
            errorMessage={errorMessage}
            suffix={
              <SuffixCalendar
                variant={variant}
                disabled={disabled}
                onClick={() => setOpen(!open)}
                filled={!!inputValue}
                onResetClick={(e) => {
                  onReset?.();
                  e.stopPropagation();
                  setSelectedDateRange(undefined);
                  onChange(undefined);
                  setInputValue('');
                }}
              />
            }
            placeholder={placeholder}
            value={inputValue}
            data-testid='buttonDatepicker'
            {...rest}
          />
        </div>
        <Menu>
          <Transition
            show={open && !disabled}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className={theme[variant]?.datePicker?.container}>
              <Menu.Items static>
                <DayPicker
                  key={value?.from?.getDay() ?? value?.to?.getDay()}
                  fromDate={minDate}
                  disabled={disabledDays}
                  mode='range'
                  selected={selectedDateRange}
                  defaultMonth={value?.from}
                  classNames={{ ...theme[variant]?.datePicker?.component }}
                  locale={fr}
                  components={{
                    Caption: CustomCaption,
                  }}
                  onSelect={setSelectedDateRange}
                  footer={
                    <RenderFooter
                      SetselectedDateRange={setSelectedDateRange}
                      selectedDate={selectedDateRange}
                      value={value}
                      handleDaySelect={handleDaySelect}
                      setOpen={setOpen}
                      variant={variant}
                    />
                  }
                />
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>
    </>
  );
};
