import type { JSX } from 'react';
interface TagsProps {
  tags: string[];
}

const tagColors: { [key: string]: string } = {
  Website: 'text-red-600 border-red-600 dark:text-red-500 dark:border-red-500',
  Bootstrap: 'text-red-600 border-red-600 dark:text-red-500 dark:border-red-500',

  HTML: 'text-orange-700 border-orange-700 dark:text-orange-600 dark:border-orange-600',
  HBS: 'text-orange-700 border-orange-700 dark:text-orange-600 dark:border-orange-600',

  JavaScript: 'text-yellow-700 border-yellow-700 dark:text-yellow-600 dark:border-yellow-600',
  'Express.js': 'text-yellow-700 border-yellow-700 dark:text-yellow-600 dark:border-yellow-600',

  Game: 'text-green-700 border-green-700 dark:text-green-600 dark:border-green-600',
  'C#': 'text-green-700 border-green-700 dark:text-green-600 dark:border-green-600',

  Clone: 'text-teal-700 border-teal-700 dark:text-teal-600 dark:border-teal-600',
  React: 'text-teal-700 border-teal-700 dark:text-teal-600 dark:border-teal-600',
  Python: 'text-teal-700 border-teal-700 dark:text-teal-600 dark:border-teal-600',

  Corporate: 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500',
  Business: 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500',

  UI: 'text-indigo-600 border-indigo-600 dark:text-indigo-500 dark:border-indigo-500',
  UX: 'text-indigo-600 border-indigo-600 dark:text-indigo-500 dark:border-indigo-500',
  'UI/UX': 'text-indigo-600 border-indigo-600 dark:text-indigo-500 dark:border-indigo-500',

  CSS: 'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500',
  Design: 'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500',
  Adobe: 'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500',
  'Adobe XD': 'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500',
  Figma: 'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500',
  Tailwind: 'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500',
  Mockup: 'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500',

  Mobile: 'text-pink-600 border-pink-600 dark:text-pink-600 dark:border-pink-600',
  Desktop: 'text-pink-600 border-pink-600 dark:text-pink-600 dark:border-pink-600',
  App: 'text-pink-600 border-pink-600 dark:text-pink-600 dark:border-pink-600',

  Default: 'text-gray-600 border-gray-600 dark:text-gray-400 dark:border-gray-400',
};

const Tags = ({ tags }: TagsProps): JSX.Element => {
  return (
    <ul className="flex flex-wrap gap-2 text-xs">
      {tags.map((tag, index) => {
        const colorClass = tagColors[tag] || tagColors.Default;
        return (
          <li key={index} className={`rounded-full border-2 px-2 py-1 font-bold ${colorClass}`}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
