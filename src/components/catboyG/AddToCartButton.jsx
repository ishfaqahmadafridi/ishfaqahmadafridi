import React from 'react';

export default function AddToCartButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-black text-white text-[10px] md:text-xs font-bold py-2.5 rounded uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95 shadow-sm"
        >
            Add to Cart
        </button>
    );
}
