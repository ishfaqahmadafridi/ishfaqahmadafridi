import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedProduct, setPage } from '../redux/slices/uiSlice/uiSlice';
import { menCategories } from '../../assets/menData';
import { womenCategories } from '../../assets/womenData';
import { categories as kidsCategories } from '../../assets/catBoysGData';
import { fragranceCategories } from '../../assets/fragranceData';
import { makeupCategories } from '../../assets/makeupData';
import { skincareCategories } from '../../assets/skincareData';
import { womenFootwearCategories } from '../../assets/womenFootwearData';
import { manFootwearCategories } from '../../assets/manFootwearData';
import SaleProductCard from './SaleProductCard';

export default function SaleGrid() {
  const dispatch = useDispatch();

  // Gather all products from all categories
  const allProducts = [];

  // Men's categories
  menCategories.forEach(category => {
    category.products.forEach(product => {
      if (product.sale === true) {
        allProducts.push({
          ...product,
          categoryName: category.name,
          categoryType: 'Men'
        });
      }
    });
  });

  // Women's categories
  womenCategories.forEach(category => {
    category.products.forEach(product => {
      if (product.sale === true) {
        allProducts.push({
          ...product,
          categoryName: category.name,
          categoryType: 'Women'
        });
      }
    });
  });

  // Kids categories
  kidsCategories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.sale === true) {
          allProducts.push({
            ...product,
            categoryName: category.name,
            categoryType: 'Kids'
          });
        }
      });
    }
  });

  // Fragrance categories
  fragranceCategories.forEach(category => {
    category.products.forEach(product => {
      if (product.sale === true) {
        allProducts.push({
          ...product,
          categoryName: category.name,
          categoryType: 'Fragrance'
        });
      }
    });
  });

  // Makeup categories
  makeupCategories.forEach(category => {
    category.products.forEach(product => {
      if (product.sale === true) {
        allProducts.push({
          ...product,
          categoryName: category.name,
          categoryType: 'Makeup'
        });
      }
    });
  });

  // Skincare categories
  skincareCategories.forEach(category => {
    category.products.forEach(product => {
      if (product.sale === true) {
        allProducts.push({
          ...product,
          categoryName: category.name,
          categoryType: 'Skincare'
        });
      }
    });
  });

  // Women's Footwear categories
  womenFootwearCategories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.sale === true) {
          allProducts.push({
            ...product,
            categoryName: category.name,
            categoryType: 'Women Footwear'
          });
        }
      });
    }
  });

  // Men's Footwear categories
  manFootwearCategories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.sale === true) {
          allProducts.push({
            ...product,
            categoryName: category.name,
            categoryType: 'Men Footwear'
          });
        }
      });
    }
  });

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(setPage('product'));
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
