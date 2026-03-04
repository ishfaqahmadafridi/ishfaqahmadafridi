import React from 'react';

/**
 * ModalActions Component
 * Footer section with Cancel and Submit buttons
 * 
 * @param {Object} props
 * @param {boolean} props.isEditMode - Whether editing existing product (true) or adding new (false)
 * @param {Function} props.onCancel - Cancel button click handler
 */
export default function ModalActions({ isEditMode, onCancel }) {
  return (
    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
      <button
        type="button"
        onClick={onCancel}
        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isEditMode ? 'Update Product' : 'Add Product'}
      </button>
    </div>
  );
}
