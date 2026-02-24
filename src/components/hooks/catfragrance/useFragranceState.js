import { useState, useCallback } from 'react';
import { fragranceCategories } from '../../../assets/fragranceData';

/**
 * Custom hook for managing fragrance state
 * @returns {Object} Fragrance state and handlers
 */
export const useFragranceState = () => {
  const [categories] = useState(fragranceCategories);
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
