import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';
import { categories } from '../../assets/categoriesList';

export default function CategorySection() {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter border-l-8 border-rose-600 pl-6">
          Shop For<br />New Arrival
        </h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => dispatch(setPage(cat.page))}
              className="px-8 py-3 bg-white border-2 border-gray-200 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all"
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
