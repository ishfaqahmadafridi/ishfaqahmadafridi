import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import FragranceProductImage from './FragranceProductImage';
import FragranceProductInfo from './FragranceProductInfo';
import type { FragranceProductCardProps } from '../interfaces/catfragrance/catfragranceInterface';

export default function FragranceProductCard({ product, showDiscount }: FragranceProductCardProps) {
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
            <FragranceProductImage src={product.image} name={product.name} discount={showDiscount ? product.discount : null} />
            <FragranceProductInfo product={product} />
        </div>
    );
}
