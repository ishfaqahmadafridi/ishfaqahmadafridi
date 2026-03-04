import React from 'react';
import CategoryGrid from './CategoryGrid';

export default function CatBoysG({ setPage, setSelectedProduct }) {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryGrid onProductClick={handleProductClick} />
      </div>
    </div>
  );
}
