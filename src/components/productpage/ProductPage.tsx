import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSelectedProduct } from '../redux/slices/uiSlice/uiSlice';
import { selectSelectedSize, selectQuantity } from '../redux/slices/product/productSlice';
import { addToCart } from '../redux/slices/cart/cartSlice';
import BackButton from './BackButton';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';

export default function ProductPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector(selectSelectedProduct);
    const selectedSize = useSelector(selectSelectedSize);
    const quantity = useSelector(selectQuantity);

    if (!product) return <div className="pt-24 text-center">Product not found</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
            <BackButton onClick={() => navigate(-1)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <ProductImages images={product.images || [product.image]} name={product.name} />
                <div className="space-y-8">
                    <ProductInfo
                        product={product}
                        onAddToCart={() => {
                            dispatch(addToCart({ ...product, size: selectedSize, quantity }));
                            navigate('/cart');
                        }}
                    />
                    <ProductDetails details={product.details} />
                </div>
            </div>
        </div>
    );
}
