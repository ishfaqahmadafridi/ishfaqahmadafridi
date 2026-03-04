import React from 'react';
import { useSelector } from 'react-redux';
import { selectMenCategories } from '../redux/slices/men/menSlice';
import { selectSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import MenSection from './MenSection';

export default function MenGrid() {
    const categories = useSelector(selectMenCategories);
    const selectedCategory = useSelector(selectSelectedCategory);

    // Filter categories if a specific category is selected
    const displayCategories = selectedCategory
        ? categories.filter(cat => cat.id === selectedCategory)
        : categories;

    return (
        <div className="space-y-16">
            {displayCategories.map((category) => (
                <MenSection
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
}
