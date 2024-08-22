import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { TableTheme } from './theme';
import { Badge } from '../badge/Badge';
import { Checkbox } from '../form-elements/checkbox/Checkbox';
import { Icon } from '../icon/Icon';

/**
 *
 */
interface TableDropDownProps {
  /**
   *
   */
  title: string;
  /**
   *
   */
  options: any[];
  /**
   *
   */
  facets?: Map<string, number>;
  /**
   *
   */
  onClick: (option: any) => void;
  /**
   *
   */
  icon: string;
  /**
   *
   */
  selectedValues?: Set<string>;
  /**
   *
   */
  clear?: () => void;
  /**
   *
   */
  dropdownVariant?: 'default' | 'secondary';
  /**
   *
   */
  variant?: keyof typeof TableTheme;
}

/**
 *
 */
export const TableDropDown = ({
  title,
  options,
  facets,
  onClick,
  icon,
  selectedValues,
  clear,
  variant = 'default',
  dropdownVariant = 'default',
}: TableDropDownProps) => {
  const values: string[] = [];
  selectedValues?.forEach((value) => {
    values.push(value);
  });

  return (
    <Menu as='div' className='relative'>
      {({ open }) => (
        <>
          <Menu.Button
            className={TableTheme[variant].toolbar.base[dropdownVariant]}
          >
            <Icon
              id={icon}
              className={TableTheme[variant].toolbar.dropdown.button.icon}
            />
            <span>{title}</span>
            {!!selectedValues?.size && (
              <div
                className={
                  TableTheme[variant].toolbar.dropdown.button.badgeWrapper
                }
              >
                {selectedValues?.size < 3 ? (
                  values.map((value) => (
                    <Badge key={value} variant='primary' label={value} />
                  ))
                ) : (
                  <Badge
                    variant='primary'
                    label={`${selectedValues?.size} selected`}
                  />
                )}

                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    clear && clear();
                  }}
                  className={
                    TableTheme[variant].toolbar.dropdown.button.clearButton.base
                  }
                >
                  <Icon
                    id='close'
                    className={
                      TableTheme[variant].toolbar.dropdown.button.clearButton
                        .icon
                    }
                  />
                </span>
              </div>
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
              <Menu.Items
                unmount={false}
                className={TableTheme[variant].toolbar.dropdown.menu.base}
              >
                {options.map((option, index) => {
                  const isSelected = selectedValues
                    ? selectedValues?.has(option.value)
                    : option.getIsVisible();
                  return (
                    <Menu.Item key={option.id || index}>
                      <div
                        onClick={() => onClick(option)}
                        className={
                          TableTheme[variant].toolbar.dropdown.menu.item
                        }
                      >
                        <div className='flex items-center gap-2 whitespace-nowrap'>
                          <Checkbox checked={isSelected} />
                          {option.element || option.label || option.id}
                        </div>
                        {facets?.get(option.value) && (
                          <Badge
                            variant='danger'
                            label={`${facets.get(option.value)}`}
                          />
                        )}
                      </div>
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          )}
        </>
      )}
    </Menu>
  );
};
