import { useDispatch } from 'react-redux';
import { setPage, setSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import WomenCategoryGrid from './WomenCategoryGrid';

export default function WomenCategory() {
  const dispatch = useDispatch();

  const handleViewAll = () => {
    dispatch(setSelectedCategory(null));
    dispatch(setPage('women'));
  };

  return (
    <div className="bg-white py-16 px-6">
      <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          Shop By Women Category
        </h2>
        <button
          onClick={handleViewAll}
          className="text-sm font-bold uppercase tracking-wider hover:underline"
        >
          View All
        </button>
      </div>
      <WomenCategoryGrid />
    </div>
  );
}
