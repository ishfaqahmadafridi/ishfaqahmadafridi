/**
 * SectionTitle - Displays section title
 */
import PropTypes from 'prop-types';

function SectionTitle({ title }) {
  return <h3 className="section-title">{title}</h3>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
