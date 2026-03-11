import { useCategoryStore } from '../zustand/category/categoryStore';
import ManFootwearCard from './ManFootwearCard';

export default function ManFootwearGrid() {
    const categories = useCategoryStore((state) => state.localCategories.manFootwear) || [];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
                <ManFootwearCard key={cat.id} category={cat} />
            ))}
        </div>
    );
}
