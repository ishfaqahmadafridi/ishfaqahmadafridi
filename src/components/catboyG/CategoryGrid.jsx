import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/slices/catBoyG/catBoysGSlice';
import { selectSelectedCategory, selectSelectedCategories } from '../redux/slices/uiSlice/uiSlice';
import CategorySection from './CategorySection';

export default function CategoryGrid({ onProductClick }) {
    const categories = useSelector(selectCategories);
    const selectedCategory = useSelector(selectSelectedCategory);
    const selectedCategories = useSelector(selectSelectedCategories);

    // Filter categories based on selection
    let displayCategories = categories;
    
    if (selectedCategory) {
        // Single category selected (from other filtering)
        displayCategories = categories.filter(cat => cat.id === selectedCategory);
    } else if (selectedCategories && selectedCategories.length > 0) {
        // Multiple categories selected (from parent category like Teen Boys)
        displayCategories = categories.filter(cat => selectedCategories.includes(cat.id));
    }

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
