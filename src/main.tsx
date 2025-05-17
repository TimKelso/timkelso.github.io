import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css';
import PortfolioPage from './components/pages/PortfolioPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
);
