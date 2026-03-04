import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedCategory, setSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import { selectCategories } from '../redux/slices/catwomenG/catwomenSlice';
import WomenGrid from './WomenGrid';

export default function Catwomen() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);
  const categories = useSelector(selectCategories);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const title = currentCategory ? currentCategory.name : 'All Women Categories';

  const handleShowAll = () => {
    dispatch(setSelectedCategory(null));
  };

  return (
    <div className="bg-white min-h-screen pt-20">
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
