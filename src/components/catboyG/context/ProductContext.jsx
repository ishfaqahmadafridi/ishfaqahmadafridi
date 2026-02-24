import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useProductState } from '../../hooks/catboyG/useProductState';

const ProductContext = createContext(undefined);

export function ProductProvider({ children, categories }) {
  const productState = useProductState(categories);

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      heroImage: PropTypes.string.isRequired,
      products: PropTypes.array.isRequired
    })
  ).isRequired
};

export default ProductContext;
