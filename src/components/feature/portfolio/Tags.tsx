import React from 'react';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps): JSX.Element => {
  const tagColors: { [key: string]: string } = {
    Website: 'text-red-600 border-red-600 dark:text-red-800 dark:border-red-800',
    Bootsrap: 'text-red-600 border-red-600 dark:text-red-800 dark:border-red-800',

    HTML: 'text-orange-600 border-orange-600 dark:text-orange-800 dark:border-orange-800',
    HBS: 'text-orange-600 border-orange-600 dark:text-orange-800 dark:border-orange-800',

    JavaScript: 'text-yellow-600 border-yellow-600 dark:text-yellow-800 dark:border-yellow-800',
    'Express.js': 'text-yellow-600 border-yellow-600 dark:text-yellow-800 dark:border-yellow-800',

    Game: 'text-green-600 border-green-600 dark:text-green-800 dark:border-green-800',
    'C#': 'text-green-600 border-green-600 dark:text-green-800 dark:border-green-800',

    Clone: 'text-teal-600 border-teal-600 dark:text-teal-800 dark:border-teal-800',
    React: 'text-teal-600 border-teal-600 dark:text-teal-800 dark:border-teal-800',
    Python: 'text-teal-600 border-teal-600 dark:text-teal-800 dark:border-teal-800',

    Corporate: 'text-blue-600 border-blue-600 dark:text-blue-800 dark:border-blue-800',
    Business: 'text-blue-600 border-blue-600 dark:text-blue-800 dark:border-blue-800',

    UI: 'text-indigo-600 border-indigo-600 dark:text-indigo-800 dark:border-indigo-800',
    UX: 'text-indigo-600 border-indigo-600 dark:text-indigo-800 dark:border-indigo-800',
    'UI/UX': 'text-indigo-600 border-indigo-600 dark:text-indigo-800 dark:border-indigo-800',

    CSS: 'text-purple-600 border-purple-600 dark:text-purple-800 dark:border-purple-800',
    Design: 'text-purple-600 border-purple-600 dark:text-purple-800 dark:border-purple-800',
    Adobe: 'text-purple-600 border-purple-600 dark:text-purple-800 dark:border-purple-800',
    'Adobe XD': 'text-purple-600 border-purple-600 dark:text-purple-800 dark:border-purple-800',
    Figma: 'text-purple-600 border-purple-600 dark:text-purple-800 dark:border-purple-800',
    Tailwind: 'text-purple-600 border-purple-600 dark:text-purple-800 dark:border-purple-800',
    Mockup: 'text-purple-600 border-purple-600 dark:text-purple-800 dark:border-purple-800',

    Mobile: 'text-pink-600 border-pink-600 dark:text-pink-800 dark:border-pink-800',
    Desktop: 'text-pink-600 border-pink-600 dark:text-pink-800 dark:border-pink-800',
    App: 'text-pink-600 border-pink-600 dark:text-pink-800 dark:border-pink-800',

    Default: 'text-gray-600 border-gray-600 dark:text-gray-400 dark:border-gray-400',
  };

  return (
    <ul className="flex flex-wrap gap-2 text-xs">
      {tags.map((tag, index) => {
        const colorClass = tagColors[tag] || tagColors.Default;
        return (
          <li key={index} className={`rounded-full border-2 px-2 py-1 font-bold select-none ${colorClass}`}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
