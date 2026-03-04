import React from 'react';

export default function FragranceAddToCartBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-black text-white text-xs font-black py-3.5 rounded-lg uppercase tracking-[0.2em] hover:bg-amber-600 transition-all active:scale-95 shadow-lg hover:shadow-amber-200"
        >
            Add to bag
        </button>
    );
}
