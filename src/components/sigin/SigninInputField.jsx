import React from 'react';

export default function SigninInputField({ 
  label, 
  type, 
  placeholder, 
  value, 
  onChange, 
  icon 
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider px-1">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-rose-500">
          {icon}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:bg-white rounded-xl outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
          required
        />
      </div>
    </div>
  );
}
