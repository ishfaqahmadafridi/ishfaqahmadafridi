import React from 'react';
import OrderStatusSelect from './OrderStatusSelect';

export default function OrderTableRow({ order, onViewDetails, onStatusUpdate, statusOptions }) {
  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4">
        <button
          onClick={() => onViewDetails(order)}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          {order.order_number}
        </button>
      </td>
      <td className="py-3 px-4 text-sm text-gray-900">{order.user_name}</td>
      <td className="py-3 px-4 text-sm text-gray-600">{order.items?.length || 0} items</td>
      <td className="py-3 px-4 text-sm font-semibold text-gray-900">${order.total_amount}</td>
      <td className="py-3 px-4">
        <OrderStatusSelect
          status={order.status}
          orderId={order.id}
          onStatusUpdate={onStatusUpdate}
          statusOptions={statusOptions}
        />
      </td>
      <td className="py-3 px-4 text-sm text-gray-600">
        {new Date(order.created_at).toLocaleDateString()}
      </td>
      <td className="py-3 px-4">
        <button
          onClick={() => onViewDetails(order)}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}
