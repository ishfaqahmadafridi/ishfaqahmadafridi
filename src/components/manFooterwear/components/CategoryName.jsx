/**
 * CategoryName - Displays category name
 */
import PropTypes from 'prop-types';

function CategoryName({ name }) {
  return <span>{name}</span>;
}

CategoryName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryName;
