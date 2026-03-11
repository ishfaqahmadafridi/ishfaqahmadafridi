import { useEffect } from 'react';
import { useCategoryStore } from '../zustand/category/categoryStore';
import SkincareSection from './SkincareSection';

export default function SkincareGrid() {
    const categories = useCategoryStore((state) => state.localCategories.skincare) || [];
    const backendProducts = useCategoryStore((state) => state.backendProducts['skincare']) || [];
    const fetchProducts = useCategoryStore((state) => state.fetchProducts);
    
    useEffect(() => {
        fetchProducts('skincare');
    }, [fetchProducts]);

    const getBackendProductsForCategory = (categoryName: string) => {
        const normalizedName = categoryName.toLowerCase();
        return backendProducts.filter((product: any) => {
            const backendCategoryName = product.category_name?.toLowerCase() || '';
            return backendCategoryName === normalizedName || 
                   backendCategoryName.includes(normalizedName) ||
                   normalizedName.includes(backendCategoryName);
        });
    };

    return (
        <div className="space-y-16">
            {categories.map((category) => (
                <SkincareSection
                    key={category.id}
                    category={category}
                    backendProducts={getBackendProductsForCategory(category.name)}
                />
            ))}
        </div>
    );
}
