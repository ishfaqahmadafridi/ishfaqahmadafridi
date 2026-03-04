import React from 'react';

export default function OrderStatusCard({ status, label, icon: Icon, color, count }) {
  const colorClasses = {
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    purple: 'bg-purple-100 text-purple-800 border-purple-300',
    green: 'bg-green-100 text-green-800 border-green-300',
    red: 'bg-red-100 text-red-800 border-red-300',
  };

  return (
    <div className={`rounded-lg shadow-sm p-4 border-l-4 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">{label}</p>
          <p className="text-2xl font-bold">{count}</p>
        </div>
        <Icon className="text-2xl opacity-80" />
      </div>
    </div>
  );
}
