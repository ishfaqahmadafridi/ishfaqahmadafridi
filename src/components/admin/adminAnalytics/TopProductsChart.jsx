import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import ProductRankingItem from './ProductRankingItem';

export default function TopProductsChart({ topProducts }) {
  const maxRevenue = topProducts?.[0]?.total_revenue || 1;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-purple-100 rounded-lg mr-4">
          <IoCartOutline className="text-2xl text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Top Selling Products</h3>
          <p className="text-sm text-gray-500">Best performing products</p>
        </div>
      </div>

      {topProducts && topProducts.length > 0 ? (
        <div className="space-y-3">
          {topProducts.map((product, index) => (
            <ProductRankingItem
              key={index}
              product={product}
              index={index}
              maxRevenue={maxRevenue}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">No product data available</p>
      )}
    </div>
  );
}
