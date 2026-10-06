/*
 * The brand in data: the TK monogram's geometry and the three realm
 * palettes. This file is the single source for both. vite.config.ts turns
 * the palettes into the per-realm CSS custom properties and the realm-picking
 * script in index.html, and scripts/generate-icons.ts draws the favicons and
 * app icons from the same values -- so a colour or a stroke is only ever
 * changed here.
 */

export const REALMS = ['aqua', 'ignis', 'natura'] as const;
export type Realm = (typeof REALMS)[number];

/** Used wherever a realm cannot be picked at runtime: no-JS, ICO, web app manifest. */
export const DEFAULT_REALM: Realm = 'aqua';

export interface Palette {
  /** The three stroke colours, as designed. brand[0] is the long bar, brand[1] the stem, brand[2] the arms. */
  brand: readonly [string, string, string];
  /**
   * The same three colours, shifted in OKLCH lightness just far enough to
   * reach 4.5:1 as small text on the disc colour of each scheme (hue kept,
   * chroma only reduced where the lighter colour would leave sRGB). A colour
   * that already reaches 4.5:1 is repeated unchanged. Only small text uses
   * these; everything else uses `brand`.
   */
  ink: { lux: readonly [string, string, string]; nox: readonly [string, string, string] };
  /** Disc colour in light mode (Lux) and dark mode (Nox): the page background, and the text colour of the other scheme. */
  lux: string;
  nox: string;
}

export const palettes: Record<Realm, Palette> = {
  aqua: {
    brand: ['#1455E6', '#633BF4', '#8526FB'],
    ink: { lux: ['#1455E6', '#633BF4', '#8526FB'], nox: ['#3474FF', '#7865FF', '#9459FF'] },
    lux: '#E6EBFF',
    nox: '#0F0D26',
  },
  ignis: {
    brand: ['#DB2D1A', '#F15B04', '#E07801'],
    ink: { lux: ['#D72714', '#C24700', '#AB5A00'], nox: ['#E83C28', '#F15B04', '#E07801'] },
    lux: '#FFF4E6',
    nox: '#210903',
  },
  natura: {
    brand: ['#459D01', '#02A757', '#02A186'],
    ink: { lux: ['#378000', '#008142', '#007F69'], nox: ['#459D01', '#02A757', '#02A186'] },
    lux: '#E8FCF0',
    nox: '#02180B',
  },
};

/*
 * The monogram is four pills. A pill is a line with round caps, so each is
 * stored as its centre line; drawn with `strokeWidth` and
 * stroke-linecap="round" it reproduces the Figma rectangles exactly.
 * Coordinates are those of the exported shape (viewBox 0 0 855 903).
 */
export interface LogoStroke {
  /** Index into Palette.brand. */
  tone: 0 | 1 | 2;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export const logo = {
  strokeWidth: 175,
  strokes: [
    { tone: 2, x1: 730.33, y1: 323.74, x2: 382.85, y2: 671.22 },
    { tone: 2, x1: 730.33, y1: 730.37, x2: 543.21, y2: 543.25 },
    { tone: 1, x1: 377, y1: 814.58, x2: 377, y2: 283.58 },
    { tone: 0, x1: 530.33, y1: 123.74, x2: 123.74, y2: 530.33 },
  ] satisfies LogoStroke[],
  /** Bounding box of the strokes alone. */
  viewBox: '0 0 855 903',
  /** The disc behind the monogram in the favicon. The shape sits slightly off its centre, as designed. */
  disc: { cx: 465.5, cy: 497, r: 619 },
} as const;
