/*
 * Regenerate the favicons and app icons in public/ from src/data/brand.ts.
 *
 * Usage:
 *     npm run icons
 *
 * The monogram is only a disc and four round-capped lines, so the PNGs are
 * drawn here directly: each pixel's coverage comes from its exact distance
 * to the nearest edge, which anti-aliases as cleanly as an SVG renderer
 * without needing one as a dependency.
 *
 * Writes:
 *   public/assets/favicon/<realm>.svg                 vector favicon; its disc follows the OS light/dark setting
 *   public/assets/favicon/apple-touch-icon-<realm>.png  180px, full bleed (iOS rounds the corners itself)
 *   public/assets/favicon/icon-{192,512}.png           web app manifest, purpose "any"
 *   public/assets/favicon/icon-maskable-512.png        web app manifest, purpose "maskable"
 *   public/favicon.ico                                 16/32/48px, for clients that only ever ask for /favicon.ico
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { crc32, deflateSync } from 'node:zlib';
import { DEFAULT_REALM, logo, palettes, REALMS, type Realm } from '../src/data/brand.ts';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const FAVICON_DIR = join(PUBLIC, 'assets', 'favicon');

const { cx, cy, r } = logo.disc;

/** A square region of logo coordinates: [left, top, side]. */
type Frame = readonly [number, number, number];

/** Exactly the disc. */
const DISC_FRAME: Frame = [cx - r, cy - r, 2 * r];
/** The disc shrunk to the maskable safe zone, a circle 80% of the icon's width. */
const MASKABLE_FRAME: Frame = [cx - r / 0.8, cy - r / 0.8, (2 * r) / 0.8];

// ---------------------------------------------------------------- SVG

function faviconSvg(realm: Realm): string {
  const { brand, lux, nox } = palettes[realm];
  const lines = logo.strokes
    .map(({ tone, x1, y1, x2, y2 }) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${brand[tone]}"/>`)
    .join('');

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${DISC_FRAME.join(' ')} ${DISC_FRAME[2]}">`,
    `<style>circle{fill:${lux}}@media (prefers-color-scheme:dark){circle{fill:${nox}}}</style>`,
    `<circle cx="${cx}" cy="${cy}" r="${r}"/>`,
    `<g stroke-width="${logo.strokeWidth}" stroke-linecap="round">${lines}</g>`,
    `</svg>\n`,
  ].join('');
}

// ---------------------------------------------------------------- raster

type Rgb = readonly [number, number, number];

function hexToRgb(hex: string): Rgb {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Signed distance from (px, py) to the edge of a round-capped line; negative inside. */
function lineDistance(px: number, py: number, x1: number, y1: number, x2: number, y2: number, radius: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy)) - radius;
}

/**
 * Draws the monogram into a size x size RGBA buffer covering `frame`.
 * The background is the realm's Lux disc colour, either as the disc itself
 * (transparent outside it) or filling the whole square.
 */
function render(realm: Realm, size: number, frame: Frame, background: 'disc' | 'square'): Buffer {
  const { brand, lux } = palettes[realm];
  const [left, top, side] = frame;
  const unitsPerPixel = side / size;
  const pixels = Buffer.alloc(size * size * 4);

  // Coverage of a pixel by a shape whose edge is `distance` away from its centre.
  const coverage = (distance: number) => Math.max(0, Math.min(1, 0.5 - distance / unitsPerPixel));

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const px = left + (x + 0.5) * unitsPerPixel;
      const py = top + (y + 0.5) * unitsPerPixel;

      let alpha = background === 'square' ? 1 : coverage(Math.hypot(px - cx, py - cy) - r);
      let [red, green, blue] = hexToRgb(lux);

      // Strokes are painted in order over the background, as in the SVG.
      for (const { tone, x1, y1, x2, y2 } of logo.strokes) {
        const a = coverage(lineDistance(px, py, x1, y1, x2, y2, logo.strokeWidth / 2));
        if (a === 0) continue;
        const [sr, sg, sb] = hexToRgb(brand[tone]);
        const outAlpha = a + alpha * (1 - a);
        red = (sr * a + red * alpha * (1 - a)) / outAlpha;
        green = (sg * a + green * alpha * (1 - a)) / outAlpha;
        blue = (sb * a + blue * alpha * (1 - a)) / outAlpha;
        alpha = outAlpha;
      }

      pixels.set([Math.round(red), Math.round(green), Math.round(blue), Math.round(alpha * 255)], (y * size + x) * 4);
    }
  }

  return pixels;
}

function png(rgba: Buffer, size: number): Buffer {
  const chunk = (type: string, data: Buffer) => {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length);
    const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body));
    return Buffer.concat([length, body, crc]);
  };

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header.set([8, 6, 0, 0, 0], 8); // 8-bit RGBA, no interlacing

  // Each scanline is prefixed with its filter type; 0 leaves it unfiltered.
  const rowBytes = size * 4;
  const raw = Buffer.alloc(size * (rowBytes + 1));
  for (let y = 0; y < size; y++) rgba.copy(raw, y * (rowBytes + 1) + 1, y * rowBytes, (y + 1) * rowBytes);

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/** An ICO file whose images are stored as PNGs, which every browser accepts. */
function ico(images: { size: number; data: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0);
    entry.writeUInt8(size, 1);
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map(({ data }) => data)]);
}

// ---------------------------------------------------------------- output

function write(path: string, data: string | Buffer): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, data);
  console.log(`${(Buffer.byteLength(data) / 1024).toFixed(1).padStart(6)} KB  ${path}`);
}

const renderPng = (realm: Realm, size: number, frame: Frame, background: 'disc' | 'square') => png(render(realm, size, frame, background), size);

for (const realm of REALMS) {
  write(join(FAVICON_DIR, `${realm}.svg`), faviconSvg(realm));
  write(join(FAVICON_DIR, `apple-touch-icon-${realm}.png`), renderPng(realm, 180, DISC_FRAME, 'square'));
}

for (const size of [192, 512]) {
  write(join(FAVICON_DIR, `icon-${size}.png`), renderPng(DEFAULT_REALM, size, DISC_FRAME, 'disc'));
}
write(join(FAVICON_DIR, 'icon-maskable-512.png'), renderPng(DEFAULT_REALM, 512, MASKABLE_FRAME, 'square'));

write(join(PUBLIC, 'favicon.ico'), ico([16, 32, 48].map((size) => ({ size, data: renderPng(DEFAULT_REALM, size, DISC_FRAME, 'disc') }))));
