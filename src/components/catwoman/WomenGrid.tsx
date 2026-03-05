import { useSelector } from 'react-redux';
import { selectCategories, selectWomenBackendProducts } from '../redux/slices/catwomenG/catwomenSlice';
import { selectSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import WomenSection from './WomenSection';

export default function WomenGrid() {
    const categories = useSelector(selectCategories);
    const selectedCategory = useSelector(selectSelectedCategory);
    const backendProducts = useSelector(selectWomenBackendProducts);

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
