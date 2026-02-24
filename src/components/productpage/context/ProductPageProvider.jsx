/**
 * Product Page Provider
 * Wraps components to provide product page context
 */
import PropTypes from 'prop-types';
import { ProductPageContext } from './ProductPageContext';
import { useProductPageState } from '../../hooks/productpage/useProductPageState';

export function ProductPageProvider({ children, product, setPage, addToCart, previousPage }) {
  const state = useProductPageState();

  const value = {
    product,
    setPage,
    addToCart,
    previousPage,
    ...state
  };

  return (
    <ProductPageContext.Provider value={value}>
      {children}
    </ProductPageContext.Provider>
  );
}

ProductPageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  product: PropTypes.object,
  setPage: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  previousPage: PropTypes.string,
};
