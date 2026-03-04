import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartSubtotal, selectCartTotalQuantity } from '../redux/slices/cart/cartSlice';
import CartList from './CartList';
import CartSummary from './CartSummary';

export default function CartLayout({ setPage }) {
    const items = useSelector(selectCartItems);
    const subtotal = useSelector(selectCartSubtotal);
    const totalQuantity = useSelector(selectCartTotalQuantity);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
                <CartList items={items} setPage={setPage} />
            </div>
            {items.length > 0 && (
                <CartSummary subtotal={subtotal} totalQuantity={totalQuantity} />
            )}
        </div>
    );
}
