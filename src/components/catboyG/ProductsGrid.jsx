import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsGrid({ products, onProductClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onProductClick(product)}
                    showDiscount={index === 0}
                />
            ))}
        </div>
    );
}
