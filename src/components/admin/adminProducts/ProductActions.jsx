import React from 'react';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';

export default function ProductActions({ onEdit, onDelete }) {
  return (
    <div className="flex justify-end space-x-2">
      <button
        onClick={onEdit}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        title="Edit"
      >
        <IoPencilOutline className="text-lg" />
      </button>
      <button
        onClick={onDelete}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        title="Delete"
      >
        <IoTrashOutline className="text-lg" />
      </button>
    </div>
  );
}
