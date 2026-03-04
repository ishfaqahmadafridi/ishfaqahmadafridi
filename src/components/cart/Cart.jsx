import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotalQuantity } from '../redux/slices/cart/cartSlice';
import CartHeader from './CartHeader';
import CartLayout from './CartLayout';

export default function Cart({ setPage }) {
  const totalQuantity = useSelector(selectCartTotalQuantity);

  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <CartHeader totalQuantity={totalQuantity} setPage={setPage} />
          <CartLayout setPage={setPage} />
        </div>
      </div>
    </div>
  );
}
