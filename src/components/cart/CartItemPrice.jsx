import React from 'react';
import { formatPrice } from '../../lib/utils';

export default function CartItemPrice({ quantity, price, totalPrice }) {
    return (
        <>
            <div className="hidden md:block text-sm text-gray-600 font-medium px-4 text-center">
                {quantity} × {formatPrice(price)}
            </div>
            <div className="text-sm md:text-lg font-bold text-gray-900 text-right min-w-[80px] md:min-w-[120px]">
                {formatPrice(totalPrice)}
            </div>
        </>
    );
}
