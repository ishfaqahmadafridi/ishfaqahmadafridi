import React from 'react';

export default function OrderStatusSelect({ status, orderId, onStatusUpdate, statusOptions }) {
  const getStatusClasses = (status) => {
    const classes = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <select
      value={status}
      onChange={(e) => onStatusUpdate(orderId, e.target.value)}
      className={`px-3 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${getStatusClasses(status)}`}
    >
      {statusOptions.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
