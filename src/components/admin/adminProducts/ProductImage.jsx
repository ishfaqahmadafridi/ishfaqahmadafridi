import React from 'react';

export default function ProductImage({ image, name, productId }) {
  return (
    <div className="flex items-center">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-lg object-cover mr-3"
      />
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">ID: {productId}</p>
      </div>
    </div>
  );
}
