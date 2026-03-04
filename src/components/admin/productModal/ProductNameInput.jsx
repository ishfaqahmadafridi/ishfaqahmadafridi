import React from 'react';

/**
 * ProductNameInput Component
 * Input field for product name
 * 
 * @param {Object} props
 * @param {string} props.value - Current input value
 * @param {Function} props.onChange - Change handler
 */
export default function ProductNameInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Product Name *
      </label>
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter product name"
      />
    </div>
  );
}
