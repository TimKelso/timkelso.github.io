// ==================== IMPORTS ===============================================

import PropTypes from 'prop-types';

// ==================== COMPONENT =============================================

const Image = ({ imagePath, alt, supportsVariants = false }) => {
  // --------------------- FUNCTIONS ------------------------------------------

  // Generates image source paths for light/dark mode or fallback.
  const getImageSrc = (mode, ext) => (supportsVariants ? `${imagePath}/${mode}/img.${ext}` : `${imagePath}/img.${ext}`);

  return (
    // --------------------- JSX ----------------------------------------------
    <>
      {supportsVariants ? (
        <>
          <picture className="dark:hidden">
            <source srcSet={getImageSrc('light_mode', 'avif')} type="image/avif" />
            <source srcSet={getImageSrc('light_mode', 'webp')} type="image/webp" />
            <img className="rounded-xl" src={getImageSrc('light_mode', 'jpg')} alt={alt} loading="lazy" />
          </picture>

          <picture className="hidden dark:block">
            <source srcSet={getImageSrc('dark_mode', 'avif')} type="image/avif" />
            <source srcSet={getImageSrc('dark_mode', 'webp')} type="image/webp" />
            <img className="rounded-xl" src={getImageSrc('dark_mode', 'jpg')} alt={alt} loading="lazy" />
          </picture>
        </>
      ) : (
        <picture>
          <source srcSet={getImageSrc('', 'avif')} type="image/avif" />
          <source srcSet={getImageSrc('', 'webp')} type="image/webp" />
          <img className="rounded-xl" src={getImageSrc('', 'jpg')} alt={alt} loading="lazy" />
        </picture>
      )}
    </>
  );
};

// ==================== PROP TYPES ============================================

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  supportsVariants: PropTypes.bool, // Indicates whether dark/light mode variants are supported.
};

// ==================== EXPORTS ===============================================

export default Image;
