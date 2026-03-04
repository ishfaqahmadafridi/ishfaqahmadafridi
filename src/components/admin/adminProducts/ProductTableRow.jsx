import React from 'react';
import ProductImage from './ProductImage';
import ProductStockBadge from './ProductStockBadge';
import ProductActions from './ProductActions';

export default function ProductTableRow({ 
  product, 
  onEdit, 
  onDelete, 
  onStockUpdate 
}) {
  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4">
        <ProductImage 
          image={product.image} 
          name={product.name} 
          productId={product.id}
        />
      </td>
      <td className="py-3 px-4 text-sm text-gray-600">{product.category}</td>
      <td className="py-3 px-4 text-sm font-semibold text-gray-900">${product.price}</td>
      <td className="py-3 px-4">
        <button
          onClick={() => onStockUpdate(product.id, product.stock)}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          {product.stock} units
        </button>
      </td>
      <td className="py-3 px-4">
        <ProductStockBadge stock={product.stock} />
      </td>
      <td className="py-3 px-4">
        <ProductActions 
          onEdit={() => onEdit(product)} 
          onDelete={() => onDelete(product.id)} 
        />
      </td>
    </tr>
  );
}
