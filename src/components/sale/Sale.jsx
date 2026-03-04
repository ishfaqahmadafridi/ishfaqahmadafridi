import React from 'react';
import SaleGrid from './SaleGrid';

export default function Sale() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-rose-600">
            🔥 Sale Items
          </h1>
        </div>
        <SaleGrid />
      </div>
    </div>
  );
}
