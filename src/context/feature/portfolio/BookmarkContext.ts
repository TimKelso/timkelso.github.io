import { createContext } from 'react';

export interface Bookmark {
  id: string;
  title: string;
}

export interface BookmarkContextType {
  bookmarks: Bookmark[];
  toggleBookmark: (_id: string, _title: string) => void;
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);
