import './Home.css';
import Pegboard from '../../components/ui/Pegboard/Pegboard';
import QuizVector from '../../components/ui/PersonalityQuiz/QuizVector/QuizVector';

import CalendarGrayIcon from '../../assets/icons/calendar-gray.svg';
import ToolIcon from '../../assets/icons/tool.svg';
import MessageIcon from '../../assets/icons/message.svg';
import WeeksIcon from '../../assets/icons/weeks.svg';
import ClockIcon from '../../assets/icons/clock.svg';

import FAQCardMobile from '../../components/ui/Home/svg-components/FaqCardMobile';
import FAQCard from '../../components/ui/Home/svg-components/FaqCard';
import ApplyCardMobile from '../../components/ui/Home/svg-components/ApplyCardMobile';
import ApplyCard from '../../components/ui/Home/svg-components/ApplyCard';

function Home() {
  return (
    <div className="home-container">
      <div>
        <div className="icon-section">
          <div className="icon-line">
            <img src={CalendarGrayIcon}></img>
            <p>June 30 - Sept 5, 2025 (10 weeks)</p>
          </div>
          <div className="icon-line">
            <img src={ToolIcon}></img>
            <p>Refine a skill that matters to you.</p>
          </div>
          <div className="icon-line">
            <img src={MessageIcon}></img>
            <p>Join a team of UCSD students to ideate and innovate.</p>
          </div>
        </div>
        <div className="icon-section-desktop">
          <div className="icon-line">
            <img src={CalendarGrayIcon}></img>
            <p>June 30 - Sept 5, 2025 (10 weeks)</p>
          </div>
          <div className="icon-line">
            <img src={MessageIcon}></img>
            <p>Join a team of UCSD students to ideate and innovate.</p>
          </div>
          <div className="icon-line">
            <img src={ToolIcon}></img>
            <p>Refine a skill that matters to you.</p>
          </div>
        </div>
        <Pegboard />
        <div className="tablet-columns quiz-link">
          <p style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</p>
          <button className="quiz-button">TAKE A BRIEF QUIZ</button>
        </div>
      </div>
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
        <button className="quiz-button">READ OVERVIEW</button>
      </div>
      <div className="mobile-cards">
        <FAQCardMobile />
        <ApplyCardMobile />
      </div>
      <div className="cards">
        <FAQCard />
        <ApplyCard />
      </div>
    </div>
  );
}

export default Home;
