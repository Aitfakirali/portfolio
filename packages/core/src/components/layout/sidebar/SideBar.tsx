import { Icon, Link, Text, vclsx } from '@portfolio/ui';
import { useMemo, useState } from 'react';
import { type SideBarLinks, items, secondItems } from './mock-data';
import { Transition } from '@headlessui/react';

/**
 * Sidebar props.
 */
interface SideBarProps {
  /**
   * Sidebar items
   */
  items?: SideBarLinks[];

  show: boolean;
}

/**
 *
 */
export const SideBar = ({ show }: SideBarProps) => {
  return (
    <Transition show={show}>
      <Transition.Child
        as='div'
        enter='transform transition ease-in-out duration-200 sm:duration-300'
        enterFrom='transform -translate-x-full'
        enterTo=''
        leave='transform transition ease-in-out duration-200 sm:duration-300'
        leaveFrom=''
        leaveTo='transform -translate-x-full'
        className='hidden md:block w-[264px] bg-white dark:bg-[#181818] overflow-auto fixed top-0 left-0 pt-[90px] bottom-0 z-10'
      >
        {/* The actual dialog panel  */}
        <div className=''>
          <Text
            variant='text-lg/Semibold'
            className='px-5 py-2 mb-4 text-gray-800 dark:text-white'
          >
            Mon Groupe
          </Text>

          <Menu items={items} />

          <Text
            variant='text-lg/Semibold'
            className='px-5 py-2 my-4 text-gray-800 dark:text-white'
          >
            Mon entité
          </Text>

          <Menu items={secondItems} />
        </div>
      </Transition.Child>
    </Transition>
  );
};

export const Menu = ({
  items,
  className,
}: {
  items: any[];
  className?: string;
}) => {
  const [openedItems, setOpenedItems] = useState<string[]>([]);

  const toggleOpen = (key: string) => {
    if (openedItems.includes(key))
      setOpenedItems(openedItems.filter((i) => i !== key));
    else setOpenedItems(openedItems.concat(key));
  };

  const renderSubItems = useMemo(
    () => (item: SideBarLinks, index: number) => {
      const isOpened = openedItems.includes(item.key);
      const hasChildren = item.below ? item.below?.length > 0 : false;
      return (
        <div
          key={index}
          className={vclsx('w-full w-full max-w-[264px]', className)}
        >
          <Link
            onClick={hasChildren ? () => toggleOpen(item.key) : () => {}}
            className={vclsx(
              'flex gap-3 items-center px-5 py-3 hover:text-primary rounded-md w-full transition duration-100',
              isOpened &&
                'bg-primary-25 text-primary dark:bg-primary/10 dark:text-primary',
            )}
          >
            {item.icon && <Icon id={item.icon} className='w-6 h-6' />}
            <Text variant='text-md/Medium' className='text-left flex-1'>
              {item.title}
            </Text>
            {item.below && item.below?.length > 0 && (
              <button
                className={vclsx(
                  'flex-0 hover:text-primary transition-transform transform',
                  isOpened && 'rotate-180',
                )}
              >
                <Icon id={'arrow-up'} className='w-5 h-5 flex-none' />
              </button>
            )}
          </Link>

          {item.below && item.below?.length > 0 && isOpened && (
            <ul className={vclsx('pl-2')}>
              {item.below.map((subItem: SideBarLinks, j: number) => {
                const isOpened = openedItems.includes(subItem.key);
                const hasChildren = subItem.below
                  ? subItem.below?.length > 0
                  : false;
                return (
                  <div key={j} className=''>
                    <Link
                      onClick={() => toggleOpen(subItem.key)}
                      href={subItem.url}
                      className={vclsx(
                        isOpened && 'text-primary',
                        'text-xs hover:text-primary transition py-3 px-5 flex gap-3 items-center',
                      )}
                    >
                      <Icon id='dot' className='w-4 h-4 text-white' />
                      <Text variant='text-base/Regular' className='flex-1'>
                        {subItem.title}
                      </Text>

                      {hasChildren && (
                        <button
                          className={vclsx(
                            'flex-0 hover:text-primary transition-transform transform',
                            isOpened && 'rotate-180',
                          )}
                        >
                          <Icon id='arrow-up' className='w-5 h-5 flex-none' />
                        </button>
                      )}
                    </Link>

                    {subItem.below && subItem.below?.length > 0 && isOpened && (
                      <ul>
                        {subItem.below?.map(
                          (subsubItem: SideBarLinks, k: number) => {
                            return (
                              <Link
                                key={k}
                                href={subsubItem.url}
                                className={vclsx(
                                  'text-xs ml-7 text-gray-500 hover:text-primary transition flex gap-3 py-3 px-5 items-center',
                                )}
                              >
                                <Text
                                  variant='text-base/Regular'
                                  className='flex-1'
                                >
                                  {subsubItem.title}
                                </Text>
                              </Link>
                            );
                          },
                        )}
                      </ul>
                    )}
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      );
    },
    [openedItems],
  );

  const menus = items.map(renderSubItems);
  return <div className='space-y-2'>{menus}</div>;
};
