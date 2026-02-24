import PropTypes from 'prop-types';
import { ManContext } from './ManContext';
import { useCatmanState } from '../../hooks/catman/useCatmanState';

/**
 * ManProvider - Provides men's products state to children
 */
export const ManProvider = ({ children }) => {
  const manState = useCatmanState();

  return (
    <ManContext.Provider value={manState}>
      {children}
    </ManContext.Provider>
  );
};

ManProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
