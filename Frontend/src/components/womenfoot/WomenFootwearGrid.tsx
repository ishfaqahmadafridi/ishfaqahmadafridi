import { useCategoryStore } from '../zustand/category/categoryStore';
import type { WomenFootwearItem } from '../interfaces/womenfoot/womenfootInterface';
import WomenFootwearCard from './WomenFootwearCard';

export default function WomenFootwearGrid() {
    const categories = useCategoryStore((state) => state.localCategories.womenFootwear) || [];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
                <WomenFootwearCard key={idx} category={cat} />
            ))}
        </div>
    );
}
