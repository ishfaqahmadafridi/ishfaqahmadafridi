import React from 'react';

export default function CartHeader({ totalQuantity, setPage }) {
    return (
        <div>
            <button
                onClick={() => setPage('home')}
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
                ← Continue Shopping
            </button>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Shopping Cart <span className="text-gray-400 font-light ml-2">({totalQuantity})</span>
            </h1>
        </div>
    );
}
