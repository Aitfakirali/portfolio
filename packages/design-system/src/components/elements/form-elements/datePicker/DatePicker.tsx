import { Menu, Transition } from '@headlessui/react';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import parse from 'date-fns/parse';
import fr from 'date-fns/locale/fr';
import React, { ChangeEventHandler } from 'react';
import { DayPicker } from 'react-day-picker';

import { CustomCaption } from './SharedComponent';
import { theme } from './theme';
import { DatePickerProps, IPropsSuffixCalendar } from './types';
import { Input } from '../input/Input';
import { Icon } from '../../icon/Icon';
import { useCloseOnEscAndClickOutside } from '../../../../hooks';
import { vclsx } from '../../../../utils';

/**
 * CustomCaption
 */

export const SuffixCalendar = ({
  onClick,
  variant = 'default',
  disabled = false,
}: IPropsSuffixCalendar) => {
  return disabled ? (
    <Icon
      id='calendar'
      className={theme[variant]?.textInput?.DisabledsuffixIcone}
    />
  ) : (
    <Icon
      onClick={onClick}
      id='calendar'
      className={theme[variant]?.textInput?.suffixIcone}
    />
  );
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  onChange,
  onReset,
  value,
  variant = 'default',
  disabled = false,
  placeholder = 'DD/MM/YYYY',
  minDate,
  maxDate,
  hasError,
  errorMessage,
  className,
}) => {
  const [open, setOpen] = React.useState<boolean>();
  const dateInintial = value ? format(value, 'dd/MM/yyyy') : '';
  const [inputValue, setInputValue] = React.useState<string>(dateInintial);
  const disabledDays = maxDate ? { after: maxDate } : undefined;
  const refDatePicker = useCloseOnEscAndClickOutside(() => setOpen(false));
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const input = e.currentTarget.value;
    const cleanedInput = input.replace(/\D/g, ''); // Remove any non-digit characters
    const formattedInput = formatInput(cleanedInput);
    setInputValue(formattedInput);
    const date = parse(formattedInput, 'dd/MM/yyyy', new Date());
    if (isValid(date)) {
      onChange(date);
    } else {
      onChange(undefined);
    }
  };

  const formatInput = (input: string): string => {
    if (input.length === 0) {
      return ''; // Return an empty string if the input is empty
    }

    let formattedInput = input;

    // Apply the mask "dd/MM/yyyy"
    if (formattedInput.length >= 3) {
      formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(
        2,
      )}`;
    }
    if (formattedInput.length >= 6) {
      formattedInput = `${formattedInput.slice(0, 5)}/${formattedInput.slice(
        5,
      )}`;
    }

    return formattedInput;
  };

  const handleDaySelect = (date: Date | undefined) => {
    onChange(date);
    if (date) {
      setInputValue(format(date, 'dd/MM/yyyy'));
      setOpen(false);
    } else {
      setInputValue('');
    }
  };
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() + 1);

  return (
    <>
      <div
        className={vclsx(
          'w-full flex-row items-center justify-items-start',
          className,
        )}
        ref={refDatePicker}
      >
        <Input
          label={label}
          onChange={handleInputChange}
          disabled={disabled}
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
                onChange(undefined);
                setInputValue('');
              }}
            />
          }
          onClick={() => !disabled && setOpen(!open)}
          placeholder={placeholder}
          value={inputValue}
          data-testid='buttonDatepicker'
        />
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
                  key={value?.getDay()}
                  fromDate={minDate}
                  disabled={disabledDays}
                  mode='single'
                  selected={value}
                  classNames={theme[variant]?.datePicker?.component}
                  defaultMonth={value}
                  locale={fr}
                  components={{
                    Caption: CustomCaption,
                  }}
                  onSelect={handleDaySelect}
                />
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>
    </>
  );
};
