/**
 * ProductCard - Complete product card with all details
 */
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import AddToCartButton from './AddToCartButton';

function ProductCard({ product, onProductClick }) {
  const handleClick = () => onProductClick(product);

  return (
    <div className="product-card">
      <ProductImage 
        src={product.image} 
        alt={product.name} 
        onClick={handleClick}
      />
      <div className="product-info">
        <ProductTitle title={product.name} onClick={handleClick} />
        <ProductPrice 
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
        />
        <p className="stock">FEW ITEMS LEFT</p>
        <AddToCartButton />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.string,
    image: PropTypes.string.isRequired,
    details: PropTypes.object,
    careInstructions: PropTypes.string,
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductCard;
