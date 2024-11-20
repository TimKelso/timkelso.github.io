// ==================== IMPORTS ===============================================

// import React from 'react';
import PropTypes from 'prop-types';

// ==================== COMPONENT =============================================

const ProjectCard = ({ date, title, description, tags, imagePath, learnMoreLink, viewProjectLink }) => {
  // --------------------- FUNCTIONS ------------------------------------------

  const getImageSrc = (mode, ext) => `${imagePath}/${mode}/img.${ext}`;

  // --------------------- JSX ------------------------------------------------

  return (
    <article className="h-dvh">
      <div>
        <h5 className="px-5 py-3 text-3xl">{date}</h5>
      </div>
      <div>
        <picture className="dark:hidden">
          <source srcSet={getImageSrc('light_mode', 'avif')} type="image/avif" />
          <source srcSet={getImageSrc('light_mode', 'webp')} type="image/webp" />
          <img src={getImageSrc('light_mode', 'jpg')} alt={`Screenshot of ${title} in light mode`} loading="lazy" />
        </picture>
        <picture className="hidden dark:block">
          <source srcSet={getImageSrc('dark_mode', 'avif')} type="image/avif" />
          <source srcSet={getImageSrc('dark_mode', 'webp')} type="image/webp" />
          <img src={getImageSrc('dark_mode', 'jpg')} alt={`Screenshot of ${title} in dark mode`} loading="lazy" />
        </picture>
      </div>
      <div className="px-5 py-3">
        <div className="mb-5">
          <h4 className="mb-1 text-2xl">{title}</h4>
          <p className="mb-1 text-pretty">{description}</p>
          <ul className="flex flex-wrap gap-2 text-xs">
            {tags.map((tag, index) => (
              <li key={index} className="select-none rounded-full border border-black px-1 py-0.5 dark:border-gray-300">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-10">
          <button className="flex rounded-md bg-gray-300 px-2 py-1 font-semibold text-gray-950" onClick={() => window.open(learnMoreLink)}>
            Learn More
            <i className="material-symbols-outlined ml-1">info</i>
          </button>
          <button className="flex rounded-md bg-gray-300 px-2 py-1 font-semibold text-gray-950" onClick={() => window.open(viewProjectLink)}>
            View Project
            <i className="material-symbols-outlined ml-1">open_in_new</i>
          </button>
        </div>
      </div>
    </article>
  );
};

// ==================== EXPORTS ===============================================

export default ProjectCard;

// ==================== PROP TYPES ============================================

ProjectCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string.isRequired,
  viewProjectLink: PropTypes.string.isRequired,
};
