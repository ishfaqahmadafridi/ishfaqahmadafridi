import React from 'react';

/**
 * SidebarHeader Component
 * Displays the admin panel logo/title section at the top of the sidebar
 * 
 * @param {Object} props
 * @param {string} props.title - Main title (default: "Admin Panel")
 * @param {string} props.subtitle - Subtitle text (default: "Management Dashboard")
 */
export default function SidebarHeader({ title = "Admin Panel", subtitle = "Management Dashboard" }) {
  return (
    <div className="p-6 border-b border-gray-800">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
}
