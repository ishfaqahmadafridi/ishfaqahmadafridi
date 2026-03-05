import { useSelector } from 'react-redux';
import { selectMenCategories, selectMenBackendProducts } from '../redux/slices/men/menSlice';
import { selectSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import MenSection from './MenSection';

export default function MenGrid() {
    const categories = useSelector(selectMenCategories);
    const selectedCategory = useSelector(selectSelectedCategory);
    const backendProducts = useSelector(selectMenBackendProducts);

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
                <MenSection
                    key={category.id}
                    category={category}
                    backendProducts={getBackendProductsForCategory(category.name)}
                />
            ))}
        </div>
    );
}
