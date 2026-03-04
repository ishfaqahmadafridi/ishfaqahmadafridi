import React from 'react';

/**
 * AdminHeader Component
 * Top header bar for the admin panel
 * 
 * @param {Object} props
 * @param {string} props.title - Header title text (default: "Admin Panel")
 */
export default function AdminHeader({ title = "Admin Panel" }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-8 py-5">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
    </header>
  );
}
