
import { useEffect } from 'react';
import WomenSection from './WomenSection';
import { useUiStore } from '../zustand/ui/uiStore';
import { useCategoryStore } from '../zustand/category/categoryStore';

export default function WomenGrid() {
    const selectedCategory = useUiStore((state) => state.selectedCategory);
    const categories = useCategoryStore((state) => state.localCategories.women);
    
    // Using 'women' as the backend category name based on categoryStore mapping
    const backendProducts = useCategoryStore((state) => state.backendProducts['women']) || [];
    const fetchProducts = useCategoryStore((state) => state.fetchProducts);
    
    useEffect(() => {
        fetchProducts('women');
    }, [fetchProducts]);

    const displayCategories = selectedCategory
        ? categories.filter(cat => cat.id === selectedCategory)
        : categories;

    // Helper function to match backend products to frontend categories
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
                <WomenSection
                    key={category.id}
                    category={category}
                    backendProducts={getBackendProductsForCategory(category.name)}
                />
            ))}
        </div>
    );
}
