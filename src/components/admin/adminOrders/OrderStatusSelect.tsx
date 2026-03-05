import { useDispatch } from 'react-redux';
import { updateOrderStatus } from '../../redux/slices/admin/adminThunks';
import type { OrderStatusSelectProps } from '../../interfaces/admin/adminOrders/adminOrdersInterface';
import type { ChangeEvent } from 'react';

export default function OrderStatusSelect({ order }: OrderStatusSelectProps) {
  const dispatch = useDispatch();

  const statusColors: Record<string, string> = {
    pending: 'text-yellow-600 bg-yellow-50',
    processing: 'text-blue-600 bg-blue-50',
    shipped: 'text-purple-600 bg-purple-50',
    delivered: 'text-green-600 bg-green-50',
    cancelled: 'text-red-600 bg-red-50',
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    (dispatch as any)((updateOrderStatus as any)({ id: order.id, status: e.target.value }));
  };

  return (
    <select
      value={order.status}
      onChange={handleStatusChange}
      className={`px-3 py-1 rounded-lg text-xs font-medium border-0 cursor-pointer ${
        statusColors[order.status] || 'bg-gray-50 text-gray-600'
      }`}
    >
      <option value="pending">Pending</option>
      <option value="processing">Processing</option>
      <option value="shipped">Shipped</option>
      <option value="delivered">Delivered</option>
      <option value="cancelled">Cancelled</option>
    </select>
  );
}
