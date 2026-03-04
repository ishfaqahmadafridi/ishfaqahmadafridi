import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import FragranceProductImage from './FragranceProductImage';
import FragranceProductInfo from './FragranceProductInfo';

export default function FragranceProductCard({ product, showDiscount }) {
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
            <FragranceProductImage src={product.image} name={product.name} shadow discount={showDiscount ? product.discount : null} />
            <FragranceProductInfo product={product} />
        </div>
    );
}
