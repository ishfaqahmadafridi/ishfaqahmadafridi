import React from 'react';

/**
 * CategoryStockInputs Component
 * Grid layout with category ID and stock quantity inputs
 * 
 * @param {Object} props
 * @param {Object} props.values - Object containing category and stock values
 * @param {Function} props.onChange - Change handler
 */
export default function CategoryStockInputs({ values, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category ID *
        </label>
        <input
          type="number"
          name="category"
          value={values.category}
          onChange={onChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Category ID"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Stock Quantity *
        </label>
        <input
          type="number"
          name="stock"
          value={values.stock}
          onChange={onChange}
          required
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Stock"
        />
      </div>
    </div>
  );
}
