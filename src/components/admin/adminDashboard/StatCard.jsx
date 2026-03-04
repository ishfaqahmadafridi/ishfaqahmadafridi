import React from 'react';

/**
 * StatCard Component
 * Displays an individual stat card with icon, title, value, and subtitle
 * 
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Main value to display
 * @param {string} props.subtitle - Subtitle/additional info
 * @param {Component} props.icon - React icon component
 * @param {string} props.color - Background color class for icon
 */
export default function StatCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
          <p className="text-gray-400 text-xs">{subtitle}</p>
        </div>
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
}
