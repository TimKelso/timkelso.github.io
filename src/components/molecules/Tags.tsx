import type { JSX } from 'react';
interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps): JSX.Element => {
  const tagColors: { [key: string]: string } = {
    Website: 'text-red-600 border-red-600 dark:text-red-300 dark:border-red-300',
    Bootstrap: 'text-red-600 border-red-600 dark:text-red-300 dark:border-red-300',

    HTML: 'text-orange-600 border-orange-600 dark:text-orange-300 dark:border-orange-300',
    HBS: 'text-orange-600 border-orange-600 dark:text-orange-300 dark:border-orange-300',

    JavaScript: 'text-yellow-600 border-yellow-600 dark:text-yellow-300 dark:border-yellow-300',
    'Express.js': 'text-yellow-600 border-yellow-600 dark:text-yellow-300 dark:border-yellow-300',

    Game: 'text-green-600 border-green-600 dark:text-green-300 dark:border-green-300',
    'C#': 'text-green-600 border-green-600 dark:text-green-300 dark:border-green-300',

    Clone: 'text-teal-600 border-teal-600 dark:text-teal-300 dark:border-teal-300',
    React: 'text-teal-600 border-teal-600 dark:text-teal-300 dark:border-teal-300',
    Python: 'text-teal-600 border-teal-600 dark:text-teal-300 dark:border-teal-300',

    Corporate: 'text-blue-600 border-blue-600 dark:text-blue-300 dark:border-blue-300',
    Business: 'text-blue-600 border-blue-600 dark:text-blue-300 dark:border-blue-300',

    UI: 'text-indigo-600 border-indigo-600 dark:text-indigo-300 dark:border-indigo-300',
    UX: 'text-indigo-600 border-indigo-600 dark:text-indigo-300 dark:border-indigo-300',
    'UI/UX': 'text-indigo-600 border-indigo-600 dark:text-indigo-300 dark:border-indigo-300',

    CSS: 'text-purple-600 border-purple-600 dark:text-purple-300 dark:border-purple-300',
    Design: 'text-purple-600 border-purple-600 dark:text-purple-300 dark:border-purple-300',
    Adobe: 'text-purple-600 border-purple-600 dark:text-purple-300 dark:border-purple-300',
    'Adobe XD': 'text-purple-600 border-purple-600 dark:text-purple-300 dark:border-purple-300',
    Figma: 'text-purple-600 border-purple-600 dark:text-purple-300 dark:border-purple-300',
    Tailwind: 'text-purple-600 border-purple-600 dark:text-purple-300 dark:border-purple-300',
    Mockup: 'text-purple-600 border-purple-600 dark:text-purple-300 dark:border-purple-300',

    Mobile: 'text-pink-600 border-pink-600 dark:text-pink-300 dark:border-pink-300',
    Desktop: 'text-pink-600 border-pink-600 dark:text-pink-300 dark:border-pink-300',
    App: 'text-pink-600 border-pink-600 dark:text-pink-300 dark:border-pink-300',

    Default: 'text-gray-600 border-gray-600 dark:text-gray-300 dark:border-gray-300',
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
