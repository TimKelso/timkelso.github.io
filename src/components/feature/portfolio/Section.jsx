import BookmarkProvider from '../../../context/feature/portfolio/BookmarkProvider';
import Project from './Project';

const Section = () => {
  const projects = [
    {
      date: '12 Dec 2024',
      title: 'Point of Sale System',
      descriptionHook: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Business', 'App', 'C#', 'UX'],
      imagePath: 'assets/images/portfolio/group_projects/pos_system',
      supportsVariants: false,
      projectURL: 'https://github.com/NTIG-Uppsala/Overkill-P.O.S/releases',
      githubURL: 'https://github.com/NTIG-Uppsala/Overkill-P.O.S',
    },
    {
      date: '15 Oct 2024',
      title: 'Florista',
      descriptionHook: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Website', 'Design', 'HTML', 'CSS'],
      imagePath: 'assets/images/portfolio/group_projects/florista',
      supportsVariants: false,
      projectURL: 'https://floristadev.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/J.CAD-Florist',
    },
    {
      date: '2 Oct 2024',
      title: 'NTB Biluthyrning',
      descriptionHook: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['HBS', 'Business', 'Testing', 'Nested CSS'],
      imagePath: 'assets/images/portfolio/group_projects/ntb_biluthyrning',
      supportsVariants: false,
      projectURL: 'https://ntbbiluthyrning.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/TE4-VALE-Biluthyrning',
    },
    {
      date: '10 Sep 2024',
      title: 'Il Forno Magico',
      descriptionHook: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Website', 'Design', 'Bootstrap', 'Python'],
      imagePath: 'assets/images/portfolio/group_projects/il_forno_magico',
      supportsVariants: false,
      projectURL: 'https://ilfornomagico.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/JITS-pizzeria',
    },
    {
      date: '28 Apr 2024',
      title: "Sow 'n' Grow",
      descriptionHook: 'A mockup for an app designed to bring the gardening community together.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Design', 'Mobile', 'Adobe XD', 'Mockup', 'UI/UX'],
      imagePath: 'assets/images/portfolio/solo_projects/sow_n_grow',
      supportsVariants: true,
      projectURL: 'https://xd.adobe.com/view/7581a416-7240-4b6a-87b3-922691013b3f-20d2',
    },
    {
      date: '21 Dec 2023',
      title: "Tim's 2048",
      descriptionHook: 'A clone of the popular 2048 puzzle game with a personal touch.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Game', 'Clone', 'JavaScript', 'UX'],
      imagePath: 'assets/images/portfolio/solo_projects/tims_2048',
      supportsVariants: true,
      projectURL: 'https://nti-tim.github.io/Tims-2048',
      githubURL: 'https://github.com/NTI-Tim/Tims-2048',
    },
    {
      date: '18 May 2023',
      title: 'Nebuline',
      descriptionHook: 'A sleek and interactive website for a fictional space tourism company.',
      descriptionLong:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Website', 'Design', 'Corporate', 'UI'],
      imagePath: 'assets/images/portfolio/solo_projects/nebuline/section_2',
      supportsVariants: true,
      projectURL: 'https://itgwebb.se/klass/te21h/tim/slutprojekt/index.html',
    },
  ];

  return (
    <BookmarkProvider>
      <section id="portfolio">
        <h2 className="text-center font-serif text-5xl">My Journey</h2>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </BookmarkProvider>
  );
};

export default Section;
