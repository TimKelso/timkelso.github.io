// ==================== IMPORTS ===============================================

import PropTypes from 'prop-types';
import Image from './Image';
import Button from './Button';
import Tags from './Tags';
import HorizontalLine from '../../global/common/HorizontalLine';

// ==================== COMPONENT =============================================

// --------------------- FUNCTIONS --------------------------------------------
const toggleSaveProject = (title) => {
  console.log(`Saved project: ${title}`);
};

const showMoreInfo = (descriptionLong) => {
  console.log(descriptionLong);
};

const Project = ({ date, title, descriptionHook, descriptionLong, tags, imagePath, projectURL, githubURL }) => (
  // --------------------- JSX ------------------------------------------------
  <>
    <HorizontalLine />
    <article className="flex h-dvh flex-row justify-between">
      <div id="timeline">vertical line</div>

      <div id="content" className="my-7 flex max-w-[31.25rem] flex-col gap-5">
        <Image imagePath={imagePath} alt={`Screenshot of ${title}`} />
        <div className="flex flex-col gap-3">
          <h5 className="font-mono text-base tracking-widest text-gray-500">{date}</h5>
          <h4 className="text-3xl">{title}</h4>
          <p className="text-pretty text-base">{descriptionHook}</p>
          <Tags tags={tags} />
        </div>
      </div>

      <div id="action" className="flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <Button icon="more_vert" onClick={() => console.log('Opened more buttons')} />
          <Button icon="bookmarks" onClick={() => window.open(projectURL)} />
        </div>
        <div className="flex flex-col gap-1">
          <Button icon="bookmark" label="Save" onClick={() => toggleSaveProject(title)} />
          <Button icon="info" label="Info" onClick={() => showMoreInfo(descriptionLong)} />
          {githubURL && <Button icon="code" label="Code" onClick={() => window.open(githubURL, '_blank')} />}
          {projectURL && <Button icon="open_in_new" label="Open" onClick={() => window.open(projectURL, '_blank')} />}
        </div>
      </div>
    </article>
  </>
);

// ==================== PROP TYPES ============================================

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

// ==================== EXPORTS ===============================================

export default Project;
