import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/slices/catwomenG/catwomenSlice';
import { selectSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import WomenSection from './WomenSection';

export default function WomenGrid() {
    const categories = useSelector(selectCategories);
    const selectedCategory = useSelector(selectSelectedCategory);

    // Filter categories if a specific category is selected
    const displayCategories = selectedCategory
        ? categories.filter(cat => cat.id === selectedCategory)
        : categories;

    return (
        <div className="space-y-16">
            {displayCategories.map((category) => (
                <WomenSection
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
}
