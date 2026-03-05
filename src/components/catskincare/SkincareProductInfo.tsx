import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cart/cartSlice';
import SkincareProductTitle from './SkincareProductTitle';
import SkincareProductPrice from './SkincareProductPrice';
import SkincareStockIndicator from './SkincareStockIndicator';
import SkincareAddToCartBtn from './SkincareAddToCartBtn';
import type { SkincareProductInfoProps } from '../interfaces/catskincare/catskincareInterface';

export default function SkincareProductInfo({ product }: SkincareProductInfoProps) {
    const dispatch = useDispatch();

    return (
        <div className="p-5 flex flex-col flex-1 space-y-4">
            <div className="flex-1 space-y-2">
                <SkincareProductTitle name={product.name} />
                <SkincareProductPrice price={product.price} originalPrice={product.originalPrice} />
            </div>
            <SkincareStockIndicator />
            <SkincareAddToCartBtn onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart({ ...product, quantity: 1, size: 'OS' }));
            }} />
        </div>
    );
}
