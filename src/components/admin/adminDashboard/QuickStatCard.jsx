import React from 'react';

/**
 * QuickStatCard Component
 * Displays a gradient stat card with title and value
 * 
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Value to display
 * @param {string} props.gradient - Gradient color classes (e.g., 'from-blue-500 to-blue-600')
 */
export default function QuickStatCard({ title, value, gradient }) {
  return (
    <div className={`bg-linear-to-br ${gradient} rounded-xl shadow-sm p-6 text-white`}>
      <h4 className="text-sm font-medium opacity-90 mb-2">{title}</h4>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
