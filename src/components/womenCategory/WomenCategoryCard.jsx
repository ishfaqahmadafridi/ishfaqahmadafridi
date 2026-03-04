import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setSelectedCategory } from '../redux/slices/uiSlice/uiSlice';

export default function WomenCategoryCard({ category, onClick }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedCategory(category.key));
        dispatch(setPage('women'));
    };

    return (
        <div
            className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
            onClick={handleClick}
        >
            <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/90 via-transparent to-transparent flex items-end p-8">
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{category.name}</h3>
                    <div className="w-10 h-1 bg-white group-hover:w-20 transition-all duration-500" />
                </div>
            </div>
        </div>
    );
}
