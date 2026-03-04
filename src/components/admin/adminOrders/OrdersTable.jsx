import React from 'react';
import OrderTableRow from './OrderTableRow';

export default function OrdersTable({ orders, onViewDetails, onStatusUpdate, statusOptions }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Order #</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Customer</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Items</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderTableRow
                key={order.id}
                order={order}
                onViewDetails={onViewDetails}
                onStatusUpdate={onStatusUpdate}
                statusOptions={statusOptions}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
