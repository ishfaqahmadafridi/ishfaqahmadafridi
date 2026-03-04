import React from 'react';

export default function ProductRankingItem({ product, index, maxRevenue }) {
  const percentage = (product.total_revenue / maxRevenue) * 100;

  return (
    <div className="flex items-center space-x-4">
      <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-lg font-bold">
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <p className="font-semibold text-gray-900">{product.product__name}</p>
          <div className="text-right">
            <p className="text-sm font-bold text-gray-900">${product.total_revenue?.toFixed(2)}</p>
            <p className="text-xs text-gray-500">{product.total_sold} sold</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-linear-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
