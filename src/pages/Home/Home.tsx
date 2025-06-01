import './Home.scss';
import HeroSection from '../../components/ui/Pegboard/HeroSection';

import Button from '../../components/Button/Button';
import CTACard from '../../components/CTACard/CTACard';
import DashedArrow from '../../components/DashedArrow/DashedArrow';
import ExpectationsSection from './ExpectationsSection/ExpectationsSection';
function Home() {
  return (
    <div id="home-container">
      <HeroSection />
      <ExpectationsSection />
      <section>
        <div className="tablet-columns quiz-link">
          <p style={{ fontSize: '20px', color: '#646676' }}>Want to drill down on the details?</p>
          <Button text="READ OVERVIEW" link="/overview" />
        </div>
        <DashedArrow className="full-bleed" />
      </section>
      <section className="cta-section">
        <div className="mobile-cards">
          <CTACard variation="faq" />
          <CTACard variation="apply" />
        </div>
        <div className="cards">
          <CTACard variation="faq" isDesktop={true} />
          <CTACard variation="apply" isDesktop={true} />
        </div>
      </section>
      <Button text="Apply Now" link="http://google.com/" className="apply-button" />
    </div>
  );
}

export default Home;
