import React from 'react';
import CartSummaryRow from './CartSummaryRow';
import CartCheckoutBtn from './CartCheckoutBtn';

export default function CartSummary({ subtotal, totalQuantity }) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md sticky top-32">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4 text-sm md:text-base">
                <CartSummaryRow label={`Subtotal (${totalQuantity} items)`} value={subtotal} />
                <CartSummaryRow label="Shipping" value="Calculated at checkout" isItalic />
                <CartSummaryRow label="Total" value={subtotal} isBold isLarge />
            </div>
            <CartCheckoutBtn />
        </div>
    );
}
