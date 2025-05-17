import { useState } from 'react';
import { BookmarkUsage } from '../../context/feature/portfolio/BookmarkUsage';
import Button from '../atoms/Button';

interface BookmarksProps {
  onScrollToProject: (_id: string) => void;
}

const Bookmarks = ({ onScrollToProject }: BookmarksProps): JSX.Element => {
  const { bookmarks } = BookmarkUsage();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div>
      <Button icon="bookmarks" label={bookmarks.length > 0 ? String(bookmarks.length) : ''} onClick={() => setMenuVisible((prev) => !prev)} />

      {menuVisible && (
        <ul className="absolute right-0 select-none">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark, index) => (
              <li key={index} className="mr-2 mb-3 flex justify-end">
                <button
                  className="flex cursor-pointer"
                  onClick={() => {
                    setMenuVisible(false);
                    onScrollToProject(bookmark.id);
                  }}
                >
                  <span className="w-full truncate rounded-l-full bg-gray-200 py-3 pl-3 text-sm dark:bg-gray-900">{bookmark.title}</span>
                  <i className="material-symbols-outlined rounded-r-full bg-gray-200 px-2 py-1 dark:bg-gray-900">
                    <span className="text-3xl">bookmark</span>
                  </i>
                </button>
              </li>
            ))
          ) : (
            <li className="mt-6">
              <span className="w-full truncate rounded-full bg-gray-900 px-3 py-3 text-sm">No bookmarks</span>
            </li>
            // If there are no bookmarks, highlight the save bookmark button
          )}
        </ul>
      )}
    </div>
  );
};

export default Bookmarks;
