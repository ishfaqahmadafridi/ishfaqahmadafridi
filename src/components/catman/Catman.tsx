import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedCategory, setSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import { selectMenCategories, fetchMenProducts } from '../redux/slices/men/menSlice';
import type { AppDispatch } from '../redux/store';
import MenGrid from './MenGrid';

export default function Catman() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCategory = useSelector(selectSelectedCategory);
  const categories = useSelector(selectMenCategories);

  useEffect(() => {
    dispatch(fetchMenProducts());
  }, [dispatch]);

  const currentCategory = categories.find((cat: any) => cat.id === selectedCategory);
  const title = currentCategory ? currentCategory.name : 'All Men Categories';

  const handleShowAll = () => {
    dispatch(setSelectedCategory(null));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
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
        
        <MenGrid />
      </div>
    </div>
  );
}
