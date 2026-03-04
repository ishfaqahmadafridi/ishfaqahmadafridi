import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import SkincareProductImage from './SkincareProductImage';
import SkincareProductInfo from './SkincareProductInfo';

export default function SkincareProductCard({ product, showDiscount }) {
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
            <SkincareProductImage src={product.image} name={product.name} shadow discount={showDiscount ? product.discount : null} />
            <SkincareProductInfo product={product} />
        </div>
    );
}
