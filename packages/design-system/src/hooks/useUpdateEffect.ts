import { useEffect } from 'react';

import { useFirstMountState } from './useFirstMountState';

interface UseUpdateEffectType {
  (effect: () => void, deps?: any[]): void;
}

export const useUpdateEffect: UseUpdateEffectType = (effect, deps = []) => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
