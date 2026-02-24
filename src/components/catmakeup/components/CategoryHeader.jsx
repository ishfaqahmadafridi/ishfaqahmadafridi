import PropTypes from 'prop-types';

/**
 * CategoryHeader - Displays hero image and category name
 */
const CategoryHeader = ({ name, heroImage }) => {
  return (
    <div className="mb-8">
      <img
        src={heroImage}
        alt={name}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
      />
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        {name}
      </h2>
    </div>
  );
};

CategoryHeader.propTypes = {
  name: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
};

export default CategoryHeader;
