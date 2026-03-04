import React from 'react';

/**
 * DescriptionInput Component
 * Textarea for product description
 * 
 * @param {Object} props
 * @param {string} props.value - Current textarea value
 * @param {Function} props.onChange - Change handler
 */
export default function DescriptionInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Description
      </label>
      <textarea
        name="description"
        value={value}
        onChange={onChange}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter product description..."
      />
    </div>
  );
}
