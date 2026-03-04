import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import MenProductImage from './MenProductImage';
import MenProductInfo from './MenProductInfo';

export default function MenProductCard({ product, showDiscount }) {
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
            <MenProductImage src={product.image} name={product.name} shadow discount={showDiscount ? product.discount : null} />
            <MenProductInfo product={product} />
        </div>
    );
}
