import { useCallback, useEffect, useRef, useState } from 'react';

import { useFirstMountState } from './useFirstMountState';

type AdaptiveStyle = {
  /**
   *
   */
  top: string | number;
  /**
   *
   */
  left: string | number;
  /**
   *
   */
  bottom: string | number;

  visibility?: 'visible' | 'hidden' | 'collapse';
};

export const useAdaptiveLayout = <
  TButtonElement extends HTMLElement = HTMLButtonElement,
  TOptionElement extends HTMLElement = HTMLOptionElement,
>() => {
  const triggerRef = useRef<TButtonElement>(null);
  const containerRef = useRef<TOptionElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  const toggleButton = () => {
    setIsOpen((s) => !s);
  };
  const [containerPosition, setContainerPosition] = useState<AdaptiveStyle>({
    top: 'auto',
    left: 'auto',
    bottom: 'auto',
    visibility: 'hidden',
  });

  const isFirstRender = useFirstMountState();

  const calculateContainerPosition = useCallback(() => {
    const _containerPosition: AdaptiveStyle = {
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      visibility: 'hidden',
    };
    if (triggerRef.current && containerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();

      const containerRect = containerRef.current.getBoundingClientRect();

      const containerHeight = containerRect.height;

      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      if (spaceBelow >= containerHeight || spaceBelow >= spaceAbove) {
        _containerPosition['top'] = '100%';
      } else {
        _containerPosition['bottom'] = '100%';
      }
      _containerPosition['left'] = '' + triggerRect.left;
      setContainerPosition(_containerPosition);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      calculateContainerPosition();
    }
    setIsOpen(false);
    const timeout = setTimeout(() => {
      setContainerPosition((prevState) => ({
        ...prevState,
        visibility: 'visible',
      }));
    }, 200);

    return () => clearTimeout(timeout);
  }, [calculateContainerPosition, isFirstRender]);

  return {
    triggerRef,
    containerRef,
    containerPosition,
    toggleButton,
    isOpen,
    setIsOpen,
  };
};
