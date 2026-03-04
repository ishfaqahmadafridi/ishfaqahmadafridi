import React from 'react';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

export default function CartList({ items, setPage }) {
    if (items.length === 0) {
        return <EmptyCart setPage={setPage} />;
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
            {items.map(item => (
                <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))}
        </div>
    );
}
