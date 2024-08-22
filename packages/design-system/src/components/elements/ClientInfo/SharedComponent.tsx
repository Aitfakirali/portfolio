import { Dialog, Transition } from '@headlessui/react';
import React, { ReactElement } from 'react';

export const PopupClient: React.FC<{
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
  heading?: ReactElement;
  /**
   *
   */
  content?: ReactElement;
}> = ({
  heading,
  content,
  isShown = false,
  close = () => {
    return;
  },
}) => {
  return (
    <Transition show={isShown} as='div'>
      <Dialog onClose={close} className='relative z-50'>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Dialog.Overlay
          className='fixed inset-0 bg-black/40'
          aria-hidden='true'
        />

        <Transition.Child
          as='div'
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
          className='fixed inset-0 flex items-center justify-center p-4'
        >
          {/* The actual dialog panel  */}
          <Dialog.Panel>
            <Dialog.Title as='h2' className='flex justify-end'>
              {heading}
            </Dialog.Title>
            {content}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
