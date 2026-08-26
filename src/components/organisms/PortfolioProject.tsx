import { useState, type JSX } from 'react';
import { BookmarkMinus, BookmarkPlus, XCircle, Info, CodeXml, SquareArrowOutUpRight } from 'lucide-react';
import { useBookmarks } from '../../context/feature/portfolio/useBookmarks';
import Bookmarks from './Bookmarks';
import Image from '../atoms/Image';
import { IconLabelButton } from '../molecules/IconLabelButton';
import Tags from '../molecules/Tags';

interface ProjectProps {
  date: string;
  title: string;
  descriptionHook: string;
  descriptionLong: string[];
  tags: string[];
  imagePath: string;
  supportsVariants?: boolean;
  projectURL?: string | null;
  githubURL?: string | null;
}

const Project = ({
  date,
  title,
  descriptionHook,
  descriptionLong,
  tags,
  imagePath,
  supportsVariants,
  projectURL,
  githubURL,
}: ProjectProps): JSX.Element => {
  const projectId = `portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === projectId);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article id={projectId} className="flex min-h-dvh snap-start snap-always flex-row justify-between gap-1">
      {/* Placeholder holding the gutter open for the planned animated
          timeline. The text sizes the column; it must stay out of the
          accessibility tree and out of the selection. */}
      <div aria-hidden="true" className="text-transparent select-none">
        vertical line
      </div>

      {/* content */}
      <div className="my-7 flex max-w-prose flex-col gap-5">
        <Image imagePath={imagePath} alt={`Screenshot of '${title}'`} supportsVariants={supportsVariants} />
        <div className="flex h-full flex-col gap-3">
          <p className="text-secondary-fg font-mono text-base tracking-widest">{date}</p>
          <h3 className="text-3xl">{title}</h3>
          <p className="line-clamp-5 text-base text-pretty break-words">{descriptionHook}</p>
          {showMoreInfo ? (
            <div className="text-base text-pretty">
              {descriptionLong.map((paragraph, index) => (
                <p key={index} className="mb-3 break-words">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
          {showMoreInfo ? null : <Tags tags={tags} />}
        </div>
      </div>

      {/* actions */}
      <div className="sticky top-0 flex h-dvh min-h-fit flex-col justify-between">
        <div className="flex flex-col gap-1">
          <Bookmarks onScrollToProject={scrollToProject} />
        </div>
        <div className="flex flex-col gap-1">
          <IconLabelButton
            icon={isBookmarked ? BookmarkMinus : BookmarkPlus}
            label="Save"
            onClick={() => toggleBookmark(projectId, title)}
            variant="ghost"
            aria-pressed={isBookmarked}
          />
          <IconLabelButton
            icon={showMoreInfo ? XCircle : Info}
            label="Info"
            onClick={() => setShowMoreInfo((prev) => !prev)}
            variant="ghost"
            aria-expanded={showMoreInfo}
          />
          {githubURL && <IconLabelButton icon={CodeXml} label="Code" onClick={() => window.open(githubURL, '_blank')} variant="ghost" />}
          {projectURL && (
            <IconLabelButton icon={SquareArrowOutUpRight} label="Open" onClick={() => window.open(projectURL, '_blank')} variant="ghost" />
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
