import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/slices/catBoyG/catBoysGSlice';
import { selectSelectedCategories, selectSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import type { RootState } from '../redux/store';
import type { CatBoyGCategory, CategoryGridProps } from '../interfaces/catboyG/catBoyGInterface';
import CategorySection from './CategorySection';
import { getDisplayCategories } from '../interfaces/catboyG/catboyG.logic';

export default function CategoryGrid({ onProductClick }: CategoryGridProps) {
    const categories = useSelector((state: RootState) => selectCategories(state)) as CatBoyGCategory[];
    const selectedCategory = useSelector((state: RootState) => selectSelectedCategory(state)) as string | null;
    const selectedCategories = useSelector((state: RootState) => selectSelectedCategories(state)) as string[];
    const displayCategories = getDisplayCategories(categories, { selectedCategory, selectedCategories });

    return (
        <div className="space-y-16">
            {displayCategories.map((category) => (
                <CategorySection
                    key={category.id}
                    category={category}
                    onProductClick={onProductClick}
                />
            ))}
        </div>
    );
}
