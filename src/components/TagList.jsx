// ==================== IMPORTS ===============================================

import PropTypes from 'prop-types';

// ==================== COMPONENT =============================================

const TagList = ({ tags }) => (
  <>
    <ul className="flex flex-wrap gap-2 text-xs">
      {tags.map((tag, index) => (
        <li key={index} className="select-none rounded-full border border-black px-1 py-0.5 dark:border-gray-300">
          {tag}
        </li>
      ))}
    </ul>
  </>
);

// ==================== PROP TYPES ============================================

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// ==================== EXPORTS ===============================================

export default TagList;
