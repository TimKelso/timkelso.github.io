import { useState, ReactNode } from 'react';
import { BookmarkContext, Bookmark } from './BookmarkContext';

interface BookmarkProviderProps {
  children: ReactNode;
}

const BookmarkProvider = ({ children }: BookmarkProviderProps): JSX.Element => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  const toggleBookmark = (id: string, title: string) => {
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === id);
    const updatedBookmarks = isBookmarked ? bookmarks.filter((bookmark) => bookmark.id !== id) : [...bookmarks, { id, title }];

    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>{children}</BookmarkContext.Provider>;
};

export default BookmarkProvider;
