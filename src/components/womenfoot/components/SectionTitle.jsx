/**
 * Section Title Component
 * Displays section title
 */
import PropTypes from 'prop-types';

export function SectionTitle({ title }) {
  return <h3 className="section-title">{title}</h3>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
