import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import SkincareProductImage from './SkincareProductImage';
import SkincareProductInfo from './SkincareProductInfo';
import type { SkincareProductCardProps } from '../interfaces/catskincare/catskincareInterface';

export default function SkincareProductCard({ product, showDiscount }: SkincareProductCardProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setSelectedProduct(product));
        navigate(`/product/${product.id}`);
    };

    return (
        <div
            className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
            onClick={handleClick}
        >
            <SkincareProductImage src={product.image} name={product.name} discount={showDiscount ? product.discount : null} />
            <SkincareProductInfo product={product} />
        </div>
    );
}
