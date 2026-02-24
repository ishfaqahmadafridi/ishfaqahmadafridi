/**
 * Category Name Component
 * Displays category name
 */
import PropTypes from 'prop-types';

export function CategoryName({ name }) {
  return <span>{name}</span>;
}

CategoryName.propTypes = {
  name: PropTypes.string.isRequired,
};
