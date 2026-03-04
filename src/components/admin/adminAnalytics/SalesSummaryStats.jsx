import React from 'react';

export default function SalesSummaryStats({ data }) {
  const totalSales = data.reduce((sum, day) => sum + day.sales, 0);
  const totalOrders = data.reduce((sum, day) => sum + day.orders, 0);
  const averageOrder = totalOrders > 0 ? totalSales / totalOrders : 0;

  return (
    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
      <div className="text-center">
        <p className="text-sm text-gray-500">Total Sales</p>
        <p className="text-2xl font-bold text-gray-900">${totalSales.toFixed(2)}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Total Orders</p>
        <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Average Order</p>
        <p className="text-2xl font-bold text-gray-900">${averageOrder.toFixed(2)}</p>
      </div>
    </div>
  );
}
