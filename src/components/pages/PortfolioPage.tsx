import Footer from '../organisms/Footer';
import PortfolioSection from '../organisms/PortfolioSection';
import HorizontalLine from '../atoms/HorizontalLine';
import PortfolioTemplate from '../templates/PortfolioTemplate';

function PortfolioPage() {
  return (
    <PortfolioTemplate
      mainContent={<PortfolioSection />}
      footer={
        <>
          <HorizontalLine />
          <Footer />
        </>
      }
    />
  );
}

export default PortfolioPage;
