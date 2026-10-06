import Footer from '../organisms/Footer';
import Intro from '../organisms/Intro';
import PortfolioSection from '../organisms/PortfolioSection';
import HorizontalLine from '../atoms/HorizontalLine';
import PortfolioTemplate from '../templates/PortfolioTemplate';

function PortfolioPage() {
  return (
    <PortfolioTemplate
      header={<Intro />}
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
