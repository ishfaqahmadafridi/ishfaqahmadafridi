import { useNavigate } from 'react-router-dom';
import { useUiStore } from '../zustand/ui/uiStore';
import { menCategories } from '../../assets/menData';
import { womenCategories } from '../../assets/womenData';
import { categories as kidsCategories } from '../../assets/catBoysGData';
import { fragranceCategories } from '../../assets/fragranceData';
import { makeupCategories } from '../../assets/makeupData';
import { skincareCategories } from '../../assets/skincareData';
import { womenFootwearCategories } from '../../assets/womenFootwearData';
import type { SaleProduct, CategoryWithProducts } from '../interfaces/sale/saleInterface';
import SaleProductCard from './SaleProductCard';

export default function SaleGrid() {
  const setSelectedProduct = useUiStore((state) => state.setSelectedProduct);
  const navigate = useNavigate();

  // Gather all products from all categories
  const allProducts: SaleProduct[] = [];

  // Helper function to add products from categories
  const addProductsFromCategories = (categories: CategoryWithProducts[], categoryType: string) => {
    categories.forEach((category: CategoryWithProducts) => {
      if (category.products) {
        category.products.forEach((product: CategoryWithProducts) => {
          if (product.sale === true) {
            allProducts.push({
              ...product,
              categoryName: category.name,
              categoryType
            });
          }
        });
      }
    });
  };

  // Add products from all category types
  addProductsFromCategories(menCategories, 'Men');
  addProductsFromCategories(womenCategories, 'Women');
  addProductsFromCategories(kidsCategories, 'Kids');
  addProductsFromCategories(fragranceCategories, 'Fragrance');
  addProductsFromCategories(makeupCategories, 'Makeup');
  addProductsFromCategories(skincareCategories, 'Skincare');
  addProductsFromCategories(womenFootwearCategories, 'Women Footwear');

  const handleProductClick = (product: SaleProduct) => {
    setSelectedProduct(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div>
      <p className="text-gray-600 mb-8">
        {allProducts.length} items on sale
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {allProducts.map((product) => (
          <SaleProductCard
            key={`${product.categoryType}-${product.id}`}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
}
