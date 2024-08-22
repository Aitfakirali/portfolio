import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment, useState } from 'react';

import { tooltip } from './theme';

/**
 *
 */
interface TooltipProps {
  /**
   * a class name to add to the tooltip.
   */
  className?: string;
  /**
   * The position of the tooltip.
   */
  position?: keyof typeof tooltip.position;
  /**
   * The text to display in the tooltip.
   */
  text: string | React.ReactNode;
  /**
   * The element to show the tooltip on hovering on it.
   */
  children: React.ReactNode;
}

/**
 *
 */
export const Tooltip: React.FC<TooltipProps> = ({
  className,
  position = 'topCenter',
  text,
  children,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  /**
   *
   */
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  /**
   *
   */
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className='relative'
      data-testid='tooltip'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Transition
        as={Fragment}
        show={showTooltip}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div
          className={clsx(
            className,
            tooltip.wrapper,
            tooltip.position[position],
          )}
        >
          {text}
        </div>
      </Transition>
    </div>
  );
};
