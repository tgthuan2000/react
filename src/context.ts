import { createContext, useContext as useReactContext } from 'react';

export type ContextType<T> = T | undefined | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Context = createContext<ContextType<any>>(undefined);

export function useContext<T>() {
  const ctx = useReactContext<ContextType<T>>(Context);

  if (!ctx) {
    throw new Error('useContext must be using in ContextProvider');
  }

  return ctx;
}

export default Context.Provider;
