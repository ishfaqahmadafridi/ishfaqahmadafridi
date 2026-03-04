import React from 'react';
import QuickStatCard from './QuickStatCard';

/**
 * QuickStatsRow Component
 * Displays a row of quick stat cards showing revenue and order metrics
 * 
 * @param {Object} props
 * @param {Object} props.stats - Dashboard statistics data
 */
export default function QuickStatsRow({ stats }) {
  const quickStats = [
    {
      title: 'Weekly Revenue',
      value: `$${stats.sales?.weekly?.toFixed(2) || 0}`,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Monthly Revenue',
      value: `$${stats.sales?.monthly?.toFixed(2) || 0}`,
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Weekly Orders',
      value: stats.orders?.weekly || 0,
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {quickStats.map((stat, index) => (
        <QuickStatCard key={index} {...stat} />
      ))}
    </div>
  );
}
