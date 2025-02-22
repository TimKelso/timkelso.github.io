import BookmarkProvider from '../../../context/feature/portfolio/BookmarkProvider';
import Project from './Project';

const Section = () => {
  const projects = [
    {
      date: '12 Dec 2024',
      title: 'Point of Sale System',
      descriptionHook: 'descriptionHook',
      descriptionLong: ['descriptionLong'],
      tags: ['Business', 'WPF', 'App', 'C#', 'UX', 'Collaboration'],
      imagePath: 'assets/images/portfolio/group_projects/pos_system',
      supportsVariants: false,
      projectURL: 'https://github.com/NTIG-Uppsala/Overkill-P.O.S/releases',
      githubURL: 'https://github.com/NTIG-Uppsala/Overkill-P.O.S',
    },
    {
      date: '15 Oct 2024',
      title: 'Florista',
      descriptionHook: 'descriptionHook',
      descriptionLong: ['descriptionLong'],
      tags: ['Website', 'Design', 'HTML', 'CSS', 'Collaboration'],
      imagePath: 'assets/images/portfolio/group_projects/florista',
      supportsVariants: false,
      projectURL: 'https://floristadev.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/J.CAD-Florist',
    },
    {
      date: '2 Oct 2024',
      title: 'NTB Biluthyrning',
      descriptionHook: 'descriptionHook',
      descriptionLong: ['descriptionLong'],
      tags: ['HBS', 'Business', 'Testing', 'Nested CSS', 'Collaboration'],
      imagePath: 'assets/images/portfolio/group_projects/ntb_biluthyrning',
      supportsVariants: false,
      projectURL: 'https://ntbbiluthyrning.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/TE4-VALE-Biluthyrning',
    },
    {
      date: '10 Sep 2024',
      title: 'Il Forno Magico',
      descriptionHook: 'descriptionHook',
      descriptionLong: ['descriptionLong'],
      tags: ['Website', 'Design', 'Bootstrap', 'Python', 'Collaboration'],
      imagePath: 'assets/images/portfolio/group_projects/il_forno_magico',
      supportsVariants: false,
      projectURL: 'https://ilfornomagico.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/JITS-pizzeria',
    },
    {
      date: '28 Apr 2024',
      title: "Sow 'n' Grow",
      descriptionHook: 'A mockup for an app designed to bring the gardening community together.',
      descriptionLong: [
        '"Sow \'n\' Grow" is a mobile app mockup designed to foster a sense of community among gardening enthusiasts. The app concept centers around connecting individuals with a shared passion for gardening, offering a platform to share knowledge, experiences, and resources. The project was created using Adobe XD, a tool that allowed for the design of a visually appealing and interactive user interface.',
      ],
      tags: ['Design', 'Mobile', 'Adobe XD', 'Mockup', 'UI/UX', 'Solo Project'],
      imagePath: 'assets/images/portfolio/solo_projects/sow_n_grow',
      supportsVariants: true,
      projectURL: 'https://xd.adobe.com/view/7581a416-7240-4b6a-87b3-922691013b3f-20d2',
    },
    {
      date: '21 Dec 2023',
      title: "Tim's 2048",
      descriptionHook:
        'A clone of the popular 2048 puzzle game with a personal touch. Playable in your browser, this game is a fun way to pass the time.',
      descriptionLong: [
        '"Tim\'s 2048" is a personal web development project: a browser-based rendition of the well-known puzzle game, 2048. The intention behind this project was quite simple - to create a playable, visually stunning version of the game that could offer a bit of casual entertainment within the web browser.',

        "The game incorporates standard 2048 gameplay mechanics, tracking the player's score and the duration of each game session. A theme-switching feature is also included, allowing users to toggle between light and dark visual modes. One somewhat unique aesthetic addition is a subtle, full-spectrum color fade applied to the game board itself, gradually shifting through colors. This was an attempt to add a slightly distinctive visual element to the clone.",

        "It's worth noting that this clone lacks smooth animations for tile movements. Currently, tiles simply shift positions instantaneously, which is definitely an area for future refinement. This omission is a clear indicator of potential improvements that could enhance the overall polish of the game.",

        "The game logic is built entirely with vanilla JavaScript, which was a core learning objective for this project. Developing Tim's 2048 served as a practical introduction to JavaScript programming fundamentals. Alongside JavaScript, standard HTML and CSS were used for structure and styling, with CSS grid and keyframe animations being particularly explored for layout and introductory visual flair.",

        'From a learning perspective, this project proved to be quite valuable, especially in gaining a foundational understanding of JavaScript. Beyond just the language itself, it offered insights into broader programming concepts, such as organizing code into functions and managing data with 2D arrays. To navigate the development process, resources like YouTube tutorials were studied, highlighting the self-directed learning involved in bringing this project to fruition.',

        "Something that is not clear at first glance is that the game's controls are limited to keyboard inputs (W, A, S, D, and arrow keys), effectively making it a desktop-only experience. This constraint means it isn't readily playable on mobile devices, which is a usability consideration for potential users. The primary audience for this project was, in practical terms, for assessment purposes - demonstrating project completion to an instructor. However, ideally, it might appeal to individuals who enjoy straightforward puzzle games, perhaps similar to Minesweeper or Sudoku in their appeal.",

        "In summary, Tim's 2048 is a project that, while modest in scope, provided a solid grounding in JavaScript and fundamental web development techniques. It represents a step in learning core programming and web development skills through the creation of a simple yet interactive browser-based game.",
      ],
      tags: ['Game', 'Clone', 'JavaScript', 'UX', 'Solo Project'],
      imagePath: 'assets/images/portfolio/solo_projects/tims_2048',
      supportsVariants: true,
      projectURL: 'https://nti-tim.github.io/Tims-2048',
      githubURL: 'https://github.com/NTI-Tim/Tims-2048',
    },
    {
      date: '18 May 2023',
      title: 'Nebuline',
      descriptionHook: 'A sleek, interactive website for a fictional space tourism company, featuring parallax scrolling and light/dark mode.',
      descriptionLong: [
        '"Nebuline" was conceived as one of my early attempts at web development - a website for a fictional company focused on space tourism. As perhaps my first somewhat substantial website project, it represents a foundational step in my web development journey. Looking back, it feels reasonably well-executed for a beginner project.',

        'The website\'s concept centers around a fictional company aiming to make space accessible to more than just the elite, offering ordinary people the chance to experience space visually. It concludes with a thought-provoking line, "In the meantime... let\'s take care of our planet!" subtly suggesting that while the dream of space travel is captivating, present-day environmental responsibility remains crucial. While the initial idea was simply something that sounded interesting to create, this ending hopefully adds a touch of depth.',

        'A key visual element I experimented with was parallax scrolling. By combining this effect with freely available, professional-quality images from Unsplash, the goal was to create an engaging visual experience. This technique creates a sense of depth and dynamic movement as users navigate the site, enhancing the visual storytelling.',

        "Beyond the visual aspect, I also incorporated a light mode/dark mode toggle using some basic JavaScript. This feature, along with storing the user's preference using local storage, added a small degree of interactivity and user customization. Another minor addition was creating a favicon for the website, a small detail that contributes to a more complete web presence.",

        "Reflecting on Nebuline, it's apparent that mobile optimization is a significant area for improvement. The website's design is primarily desktop-focused, lacking proper responsiveness for smaller screens. At the time of development, responsive design and media queries were just beginning to enter my understanding of web development, and this project reflects that early stage of learning in this area.",

        'Despite its limitations, working on Nebuline was a valuable learning experience. It provided hands-on practice with the fundamental technologies of HTML and CSS, which were quite challenging to grasp initially. Basic animation, element positioning, and styling were key areas of focus. Essentially, it was a practical introduction to many of the core concepts one encounters when first learning front-end web development.',

        'The project was primarily created as a school assignment, and its success was measured by achieving a good grade. While the fictional company and space travel theme might appeal to some with an interest in those topics, the practical target audience was primarily my instructor.',

        'In conclusion, Nebuline, despite its beginner status and desktop-centric design, served as a crucial early project in my web development learning process. It represents a step in understanding and applying fundamental web technologies and design principles, particularly in visual presentation and basic interactivity.',
      ],
      tags: ['Website', 'Design', 'Corporate', 'UI', 'Solo Project'],
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
