import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

/**
 * ModalHeader Component
 * Header section of the product modal with title and close button
 * 
 * @param {Object} props
 * @param {boolean} props.isEditMode - Whether editing existing product (true) or adding new (false)
 * @param {Function} props.onClose - Close button click handler
 */
export default function ModalHeader({ isEditMode, onClose }) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h3 className="text-xl font-bold text-gray-900">
        {isEditMode ? 'Edit Product' : 'Add New Product'}
      </h3>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <IoCloseOutline className="text-2xl text-gray-500" />
      </button>
    </div>
  );
}
