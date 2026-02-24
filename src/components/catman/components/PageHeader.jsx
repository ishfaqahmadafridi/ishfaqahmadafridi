import PropTypes from 'prop-types';

/**
 * PageHeader - Main page heading component
 */
const PageHeader = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
      {title}
    </h1>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
