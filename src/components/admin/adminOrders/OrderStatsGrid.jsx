import React from 'react';
import OrderStatusCard from './OrderStatusCard';
import { IoCheckmarkCircleOutline, IoTimeOutline, IoRocketOutline, IoCloseCircleOutline } from 'react-icons/io5';

export default function OrderStatsGrid({ orders }) {
  const statusOptions = [
    { value: 'pending', label: 'Pending', icon: IoTimeOutline, color: 'yellow' },
    { value: 'processing', label: 'Processing', icon: IoRocketOutline, color: 'blue' },
    { value: 'shipped', label: 'Shipped', icon: IoRocketOutline, color: 'purple' },
    { value: 'delivered', label: 'Delivered', icon: IoCheckmarkCircleOutline, color: 'green' },
    { value: 'cancelled', label: 'Cancelled', icon: IoCloseCircleOutline, color: 'red' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {statusOptions.map(({ value, label, icon, color }) => {
        const count = orders.filter(o => o.status === value).length;
        return (
          <OrderStatusCard
            key={value}
            status={value}
            label={label}
            icon={icon}
            color={color}
            count={count}
          />
        );
      })}
    </div>
  );
}
