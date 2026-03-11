import { useEffect } from 'react';
import { useUiStore } from '../zustand/ui/uiStore';

import WomenGrid from './WomenGrid';

export default function Catwomen() {
    const selectedCategory = useUiStore((state) => state.selectedCategory);
    const setSelectedCategory = useUiStore((state) => state.setSelectedCategory);
    
    const title = selectedCategory ? selectedCategory : "Women's Collection";

    const handleShowAll = () => {
        setSelectedCategory(null);
    };

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black uppercase tracking-tighter">{title}</h1>
          {selectedCategory && (
            <button
              onClick={handleShowAll}
              className="text-sm font-bold uppercase tracking-wider hover:underline"
            >
              View All Categories
            </button>
          )}
        </div>
        
        <WomenGrid />
      </div>
    </div>
  );
}
