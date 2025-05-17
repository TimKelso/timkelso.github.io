import BookmarkProvider from '../../context/feature/portfolio/BookmarkProvider';
import Project from './PortfolioProject';

const Section = (): JSX.Element => {
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
      descriptionHook:
        'A collaborative web development project for a fictional Swedish florist company. The website features a dynamic landing page and an interactive map.',
      descriptionLong: [
        '"Florista" is a web development project centered around creating a website for a fictional Swedish florist company. The aim of this project was to develop a platform that could effectively showcase the company\'s beautiful flower arrangements and provide essential information to potential customers. The website\'s design prioritizes visual appeal, with a strong emphasis on highlighting the natural beauty of flowers. The layout includes dedicated sections for showcasing various types of floral arrangements, and displaying contact details for inquiries and orders.',

        "Upon landing on the homepage, users are greeted with an automatic slideshow. This feature is designed to immediately capture attention by showcasing a variety of the florist's creations, creating an engaging and visually welcoming experience. The website is also fully responsive, ensuring that it adapts seamlessly to different screen sizes, providing an optimal viewing experience whether accessed on a desktop computer or a mobile device. The overall design is clean and modern, utilizing a color palette intended to complement the floral theme and create a cohesive visual identity. The use of HTML and vanilla CSS for the website's implementation allows for a straightforward and maintainable codebase.",

        "To enhance user convenience, the website features an interactive map that enables visitors to easily locate the nearest fictional Florista store. Additionally, the website incorporates dynamic opening hours. These hours automatically adjust based on the current day of the week and time, providing users with accurate and up-to-date information about the florist's operating schedule.",

        "One particular feature I'm quite pleased with is the sleek navigation bar. It includes subtle hover effects on the individual links, adding a touch of interactivity. The navigation bar is also responsive and incorporates a dynamic behavior: it appears when the user scrolls up the page and disappears when scrolling down. It also intelligently senses when the mouse cursor approaches the top of the screen and will appear in response. This combination of features aims to create a smooth and intuitive navigation experience for website visitors.",

        "This project was a collaborative effort, and our team utilized the Scrum methodology for managing our workflow. We held daily stand-up meetings to keep each other informed of our progress and to address any challenges that arose. Weekly sprint reviews with our instructor provided valuable opportunities to present our work, receive constructive feedback, and ensure that we were meeting the project's requirements. I was particularly proud of our team's ability to communicate effectively and work together cohesively throughout the entire project. We successfully translated our design vision into a functional website, and I personally gained valuable experience in the dynamics of collaboration and teamwork within a web development context.",

        "The primary purpose of this project was to fulfill a school assignment. However, the intended audience for the fictional Florista website would be potential customers seeking floral arrangements for various occasions, such as weddings, birthdays, or other special events. The website aims to attract these customers and provide them with all the necessary information about Florista's offerings.",

        "The project's success was evaluated based on how well it met the assignment's criteria and the overall quality of the final product. Our regular sprint reviews with our instructor served as the primary means of assessment, allowing for ongoing feedback and guidance throughout the development process.",

        'In summary, Florista represents a collaborative web development project that successfully combines design aesthetics with practical functionality. It showcases the beauty of floral arrangements while providing users with essential information and features to enhance their experience. The project highlights the importance of teamwork, effective communication, and the application of web development principles in creating a visually appealing and user-friendly website.',
      ],
      tags: ['Website', 'Design', 'HTML', 'CSS', 'Collaboration'],
      imagePath: 'assets/images/portfolio/group_projects/florista',
      supportsVariants: false,
      projectURL: 'https://floristadev.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/J.CAD-Florist',
    },
    {
      date: '2 Oct 2024',
      title: 'NTB Biluthyrning',
      descriptionHook:
        'A UX friendly website for a fictional car rental company, with dynamic opening hours and a feature-rich car comparison table - this collaborative project was built using Handlebars.',
      descriptionLong: [
        '"NTB Biluthyrning" (NTB Car Rental) was a collaborative web development project aimed at creating a user-friendly website for a fictional swedish car rental company. The primary focus was on providing potential customers with easy access to essential information and a convenient tool for comparing available vehicles.',

        "A key aspect of the website's design is its intuitive navigation. Users can easily select their desired car rental location - either Kiruna or Luleå - using a dropdown menu in the navigation bar. Additionally, another dropdown allows users to choose their preferred language from English, Swedish, and Finnish, catering to a potentially diverse user base.",

        "The website also features dynamic opening hours, which adjust based on the selected location, the current day of the week, and the time of day. This functionality aims to provide users with accurate and up-to-date information regarding the rental company's operating hours for their chosen location.",

        'A particularly feature-rich element of NTB Biluthyrning is the car comparison table. This table allows users to compare different car models based on various relevant criteria, including the car type, rental price, and year of manufacture. To enhance usability, the table includes interactive features such as the ability to sort the displayed cars by clicking on the column headers and a search bar that enables users to filter the table based on specific keywords.',

        'Furthermore, the website incorporates a delivery service feature. Users can input their postal code to check the availability and cost of having a rental car delivered to their location, adding an extra layer of convenience. The entire website was designed to be fully responsive, ensuring a seamless and consistent user experience across a wide range of devices, from desktop computers to mobile phones.',

        "The project utilized a variety of technologies to achieve its functionality. Handlebars was employed as the templating engine, enabling the dynamic generation of website content based on variables like location, time, and language. Standard HTML and CSS were used for structuring the website's content and applying styling, while JavaScript provided the necessary interactivity and dynamic content manipulation. For testing purposes, Python was used in conjunction with the Playwright library to automate tests of the website's various functionalities, ensuring a degree of reliability and quality. Additionally, nested CSS was implemented to provide a more organized and maintainable approach to styling the website's elements.",

        'This project was undertaken collaboratively, following the Scrum methodology. Our team engaged in daily stand-up meetings to track progress and address any roadblocks, and we held weekly sprint reviews with our instructor to present our work and gather feedback. This structured approach facilitated effective teamwork and communication throughout the development process.',

        "Personally, I found the dynamic capabilities of Handlebars particularly interesting, especially its potential for generating diverse static content based on different variables. I also gained valuable insights into the importance of thorough testing and learned how to implement automated testing using Python and the Playwright library. The collaborative nature of the project provided practical experience in working effectively within a team, coordinating tasks, and fostering clear communication. I was pleased with our team's ability to work together to realize the website's features.",

        "As a school assignment, the primary audience for NTB Biluthyrning was our instructor, who evaluated our work against the project's requirements and learning objectives. The success of the project was ultimately assessed during our regular sprint reviews.",

        'In conclusion, NTB Biluthyrning represents a comprehensive collaborative effort in web development. It provided practical experience in building a responsive website with dynamic features using technologies like Handlebars, JavaScript, and nested CSS. The project also underscored the importance of teamwork, project management using Scrum, and the implementation of automated testing using Python and Playwright.',
      ],
      tags: ['HBS', 'Business', 'Testing', 'Nested CSS', 'Collaboration'],
      imagePath: 'assets/images/portfolio/group_projects/ntb_biluthyrning',
      supportsVariants: false,
      projectURL: 'https://ntbbiluthyrning.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/TE4-VALE-Biluthyrning',
    },
    {
      date: '10 Sep 2024',
      title: 'Il Forno Magico',
      descriptionHook:
        'A website for a fictional Swedish pizzeria, featuring a menu and a dynamic photo carousel - this collaborative project was built using Bootstrap.',
      descriptionLong: [
        '"Il Forno Magico" (The Magic Oven) was a collaborative web development project focused on creating a website for a fictional Swedish pizzeria. This project served as a practical exercise in building a functional and visually appealing website within a team environment, utilizing the Bootstrap framework.',

        "The primary goal of Il Forno Magico was to design a website that effectively showcased the fictional pizzeria's offerings. Since it was a school assignment rather than a commercial venture, the project didn't aim to solve a specific business problem but rather to provide a hands-on learning experience in web development and teamwork.",

        "Key features of the website include a dynamic photo carousel on the homepage. This carousel was designed to automatically cycle through images, providing a visually engaging introduction to the pizzeria. Users also have the ability to manually navigate the carousel. The website also features a clearly presented menu, designed for easy readability, allowing potential customers to quickly browse the fictional pizzeria's offerings.",

        'A significant aspect of this project was its responsive design, achieved through the use of Bootstrap utilities. This ensures that the website adapts effectively to different screen sizes, providing a consistent and user-friendly experience across various devices. The choice of Bootstrap as the primary framework streamlined the development process and facilitated the creation of a well-structured and responsive layout.',

        'Beyond the front-end development, the project also incorporated Python for testing purposes. We developed testing scripts using the unittest module in conjunction with Selenium. These scripts were intended to automate testing of various website functionalities, providing a valuable introduction to software testing practices within a web development context.',

        "As our first collaborative project, Il Forno Magico provided significant learning opportunities in teamwork and coordination. I was particularly proud of our team's ability to communicate and work together effectively to bring the website to fruition. This experience highlighted the importance of clear communication, task delegation, and collaborative problem-solving within a team setting. We followed a Scrum methodology, which involved daily stand-ups and regular sprint reviews with our instructor, providing a structured approach to our workflow.",

        "The primary audience for Il Forno Magico was our instructor, who evaluated our work based on the specific requirements and learning objectives of the assignment. The project's success was therefore measured during our sprint reviews, where we presented our progress and received feedback.",

        'In summary, Il Forno Magico represents a valuable collaborative learning experience in web development. Through this project, we gained practical experience in utilizing the Bootstrap framework for responsive design, implementing dynamic front-end features like a photo carousel and menu, and exploring software testing with Python. The collaborative nature of the project also provided crucial insights into effective teamwork and project management methodologies like Scrum.',
      ],
      tags: ['Website', 'Design', 'Bootstrap', 'Python', 'Collaboration'],
      imagePath: 'assets/images/portfolio/group_projects/il_forno_magico',
      supportsVariants: false,
      projectURL: 'https://ilfornomagico.ntig.dev/',
      githubURL: 'https://github.com/NTIG-Uppsala/JITS-pizzeria',
    },
    {
      date: '28 Apr 2024',
      title: "Sow 'n' Grow",
      descriptionHook: 'A mockup for an app designed to bring the gardening community together, featuring IoT integration and plant scanning.',
      descriptionLong: [
        '"Sow \'n\' Grow" is a mobile app mockup designed to foster a sense of community among gardening enthusiasts. The app concept centers around connecting individuals with a shared passion for gardening, offering a platform to share knowledge, experiences, and resources. Developed using Adobe XD, this project was primarily an exercise in exploring mobile app design and user interface concepts.',

        "The app's envisioned purpose was to be a helpful tool for plant enthusiasts, combining several potentially useful features. One concept was to integrate IoT (Internet of Things) functionality, allowing users to potentially manage connected devices like bonsai heat lamps or automated greenhouse roofs directly through the app interface.",

        'Another planned feature was a community forum section, imagined as a space for gardening hobbyists and professionals to connect. Users could theoretically share photos of their plants, participate in discussions, and create polls related to gardening topics within this forum.',

        "Additionally, the mockup included a plant scanning feature, inspired by tools like Google Lens. This function would, in theory, enable users to scan a plant using their phone's camera and receive detailed information. This information would encompass aspects like the plant's history, ideal watering schedules, sunlight preferences, nutritional needs, and suitable temperature ranges.",

        'Lastly, a store section was designed, envisioned as a price comparison tool for gardening supplies. Rather than directly selling items, this feature would aggregate data from local stores to present users with cost-effective deals on gardening tools, seeds, flowers, and other related products. This shop concept aimed to help users find gardening resources efficiently.',

        "The Sow 'n' Grow mockup is interactive to a limited degree, incorporating some basic animations within the Adobe XD environment. However, due to the nature of Adobe XD as a prototyping tool, the interactivity remains at a relatively fundamental level.",

        "For me, the key learning outcome of this project was gaining initial experience with design principles and exploring the Adobe XD software for the first time. Working with Adobe's ecosystem, and specifically Adobe XD, was a new experience, and this project served as a hands-on introduction. I feel I developed a reasonable grasp of the software's basic functionalities through this design process.",

        "As a design-focused school project, Sow 'n' Grow did not have any quantifiable real-world results. Its evaluation was based on fulfilling the assignment criteria and receiving a satisfactory grade. The intended audience within the fictional app context was broad, targeting anyone from amateur gardeners to more experienced horticultural professionals. However, in a practical sense, the audience for this project was, once again, primarily my instructor for assessment.",

        "In summary, Sow 'n' Grow represents a foundational design exploration using Adobe XD, centered around a concept for a plant care mobile application. While remaining a conceptual mockup, it provided valuable experience in UI/UX design thinking and introduced me to the Adobe XD design environment.",
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

        "A detail not immediately apparent is that the game's controls are limited to keyboard inputs (W, A, S, D, and arrow keys), effectively making it a desktop-only experience. This constraint means it isn't readily playable on mobile devices, which is a usability consideration for potential users. The primary audience for this project was, in practical terms, for assessment purposes - demonstrating project completion to an instructor. However, ideally, it might appeal to individuals who enjoy straightforward puzzle games, perhaps similar to Minesweeper or Sudoku in their appeal.",

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
