// ==================== IMPORTS ===============================================

import PropTypes from 'prop-types';
import Image from './Image';
import Button from './Button';
import Tags from './Tags';
import HorizontalLine from '../../global/common/HorizontalLine';

// ==================== COMPONENT =============================================

const Project = ({ date, title, description, tags, imagePath, learnMoreLink, viewProjectLink }) => (
  // --------------------- JSX ------------------------------------------------
  <>
    <HorizontalLine />
    <article className="flex h-dvh flex-row justify-between">
      <div id="timeline">vertical line</div>

      <div id="content" className="my-7 flex flex-col gap-5">
        <Image imagePath={imagePath} alt={`Screenshot of ${title}`} />
        <div className="flex flex-col gap-3">
          <h5 className="font-mono text-base tracking-widest text-gray-500">{date}</h5>
          <h4 className="text-3xl">{title}</h4>
          <p className="text-pretty text-base">{description}</p>
          <Tags tags={tags} />
        </div>
      </div>

      <div id="action" className="flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <Button icon="more_vert" onClick={() => window.open(learnMoreLink)} />
          <Button icon="bookmarks" onClick={() => window.open(viewProjectLink)} />
        </div>
        <div className="flex flex-col gap-1">
          <Button icon="bookmark" label="Save" onClick={() => console.log('Save to bookmarks')} />
          <Button icon="info" label="Info" onClick={() => console.log('Show more info')} />
          <Button icon="code" label="Code" onClick={() => console.log('Go to GitHub repo')} />
          <Button icon="open_in_new" label="Open" onClick={() => window.open(viewProjectLink)} />
        </div>
      </div>
    </article>
  </>
);

// ==================== PROP TYPES ============================================

Project.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string.isRequired,
  viewProjectLink: PropTypes.string.isRequired,
};

// ==================== EXPORTS ===============================================

export default Project;
