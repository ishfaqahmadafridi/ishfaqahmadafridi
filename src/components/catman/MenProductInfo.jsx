import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cart/cartSlice';
import MenProductTitle from './MenProductTitle';
import MenProductPrice from './MenProductPrice';
import MenStockIndicator from './MenStockIndicator';
import MenAddToCartBtn from './MenAddToCartBtn';

export default function MenProductInfo({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addToCart({ ...product, quantity: 1, size: 'M' })); // Default size M for men
    };

    return (
        <div className="p-5 flex flex-col flex-1 space-y-4">
            <div className="flex-1 space-y-2">
                <MenProductTitle name={product.name} />
                <MenProductPrice price={product.price} originalPrice={product.originalPrice} />
            </div>
            <MenStockIndicator />
            <MenAddToCartBtn onClick={handleAddToCart} />
        </div>
    );
}
