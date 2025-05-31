import './Home.css';
import HeroSection from '../../components/ui/Pegboard/HeroSection';
import QuizVector from '../../components/ui/PersonalityQuiz/QuizVector/QuizVector';

import CalendarGrayIcon from '../../assets/icons/calendar-gray.svg';
import WeeksIcon from '../../assets/icons/weeks.svg';
import ClockIcon from '../../assets/icons/clock.svg';

import DashedArrow from '../../components/DashedArrow/DashedArrow';
import Button from '../../components/Button/Button';
import CTACard from '../../components/CTACard/CTACard';

function Home() {
  return (
    <div className="home-container">
      <div>
        <HeroSection />
        <div className="tablet-columns quiz-link">
          <p style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</p>
          <Button text="TAKE A BRIEF QUIZ" />
        </div>
      </div>
      <DashedArrow />
      <div className="expectation-section">
        <p className="home-header">What to Expect</p>
        <p className="expectation-text">
          UP-Grade is a 10-week, mentor-driven summer program where student teams work on real-world
          product challenges pitched by industry professionals. Over 10 weeks, you’ll develop the
          skills to thrive in the product design industry.
        </p>
        <div className="expectation-icons">
          <div className="expectation-row">
            <img src={CalendarGrayIcon}></img>
            <p>June 30 - Sept 5</p>
          </div>
          <div className="expectation-row">
            <img src={WeeksIcon}></img>
            <p>10 Weeks</p>
          </div>
          <div className="expectation-row">
            <img src={ClockIcon}></img>
            <p>12-15 hours per week</p>
          </div>
        </div>
        <QuizVector />
        <div className="benefits">
          <p>Experience a Startup Environment</p>
          <p>Attend Weekly Meetings</p>
          <p>Receive Mentor guidance</p>
        </div>
      </div>
      <div className="tablet-columns quiz-link">
        <p style={{ fontSize: '20px', color: '#646676' }}>Want to drill down on the details?</p>
        <Button text="READ OVERVIEW" />
      </div>
      <div className="mobile-cards">
        <CTACard variation="faq" />
        <CTACard variation="apply" />
      </div>
      <div className="cards">
        <CTACard variation="faq" isDesktop={true} />
        <CTACard variation="apply" isDesktop={true} />
      </div>
    </div>
  );
}

export default Home;
