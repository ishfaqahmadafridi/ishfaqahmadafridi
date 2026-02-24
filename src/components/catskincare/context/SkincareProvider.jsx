/**
 * Skincare Provider
 * Wraps components to provide skincare context
 */
import PropTypes from 'prop-types';
import { SkincareContext } from './SkincareContext';
import { useCatskincareState } from '../../hooks/catskincare/useCatskincareState';
import { skincareCategories } from '../../../assets/skincareData';

export function SkincareProvider({ children }) {
  const state = useCatskincareState();

  const value = {
    categories: skincareCategories,
    ...state
  };

  return (
    <SkincareContext.Provider value={value}>
      {children}
    </SkincareContext.Provider>
  );
}

SkincareProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
