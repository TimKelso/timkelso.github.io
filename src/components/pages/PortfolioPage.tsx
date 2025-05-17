import Footer from '../organisms/Footer';
import Section from '../organisms/PortfolioSection';
import HorizontalLine from '../atoms/HorizontalLine';
import PortfolioTemplate from '../templates/PortfolioTemplate';

function PortfolioPage() {
  return (
    <PortfolioTemplate
      mainContent={<Section />}
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
