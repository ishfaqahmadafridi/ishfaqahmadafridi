import { useEffect } from 'react';
import type { CatBoyGCategory, CategoryGridProps } from '../interfaces/catboyG/catBoyGInterface';
import CategorySection from './CategorySection';
import { useCategoryStore } from '../zustand/category/categoryStore';
import { useUiStore } from '../zustand/ui/uiStore';

export default function CategoryGrid({ onProductClick }: CategoryGridProps) {
    const categories = useCategoryStore((state) => state.localCategories.boys) || [];
    const backendProducts = useCategoryStore((state) => state.backendProducts['boys']) || [];
    const fetchProducts = useCategoryStore((state) => state.fetchProducts);
    const selectedCategory = useUiStore((state) => state.selectedCategory);
    
    useEffect(() => {
        fetchProducts('boys');
    }, [fetchProducts]);

    // Explicit filter depending on the selected category from uiStore
    const displayCategories = selectedCategory
        ? categories.filter((cat: CatBoyGCategory) => cat.id === selectedCategory)
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
                <CategorySection
                    key={category.id}
                    category={category}
                    onProductClick={onProductClick}
                    backendProducts={getBackendProductsForCategory(category.name)}
                />
            ))}
        </div>
    );
}
