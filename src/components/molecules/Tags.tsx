import type { JSX } from 'react';
import { TAG_KINDS, tagKinds, type Tag, type TagKind } from '../../data/tags';

interface TagsProps {
  tags: Tag[];
}

// The border uses the brand colour as designed; the label uses its ink
// shade, which is the same colour adjusted just enough to read as small text.
const kindClasses: Record<TagKind, string> = {
  context: 'border-brand-1 text-ink-1',
  craft: 'border-brand-2 text-ink-2',
  stack: 'border-brand-3 text-ink-3',
};

const Tags = ({ tags }: TagsProps): JSX.Element => {
  const sorted = [...tags].sort((a, b) => TAG_KINDS.indexOf(tagKinds[a]) - TAG_KINDS.indexOf(tagKinds[b]));

  return (
    <ul className="flex flex-wrap gap-2 text-xs">
      {sorted.map((tag) => (
        <li key={tag} className={`rounded-full border-2 px-2 py-1 font-bold ${kindClasses[tagKinds[tag]]}`}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
