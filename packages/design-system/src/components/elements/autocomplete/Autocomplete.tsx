import { Combobox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment, useState } from 'react';

import { autocomplete } from './theme';
import { Icon } from '../icon/Icon';

/**
 * Autocomplete item.
 */
export interface AutocompleteItem {
  /**
   * Item value.
   */
  value: string;
  /**
   * Item label or content.
   */
  content: string;
}

/**
 *
 */
interface AutocompleteProps {
  /**
   * the label of the input element
   */
  label?: string;
  /**
   * indicates if the input has an error state
   */
  hasError?: boolean;
  /**
   * the error message to be shown under the input
   */
  errorMessage?: string;
  /**
   * The list of options that the user could select
   */
  list: AutocompleteItem[];
  /**
   * indiactes which option is selected
   */
  selected?: string;
  /**
   * the callback function to be called when the selected option is being changed
   * @param value string
   * @returns void
   */
  setSelected?: (value: string) => void;
  /**
   * change the appearance of the input element
   */
  variant?: keyof typeof autocomplete;
  /**
   * icon element that indicates the state of option
   */
  iconCheked?: React.ReactNode;
}

/**
 * Autocomplete
 */
export const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  hasError = true,
  errorMessage = '',
  list,
  selected,
  setSelected,
  variant = 'default',
  iconCheked,
  ...rest
}) => {
  const [query, setQuery] = useState<string>('');
  const [localySelectedOption, setLocalySelectedOption] = useState<
    AutocompleteItem | undefined
  >(() => {
    if (selected !== undefined) {
      const selectedItem = list.find((item) => {
        return item.value == selected;
      });
      if (!selectedItem) {
        return undefined;
      }
      const indexOfSelectedItem = list.indexOf(selectedItem ?? null);
      return list[indexOfSelectedItem];
    } else {
      return undefined;
    }
  });

  const filteredList =
    query === ''
      ? list
      : list.filter((item) =>
          item.content
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  /**
   * Handle change.
   */
  const handleChange = (option: AutocompleteItem) => {
    setLocalySelectedOption(option);
    if (setSelected) {
      setSelected(option.value);
    }
  };
  return (
    <div className={clsx(autocomplete[variant].wrapper)} {...rest}>
      {label && <label className={autocomplete[variant]?.label}>{label}</label>}
      <Combobox<AutocompleteItem>
        value={localySelectedOption}
        onChange={handleChange}
      >
        <div
          className={clsx(
            autocomplete[variant].comboboxTrigger.container,
            hasError && autocomplete[variant].comboboxTrigger.containerError,
          )}
        >
          <Combobox.Input
            data-testid='autocomplete-select'
            className={autocomplete[variant].comboboxTrigger.input}
            placeholder={
              localySelectedOption
                ? localySelectedOption.content
                : 'Selectionner'
            }
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button
            className={autocomplete[variant].comboboxTrigger.button}
          >
            {iconCheked ? (
              iconCheked
            ) : (
              <Icon id='chevron-down' width='12' height='12' />
            )}
          </Combobox.Button>
        </div>
        {hasError && (
          <span className='mt-1 inline-block text-xs text-red-500'>
            {errorMessage}
          </span>
        )}
        <Transition
          as={Fragment}
          leave={autocomplete[variant].comboboxOptions.transition.leave}
          leaveFrom={autocomplete[variant].comboboxOptions.transition.leaveFrom}
          leaveTo={autocomplete[variant].comboboxOptions.transition.leaveTo}
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options
            className={autocomplete[variant].comboboxOptions.container}
          >
            {filteredList.length === 0 && query !== '' ? (
              <div
                className={clsx(
                  autocomplete[variant].comboboxOptions.option.default,
                )}
              >
                <span>Nothing found.</span>
              </div>
            ) : (
              filteredList.map((item) => (
                <Combobox.Option
                  key={item.value}
                  className={({ active = true }) => {
                    return clsx(
                      autocomplete[variant].comboboxOptions.option.default,
                      active
                        ? autocomplete[variant].comboboxOptions.option.state
                            .active
                        : autocomplete[variant].comboboxOptions.option.state
                            .inactive,
                    );
                  }}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span>{item.content}</span>
                      {selected ? (
                        <span
                          className={
                            autocomplete[variant].comboboxOptions.option
                              .optionCheck
                          }
                        >
                          <Icon id='check-solid' width='12' height='12' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};
