interface ImageProps {
  imagePath: string;
  alt: string;
  supportsVariants?: boolean;
}

const Image = ({ imagePath, alt, supportsVariants = false }: ImageProps): JSX.Element => {
  const getImageSrc = (mode: string, ext: string) => (supportsVariants ? `${imagePath}/${mode}/img.${ext}` : `${imagePath}/img.${ext}`);

  const imgClasses = 'rounded-xl max-h-[40svh]';
  const blurImgClasses = 'rounded-xl max-h-[40svh] inset-0 absolute -z-1 scale-90 blur-3xl saturate-200';

  return (
    <div className="relative mx-auto">
      {supportsVariants ? (
        <>
          <picture className="dark:hidden">
            <source srcSet={getImageSrc('light_mode', 'avif')} type="image/avif" />
            <source srcSet={getImageSrc('light_mode', 'webp')} type="image/webp" />
            <img className={imgClasses} src={getImageSrc('light_mode', 'jpg')} alt={alt} loading="lazy" />
            <img className={blurImgClasses} src={getImageSrc('light_mode', 'jpg')} aria-hidden="true" alt="" loading="lazy" />
          </picture>

          <picture className="hidden dark:block">
            <source srcSet={getImageSrc('dark_mode', 'avif')} type="image/avif" />
            <source srcSet={getImageSrc('dark_mode', 'webp')} type="image/webp" />
            <img className={imgClasses} src={getImageSrc('dark_mode', 'jpg')} alt={alt} loading="lazy" />
            <img className={blurImgClasses} src={getImageSrc('dark_mode', 'jpg')} aria-hidden="true" alt="" loading="lazy" />
          </picture>
        </>
      ) : (
        <picture>
          <source srcSet={getImageSrc('', 'avif')} type="image/avif" />
          <source srcSet={getImageSrc('', 'webp')} type="image/webp" />
          <img className={imgClasses} src={getImageSrc('', 'jpg')} alt={alt} loading="lazy" />
          <img className={blurImgClasses} src={getImageSrc('', 'jpg')} aria-hidden="true" alt="" loading="lazy" />
        </picture>
      )}
    </div>
  );
};

export default Image;
