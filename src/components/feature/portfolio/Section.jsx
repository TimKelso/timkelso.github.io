// ==================== IMPORTS ===============================================

import Category from './Category';
import HorizontalLine from '../../global/common/HorizontalLine';

// ==================== COMPONENT =============================================

const Section = () => {
  // --------------------- DATA -----------------------------------------------

  const soloProjects = [
    {
      date: '18 May 2023',
      title: 'Nebuline',
      descriptionHook: 'A sleek and interactive website for a fictional space tourism company.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Website', 'Design', 'Corporate', 'UI'],
      imagePath: 'assets/images/portfolio/solo_projects/nebuline/section_2',
      projectURL: 'https://itgwebb.se/klass/te21h/tim/slutprojekt/index.html',
    },
    {
      date: '21 Dec 2023',
      title: "Tim's 2048",
      descriptionHook: 'A clone of the popular 2048 puzzle game with a personal touch.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Game', 'Clone', 'JavaScript', 'UX'],
      imagePath: 'assets/images/portfolio/solo_projects/tims_2048',
      projectURL: 'https://nti-tim.github.io/Tims-2048',
      githubURL: 'https://github.com/NTI-Tim/Tims-2048',
    },
    {
      date: '28 Apr 2024',
      title: "Sow 'n' Grow",
      descriptionHook: 'A mockup for an app designed to bring the gardening community together.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Design', 'Mobile', 'Adobe XD', 'Mockup', 'UI/UX'],
      imagePath: 'assets/images/portfolio/solo_projects/sow_n_grow',
      projectURL: 'https://xd.adobe.com/view/7581a416-7240-4b6a-87b3-922691013b3f-20d2',
    },
  ];

  const groupProjects = [
    {
      date: '18 May 2023',
      title: 'TESTING LONG TITLE FOR GROUP PROJECT',
      descriptionHook: 'A sleek and interactive website for a fictional space tourism company.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Website', 'Design', 'Corporate', 'UI', 'Group', 'Team', 'Collaboration'],
      imagePath: 'assets/images/portfolio/solo_projects/nebuline/section_1',
    },
  ];

  return (
    // --------------------- JSX ------------------------------------------------
    <>
      <section id="portfolio">
        <h2 className="text-center font-serif text-5xl">My Journey</h2>
        <Category title="Solo Projects" projects={soloProjects} />
        <HorizontalLine />
        <Category title="Group Projects" projects={groupProjects} />
      </section>
    </>
  );
};

// ==================== EXPORTS ===============================================

export default Section;
