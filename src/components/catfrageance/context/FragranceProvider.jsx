import PropTypes from 'prop-types';
import { FragranceContext } from './FragranceContext';
import { useFragranceState } from '../hooks/useFragranceState';

/**
 * FragranceProvider - Provides fragrance state to children
 */
export const FragranceProvider = ({ children }) => {
  const fragranceState = useFragranceState();

  return (
    <FragranceContext.Provider value={fragranceState}>
      {children}
    </FragranceContext.Provider>
  );
};

FragranceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
