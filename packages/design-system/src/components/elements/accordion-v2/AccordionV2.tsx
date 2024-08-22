import { Disclosure, Transition } from '@headlessui/react';
import React, { createRef, useState } from 'react';

import { theme } from './theme';
import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

export interface AccordionItem {
  /**
   *
   */
  id: string | number;

  /**
   *
   */
  title: React.ReactNode;
  /**
   *
   */
  icon?: string;
  /**
   *
   */
  badge?: React.ReactNode;

  /**
   *
   */
  open?: boolean;

  /**
   *
   */
  caption?: React.ReactNode;

  /**
   *
   */
  content: React.ReactNode;
}

interface AccordionV2Props {
  /**
   * change the appearance of the accordion
   */
  variant?: keyof typeof theme;
  /**
   * Manages the state of the accordions
   * @param node AccordionNode
   * @returns void
   */
  openHandler?: (node: AccordionItem) => void;
  /**
   * The list of items to be shown as accordion
   */
  items?: AccordionItem[];
  /**
   * allows the user to open multiple accordion at same time
   */
  allowMultiple?: boolean;
}

export const AccordionV2 = ({
  variant = 'default',
  // openHandler,
  items = [],
  allowMultiple = false,
}: AccordionV2Props) => {
  const [openedItems, setOpenedItems] = useState(() =>
    items.map((item) => ({
      ...item,
      isOpen: item?.open || false,
      ref: createRef<HTMLButtonElement>(),
    })),
  );

  /**
   *
   */
  const isOpened = (id: string | number) => {
    return openedItems.find((item) => item.id === id)?.isOpen;
  };

  const handleChange = (item: AccordionItem) => {
    const id = item.id;
    if (allowMultiple) {
      setOpenedItems((prevItems) =>
        prevItems.map((item) =>
          item.id !== id ? item : { ...item, isOpen: !item.isOpen },
        ),
      );
    } else {
      setOpenedItems((prevItems) =>
        prevItems.map((item) => {
          return {
            ...item,
            isOpen: item.id !== id ? false : !item.isOpen,
          };
        }),
      );
    }
  };

  return (
    <div className={theme[variant].container}>
      {openedItems.map((item, index) => {
        const open = isOpened(item.id);
        return (
          <Disclosure
            key={item.id}
            as='div'
            data-open={open?.toString()}
            className={theme[variant].wrapper}
            defaultOpen={index === 0 ? true : false}
          >
            <>
              <Disclosure.Button
                onClick={() => handleChange(item)}
                className={theme[variant].button}
              >
                <div className='flex items-center gap-3'>
                  {item?.icon && (
                    <Icon id={item?.icon} className='h-6 w-6 text-gray-600' />
                  )}
                  <Text
                    variant='text-base/Medium'
                    className='flex-1 text-gray-600'
                  >
                    {item.title}
                  </Text>
                  {item?.badge}
                  <Icon
                    id='arrow-down'
                    className={vclsx(
                      `text-gold-500 h-6 w-6 transition duration-150`,
                      open ? 'rotate-180 transform' : '',
                    )}
                  />
                </div>
                {item.caption && (
                  <Text variant='text-base/Regular' className='text-gray-600'>
                    {item.caption}
                  </Text>
                )}
              </Disclosure.Button>
              <Transition
                show={open}
                enter='transition-all duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition-all duration-100 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Disclosure.Panel static className='px-4 py-2'>
                  {item.content}
                </Disclosure.Panel>
              </Transition>
            </>
          </Disclosure>
        );
      })}
    </div>
  );
};
