import React from 'react';

export default function UpdateProfileMessage({ message }) {
  if (!message.text) return null;

  return (
    <div className={`p-4 rounded-lg ${
      message.type === 'success' 
        ? 'bg-green-50 text-green-700 border border-green-200' 
        : 'bg-red-50 text-red-700 border border-red-200'
    }`}>
      {message.text}
    </div>
  );
}
