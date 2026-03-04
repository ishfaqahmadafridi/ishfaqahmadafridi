import React from 'react';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import StockIndicator from './StockIndicator';
import AddToCartButton from './AddToCartButton';

export default function ProductInfo({ product }) {
    return (
        <div className="p-4 flex flex-col flex-1 space-y-3">
            <div className="flex-1 space-y-1">
                <ProductTitle name={product.name} />
                <ProductPrice price={product.price} originalPrice={product.originalPrice} />
            </div>
            <StockIndicator />
            <AddToCartButton />
        </div>
    );
}
