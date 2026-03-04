import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import MakeupProductImage from './MakeupProductImage';
import MakeupProductInfo from './MakeupProductInfo';

export default function MakeupProductCard({ product, showDiscount }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedProduct(product));
        dispatch(setPage('product'));
    };

    return (
        <div
            className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={handleClick}
        >
            <MakeupProductImage src={product.image} name={product.name} shadow discount={showDiscount ? product.discount : null} />
            <MakeupProductInfo product={product} />
        </div>
    );
}
