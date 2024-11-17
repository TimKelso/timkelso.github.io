# Portfolio

This is my portfolio website built with modern web technologies including Vite and Tailwind CSS.

## Development Setup

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/TimKelso/Portfolio
  cd Portfolio
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm run dev
  ```

4. To build the project for production:
  ```bash
  npm run build
  ```

5. To preview the production build locally:
  ```bash
  npm run preview
  ```

### Image Optimization

Images have been pre-compressed using [Squoosh](https://squoosh.app/).

Format: *.webp* or *.avif* for modern browsers; *.jpg* as a fallback.

Squoosh settings:
AVIF: Quality 50, Effort 4.
WebP: Quality 75, Effort 4.

### Tailwind CSS

Tailwind is configured in tailwind.config.js and is processed during the Vite build. All Tailwind styles should be written in the src/style.css file.

### Deployment

The site is deployed via GitHub Actions to GitHub Pages. Any push to the main branch triggers the deployment workflow.
