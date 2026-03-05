import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import type { CatBoyGProduct } from '../interfaces/catboyG/catBoyGInterface';
import CategoryGrid from './CategoryGrid';

export default function CatBoysG() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleProductClick = (product: CatBoyGProduct) => {
    dispatch(setSelectedProduct(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryGrid onProductClick={handleProductClick} />
      </div>
    </div>
  );
}
