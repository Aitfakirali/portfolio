import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment } from 'react';

import { theme } from './theme';
import { SelectItem, SelectProps } from './types';
import { Icon } from '../../icon/Icon';
import { Label } from '../../label/Label';
import { Text } from '../../typography/Text';
import {
  useAdaptiveLayout,
  useCloseOnEscAndClickOutside,
} from '../../../../hooks';
import { vclsx } from '../../../../utils';

export type { SelectProps };

export const Select: React.FC<SelectProps> = ({
  errorMessage,
  hasError,
  items = [],
  disabled = false,
  placeholder = 'Sélectionner',
  label,
  value,
  onChange,
  variant = 'default',
  className,
  icon,
  isLoading,
  emptyLabel,
  ...rest
}) => {
  const selectedItem = items.find((p) => p.value === value);
  const refSelect = useCloseOnEscAndClickOutside(() => setIsOpen(false));
  const {
    triggerRef,
    containerRef,
    containerPosition,
    toggleButton,
    isOpen,
    setIsOpen,
  } = useAdaptiveLayout();

  return (
    <div className={vclsx('relative', className)}>
      <Listbox
        as='div'
        disabled={disabled || isLoading}
        onChange={onChange}
        value={value ?? ''}
        // className={className}
        ref={refSelect}
      >
        {({ open }) => (
          <>
            <div className='relative'>
              {label && <Label>{label}</Label>}
              <Listbox.Button
                onClick={toggleButton}
                ref={triggerRef}
                data-testid='select-button'
                className={vclsx(
                  theme.default.element.button.select,
                  hasError && theme?.[variant].element.button.error,
                  (disabled || isLoading) &&
                    theme?.[variant].element.button.disabled,
                )}
                {...rest}
              >
                <Text
                  as='span'
                  variant='text-base/Regular'
                  className={vclsx(
                    'block truncate',
                    selectedItem?.label
                      ? theme?.[variant].element.button?.label
                      : theme?.[variant].element.button?.placeholder,
                    disabled && theme?.[variant].element.button.disabled,
                  )}
                >
                  {selectedItem?.label ?? placeholder}
                </Text>

                {icon ||
                  (isLoading ? (
                    <Icon
                      id='loader'
                      className={vclsx(
                        'animate-spin',
                        theme?.[variant]?.element?.icone?.arrow,
                        disabled && theme?.[variant].element.button.disabled,
                      )}
                    />
                  ) : !open ? (
                    <Icon
                      id='arrow-down'
                      className={vclsx(
                        theme?.[variant]?.element?.icone?.arrow,
                        disabled && theme?.[variant].element.button.disabled,
                        hasError && theme?.[variant].element.button.iconeError,
                      )}
                    />
                  ) : (
                    <Icon
                      id='arrow-up'
                      className={vclsx(
                        theme?.[variant]?.element?.icone?.arrow,
                        hasError && theme?.[variant].element.button.iconeError,
                      )}
                    />
                  ))}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                show={isOpen}
              >
                <Listbox.Options
                  ref={containerRef}
                  className={clsx(theme?.[variant].element.options.container)}
                  style={{
                    overflowY: 'auto',
                    maxHeight: '200px',
                    ...containerPosition,
                  }}
                >
                  <>
                    {items.length === 0 ? (
                      <Text
                        variant='text-base/Regular'
                        className='p-2 px-4 text-gray-600'
                      >
                        {emptyLabel ?? 'Aucun resultat trouvé'}
                      </Text>
                    ) : null}
                    {items.map((item: SelectItem) => {
                      return (
                        <Listbox.Option
                          onClick={() => setIsOpen(false)}
                          value={item.value}
                          key={item.value}
                          disabled={item?.unavailable}
                          className={({ active }) =>
                            ` ${theme?.[variant].element.options.element}
                          ${active && theme?.[variant].element.field.activated}`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected &&
                                  theme?.[variant].element.options.selectedfont
                                } `}
                              >
                                <Text
                                  as='span'
                                  variant='text-base/Regular'
                                  className={`block truncate ${
                                    theme?.[variant].element.options?.fontcolor
                                  } ${
                                    item?.unavailable
                                      ? theme?.[variant].element.options
                                          ?.unavailable
                                      : theme?.[variant].element.options
                                          ?.available
                                  }  `}
                                >
                                  {item?.label}
                                </Text>
                                {selected && (
                                  <Icon
                                    id='check'
                                    className={
                                      theme?.[variant]?.element?.icone?.checked
                                    }
                                  />
                                )}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {errorMessage && hasError && (
        <Text
          as='span'
          variant='text-sm/Regular'
          className={theme?.[variant]?.element?.error}
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
};
