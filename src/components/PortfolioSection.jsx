// ==================== IMPORTS ===============================================

// import React from 'react';
import PortfolioCategory from './PortfolioCategory';
import HorizontalLine from './HorizontalLine';

// ==================== COMPONENT =============================================

const PortfolioSection = () => {
  // --------------------- DATA -----------------------------------------------

  const soloProjects = [
    {
      date: '18 May 2023',
      title: 'Nebuline',
      description: 'A sleek and interactive website for a fictional space tourism company.',
      tags: ['Website', 'Design', 'Corporate', 'UI'],
      imagePath: 'assets/images/portfolio/solo_projects/nebuline/section_2',
      learnMoreLink: '#',
      viewProjectLink: 'https://itgwebb.se/klass/te21h/tim/slutprojekt/index.html',
    },
    {
      date: '21 Dec 2023',
      title: "Tim's 2048",
      description: 'A clone of the popular 2048 puzzle game with a personal touch.',
      tags: ['Game', 'Clone', 'JavaScript', 'UX'],
      imagePath: 'assets/images/portfolio/solo_projects/tims_2048',
      learnMoreLink: '#',
      viewProjectLink: 'https://nti-tim.github.io/Tims-2048',
    },
    {
      date: '28 Apr 2024',
      title: "Sow 'n' Grow",
      description: 'A mockup for an app designed to bring the gardening community together.',
      tags: ['Design', 'Mobile', 'Adobe XD', 'Mockup', 'UI/UX'],
      imagePath: 'assets/images/portfolio/solo_projects/sow_n_grow',
      learnMoreLink: '#',
      viewProjectLink: 'https://xd.adobe.com/view/7581a416-7240-4b6a-87b3-922691013b3f-20d2',
    },
  ];

  const groupProjects = [
    {
      date: '18 May 2023',
      title: 'TEST',
      description: 'A sleek and interactive website for a fictional space tourism company.',
      tags: ['Website', 'Design', 'Corporate', 'UI'],
      imagePath: 'assets/images/portfolio/solo_projects/nebuline/section_2',
      learnMoreLink: '#',
      viewProjectLink: 'https://itgwebb.se/klass/te21h/tim/slutprojekt/index.html',
    },
  ];

  // --------------------- JSX ------------------------------------------------

  return (
    <section id="portfolio">
      <h2 className="text-center font-serif text-5xl">My Journey</h2>
      <PortfolioCategory title="Solo Projects" projects={soloProjects} />
      <HorizontalLine />
      <PortfolioCategory title="Group Projects" projects={groupProjects} />
    </section>
  );
};

// ==================== EXPORTS ===============================================

export default PortfolioSection;
