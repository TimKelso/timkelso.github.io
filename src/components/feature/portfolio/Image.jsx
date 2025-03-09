import PropTypes from 'prop-types';

const Image = ({ imagePath, alt, supportsVariants = false }) => {
  const getImageSrc = (mode, ext) => (supportsVariants ? `${imagePath}/${mode}/img.${ext}` : `${imagePath}/img.${ext}`);

  const imgClasses = 'rounded-xl max-h-[40svh] mx-auto';

  return (
    <>
      {supportsVariants ? (
        <>
          <picture className="dark:hidden">
            <source srcSet={getImageSrc('light_mode', 'avif')} type="image/avif" />
            <source srcSet={getImageSrc('light_mode', 'webp')} type="image/webp" />
            <img className={imgClasses} src={getImageSrc('light_mode', 'jpg')} alt={alt} loading="lazy" />
          </picture>

          <picture className="hidden dark:block">
            <source srcSet={getImageSrc('dark_mode', 'avif')} type="image/avif" />
            <source srcSet={getImageSrc('dark_mode', 'webp')} type="image/webp" />
            <img className={imgClasses} src={getImageSrc('dark_mode', 'jpg')} alt={alt} loading="lazy" />
          </picture>
        </>
      ) : (
        <picture>
          <source srcSet={getImageSrc('', 'avif')} type="image/avif" />
          <source srcSet={getImageSrc('', 'webp')} type="image/webp" />
          <img className={imgClasses} src={getImageSrc('', 'jpg')} alt={alt} loading="lazy" />
        </picture>
      )}
    </>
  );
};

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  supportsVariants: PropTypes.bool,
};

export default Image;
