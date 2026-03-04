import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

export default function ProductCard({ product, onClick, showDiscount }) {
    return (
        <div
            className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={onClick}
        >
            <ProductImage src={product.image} name={product.name} discount={showDiscount ? product.discount : null} />
            <ProductInfo product={product} />
        </div>
    );
}
