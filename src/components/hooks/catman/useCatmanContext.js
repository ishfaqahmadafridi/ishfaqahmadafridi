import { useContext } from 'react';
import { ManContext } from '../../catman/context/ManContext';

/**
 * Custom hook to access ManContext
 * @returns {Object} Man context value
 */
export const useCatmanContext = () => {
  const context = useContext(ManContext);
  
  if (!context) {
    throw new Error('useCatmanContext must be used within ManProvider');
  }
  
  return context;
};
