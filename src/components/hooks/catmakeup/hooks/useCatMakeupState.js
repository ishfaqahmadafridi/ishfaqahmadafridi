import { useState, useCallback } from 'react';
import { makeupCategories } from '../../../../assets/makeupData';

/**
 * Custom hook for managing makeup state
 * @returns {Object} Makeup state and handlers
 */
export const useCatMakeupState = () => {
  const [categories] = useState(makeupCategories);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product);
    console.log('Product clicked:', product);
  }, []);

  const clearSelectedProduct = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return {
    categories,
    selectedProduct,
    handleProductClick,
    clearSelectedProduct,
  };
};
