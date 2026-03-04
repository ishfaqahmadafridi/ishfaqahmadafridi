import React from 'react';

export default function EmptyCart({ setPage }) {
    return (
        <div className="text-center py-24 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-gray-200 mb-6 flex justify-center">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-8 px-4">Items added to your cart will appear here.</p>
            <button
                onClick={() => setPage('home')}
                className="px-10 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
                Start Shopping
            </button>
        </div>
    );
}
