import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUiStore } from '../zustand/ui/uiStore';
import { categories } from '../../assets/categoriesData';

export default function BoysGirlsCategory() {
  const navigate = useNavigate();
  const setSelectedCategories = useUiStore((state) => state.setSelectedCategories);

  const handleCategoryClick = (cat: any) => {
    setSelectedCategories([cat.key]);
    navigate('/kids');
  };

  return (
    <div className="bg-background py-16 px-6">
      <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          Shop By Boys & Girls Category
        </h2>
        <button
          onClick={() => {
            setSelectedCategories([]);
            navigate('/kids');
          }}
          className="text-sm font-bold uppercase tracking-wider hover:underline"
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => handleCategoryClick(cat)}
            className="group relative h-450px rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-purple-900/90 via-transparent to-transparent flex items-end p-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{cat.name}</h3>
                <div className="w-10 h-1 bg-white group-hover:w-20 transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
