/**
 * Product Info Section Component
 * Container for product information (title, price, size, quantity, cart button)
 */
import PropTypes from 'prop-types';
import { ProductTitle } from './ProductTitle';
import { PriceSection } from './PriceSection';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';
import { AddToCartButton } from './AddToCartButton';

export function ProductInfo({ 
  name, 
  price, 
  originalPrice, 
  discount,
  selectedSize,
  quantity,
  onSizeSelect,
  onQuantityChange,
  onAddToCart
}) {
  return (
    <div className="product-info">
      <ProductTitle name={name} />
      <PriceSection 
        price={price} 
        originalPrice={originalPrice} 
        discount={discount} 
      />
      <SizeSelector 
        selectedSize={selectedSize} 
        onSizeSelect={onSizeSelect} 
      />
      <QuantitySelector 
        quantity={quantity} 
        onQuantityChange={onQuantityChange} 
      />
      <AddToCartButton onClick={onAddToCart} />
    </div>
  );
}

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.number,
  selectedSize: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onSizeSelect: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
