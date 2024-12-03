import PropTypes from 'prop-types';
import { useState } from 'react';
import { BookmarkUsage } from '../../../context/feature/portfolio/BookmarkUsage';
import Button from './Button';

const Bookmarks = ({ onScrollToProject }) => {
  const { bookmarks } = BookmarkUsage();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="relative">
      <Button icon="bookmarks" label={bookmarks.length > 0 ? String(bookmarks.length) : ''} onClick={() => setMenuVisible((prev) => !prev)} />

      {menuVisible && (
        <ul className="absolute right-0 border-gray-700 bg-gray-900">
          {bookmarks.length > 0 ? (
            bookmarks.map((bookmark, index) => (
              <li
                key={index}
                className="flex cursor-pointer items-center justify-between p-2 hover:bg-gray-800"
                onClick={() => {
                  setMenuVisible(false);
                  onScrollToProject(bookmark.id);
                }}
              >
                <span className="truncate text-white">{bookmark.title}</span>
                <i className="material-symbols-outlined text-gray-400">bookmark</i>
              </li>
            ))
          ) : (
            <li className="p-2 text-center text-gray-400">No bookmarks (this message is just temporary)</li>
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
