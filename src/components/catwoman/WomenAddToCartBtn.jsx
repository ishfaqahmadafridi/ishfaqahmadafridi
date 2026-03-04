import React from 'react';

export default function WomenAddToCartBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-black text-white text-xs font-black py-4 rounded-sm uppercase tracking-widest hover:bg-rose-900 transition-all active:scale-95 shadow-md"
        >
            Add to bag
        </button>
    );
}
