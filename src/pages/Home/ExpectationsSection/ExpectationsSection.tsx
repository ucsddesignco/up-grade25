import CalendarGrayIcon from '../../../assets/icons/calendar-gray.svg?react';
import WeeksIcon from '../../../assets/icons/weeks.svg?react';
import ClockIcon from '../../../assets/icons/clock.svg?react';
import QuizVector from '../../../components/ui/PersonalityQuiz/QuizVector/QuizVector';
import './ExpectationsSection.scss';

function ExpectationsSection() {
  return (
    <section className="expectation-section">
      <h2 className="home-header">What to Expect</h2>
      <p className="expectation-text">
        UP-Grade is a 10-week, mentor-driven summer program where student teams work on real-world
        product challenges pitched by industry professionals. Over 10 weeks, you’ll develop the
        skills to thrive in the product design industry.
      </p>
      <div className="expectation-icons">
        <div className="expectation-row">
          <CalendarGrayIcon />
          <p>June 30 - Sept 5</p>
        </div>
        <div className="expectation-row">
          <WeeksIcon />
          <p>10 Weeks</p>
        </div>
        <div className="expectation-row">
          <ClockIcon />
          <p>12-15 hours per week</p>
        </div>
      </div>
      <QuizVector />
      <div className="benefits">
        <p>Experience a Startup Environment</p>
        <p>Attend Weekly Meetings</p>
        <p>Receive Mentor guidance</p>
      </div>
    </section>
  );
}

export default ExpectationsSection;
