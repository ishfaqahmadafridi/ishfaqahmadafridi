import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cart/cartSlice';
import MakeupProductTitle from './MakeupProductTitle';
import MakeupProductPrice from './MakeupProductPrice';
import MakeupStockIndicator from './MakeupStockIndicator';
import MakeupAddToCartBtn from './MakeupAddToCartBtn';
import type { MakeupProductInfoProps } from '../interfaces/catmakeup/catmakeupInterface';

export default function MakeupProductInfo({ product }: MakeupProductInfoProps) {
    const dispatch = useDispatch();

    return (
        <div className="p-5 flex flex-col flex-1 space-y-4">
            <div className="flex-1 space-y-2">
                <MakeupProductTitle name={product.name} />
                <MakeupProductPrice price={product.price} originalPrice={product.originalPrice} />
            </div>
            <MakeupStockIndicator />
            <MakeupAddToCartBtn onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart({ ...product, quantity: 1, size: 'Standard' }));
            }} />
        </div>
    );
}
