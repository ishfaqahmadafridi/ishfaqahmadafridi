/**
 * ManFootwearCatalog - Main catalog component with title and grid
 */
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import CategoryGrid from './CategoryGrid';

function ManFootwearCatalog({ title, categories }) {
  return (
    <>
      <SectionTitle title={title} />
      <CategoryGrid categories={categories} />
    </>
  );
}

ManFootwearCatalog.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ManFootwearCatalog;
