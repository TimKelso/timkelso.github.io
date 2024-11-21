// ==================== IMPORTS ===============================================

import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

// ==================== COMPONENT =============================================

const PortfolioCategory = ({ title, projects }) => {
  return (
    // --------------------- JSX ------------------------------------------------
    <>
      <div>
        <h3 className="text-center font-serif text-3xl">{title}</h3>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};

// ==================== PROP TYPES ============================================

PortfolioCategory.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// ==================== EXPORTS ===============================================
export default PortfolioCategory;
