import { useNavigate } from 'react-router-dom';

import type { CatBoyGProduct } from '../interfaces/catboyG/catBoyGInterface';
import CategoryGrid from './CategoryGrid';

export default function CatBoysG() {
  
  const navigate = useNavigate();
  
  const handleProductClick = (product: CatBoyGProduct) => {
    
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryGrid onProductClick={handleProductClick} />
      </div>
    </div>
  );
}
