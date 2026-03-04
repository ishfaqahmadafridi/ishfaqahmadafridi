import React from 'react';
import InventoryStatCard from './InventoryStatCard';

export default function InventoryStats({ inventoryStatus }) {
  if (!inventoryStatus) return null;

  const stats = [
    {
      label: 'Total Products',
      value: inventoryStatus.total_products,
      borderColor: 'border-blue-500'
    },
    {
      label: 'In Stock',
      value: inventoryStatus.in_stock,
      borderColor: 'border-green-500'
    },
    {
      label: 'Low Stock',
      value: inventoryStatus.low_stock,
      borderColor: 'border-yellow-500'
    },
    {
      label: 'Out of Stock',
      value: inventoryStatus.out_of_stock,
      borderColor: 'border-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <InventoryStatCard
          key={index}
          label={stat.label}
          value={stat.value}
          borderColor={stat.borderColor}
        />
      ))}
    </div>
  );
}
