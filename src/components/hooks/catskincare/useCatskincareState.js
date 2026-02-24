/**
 * Skincare State Hook
 * Manages local state for skincare component
 */
import { useState, useCallback } from 'react';

export const useCatskincareState = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorySelect = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategory(null);
    setSearchTerm('');
  }, []);

  return {
    selectedCategory,
    searchTerm,
    handleCategorySelect,
    handleSearch,
    clearFilters
  };
};
