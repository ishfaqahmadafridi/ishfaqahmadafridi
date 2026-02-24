import { useContext } from 'react';
import { FragranceContext } from '../../catfrageance/context/FragranceContext';

/**
 * Custom hook to access FragranceContext
 * @returns {Object} Fragrance context value
 */
export const useFragranceContext = () => {
  const context = useContext(FragranceContext);
  
  if (!context) {
    throw new Error('useFragranceContext must be used within FragranceProvider');
  }
  
  return context;
};
