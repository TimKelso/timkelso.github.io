import { useState } from 'react';
import PropTypes from 'prop-types';
import { BookmarkContext } from './BookmarkContext';

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  const toggleBookmark = (id, title) => {
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === id);
    const updatedBookmarks = isBookmarked ? bookmarks.filter((bookmark) => bookmark.id !== id) : [...bookmarks, { id, title }];

    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>{children}</BookmarkContext.Provider>;
};

BookmarkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BookmarkProvider;
