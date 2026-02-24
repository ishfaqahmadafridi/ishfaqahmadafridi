/**
 * Skincare Context
 * Provides skincare data and state to child components
 */
import { createContext, useContext } from 'react';

export const SkincareContext = createContext(null);

export const useSkincare = () => {
  const context = useContext(SkincareContext);
  if (!context) {
    throw new Error('useSkincare must be used within SkincareProvider');
  }
  return context;
};
