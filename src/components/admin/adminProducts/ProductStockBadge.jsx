import React from 'react';

export default function ProductStockBadge({ stock }) {
  const getStockStatus = () => {
    if (stock === 0) {
      return {
        className: 'bg-red-100 text-red-800',
        label: 'Out of Stock'
      };
    }
    if (stock <= 5) {
      return {
        className: 'bg-yellow-100 text-yellow-800',
        label: 'Low Stock'
      };
    }
    return {
      className: 'bg-green-100 text-green-800',
      label: 'In Stock'
    };
  };

  const status = getStockStatus();

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.className}`}>
      {status.label}
    </span>
  );
}
