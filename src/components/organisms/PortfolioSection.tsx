import type { JSX } from 'react';
import BookmarkProvider from '../../context/feature/portfolio/BookmarkProvider';
import PortfolioProject from './PortfolioProject';
import { projects } from '../../data/projects';

const PortfolioSection = (): JSX.Element => {
  return (
    <BookmarkProvider>
      <section id="portfolio">
        <h2 className="text-center font-serif text-5xl">My Journey</h2>
        {projects.map((project, index) => (
          <PortfolioProject key={index} {...project} />
        ))}
      </section>
    </BookmarkProvider>
  );
};

export default PortfolioSection;
