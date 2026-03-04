import React from 'react';
import { formatPrice } from '../../lib/utils';

export default function ProductPrice({ price, originalPrice }) {
    return (
        <div className="flex items-baseline gap-2">
            <span className="text-sm md:text-base font-bold text-gray-900">{formatPrice(price)}</span>
            {originalPrice && (
                <span className="text-[10px] md:text-xs text-gray-400 line-through">{formatPrice(originalPrice)}</span>
            )}
        </div>
    );
}
