import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cart/cartSlice';
import FragranceProductTitle from './FragranceProductTitle';
import FragranceProductPrice from './FragranceProductPrice';
import FragranceStockIndicator from './FragranceStockIndicator';
import FragranceAddToCartBtn from './FragranceAddToCartBtn';
import type { FragranceProductInfoProps } from '../interfaces/catfragrance/catfragranceInterface';

export default function FragranceProductInfo({ product }: FragranceProductInfoProps) {
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(addToCart({ ...product, quantity: 1, size: 'OS' }));
    };

    return (
        <div className="p-5 flex flex-col flex-1 space-y-4">
            <div className="flex-1 space-y-2">
                <FragranceProductTitle name={product.name} />
                <FragranceProductPrice price={product.price} originalPrice={product.originalPrice} />
            </div>
            <FragranceStockIndicator />
            <FragranceAddToCartBtn onClick={handleAddToCart} />
        </div>
    );
}
