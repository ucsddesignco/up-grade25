import './OverviewDesktop.css';
import OverviewText from './OverviewText.json';

import CalendarIcon from '../../assets/icons/icon-calendar.svg';
import WeeksIcon from '../../assets/icons/icon-weeks.svg';
import ClockIcon from '../../assets/icons/icon-clock.svg';

import DesktopSVG1 from '../../components/Overview/desktop/DesktopSvg';
import DesktopSVG2 from '../../components/Overview/desktop/DesktopSvg2';
import FaqCard from '../../components/Overview/FaqCard';
import ApplyCard from '../../components/Overview/ApplyCard';
import Button from '../../components/Button/Button';

export default function OverviewDesktop() {
  return (
    <div id="overview-desktop-container">
      <h1 className="desktop-title">Overview</h1>
      <div className="about-row">
        <div className="about-col">
          <DesktopSVG1 className="desktop-svg" />
        </div>
        <div className="about-col">
          <h2 className="desktop-heading1">About</h2>
          <p className="desktop-body">{OverviewText.about}</p>
          <div>
            <h2 className="desktop-heading2 desktop-column-heading">
              {OverviewText['curious-heading']}
            </h2>
            <p className="desktop-body">
              {OverviewText.curious1}
              {OverviewText.curious2}
            </p>
          </div>
          <div>
            <h2 className="desktop-heading2 desktop-column-heading">Why Should I Apply? </h2>
            <p className="desktop-body">{OverviewText['why-apply']}</p>
          </div>
        </div>
      </div>

      <h2 className="desktop-heading1">The Task</h2>
      <div className="desktop-columns">
        <div className="desktop-column">
          <h2 className="desktop-heading2 desktop-column-heading">
            {OverviewText['task-heading1']}
          </h2>
          <p className="desktop-body">{OverviewText['task-text1']}</p>
        </div>
        <div className="desktop-column">
          <h2 className="desktop-heading2 desktop-column-heading">
            {OverviewText['task-heading2']}
          </h2>
          <p className="desktop-body">{OverviewText['task-text2']}</p>
        </div>
      </div>

      <div className="desktop-columns quiz-link">
        <h2 style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</h2>
        <Button text="TAKE A BRIEF QUIZ" />
      </div>

      <div className="desktop-columns">
        <div className="desktop-column">
          <h2 className="desktop-heading2 desktop-column-heading">{OverviewText['build-fast']}</h2>
          <p className="desktop-body">{OverviewText['build-fast-text']}</p>
        </div>
        <div className="desktop-column">
          <h2 className="desktop-heading2 desktop-column-heading">
            {OverviewText['work-with-industry']}
          </h2>
          <p className="desktop-body">{OverviewText['work-with-industry-text']}</p>
        </div>
      </div>

      <div className="timeline-row">
        <div className="timeline-col">
          <h2 className="desktop-heading1">Timeline</h2>
          <div className="timeline-section">
            <div className="desktop-timeline-item">
              <img src={CalendarIcon}></img>
              <p>June 30 - Sept 5</p>
            </div>
            <div className="desktop-timeline-item">
              <img src={WeeksIcon}></img>
              <p>10 Weeks</p>
            </div>
            <div className="desktop-timeline-item">
              <img src={ClockIcon}></img>
              <p>12-15 hours per week</p>
            </div>
          </div>
          <h2 className="desktop-expectation">{OverviewText.expectation}</h2>
          <div className="desktop-callouts">
            <div className="team-meetings callout">
              <h1>2x</h1>
              <p>Team Meetings</p>
            </div>
            <div className="mentor-meetings callout">
              <h1>1x</h1>
              <p>Mentor Meetings</p>
            </div>
            <div className="group-workshops callout">
              <h1>1x</h1>
              <p>Group Workshops</p>
            </div>
          </div>
        </div>
        <div className="timeline-col">
          <DesktopSVG2 className="desktop-svg" />
        </div>
      </div>
      <div className="card-row">
        <FaqCard />
        <ApplyCard />
      </div>
    </div>
  );
}
