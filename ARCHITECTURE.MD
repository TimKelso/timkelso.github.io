# Architecture: Atomic Design File Structure

This document outlines the project\'s file structure, which is based on the principles of Atomic Design. This methodology promotes a structured and hierarchical approach to UI development, enhancing scalability, maintainability, and reusability of components.

## Core Philosophy

Atomic Design draws an analogy from chemistry:

- **Atoms** are the fundamental building blocks.
- **Molecules** are groups of atoms bonded together.
- **Organisms** are complex assemblies of molecules and/or atoms, forming distinct sections.
- **Templates** define the layout and structure by arranging organisms and molecules.
- **Pages** are specific instances of templates, filled with actual content.

This layered approach helps in building UIs systematically, from the smallest parts to the complete views.

## Directory Structure (`src/`)

The UI components are organized within the `src/components/` directory, following the Atomic Design stages:

### 1. `src/components/atoms/`

- **Purpose:** The smallest, indivisible UI elements. These are the basic building blocks of the application\'s visual language.
- **Examples:**
  - `Button.tsx`: A clickable button element.
  - `Input.tsx`: A form input field.
  - `Label.tsx`: A text label for form elements or other UI parts.
  - `Icon.tsx`: A generic icon component, often wrapping SVG paths or font icons.
  - `Image.tsx`: An image display component.
  - `Heading.tsx`: For `<h1>` through `<h6>` tags, potentially with style variations.
  - `Paragraph.tsx`: For standard text blocks.
  - `HorizontalRule.tsx`: A visual separator.
- **Characteristics:**
  - Cannot be broken down further without losing their functional identity.
  - Highly reusable across the entire application.
  - Typically stateless or manage only minimal, localized UI state (e.g., hover/focus effects).
  - Configurable via props (e.g., `variant`, `size`, `color`).
- **Sub-directories:**
  - `src/components/atoms/icons/`: May contain specific SVG icon components (e.g., `GitHubIcon.tsx`, `LinkedInIcon.tsx`). These are still considered atoms.

### 2. `src/components/molecules/`

- **Purpose:** Groups of two or more atoms functioning together as a single, logical unit. They represent slightly more complex UI patterns.
- **Examples:**
  - `SearchForm.tsx`: (Combines `Input.tsx` atom and `Button.tsx` atom).
  - `NavigationLinks.tsx`: (A list of `NavLink.tsx` atoms or molecules, distinct from a full navigation bar organism).
  - `FormField.tsx`: (Combines `Label.tsx` atom, `Input.tsx` atom, and perhaps an `ErrorMessage.tsx` atom).
  - `TagList.tsx`: (A collection of `Tag.tsx` atoms).
  - `UserProfilePreview.tsx`: (Combines `Avatar.tsx` atom and `UserName.tsx` atom).
- **Characteristics:**
  - Composed of atoms.
  - Perform a specific, singular function or represent a distinct UI pattern.
  - Reusable and can be combined to form more complex organisms.

### 3. `src/components/organisms/`

- **Purpose:** More complex UI components composed of groups of molecules and/or atoms. They form distinct sections or features of an interface.
- **Examples:**
  - `SiteHeader.tsx`: (May include `Logo.tsx` atom, `NavigationLinks.tsx` molecule, `SearchForm.tsx` molecule).
  - `ProductCardGrid.tsx`: (A grid of `ProductCard.tsx` molecules).
  - `ArticleCommentsSection.tsx`: (Includes `CommentForm.tsx` molecule and a list of `CommentThread.tsx` molecules).
  - `PortfolioSection.tsx`: (A section displaying multiple `PortfolioProject.tsx` organisms or molecules).
  - `PageFooter.tsx`: (Contains `Copyright.tsx` atom, `SocialLinks.tsx` molecule, `SiteMapLinks.tsx` molecule).
- **Characteristics:**
  - Provide significant pieces of functionality or content areas.
  - Can be complex but should aim to be self-contained regarding their specific domain.
  - Often represent a major, reusable section of a page or template.

### 4. `src/components/templates/`

- **Purpose:** Page-level structures that define the layout and arrangement of components. They act as blueprints for pages.
- **Examples:**
  - `TwoColumnLayout.tsx`: Defines a layout with a main content area and a sidebar.
  - `BlogPostTemplate.tsx`: Structures the elements of a typical blog post (e.g., header, content area, author bio, comments section).
  - `DashboardTemplate.tsx`: Lays out common dashboard elements like a navigation panel and main view area.
  - `StandardPageTemplate.tsx`: A generic template for standard content pages, perhaps including a header, footer, and main content slot.
