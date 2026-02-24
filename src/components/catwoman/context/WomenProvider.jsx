/**
 * Women Provider
 * Wraps components to provide women context
 */
import PropTypes from 'prop-types';
import { WomenContext } from './WomenContext';
import { useCatwomenState } from '../../hooks/actwomen/useCatwomenState';
import { womenCategories } from '../../../assets/womenData';

export function WomenProvider({ children }) {
  const state = useCatwomenState();

  const value = {
    categories: womenCategories,
    ...state
  };

  return (
    <WomenContext.Provider value={value}>
      {children}
    </WomenContext.Provider>
  );
}

WomenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
