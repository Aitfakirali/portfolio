import { useState } from 'react';

import { Icon } from '../../icon/Icon';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils';

interface TimeLineNavigationProps {
  /**
   * The sections of the timeline
   */
  sections: {
    /**
     *
     */
    name: string;
    /**
     *
     */
    index: number;
    /**
     *
     */
    current: boolean;
  }[];
  /**
   * a function that will be called whenever the navigation open state changes
   */
  callBack?: (open: boolean) => void;
}

export const TimeLineNavigation = ({
  sections,
  callBack,
}: TimeLineNavigationProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const currentsIndex = sections.findIndex((s) => s.current);

  const activeIndex = currentsIndex >= 0 ? currentsIndex : sections.length;

  const toggleOpen = () => {
    setOpen(!open);
    callBack && callBack(!open);
  };

  return (
    <div className='min-w-14'>
      <div
        className={vclsx(
          'bg-primary-50 text-primary-600 min-h-full whitespace-nowrap rounded-tl-lg p-4',
          open && 'absolute left-0 top-0 z-20 w-full md:relative',
        )}
      >
        <div className='flex'>
          <div className='h-6 w-6'>
            <Icon
              id={open ? 'close' : 'menu'}
              className='h-6 w-6 cursor-pointer'
              onClick={toggleOpen}
            />
          </div>
          <div
            className={vclsx(
              'flex flex-col overflow-hidden transition-all duration-150 ease-in-out',
              open ? 'opacity-1 w-full pl-2' : 'w-0 opacity-0',
            )}
          >
            <Text variant='text-lg/Semibold' className='mb-8 leading-6'>
              Navigation timeline
            </Text>
            <div className='flex flex-col gap-8'>
              {sections.map((section, index) => (
                <div key={index} className='flex items-center gap-4'>
                  {(index < activeIndex || index === activeIndex) && (
                    <span
                      className={vclsx(
                        index < sections.length - 1 &&
                          'after:bg-primary-500 relative z-[1] after:absolute after:left-1/2 after:h-10 after:w-0.5 after:-translate-x-1/2 after:content-[""]',
                        index === activeIndex && 'after:bg-gray-300',
                      )}
                    >
                      <Icon
                        id={index < activeIndex ? 'check' : 'more'}
                        width={14}
                        height={14}
                        className={vclsx(
                          'bg-primary-500 rounded-full p-0.5 text-white',
                          index === activeIndex && 'bg-primary-700',
                        )}
                      />
                    </span>
                  )}

                  {index > activeIndex && (
                    <span
                      className={vclsx(
                        'relative z-[1] h-3.5 w-3.5 rounded-full bg-gray-300',
                        index < sections.length - 1 &&
                          'after:absolute after:left-1/2 after:top-3.5 after:h-10 after:w-0.5 after:-translate-x-1/2 after:bg-gray-300 after:content-[""]',
                      )}
                    ></span>
                  )}
                  <Text
                    variant='text-base/Medium'
                    className={vclsx(
                      index === activeIndex
                        ? 'text-primary-700'
                        : 'text-primary-400',
                    )}
                  >
                    {section.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
