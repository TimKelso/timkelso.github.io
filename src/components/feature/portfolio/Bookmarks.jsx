import PropTypes from 'prop-types';
import { useState } from 'react';
import { BookmarkUsage } from '../../../context/feature/portfolio/BookmarkUsage';
import Button from './Button';

const Bookmarks = ({ onScrollToProject }) => {
  const { bookmarks } = BookmarkUsage();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div>
      <Button icon="bookmarks" label={bookmarks.length > 0 ? String(bookmarks.length) : ''} onClick={() => setMenuVisible((prev) => !prev)} />

      {menuVisible && (
        <ul className="absolute right-0 select-none">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark, index) => (
              <li key={index} className="mb-3">
                <button
                  className="flex items-center justify-self-end"
                  onClick={() => {
                    setMenuVisible(false);
                    onScrollToProject(bookmark.id);
                  }}
                >
                  <span className="w-full truncate rounded-l-full bg-gray-900 py-3 pl-3 text-sm">{bookmark.title}</span>
                  <i className="material-symbols-outlined rounded-r-full bg-gray-900 px-2 py-1 text-3xl">bookmark</i>
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

Bookmarks.propTypes = {
  onScrollToProject: PropTypes.func.isRequired,
};

export default Bookmarks;
