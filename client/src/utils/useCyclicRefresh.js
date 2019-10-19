import { useReducer, useEffect } from 'react';

export function useCyclicRefresh(duration = 1000) {
  const [touch, forceRerender] = useReducer(s => s + 1, 0);

  useEffect(() => {
    const id = setTimeout(forceRerender, duration);
    return () => clearTimeout(id);
  }, [touch]);
}
