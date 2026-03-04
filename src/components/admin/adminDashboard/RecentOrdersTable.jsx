import React from 'react';
import OrderTableRow from './OrderTableRow';

/**
 * RecentOrdersTable Component
 * Displays a table of recent orders
 * 
 * @param {Object} props
 * @param {Array} props.orders - Array of order objects
 */
export default function RecentOrdersTable({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Order #</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Customer</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(0, 10).map((order) => (
            <OrderTableRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
