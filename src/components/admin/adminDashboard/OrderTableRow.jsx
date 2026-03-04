import React from 'react';
import OrderStatusBadge from './OrderStatusBadge';

/**
 * OrderTableRow Component
 * Displays a single order row in the recent orders table
 * 
 * @param {Object} props
 * @param {Object} props.order - Order data object
 */
export default function OrderTableRow({ order }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4 text-sm font-medium text-gray-900">{order.order_number}</td>
      <td className="py-3 px-4 text-sm text-gray-600">{order.user_name}</td>
      <td className="py-3 px-4 text-sm font-semibold text-gray-900">${order.total_amount}</td>
      <td className="py-3 px-4">
        <OrderStatusBadge status={order.status} />
      </td>
      <td className="py-3 px-4 text-sm text-gray-600">
        {new Date(order.created_at).toLocaleDateString()}
      </td>
    </tr>
  );
}
