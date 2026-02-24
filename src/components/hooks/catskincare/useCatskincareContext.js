/**
 * Skincare Context Hook
 * Hook to access Skincare context
 */
import { useContext } from 'react';
import { SkincareContext } from '../../catskincare/context/SkincareContext';

export const useCatskincareContext = () => {
  const context = useContext(SkincareContext);
  if (!context) {
    throw new Error('useCatskincareContext must be used within SkincareProvider');
  }
  return context;
};
