import React from 'react';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

export default function CartList({ items }) {
    if (items.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
            {items.map(item => (
                <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))}
        </div>
    );
}
