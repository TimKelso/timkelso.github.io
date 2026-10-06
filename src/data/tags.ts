/*
 * Every tag a project may carry, and how specific it is. The kinds run from
 * broad to narrow and each is drawn in one of the realm's three colours:
 *
 * - context: what the project is and how it was made (Website, Collaboration)
 * - craft:   the discipline practised (Design, UX, Testing)
 * - stack:   the concrete language, framework or tool (React, C#, Figma)
 *
 * A tag must be listed here before a project can use it, so a typo is a
 * type error rather than a silently uncoloured tag.
 */

export type TagKind = 'context' | 'craft' | 'stack';

/** Broad to narrow; tags are shown in this order. */
export const TAG_KINDS: readonly TagKind[] = ['context', 'craft', 'stack'];

export const tagKinds = {
  // context
  Website: 'context',
  App: 'context',
  Game: 'context',
  Mobile: 'context',
  Business: 'context',
  Corporate: 'context',
  Clone: 'context',
  Collaboration: 'context',
  'Solo Project': 'context',

  // craft
  Design: 'craft',
  UI: 'craft',
  UX: 'craft',
  'UI/UX': 'craft',
  Mockup: 'craft',
  Testing: 'craft',

  // stack
  HTML: 'stack',
  CSS: 'stack',
  'Nested CSS': 'stack',
  JavaScript: 'stack',
  HBS: 'stack',
  Bootstrap: 'stack',
  Python: 'stack',
  'C#': 'stack',
  WPF: 'stack',
  'Adobe XD': 'stack',
} as const satisfies Record<string, TagKind>;

export type Tag = keyof typeof tagKinds;
