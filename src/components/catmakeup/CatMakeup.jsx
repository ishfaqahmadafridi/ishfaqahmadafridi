import React from 'react';
import MakeupGrid from './MakeupGrid';

export default function CatMakeup() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MakeupGrid />
      </div>
    </div>
  );
}
