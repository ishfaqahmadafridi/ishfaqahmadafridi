import { useSelector } from 'react-redux';
import { selectMakeupCategories } from '../redux/slices/makeup/makeupSlice';
import MakeupSection from './MakeupSection';

export default function MakeupGrid() {
    const categories = useSelector(selectMakeupCategories);

    return (
        <div className="space-y-16">
            {categories.map((category) => (
                <MakeupSection
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
}
