/**
 * Product Page Context
 * Provides product page data and state to child components
 */
import { createContext, useContext } from 'react';

export const ProductPageContext = createContext(null);

export const useProductPage = () => {
  const context = useContext(ProductPageContext);
  if (!context) {
    throw new Error('useProductPage must be used within ProductPageProvider');
  }
  return context;
};
