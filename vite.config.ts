import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import { palettes, REALMS } from './src/data/brand.ts';

/*
 * Writes the realm palettes from src/data/brand.ts into index.html, so they
 * exist before the first paint and live in exactly one place:
 *
 * - a <style> with each realm's raw colours as custom properties on
 *   [data-realm], which src/styles/tailwind.css maps onto its light and dark
 *   theme tokens;
 * - a <script> that picks a realm for this visit (kept for the tab's session,
 *   so a reload doesn't re-roll it), sets data-realm on <html>, and points the
 *   favicon and browser theme colour at that realm. It runs before <body>
 *   is parsed, so the page never flashes the default realm first.
 */
function realms(): Plugin {
  const css = REALMS.map((realm) => {
    const { brand, ink, lux, nox } = palettes[realm];
    const vars = [
      ...brand.map((color, i) => `--brand-${i + 1}:${color}`),
      ...ink.lux.map((color, i) => `--ink-${i + 1}-lux:${color}`),
      ...ink.nox.map((color, i) => `--ink-${i + 1}-nox:${color}`),
      `--disc-lux:${lux}`,
      `--disc-nox:${nox}`,
    ];
    return `[data-realm='${realm}']{${vars.join(';')}}`;
  }).join('');

  const discs = Object.fromEntries(REALMS.map((realm) => [realm, [palettes[realm].lux, palettes[realm].nox]]));
  const script = `(function () {
  var realms = ${JSON.stringify(REALMS)};
  var discs = ${JSON.stringify(discs)};
  var realm;
  try { realm = sessionStorage.getItem('realm'); } catch (_) {}
  if (realms.indexOf(realm) < 0) {
    realm = realms[Math.floor(Math.random() * realms.length)];
    try { sessionStorage.setItem('realm', realm); } catch (_) {}
  }
  document.documentElement.setAttribute('data-realm', realm);
  document.getElementById('icon-svg').href = '/assets/favicon/' + realm + '.svg';
  document.getElementById('icon-apple').href = '/assets/favicon/apple-touch-icon-' + realm + '.png';
  document.getElementById('theme-color-light').content = discs[realm][0];
  document.getElementById('theme-color-dark').content = discs[realm][1];
})();`;

  return {
    name: 'realms',
    transformIndexHtml: () => [
      { tag: 'style', children: css, injectTo: 'head' },
      { tag: 'script', children: script, injectTo: 'head' },
    ],
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), realms()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
