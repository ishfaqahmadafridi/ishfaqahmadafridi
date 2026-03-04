import React from 'react';
import RecentOrdersTable from './RecentOrdersTable';

/**
 * RecentOrdersSection Component
 * Container for the recent orders section with title and table
 * 
 * @param {Object} props
 * @param {Array} props.orders - Array of order objects
 */
export default function RecentOrdersSection({ orders }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h3>
      <RecentOrdersTable orders={orders} />
    </div>
  );
}
