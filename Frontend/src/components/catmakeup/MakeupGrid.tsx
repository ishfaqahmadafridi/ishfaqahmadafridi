import { useEffect } from 'react';
import { useCategoryStore } from '../zustand/category/categoryStore';
import MakeupSection from './MakeupSection';

export default function MakeupGrid() {
    const categories = useCategoryStore((state) => state.localCategories.makeup) || [];
    const backendProducts = useCategoryStore((state) => state.backendProducts['makeup']) || [];
    const fetchProducts = useCategoryStore((state) => state.fetchProducts);
    
    useEffect(() => {
        fetchProducts('makeup');
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
                <MakeupSection
                    key={category.id}
                    category={category}
                    backendProducts={getBackendProductsForCategory(category.name)}
                />
            ))}
        </div>
    );
}
