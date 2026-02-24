/**
 * Women Context
 * Provides women data and state to child components
 */
import { createContext, useContext } from 'react';

export const WomenContext = createContext(null);

export const useWomen = () => {
  const context = useContext(WomenContext);
  if (!context) {
    throw new Error('useWomen must be used within WomenProvider');
  }
  return context;
};
