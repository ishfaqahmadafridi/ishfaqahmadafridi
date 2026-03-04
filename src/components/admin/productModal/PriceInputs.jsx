import React from 'react';

/**
 * PriceInputs Component
 * Grid layout with price, original price, and discount inputs
 * 
 * @param {Object} props
 * @param {Object} props.values - Object containing price, original_price, and discount values
 * @param {Function} props.onChange - Change handler
 */
export default function PriceInputs({ values, onChange }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price *
        </label>
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={onChange}
          required
          step="0.01"
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="0.00"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Original Price
        </label>
        <input
          type="number"
          name="original_price"
          value={values.original_price}
          onChange={onChange}
          step="0.01"
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="0.00"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Discount %
        </label>
        <input
          type="number"
          name="discount"
          value={values.discount}
          onChange={onChange}
          min="0"
          max="100"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="0"
        />
      </div>
    </div>
  );
}
