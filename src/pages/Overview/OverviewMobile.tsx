import './OverviewMobile.scss';

import CalendarIcon from '../../assets/icons/icon-calendar.svg';
import WeeksIcon from '../../assets/icons/icon-weeks.svg';
import ClockIcon from '../../assets/icons/icon-clock.svg';
import Phone from '../../components/Overview/mobile/Phone.tsx';
import Clock from '../../components/Overview/mobile/Clock.tsx';
import Paintbrush from '../../components/Overview/mobile/Paintbrush.tsx';
import ArrowMeasure from '../../components/Overview/mobile/ArrowMeasure.svg';
import FaqCard from '../../components/Overview/mobile/FaqCardMobile.tsx';
import ApplyCard from '../../components/Overview/mobile/ApplyCardMobile.tsx';

import OverviewText from './OverviewText.json';
import Button from '../../components/Button/Button.tsx';

export default function OverviewMobile() {
  return (
    <main id="overview-mobile-container">
      <h1 className="mobile-title">Overview</h1>
      <section className="about-section">
        <div>
          <h2 className="mobile-heading1">About</h2>
          <p className="mobile-body">{OverviewText.about}</p>
        </div>

        <div>
          <h3 className="mobile-heading2">{OverviewText['curious-heading']}</h3>
          <p className="mobile-body">{OverviewText.curious1}</p>
          <p className="mobile-body">{OverviewText.curious2}</p>
        </div>

        <div>
          <h3 className="mobile-heading2">Why Should I Apply?</h3>
          <p className="mobile-body">{OverviewText['why-apply']}</p>
        </div>
      </section>

      <Phone className="mobile-svg" />

      <h2 className="mobile-heading1">The Task</h2>
      <h2 className="mobile-heading2">{OverviewText['task-heading1']}</h2>
      <p className="mobile-body">{OverviewText['task-text1']}</p>
      <h2 className="mobile-heading2">{OverviewText['task-heading2']}</h2>
      <p className="mobile-body">{OverviewText['task-text2']}</p>

      <h2 style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</h2>
      <Button text="TAKE A BRIEF QUIZ"  />
      <img className="mobile-arrow" src={ArrowMeasure}></img>

      <h2 className="mobile-heading2">{OverviewText['build-fast']}</h2>
      <p className="mobile-body">{OverviewText['build-fast-text']}</p>
      <h2 className="mobile-heading2">{OverviewText['work-with-industry']}</h2>
      <p className="mobile-body">{OverviewText['work-with-industry-text']}</p>

      <Clock className="mobile-svg" />

      <h2 className="mobile-heading1">Timeline</h2>
      <div className="mobile-timeline-section">
        <div className="mobile-timeline-item">
          <img src={CalendarIcon}></img>
          <p>June 30 - Sept 5</p>
        </div>
        <div className="mobile-timeline-item">
          <img src={WeeksIcon}></img>
          <p>10 Weeks</p>
        </div>
        <div className="mobile-timeline-item">
          <img src={ClockIcon}></img>
          <p>12-15 hours per week</p>
        </div>
      </div>

      <p className="mobile-body">{OverviewText['timeline-text']}</p>

      <h2 className="mobile-expectation">{OverviewText.expectation}</h2>
      <div className="mobile-callouts">
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
      <Paintbrush className="mobile-svg" />
      <FaqCard />
      <ApplyCard />
    </main>
  );
}
