import {
  act,
  fireEvent,
  renderHook,
  RenderHookResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { EffectCallback } from 'react';

import {
  useAdaptiveLayout,
  useCloseOnEscAndClickOutside,
  useFirstMountState,
  useUpdateEffect,
} from '../';

const wrapper = ({ children }: { children: any }) => {
  return <>{children}</>;
};

interface Props {
  deps: any[];
  effect: EffectCallback;
}

describe('Hooks', () => {
  it('Should test useAdaptiveLayout', async () => {
    const { result } = renderHook(() => useAdaptiveLayout(), { wrapper });
    expect(result.current.isOpen).toEqual(false);
  });

  it('Should test useFirstMountState', async () => {
    const { result } = renderHook(() => useFirstMountState(), { wrapper });
    expect(result.current).toEqual(true);
  });

  it('Should test useUpdateEffect', async () => {
    const DEPS1: any = [1, 2, 3];
    const DEPS2: any = [4, 5, 6];
    const EFFECT = jest.fn();

    const render = (
      effect: () => void,
      deps?: any[],
    ): RenderHookResult<void, Props> =>
      renderHook(({ deps, effect }: Props) => useUpdateEffect(effect, deps), {
        initialProps: {
          deps,
          effect,
        },
      });

    const { rerender } = render(EFFECT, DEPS1);
    rerender({ effect: EFFECT, deps: DEPS2 });
    expect(EFFECT).toHaveBeenCalledTimes(1);
    expect(EFFECT).toHaveBeenLastCalledWith();
  });

  it('Should test useCloseOnEscAndClickOutside > escape', async () => {
    const callback = jest.fn();
    renderHook(() => useCloseOnEscAndClickOutside(callback), {
      wrapper,
    });
    await act(async () => {
      await userEvent.keyboard('{Escape}');
    });
  });

  it('Should test useCloseOnEscAndClickOutside > outside', async () => {
    const callback = jest.fn();
    renderHook(() => useCloseOnEscAndClickOutside(callback), {
      wrapper,
    });
    await act(async () => {
      fireEvent.mouseDown(document);
    });
  });
});
