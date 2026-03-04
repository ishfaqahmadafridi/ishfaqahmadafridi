import React from 'react';

export default function InventoryStatCard({ label, value, borderColor }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 border-l-4 ${borderColor}`}>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
