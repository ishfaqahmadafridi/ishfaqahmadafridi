import React from 'react';
import { formatPrice } from '../../lib/utils';

export default function SkincareProductPrice({ price, originalPrice }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-base md:text-xl font-black text-gray-900">{formatPrice(price)}</span>
            {originalPrice && (
                <span className="text-xs text-gray-400 line-through decoration-emerald-200">{formatPrice(originalPrice)}</span>
            )}
        </div>
    );
}
