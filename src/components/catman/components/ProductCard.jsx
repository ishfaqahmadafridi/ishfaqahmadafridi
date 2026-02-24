import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import ProductInfo from './ProductInfo';
import AddToCartButton from './AddToCartButton';

/**
 * ProductCard - Complete product card with all information
 */
const ProductCard = ({ product, onProductClick }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('Add to cart:', product.name);
  };

  return (
    <div
      onClick={() => onProductClick(product)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
    >
      <ProductImage src={product.image} alt={product.name} />
      <div className="p-4">
        <ProductTitle name={product.name} />
        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
        />
        <ProductInfo details={product.details} />
        <AddToCartButton onClick={handleAddToCart} />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.string,
    image: PropTypes.string.isRequired,
    details: PropTypes.shape({
      fitType: PropTypes.string,
      designDetails: PropTypes.string,
      material: PropTypes.string,
      modelInfo: PropTypes.string,
    }),
    careInstructions: PropTypes.string,
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductCard;
