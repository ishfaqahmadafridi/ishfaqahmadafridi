import React from 'react';
import { useSelector } from 'react-redux';
import { selectManFootwearCategories } from '../redux/slices/manfoot/manFootwearSlice';
import ManFootwearCard from './ManFootwearCard';

export default function ManFootwearGrid() {
    const categories = useSelector(selectManFootwearCategories);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
                <ManFootwearCard key={cat.id} category={cat} />
            ))}
        </div>
    );
}
