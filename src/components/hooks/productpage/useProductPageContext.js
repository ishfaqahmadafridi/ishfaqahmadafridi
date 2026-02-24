/**
 * Product Page Context Hook
 * Hook to access ProductPage context
 */
import { useContext } from 'react';
import { ProductPageContext } from '../../productpage/context/ProductPageContext';

export const useProductPageContext = () => {
  const context = useContext(ProductPageContext);
  if (!context) {
    throw new Error('useProductPageContext must be used within ProductPageProvider');
  }
  return context;
};
