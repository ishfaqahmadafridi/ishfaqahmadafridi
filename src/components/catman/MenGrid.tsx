import { useEffect } from 'react';
import MenSection from './MenSection';
import { useUiStore } from '../zustand/ui/uiStore';
import { useCategoryStore } from '../zustand/category/categoryStore';

export default function MenGrid() {
    const selectedCategory = useUiStore((state) => state.selectedCategory);
    const categories = useCategoryStore((state) => state.localCategories.men) || [];
    
    const backendProducts = useCategoryStore((state) => state.backendProducts['men']) || [];
    const fetchProducts = useCategoryStore((state) => state.fetchProducts);
    
    useEffect(() => {
        fetchProducts('men');
    }, [fetchProducts]);

    const displayCategories = selectedCategory
        ? categories.filter(cat => cat.id === selectedCategory)
        : categories;

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
            {displayCategories.map((category) => (
                <MenSection
                    key={category.id}
                    category={category}
                    backendProducts={getBackendProductsForCategory(category.name)}
                />
            ))}
        </div>
    );
}
