import type { JSX } from 'react';
import { logo } from '../../data/brand';

interface LogoProps {
  className?: string;
  /** Accessible name. Pass an empty string where the logo sits next to the same text, to hide it from assistive technology. */
  title?: string;
}

/*
 * The TK monogram, coloured by the active realm through the --brand-*
 * custom properties. It is drawn without its disc: on the page, the
 * background already is the disc colour.
 */
function Logo({ className, title = 'Tim Kelso' }: LogoProps): JSX.Element {
  const decorative = title === '';

  return (
    <svg
      viewBox={logo.viewBox}
      className={className}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
      fill="none"
      strokeWidth={logo.strokeWidth}
      strokeLinecap="round"
    >
      {logo.strokes.map(({ tone, x1, y1, x2, y2 }, index) => (
        <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`var(--brand-${tone + 1})`} />
      ))}
    </svg>
  );
}

export default Logo;