- **Characteristics:**
  - Focus on the arrangement and structure of components, not the actual content itself.
  - Define placeholders or slots where organisms, molecules, and atoms will be rendered.
  - Provide context for how components fit together at the page level.
  - Should be content-agnostic and reusable for different pages sharing the same structure.

### 5. `src/components/pages/`

- **Purpose:** Specific instances of templates, populated with actual content and data. These are the most concrete UI views that users interact with.
- **Examples:**
  - `HomePage.tsx`: (Uses a `StandardPageTemplate.tsx` or a custom template, filled with specific content for the home page).
  - `UserProfilePage.tsx`: (Uses a `ProfileTemplate.tsx` or `TwoColumnLayout.tsx`, populated with a specific user\'s data).
  - `ArticleDetailPage.tsx`: (Uses `BlogPostTemplate.tsx`, filled with a particular article\'s content).
- **Characteristics:**
  - Combine a template with actual content (data, text, images, etc.).
  - Represent a full view or route within the application.
  - Often responsible for fetching data and passing it down to the components they render.
  - This is where different organisms and molecules come together to form a cohesive user experience for a specific URL or view.

## Other Important Directories

### `src/context/`

- **Purpose:** Contains React Context API implementations for managing global or shared state across different parts of the application. This helps in avoiding prop drilling for state that is needed by many components at different levels of the component tree.
- **Organization:**
  - **By Feature/Domain (Recommended for Scalability):** Create subdirectories for major features or domains. This approach groups related state logic, making it easier to manage as the application grows.
- **Contents of a Context Module:**
  - `ContextNameContext.ts`: Defines `createContext()` and associated types.
  - `ContextNameProvider.tsx`: The provider component that manages and exposes the context\'s state and update functions.
  - `useContextName.ts`: A custom hook (e.g., `useTheme()`) for easy and safe consumption of the context, often including a check to ensure it's used within its provider.
- **Usage:** While any component can technically consume context, it\'s generally best practice for more granular components (like atoms and many molecules) to receive data via props. Organisms and pages are more common consumers of context, then passing data down as props. This promotes better component decoupling and reusability.

### `src/styles/`

- **Purpose:** Global styles, theme configurations, and base styling utilities.
- **Examples:**
  - `tailwind.css`: Main Tailwind CSS entry point.
  - `global.css`: For any custom global styles not covered by Tailwind or component-specific styles.
  - `theme.ts`: If using a CSS-in-JS solution with a theming system.

### `public/`

- **Purpose:** Static assets that are served directly by the web server and are not processed by the build system - Vite.
- **Examples:**
  - `favicon.ico` and other favicon assets.
  - `robots.txt`, `sitemap.xml`.
  - Static images or fonts that are referenced directly in `index.html` or need to be available at a fixed URL.
  - The `public/assets/` subfolder can be used for further organization (e.g., `public/assets/images/`, `public/assets/fonts/`).

## General Guidelines & Best Practices

- **Clarity and Pragmatism:** While Atomic Design provides a robust framework, the primary goal is a clear, intuitive, and maintainable codebase. If a component doesn\'t fit perfectly into one category, choose the one that makes the most sense for its complexity, reusability, and role in the UI.
- **Reusability:**
  - **Atoms:** Aim for maximum reusability. They should be generic and configurable.
  - **Molecules:** Should also be highly reusable.
  - **Organisms:** Can be more specific to certain features but should still be designed for reuse where appropriate.
- **Props and Composition:** Build components using props for configuration and composition for structure. Favor composition over inheritance.
- **State Management:**
  - Atoms and simple molecules should ideally be stateless or manage only transient UI state.
  - More complex state is typically managed by organisms, pages, or dedicated state management solutions (like Context API or external libraries).
- **Naming Conventions:**
  - Component filenames and exported component names: `PascalCase` (e.g., `PrimaryButton.tsx`, `UserProfileCard.tsx`).
  - Folder names: `lowercase` or `kebab-case`.
- **Single Responsibility Principle:** Each component should ideally have a single, well-defined responsibility.

This architectural guide serves as a foundation. It will naturally evolve as the project grows and new requirements emerge. The key is to maintain consistency and ensure the structure supports efficient development and long-term maintainability.
