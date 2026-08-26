import { useState, type JSX } from 'react';
import { useBookmarks } from '../../context/feature/portfolio/useBookmarks';
import { Button } from '../atoms/Button';
import { Bookmark as BookmarkIcon, ChevronRight } from 'lucide-react';

interface BookmarksProps {
  onScrollToProject: (_id: string) => void;
}

const Bookmarks = ({ onScrollToProject }: BookmarksProps): JSX.Element => {
  const { bookmarks } = useBookmarks();
  const [menuVisible, setMenuVisible] = useState(false);
  const hasBookmarks = bookmarks.length > 0;
  const buttonAriaLabel = hasBookmarks ? `View ${bookmarks.length} bookmarks` : 'View bookmarks';

  return (
    <div>
      <Button
        variant="ghost"
        onClick={() => setMenuVisible((prev) => !prev)}
        className="flex h-auto flex-col items-center p-2 [&_svg]:size-7"
        aria-label={buttonAriaLabel}
      >
        <BookmarkIcon />
        {hasBookmarks && <span className="mt-1 text-xs font-semibold">{bookmarks.length}</span>}
      </Button>

      {menuVisible && (
        <ul className="bg-surface-bg border-border absolute right-0 z-10 rounded-md border p-1 shadow-md select-none">
          {hasBookmarks ? (
            bookmarks.map((bookmark) => (
              <li key={bookmark.id}>
                <Button
                  variant="ghost"
                  className="flex w-full cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm"
                  onClick={() => {
                    setMenuVisible(false);
                    onScrollToProject(bookmark.id);
                  }}
                >
                  <span className="truncate">{bookmark.title}</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </li>
            ))
          ) : (
            <li className="text-muted-fg px-2 py-1.5 text-sm">No bookmarks yet</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Bookmarks;
