import React from 'react';
import { IoAddOutline } from 'react-icons/io5';

export default function ProductsHeader({ onAddProduct }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
        <p className="text-gray-500 text-sm mt-1">Manage your inventory and product details</p>
      </div>
      <button
        onClick={onAddProduct}
        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <IoAddOutline className="mr-2 text-xl" />
        Add Product
      </button>
    </div>
  );
}
