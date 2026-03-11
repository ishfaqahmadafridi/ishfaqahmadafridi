import { useNavigate } from 'react-router-dom';
import { useUiStore } from '../zustand/ui/uiStore';
import { useProductStore } from '../zustand/product/productStore';
import { useCartStore } from '../zustand/cart/cartStore';
import BackButton from './BackButton';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';

export default function ProductPage() {
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);
    const product = useUiStore((state) => state.selectedProduct);
    const selectedSize = useProductStore((state) => state.selectedSize);
    const quantity = useProductStore((state) => state.quantity);

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
                            addToCart({ ...product, size: selectedSize, quantity });
                            navigate('/cart');
                        }}
                    />
                    <ProductDetails details={product.details} />
                </div>
            </div>
        </div>
    );
}
