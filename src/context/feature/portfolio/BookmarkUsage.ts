import { useContext } from 'react';
import { BookmarkContext, BookmarkContextType } from './BookmarkContext';

export const BookmarkUsage = (): BookmarkContextType => {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error('BookmarkUsage must be used within a BookmarkProvider');
  }

  return context;
};
