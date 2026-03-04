import React from 'react';
import ProductTableRow from './ProductTableRow';

export default function ProductsTable({ 
  products, 
  onEdit, 
  onDelete, 
  onStockUpdate 
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Product</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Category</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Price</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Stock</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductTableRow
                key={product.id}
                product={product}
                onEdit={onEdit}
                onDelete={onDelete}
                onStockUpdate={onStockUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
