import type { JSX } from 'react';
interface ImageProps {
  imagePath: string;
  alt: string;
  supportsVariants?: boolean;
}

const Image = ({ imagePath, alt, supportsVariants = false }: ImageProps): JSX.Element => {
  const getImageSrc = (mode: string, ext: string) => (supportsVariants ? `${imagePath}/${mode}/img.${ext}` : `${imagePath}/img.${ext}`);

  const imgClasses = 'rounded-xl max-h-[40svh]';
  const blurImgClasses = 'rounded-xl max-h-[40svh] inset-0 absolute -z-1 scale-90 blur-3xl saturate-200';

  const sources = (mode: string) => (
    <>
      <source srcSet={getImageSrc(mode, 'avif')} type="image/avif" />
      <source srcSet={getImageSrc(mode, 'webp')} type="image/webp" />
    </>
  );

  // A <picture> may only wrap one <img>; its <source> list applies to that
  // image alone. The decorative glow therefore needs its own <picture>,
  // otherwise it falls through to the jpg and downloads a second copy.
  const screenshot = (mode: string, visibility = '') => (
    <>
      <picture className={visibility}>
        {sources(mode)}
        <img className={imgClasses} src={getImageSrc(mode, 'jpg')} alt={alt} loading="lazy" />
      </picture>
      <picture className={visibility}>
        {sources(mode)}
        <img className={blurImgClasses} src={getImageSrc(mode, 'jpg')} aria-hidden="true" alt="" loading="lazy" />
      </picture>
    </>
  );

  return (
    <div className="relative mx-auto">
      {supportsVariants ? (
        <>
          {screenshot('light_mode', 'dark:hidden')}
          {screenshot('dark_mode', 'hidden dark:block')}
        </>
      ) : (
        screenshot('')
      )}
    </div>
  );
};

export default Image;
