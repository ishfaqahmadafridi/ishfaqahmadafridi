import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSize, selectSelectedSize } from '../redux/slices/product/productSlice';

export default function SizeSelector({ sizes }) {
    const dispatch = useDispatch();
    const currentSize = useSelector(selectSelectedSize);
    return (
        <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Select Size</label>
            <div className="flex gap-3">
                {sizes.map(size => (
                    <button
                        key={size}
                        onClick={() => dispatch(setSelectedSize(size))}
                        className={`w-12 h-12 flex items-center justify-center border-2 transition-all font-bold ${currentSize === size ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-600 hover:border-gray-400'
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}
