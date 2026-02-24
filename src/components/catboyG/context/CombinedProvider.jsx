import React from 'react';
import PropTypes from 'prop-types';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';

/**
 * CombinedProvider - Combines all context providers for the catboyG components
 * This makes it easier to wrap the app with multiple providers
 */
export function CombinedProvider({ children, categories }) {
  return (
    <CartProvider>
      <ProductProvider categories={categories}>
        {children}
      </ProductProvider>
    </CartProvider>
  );
}

CombinedProvider.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array.isRequired
};

export default CombinedProvider;
