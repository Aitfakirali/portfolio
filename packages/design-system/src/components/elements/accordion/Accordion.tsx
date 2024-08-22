import { Disclosure, Transition } from '@headlessui/react';
import React, { createRef, ReactNode, useState } from 'react';

import { accordion } from './theme';
import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils/vclsx';

/**
 *
 */
export interface AccordionItem {
  /**
   *
   */
  id: string;
  /**
   *  the id of the accordion
   */
  title: string | ReactNode;
  /**
   *  the title of the accordion
   */
  caption?: string;
  /**
   * the content of the accordion
   */
  content: ReactNode;

  /**
   * default open value
   */
  open?: boolean;
}

type TextVariant = Pick<
  React.ComponentProps<typeof Text>,
  'variant'
>['variant'];

/**
 * AccordionProps
 */
interface AccordionProps {
  /**
   * change the appearance of the accordion
   */
  variant?: keyof typeof accordion;
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

  /**
   * change title variant
   */
  textVariant?: TextVariant;

  /**
   *  override the classname of the title
   */
  textClassName?: string;

  /**
   *  override the classname of the container
   */
  className?: string;
}

/**
 * Accordion
 */
export const Accordion: React.FC<AccordionProps> = ({
  variant = 'default',
  // openHandler,
  items = [],
  allowMultiple = false,
  textVariant = 'text-base/Medium',
  textClassName,
  className,
}) => {
  const [openedItems, setOpenedItems] = useState(() =>
    items.map((item) => ({
      ...item,
      isOpen: item?.open ?? false,
      ref: createRef<HTMLButtonElement>(),
    })),
  );
  /**
   *
   */
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

  /**
   *
   */
  const isOpened = (id: string) => {
    return openedItems.find((item) => item.id === id)?.isOpen;
  };

  return (
    <div className={vclsx(accordion[variant].container, className)}>
      {openedItems.map((item, index) => {
        const open = isOpened(item.id);
        return (
          <Disclosure
            key={item.id}
            as='div'
            data-open={open?.toString()}
            className={accordion[variant].disclosure}
            defaultOpen={index === 0 ? true : false}
          >
            <>
              <Disclosure.Button
                onClick={() => handleChange(item)}
                className={accordion[variant].button?.base}
              >
                <div className='flex items-center justify-between'>
                  <Text
                    variant={textVariant}
                    className={vclsx('text-primary-600', textClassName)}
                  >
                    {item.title}
                  </Text>
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
                {...(accordion[variant].panel.wrapper ?? {})}
              >
                <Disclosure.Panel
                  unmount={false}
                  className={accordion[variant].panel.base}
                >
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
