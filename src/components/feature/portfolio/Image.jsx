import PropTypes from 'prop-types';

const Image = ({ imagePath, alt, supportsVariants = false }) => {
  const getImageSrc = (mode, ext) => (supportsVariants ? `${imagePath}/${mode}/img.${ext}` : `${imagePath}/img.${ext}`);

  return (
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

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  supportsVariants: PropTypes.bool,
};

export default Image;
