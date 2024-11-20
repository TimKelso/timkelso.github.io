// ==================== IMPORTS ===============================================

import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';
import CardButton from './CardButton';
import TagList from './TagList';

// ==================== COMPONENT =============================================

const ProjectCard = ({ date, title, description, tags, imagePath, learnMoreLink, viewProjectLink }) => (
  <article className="flex h-dvh flex-row">
    <div id="timeline">vertical line</div>

    <div id="content" className="flex flex-col gap-5">
      <h5 className="text-3xl">{date}</h5>
      <ResponsiveImage imagePath={imagePath} alt={`Screenshot of ${title}`} />
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl">{title}</h4>
        <p className="text-pretty">{description}</p>
        <TagList tags={tags} />
      </div>
    </div>

    <div id="actions" className="flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <CardButton icon="more_vert" onClick={() => window.open(learnMoreLink)} />
        <CardButton icon="bookmarks" onClick={() => window.open(viewProjectLink)} />
      </div>
      <div className="flex flex-col gap-1">
        <CardButton icon="bookmark" label="Save" onClick={() => console.log('Save to bookmarks')} />
        <CardButton icon="info" label="Info" onClick={() => console.log('Show more info')} />
        <CardButton icon="code" label="Code" onClick={() => console.log('Go to GitHub repo')} />
        <CardButton icon="open_in_new" label="Open" onClick={() => window.open(viewProjectLink)} />
      </div>
    </div>
  </article>
);

// ==================== PROP TYPES ============================================

ProjectCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string.isRequired,
  viewProjectLink: PropTypes.string.isRequired,
};

// ==================== EXPORTS ===============================================

export default ProjectCard;
