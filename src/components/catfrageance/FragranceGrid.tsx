import { useEffect } from 'react';
import { useCategoryStore } from '../zustand/category/categoryStore';
import FragranceSection from './FragranceSection';

export default function FragranceGrid() {
    const categories = useCategoryStore((state) => state.localCategories.fragrance) || [];
    const backendProducts = useCategoryStore((state) => state.backendProducts['fragrance']) || [];
    const fetchProducts = useCategoryStore((state) => state.fetchProducts);
    
    useEffect(() => {
        fetchProducts('fragrance');
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
                <FragranceSection
                    key={category.id}
                    category={category}
                    backendProducts={getBackendProductsForCategory(category.name)}
                />
            ))}
        </div>
    );
}
