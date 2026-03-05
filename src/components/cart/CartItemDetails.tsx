import React from 'react';
import { formatPrice } from '../../lib/utils';
import { CartItemDetailsProps } from '../interfaces/cart/cartInterface';

export default function CartItemDetails({ name, size, price, quantity }: CartItemDetailsProps) {
    return (
        <div className="flex-1 min-w-0">
            <h3 className="text-sm md:text-base font-semibold text-gray-900 truncate">{name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">Size: {size}</p>
            <div className="mt-1 md:hidden text-xs font-medium text-gray-600">
                {quantity} × {formatPrice(price)}
            </div>
        </div>
    );
}
