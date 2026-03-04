import React from 'react';

export default function AddToCartBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-black text-white text-xs font-black py-5 rounded-lg uppercase tracking-[0.3em] hover:bg-white hover:text-black border-2 border-black transition-all duration-300 transform active:scale-95"
        >
            Add To Shopping Bag
        </button>
    );
}
