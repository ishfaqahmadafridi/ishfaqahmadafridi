import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cart/cartSlice';

export default function CartItemRemove({ id, size }) {
    const dispatch = useDispatch();
    return (
        <button
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all ml-2"
            onClick={() => dispatch(removeFromCart({ id, size }))}
            aria-label="Remove item"
        >
            ×
        </button>
    );
}
