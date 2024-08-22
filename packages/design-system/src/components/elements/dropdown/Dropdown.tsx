import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment, ReactNode } from 'react';

import { dropdown } from './theme';
import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 * DropdownItem
 */
export type DropdownItem = {
  /**
   * Item label.
   */
  label: string;
  /**
   * Item value.
   */
  value: string | number;
};

/**
 * DropdownProps
 */
type DropdownProps = {
  /**
   * Dropdown label.
   */
  label?: string;
  /**
   * Dropdown items.
   */
  items: DropdownItem[];
  /**
   * The icon to render
   */
  icon?: ReactNode;
  /**
   * Override css classes
   */
  className?: string;
  /**
   * The variant to use.
   */
  variant?: keyof typeof dropdown.variants;
  /**
   * Placeholder text
   */
  placeholder?: string;
};

/**
 * Dropdown
 */
export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  icon,
  className,
  variant = 'base',
  placeholder,
}) => {
  return (
    <div className='relative'>
      {label && (
        <Text as='label' variant='text-sm/Medium' className={dropdown.label}>
          {label}
        </Text>
      )}
      <Menu as='div' className={vclsx(dropdown.base, className)}>
        {({ open }) => (
          <>
            <Menu.Button
              as='button'
              className={clsx(
                open && dropdown.button.active,
                dropdown.button.base,
                dropdown.variants[variant],
              )}
            >
              <Text
                variant='text-base/Regular'
                className={dropdown.placeholder}
              >
                {placeholder}
              </Text>
              {icon ?? (
                <Icon
                  id='arrow-down'
                  className={vclsx(
                    'text-gold-600 h-4 w-4 transition duration-150',
                    open && 'rotate-180',
                  )}
                />
              )}
            </Menu.Button>
            {open && (
              <Transition
                unmount={false}
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items unmount={false} className={dropdown.container}>
                  {items.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          className={clsx(
                            dropdown.item.base,
                            active
                              ? dropdown.item.active
                              : dropdown.item.inactive,
                          )}
                        >
                          <Text variant='text-base/Regular'>{item.label}</Text>
                          {active && (
                            <Icon id='check' className={dropdown.icon} />
                          )}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            )}
          </>
        )}
      </Menu>
    </div>
  );
};
