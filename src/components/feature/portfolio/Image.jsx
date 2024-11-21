// ==================== IMPORTS ===============================================

import PropTypes from 'prop-types';

// ==================== COMPONENT =============================================

const Image = ({ imagePath, alt }) => {
  // --------------------- FUNCTIONS ------------------------------------------

  const getImageSrc = (mode, ext) => `${imagePath}/${mode}/img.${ext}`;

  return (
    // --------------------- JSX ------------------------------------------------

    <>
      <picture className="dark:hidden">
        <source srcSet={getImageSrc('light_mode', 'avif')} type="image/avif" />
        <source srcSet={getImageSrc('light_mode', 'webp')} type="image/webp" />
        <img className="max-h-[31.25rem] w-auto rounded-xl" src={getImageSrc('light_mode', 'jpg')} alt={alt} loading="lazy" />
      </picture>
      <picture className="hidden dark:block">
        <source srcSet={getImageSrc('dark_mode', 'avif')} type="image/avif" />
        <source srcSet={getImageSrc('dark_mode', 'webp')} type="image/webp" />
        <img className="max-h-[31.25rem] w-auto rounded-xl" src={getImageSrc('dark_mode', 'jpg')} alt={alt} loading="lazy" />
      </picture>
    </>
  );
};

// ==================== PROP TYPES ============================================

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// ==================== EXPORTS ===============================================

export default Image;
