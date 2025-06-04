import './Home.scss';
import HeroSection from '../../components/ui/Pegboard/HeroSection';

import Button from '../../components/Button/Button';
import DashedArrow from '../../components/DashedArrow/DashedArrow';
import ExpectationsSection from './ExpectationsSection/ExpectationsSection';
import CTASection from '../../components/CTASection/CTASection';
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
      <CTASection />
      <Button
        text="Apply Now"
        link="https://forms.gle/1zNawC4iTSCEHEhd7"
        className="apply-button"
      />
    </div>
  );
}

export default Home;
