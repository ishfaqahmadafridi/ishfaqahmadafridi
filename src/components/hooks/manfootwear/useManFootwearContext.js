/**
 * Man Footwear Context Hook
 * Hook to access ManFootwear context
 */
import { useContext } from 'react';
import { ManFootwearContext } from '../../manFooterwear/context/ManFootwearContext';

export const useManFootwearContext = () => {
  const context = useContext(ManFootwearContext);
  if (!context) {
    throw new Error('useManFootwearContext must be used within ManFootwearProvider');
  }
  return context;
};
