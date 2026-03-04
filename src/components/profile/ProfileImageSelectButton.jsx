import React from 'react';
import { IoCamera } from 'react-icons/io5';

export default function ProfileImageSelectButton({ onSelect }) {
  return (
    <label className="cursor-pointer px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors flex items-center gap-2">
      <IoCamera className="text-xl" />
      Choose Image
      <input
        type="file"
        accept="image/*"
        onChange={onSelect}
        className="hidden"
      />
    </label>
  );
}
