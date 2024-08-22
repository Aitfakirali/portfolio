import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment, useCallback, useEffect, useRef } from 'react';

import { layer } from './theme';
import { Icon } from '../icon/Icon';

/**
 *
 */
type LayerTheme = 'btnClose' | 'overlay';

/**
 *
 */
interface LayerProps {
  /**
   * If true, page scrolling will be disabled.
   */
  shouldDisableScroll?: boolean;
  /**
   * The variant to use.
   */
  variant?: keyof typeof layer;
  /**
   * If true, layer will behave as an overlay.
   */
  overlay?: boolean;
  /**
   * If true, will be marked as an error layer.
   */
  hasError?: boolean;
  /**
   * Overlay background.
   */
  overlayBackground?: string;
  /**
   * Overlay Opacity.
   */
  overlayOpacity?: string;
  /**
   * If true, layer will behave as a modal.
   */
  modal?: boolean;
  /**
   * The position of the layer.
   */
  position?: Exclude<keyof typeof layer.default, LayerTheme>;
  /**
   * The content of the layer.
   */
  children?: React.ReactNode;
  /**
   * Optional onClose handler.
   */
  onClose?: () => void;
  /**
   * Optional onCloseCallback handler.
   */
  onCloseCallback?: () => void;
  /**
   * If true, layer will be displayed by default.
   */
  isShow?: boolean;
  /**
   * Override overlay classes.
   */
  overlayClasses?: string;
  /**
   * If true, will display a close button.
   */
  showCloseBtn?: boolean;
  /**
   * Override closeButton component.
   */
  closeButton?: React.ReactNode;
}

/**
 * Layer.
 */
const Layer = ({
  shouldDisableScroll = false,
  variant = 'default',
  overlay = true,
  overlayBackground = 'bg-black',
  overlayOpacity = 'bg-opacity-50',
  modal = false,
  position = 'modal',
  children,
  onClose,
  onCloseCallback,
  isShow = false,
  overlayClasses,
  showCloseBtn = true,
  closeButton,
}: LayerProps) => {
  const initialRef: any = null;
  const modalRef = useRef(initialRef);

  // close on ESC press
  const escFunction = useCallback((event: any) => {
    if (event.key === 'Escape' && onClose) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * handleOutsideClick
   */
  const handleOutsideClick = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target) && onClose) {
      onClose();
    }
  };

  /**
   * disableGlobaleScroll
   */
  const disableGlobaleScroll = () => {
    document.body.classList.add('overflow-hidden');
  };

  /**
   * enableGlobaleScroll
   */
  const enableGlobaleScroll = () => {
    document.body.classList.remove('overflow-hidden');
  };

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      shouldDisableScroll && isShow && enableGlobaleScroll();
      document.removeEventListener('click', handleOutsideClick, true);
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    shouldDisableScroll && isShow && disableGlobaleScroll();
    return () => {
      shouldDisableScroll && isShow && enableGlobaleScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow, shouldDisableScroll]);

  const backgroundClass = overlayBackground ?? 'bg-black',
    opacityClass = overlayOpacity ?? 'bg-opacity-50',
    baseClasses = overlayClasses ?? 'fixed top-0 left-0 w-full h-full z-[9]';

  return (
    <>
      {overlay && (
        <Transition
          as={Fragment}
          show={isShow}
          {...layer[variant]['overlay'].animation}
        >
          <div
            className={clsx(
              overlay && baseClasses,
              overlay && backgroundClass,
              overlay && opacityClass,
            )}
          ></div>
        </Transition>
      )}
      <div
        ref={modalRef}
        className={clsx(
          modal && overlay && layer[variant]['modal'].position,
          !modal && position && 'fixed z-50',
          !modal && position && layer[variant][position].position,
        )}
      >
        <Transition
          as={Fragment}
          show={isShow}
          afterLeave={() => {
            typeof onCloseCallback == 'function' && onCloseCallback();
          }}
          {...layer[variant][position].animation}
        >
          <div className='relative min-w-full'>
            {showCloseBtn &&
              (closeButton || (
                <button
                  className={layer[variant].btnClose.style}
                  onClick={onClose}
                >
                  <Icon
                    id={layer[variant].btnClose.icon.id}
                    width={layer[variant].btnClose.icon.width}
                    height={layer[variant].btnClose.icon.height}
                  />
                </button>
              ))}
            {children}
          </div>
        </Transition>
      </div>
    </>
  );
};

export { Layer };
