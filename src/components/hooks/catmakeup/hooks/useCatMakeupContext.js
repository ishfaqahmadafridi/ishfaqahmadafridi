import { useContext } from 'react';
import { MakeupContext } from '../../../catmakeup/context/MakeupContext';

/**
 * Custom hook to access MakeupContext
 * @returns {Object} Makeup context value
 */
export const useCatMakeupContext = () => {
  const context = useContext(MakeupContext);
  
  if (!context) {
    throw new Error('useCatMakeupContext must be used within MakeupProvider');
  }
  
  return context;
};
