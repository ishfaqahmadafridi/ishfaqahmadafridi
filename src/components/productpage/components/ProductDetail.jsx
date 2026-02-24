/**
 * Product Detail Container Component
 * Main container for product images and info
 */
import PropTypes from 'prop-types';
import { ProductImages } from './ProductImages';
import { ProductInfo } from './ProductInfo';
import { ProductDetails } from './ProductDetails';

export function ProductDetail({ 
  product,
  selectedSize,
  quantity,
  onSizeSelect,
  onQuantityChange,
  onAddToCart
}) {
  return (
    <div className="product-detail">
      <ProductImages images={product.images} name={product.name} />
      <ProductInfo
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
        discount={product.discount}
        selectedSize={selectedSize}
        quantity={quantity}
        onSizeSelect={onSizeSelect}
        onQuantityChange={onQuantityChange}
        onAddToCart={onAddToCart}
      />
      <ProductDetails details={product.details} />
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    details: PropTypes.object,
  }).isRequired,
  selectedSize: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onSizeSelect: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
