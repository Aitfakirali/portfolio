import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';

import { theme } from './theme';
import { vclsx } from '../../../utils/vclsx';

export const Popup: React.FC<{
  /**
   *
   */
  isShown?: boolean;
  /**
   *
   */
  close?: () => void;
  /**
   *
   */
  heading?: ReactNode;
  /**
   *
   */
  children?: ReactNode;
  /**
   *
   */
  variant?: keyof typeof theme.variants;
  /**
   *
   */
  className?: string;
}> = ({
  heading,
  children,
  isShown = false,
  close = () => {
    return;
  },
  variant = 'modal',
  className,
}) => {
  return (
    <Transition show={isShown} as='div' className='fixed'>
      <Dialog onClose={close} className='relative z-50'>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className={theme.overlay} aria-hidden='true' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className={theme.overlay} aria-hidden='true' />
        </Transition.Child>

        <Transition.Child
          as='div'
          enter={theme.variants[variant].enter}
          enterFrom={theme.variants[variant].enterFrom}
          enterTo={theme.variants[variant].enterTo}
          leave={theme.variants[variant].leave}
          leaveFrom={theme.variants[variant].leaveFrom}
          leaveTo={theme.variants[variant].leaveTo}
          className={vclsx(theme.base, theme.variants[variant].base)}
        >
          {/* The actual dialog panel  */}
          <Dialog.Panel
            className={vclsx(
              theme.panel,
              theme.variants[variant].panel,
              className,
            )}
          >
            {heading && (
              <Dialog.Title as='h2' className='flex justify-between'>
                {heading}
              </Dialog.Title>
            )}
            {children}
            {/* ... */}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
