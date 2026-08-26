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

  // Ordered most to least specific: the browser picks the first <source>
  // whose media and type it supports, so the dark variants must come first.
  const sources = (
    <>
      {supportsVariants && (
        <>
          <source media="(prefers-color-scheme: dark)" srcSet={getImageSrc('dark_mode', 'avif')} type="image/avif" />
          <source media="(prefers-color-scheme: dark)" srcSet={getImageSrc('dark_mode', 'webp')} type="image/webp" />
          <source media="(prefers-color-scheme: dark)" srcSet={getImageSrc('dark_mode', 'jpg')} type="image/jpeg" />
        </>
      )}
      <source srcSet={getImageSrc('light_mode', 'avif')} type="image/avif" />
      <source srcSet={getImageSrc('light_mode', 'webp')} type="image/webp" />
    </>
  );

  // A <picture> may only wrap one <img>; its <source> list applies to that
  // image alone. The decorative glow therefore needs its own <picture>,
  // otherwise it falls through to the jpg and downloads a second copy.
  return (
    <div className="relative mx-auto">
      <picture>
        {sources}
        <img className={imgClasses} src={getImageSrc('light_mode', 'jpg')} alt={alt} loading="lazy" />
      </picture>
      <picture>
        {sources}
        <img className={blurImgClasses} src={getImageSrc('light_mode', 'jpg')} aria-hidden="true" alt="" loading="lazy" />
      </picture>
    </div>
  );
};

export default Image;
