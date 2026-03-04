import React from 'react';
import { useSelector } from 'react-redux';
import { selectFragranceCategories } from '../redux/slices/Fragrance/fragranceSlice';
import FragranceSection from './FragranceSection';

export default function FragranceGrid() {
    const categories = useSelector(selectFragranceCategories);

    return (
        <div className="space-y-16">
            {categories.map((category) => (
                <FragranceSection
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
}
