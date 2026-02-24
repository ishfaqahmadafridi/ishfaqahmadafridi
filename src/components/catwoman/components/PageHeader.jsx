/**
 * PageHeader - Main page heading
 */
import PropTypes from 'prop-types';

function PageHeader({ title }) {
  return <h1 className="page-header">{title}</h1>;
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
