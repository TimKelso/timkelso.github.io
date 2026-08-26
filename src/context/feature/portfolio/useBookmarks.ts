import { useContext } from 'react';
import { BookmarkContext, BookmarkContextType } from './BookmarkContext';

export const useBookmarks = (): BookmarkContextType => {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }

  return context;
};
