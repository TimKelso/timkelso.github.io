import type { JSX } from 'react';
import BookmarkProvider from '../../context/feature/portfolio/BookmarkProvider';
import PortfolioProject from './PortfolioProject';
import { projects } from '../../data/projects';

const PortfolioSection = (): JSX.Element => {
  return (
    <BookmarkProvider>
      <section id="portfolio">
        {/* Visually, the intro's "My Journey" link introduces this section:
            a heading here would sit between two snap points and never be
            seen at rest. */}
        <h2 className="sr-only">My Journey</h2>
        {projects.map((project, index) => (
          <PortfolioProject key={index} {...project} />
        ))}
      </section>
    </BookmarkProvider>
  );
};

export default PortfolioSection;
