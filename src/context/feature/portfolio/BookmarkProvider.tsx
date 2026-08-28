import { useCallback, useEffect, useState, type ReactNode, type JSX } from 'react';
import { BookmarkContext, Bookmark } from './BookmarkContext';

interface BookmarkProviderProps {
  children: ReactNode;
}

const isBookmark = (value: unknown): value is Bookmark =>
  typeof value === 'object' && value !== null && typeof (value as Bookmark).id === 'string' && typeof (value as Bookmark).title === 'string';

/**
 * Reads persisted bookmarks defensively. Storage can be unavailable (private
 * browsing, embedded webviews) and its contents can be stale or hand-edited,
 * so anything unrecognised is discarded rather than allowed to throw.
 */
const readStoredBookmarks = (): Bookmark[] => {
  try {
    const saved = localStorage.getItem('bookmarks');
    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter(isBookmark) : [];
  } catch {
    return [];
  }
};

const BookmarkProvider = ({ children }: BookmarkProviderProps): JSX.Element => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(readStoredBookmarks);

  useEffect(() => {
    try {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } catch {
      // Persisting is a nicety; a full or unavailable store must not break the page.
    }
  }, [bookmarks]);

  const toggleBookmark = useCallback((id: string, title: string) => {
    setBookmarks((current) =>
      current.some((bookmark) => bookmark.id === id) ? current.filter((bookmark) => bookmark.id !== id) : [...current, { id, title }],
    );
  }, []);

  return <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>{children}</BookmarkContext.Provider>;
};

export default BookmarkProvider;
