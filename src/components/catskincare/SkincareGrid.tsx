import { useSelector } from 'react-redux';
import { selectSkincareCategories } from '../redux/slices/skincare/skincareSlice';
import SkincareSection from './SkincareSection';

export default function SkincareGrid() {
    const categories = useSelector(selectSkincareCategories);

    return (
        <div className="space-y-16">
            {categories.map((category) => (
                <SkincareSection
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
}
