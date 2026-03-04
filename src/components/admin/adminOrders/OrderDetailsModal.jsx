import React from 'react';

export default function OrderDetailsModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Order Details</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-6 space-y-4">
          {/* Order Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="font-semibold">{order.order_number}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Customer</p>
              <p className="font-semibold">{order.user_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="font-semibold">${order.total_amount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Order Date</p>
              <p className="font-semibold">{new Date(order.created_at).toLocaleString()}</p>
            </div>
          </div>
          
          {/* Shipping Address */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Shipping Address</p>
            <p className="text-gray-900">{order.shipping_address}</p>
          </div>

          {/* Order Items */}
          {order.items && order.items.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Order Items</p>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{item.product_name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity} × ${item.price}</p>
                    </div>
                    <p className="font-semibold">${item.total_price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {order.notes && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Notes</p>
              <p className="text-gray-900">{order.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
