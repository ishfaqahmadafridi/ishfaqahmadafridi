import React from 'react';

export default function ProductFilterTabs({ filter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'ALL' },
    { key: 'in_stock', label: 'IN STOCK' },
    { key: 'low_stock', label: 'LOW STOCK' },
    { key: 'out_of_stock', label: 'OUT OF STOCK' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex space-x-4">
        {filters.map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => onFilterChange(filterOption.key)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === filterOption.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
    </div>
  );
}
