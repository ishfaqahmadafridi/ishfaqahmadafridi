import React from 'react';

export default function AnalyticsHeader({ period, onPeriodChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <p className="text-gray-500 text-sm mt-1">Sales, user activity, and performance metrics</p>
      </div>
      
      <select
        value={period}
        onChange={(e) => onPeriodChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="week">Last 7 Days</option>
        <option value="month">Last 30 Days</option>
        <option value="year">Last Year</option>
      </select>
    </div>
  );
}
