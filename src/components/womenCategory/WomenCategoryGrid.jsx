import React from 'react';
import { useSelector } from 'react-redux';
import { selectWomenCategoryData } from '../redux/slices/womencategory/womenCategorySlice';
import WomenCategoryCard from './WomenCategoryCard';

export default function WomenCategoryGrid() {
    const categories = useSelector(selectWomenCategoryData);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((cat, index) => (
                <WomenCategoryCard key={index} category={cat} />
            ))}
        </div>
    );
}
