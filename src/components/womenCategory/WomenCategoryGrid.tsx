import { useCategoryStore } from '../zustand/category/categoryStore';
import type { WomenCategoryItem } from '../interfaces/womenCategory/womenCategoryInterface';
import WomenCategoryCard from './WomenCategoryCard';

export default function WomenCategoryGrid() {
    const categories: WomenCategoryItem[] = useCategoryStore((state) => state.localCategories.womenCategory) || [];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((cat, index) => (
                <WomenCategoryCard key={index} category={cat} />
            ))}
        </div>
    );
}
