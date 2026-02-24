/**
 * Man Footwear Context
 * Provides man footwear data and state to child components
 */
import { createContext, useContext } from 'react';

export const ManFootwearContext = createContext(null);

export const useManFootwear = () => {
  const context = useContext(ManFootwearContext);
  if (!context) {
    throw new Error('useManFootwear must be used within ManFootwearProvider');
  }
  return context;
};
