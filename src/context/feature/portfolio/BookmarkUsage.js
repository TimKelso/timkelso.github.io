import { useContext } from 'react';
import { BookmarkContext } from './BookmarkContext';

export const BookmarkUsage = () => {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error('BookmarkUsage must be used within a BookmarkProvider');
  }

  return context;
};
