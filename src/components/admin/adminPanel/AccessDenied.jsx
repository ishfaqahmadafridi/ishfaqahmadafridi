import React from 'react';

/**
 * AccessDenied Component
 * Displays an access denied message for unauthorized users
 */
export default function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
        <p className="text-gray-600">You must be logged in as an admin to access this page.</p>
      </div>
    </div>
  );
}
