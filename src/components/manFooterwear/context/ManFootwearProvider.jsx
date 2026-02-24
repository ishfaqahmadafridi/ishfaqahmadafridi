/**
 * Man Footwear Provider
 * Wraps components to provide man footwear context
 */
import PropTypes from 'prop-types';
import { ManFootwearContext } from './ManFootwearContext';
import { useManFootwearState } from '../../hooks/manfootwear/useManFootwearState';
import { manFootwearCategories } from '../../../assets/manFootwearData';

export function ManFootwearProvider({ children }) {
  const state = useManFootwearState();

  const value = {
    categories: manFootwearCategories,
    ...state
  };

  return (
    <ManFootwearContext.Provider value={value}>
      {children}
    </ManFootwearContext.Provider>
  );
}

ManFootwearProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
