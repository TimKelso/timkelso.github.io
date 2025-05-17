import React from 'react';

interface PortfolioTemplateProps {
  header?: React.ReactNode;
  mainContent: React.ReactNode;
  footer?: React.ReactNode;
}

const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({ header, mainContent, footer }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {header && <header>{header}</header>}
      <main className="flex-grow">{mainContent}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default PortfolioTemplate;
