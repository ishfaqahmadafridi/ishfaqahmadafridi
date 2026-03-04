import React from 'react';

/**
 * HotProductCheckbox Component
 * Checkbox to mark product as hot/featured
 * 
 * @param {Object} props
 * @param {boolean} props.checked - Whether checkbox is checked
 * @param {Function} props.onChange - Change handler
 */
export default function HotProductCheckbox({ checked, onChange }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name="is_hot"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
      />
      <label className="ml-2 text-sm text-gray-700">
        Mark as Hot/Featured Product
      </label>
    </div>
  );
}
