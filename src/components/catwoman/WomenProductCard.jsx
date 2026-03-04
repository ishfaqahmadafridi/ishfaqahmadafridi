import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import WomenProductImage from './WomenProductImage';
import WomenProductInfo from './WomenProductInfo';

export default function WomenProductCard({ product, showDiscount }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedProduct(product));
        dispatch(setPage('product'));
    };

    return (
        <div
            className="group bg-white rounded-3xl overflow-hidden border border-rose-50 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={handleClick}
        >
            <WomenProductImage src={product.image} name={product.name} discount={showDiscount ? product.discount : null} />
            <WomenProductInfo product={product} />
        </div>
    );
}
