import { useDispatch, useSelector } from 'react-redux';
import { setQuantity, selectQuantity } from '../redux/slices/product/productSlice';

export default function QuantitySelector() {
    const dispatch = useDispatch();
    const quantity = useSelector(selectQuantity);
    return (
        <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Quantity</label>
            <div className="flex items-center border-2 border-gray-200 w-fit rounded-lg overflow-hidden">
                <button onClick={() => dispatch(setQuantity(quantity - 1))} className="px-4 py-2 hover:bg-gray-100 transition-colors">-</button>
                <span className="px-6 py-2 font-black border-x-2 border-gray-200 bg-white">{quantity}</span>
                <button onClick={() => dispatch(setQuantity(quantity + 1))} className="px-4 py-2 hover:bg-gray-100 transition-colors">+</button>
            </div>
        </div>
    );
}
