// ==================== IMPORTS ===============================================

import Project from './Project';
import PropTypes from 'prop-types';

// ==================== COMPONENT =============================================

const Category = ({ title, projects }) => {
  return (
    // --------------------- JSX ------------------------------------------------
    <>
      <div>
        <h3 className="text-center font-serif text-3xl">{title}</h3>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </>
  );
};

// ==================== PROP TYPES ============================================

Category.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// ==================== EXPORTS ===============================================
export default Category;
