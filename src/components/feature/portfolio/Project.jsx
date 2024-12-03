import { useState } from 'react';
import PropTypes from 'prop-types';
import { BookmarkUsage } from '../../../context/feature/portfolio/BookmarkUsage';
import Bookmarks from './Bookmarks';
import Image from './Image';
import Button from './Button';
import Tags from './Tags';
import HorizontalLine from '../../global/common/HorizontalLine';

const Project = ({ date, title, descriptionHook, descriptionLong, tags, imagePath, projectURL, githubURL }) => {
  const projectId = `portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const { bookmarks, toggleBookmark } = BookmarkUsage();
  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === projectId);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const scrollToProject = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HorizontalLine />
      <article id={projectId} className="flex h-dvh flex-row justify-between">
        <div id="timeline">vertical line</div>

        <div id="content" className="my-7 flex max-w-[31.25rem] flex-col gap-5">
          {!showMoreInfo ? <Image imagePath={imagePath} alt={`Screenshot of ${title}`} /> : null}
          <div className="flex h-full flex-col gap-3">
            <h5 className="font-mono text-base tracking-widest text-gray-500">{date}</h5>
            <h4 className="text-3xl">{title}</h4>
            {!showMoreInfo ? (
              <p className="truncate text-pretty text-base">{descriptionHook}</p>
            ) : (
              <p className="truncate text-pretty text-base">
                {descriptionHook} {descriptionLong}
              </p>
            )}
            <Tags tags={tags} />
          </div>
        </div>

        <div id="action" className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            {/* <Button icon="more_vert" onClick={() => console.log('Opened more buttons')} /> */}
            <Bookmarks onScrollToProject={scrollToProject} />
          </div>

          <div className="flex flex-col gap-1">
            <Button icon={isBookmarked ? 'bookmark_remove' : 'bookmark_add'} label="Save" onClick={() => toggleBookmark(projectId, title)} />
            <Button icon={showMoreInfo ? 'cancel' : 'info'} label="Info" onClick={() => setShowMoreInfo((prev) => !prev)} />
            {githubURL && <Button icon="code" label="Code" onClick={() => window.open(githubURL, '_blank')} />}
            {projectURL && <Button icon="open_in_new" label="Open" onClick={() => window.open(projectURL, '_blank')} />}
          </div>
        </div>
      </article>
    </>
  );
};

Project.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptionHook: PropTypes.string.isRequired,
  descriptionLong: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
  projectURL: PropTypes.string || null,
  githubURL: PropTypes.string || null,
};

export default Project;
