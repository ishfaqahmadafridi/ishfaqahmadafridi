import React from 'react';
import { IoTrendingUpOutline } from 'react-icons/io5';
import SalesBarChart from './SalesBarChart';
import SalesSummaryStats from './SalesSummaryStats';

export default function SalesChart({ salesAnalytics }) {
  const maxSales = salesAnalytics?.data?.reduce((max, day) => Math.max(max, day.sales), 0) || 1;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-green-100 rounded-lg mr-4">
          <IoTrendingUpOutline className="text-2xl text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Sales Analytics</h3>
          <p className="text-sm text-gray-500">Revenue trends over time</p>
        </div>
      </div>

      {salesAnalytics?.data && salesAnalytics.data.length > 0 ? (
        <div className="space-y-4">
          <SalesBarChart data={salesAnalytics.data} maxValue={maxSales} />
          <SalesSummaryStats data={salesAnalytics.data} />
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">No sales data available</p>
      )}
    </div>
  );
}
