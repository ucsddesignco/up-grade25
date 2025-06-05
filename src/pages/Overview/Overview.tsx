import './Overview.scss';

import CalendarIcon from '../../assets/icons/icon-calendar.svg';
import WeeksIcon from '../../assets/icons/icon-weeks.svg';
import ClockIcon from '../../assets/icons/icon-clock.svg';

import Phone from '../../components/Overview/mobile/Phone.tsx';
import Clock from '../../components/Overview/mobile/Clock.tsx';
import Paintbrush from '../../components/Overview/mobile/Paintbrush.tsx';

import TabletSVG1 from '../../components/Overview/tablet/ExpectationCard';
import TabletSVG2 from '../../components/Overview/tablet/ExpectationCard2';
import DesktopSVG1 from '../../components/Overview/desktop/DesktopSvg';
import DesktopSVG2 from '../../components/Overview/desktop/DesktopSvg2';

import OverviewText from './OverviewText.json';
import Button from '../../components/Button/Button.tsx';
import CTACard from '../../components/CTACard/CTACard.tsx';
import DashedArrow from '../../components/DashedArrow/DashedArrow.tsx';
import QuizVector from '../../components/ui/PersonalityQuiz/QuizVector/QuizVector.tsx';

const Overview = () => {
  return (
    <main id="overview-page">
      <div id="overview-mobile-container">
        <h1 className="mobile-title">Overview</h1>
        <section className="mobile-section">
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

        <Phone className="mobile-svg mobile-phone-svg" />

        <div className="mobile-section">
          <h2 className="mobile-heading1">The Task</h2>
          <div>
            <h3 className="mobile-heading2">{OverviewText['task-heading1']}</h3>
            <p className="mobile-body">{OverviewText['task-text1']}</p>
          </div>
          <div>
            <h3 className="mobile-heading2">{OverviewText['task-heading2']}</h3>
            <p className="mobile-body">{OverviewText['task-text2']}</p>
          </div>

          <div className="mobile-cta-button">
            <h2 style={{ fontSize: '20px', color: '#646676', textAlign: 'center' }}>
              Not sure what role to try?
            </h2>
            <Button text="TAKE A BRIEF QUIZ" link="/quiz" />
            <DashedArrow className="full-bleed" />
          </div>

          <div>
            <h3 className="mobile-heading2">{OverviewText['build-fast']}</h3>
            <p className="mobile-body">{OverviewText['build-fast-text']}</p>
          </div>
          <div>
            <h3 className="mobile-heading2">{OverviewText['work-with-industry']}</h3>
            <p className="mobile-body">{OverviewText['work-with-industry-text']}</p>
          </div>
        </div>

        <Clock className="mobile-svg" />

        <div className="mobile-section">
          <h2 className="mobile-heading1">Timeline</h2>
          <div className="mobile-timeline-section">
            <div className="mobile-timeline-item">
              <img src={CalendarIcon}></img>
              <p>July 7 - Sep 12</p>
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
              <p>Mentor Meeting</p>
            </div>
            <div className="group-workshops callout">
              <h1>1x</h1>
              <p>Group Workshop</p>
            </div>
          </div>
        </div>
        <Paintbrush className="mobile-svg" />
        <section className="mobile-cta-cards">
          <div className="mobile-cards">
            <CTACard variation="faq" />
          </div>
          <div className="mobile-cards">
            <CTACard variation="apply" />
          </div>
        </section>
      </div>

      <div id="overview-tablet-container">
        <h1 className="tablet-title">Overview</h1>
        <div className="tablet-section">
          <h2 className="tablet-heading1">About</h2>
          <p className="tablet-body">{OverviewText.about}</p>

          <div className="tablet-columns tablet-about-cols">
            <div className="tablet-column">
              <h3 className="tablet-heading2 tablet-column-heading">
                {OverviewText['curious-heading']}
              </h3>
              <p className="tablet-body">
                {OverviewText.curious1}
                {OverviewText.curious2}
              </p>
            </div>
            <div className="tablet-column">
              <h3 className="tablet-heading2 tablet-column-heading">Why Should I Apply? </h3>
              <p className="tablet-body">{OverviewText['why-apply']}</p>
            </div>
          </div>
        </div>
        <div className="tablet-svg">
          <TabletSVG1 />
        </div>
        <div className="tablet-section">
          <h2 className="tablet-heading1">The Task</h2>
          <div className="tablet-columns">
            <div className="tablet-column">
              <h3 className="tablet-heading2 tablet-column-heading">
                {OverviewText['task-heading1']}
              </h3>
              <p className="tablet-body">{OverviewText['task-text1']}</p>
            </div>
            <div className="tablet-column">
              <h3 className="tablet-heading2 tablet-column-heading">
                {OverviewText['task-heading2']}
              </h3>
              <p className="tablet-body">{OverviewText['task-text2']}</p>
            </div>
          </div>

          <div className="quiz-link">
            <div className="tablet-quiz-link">
              <h2 style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</h2>
              <Button text="TAKE A BRIEF QUIZ" link="/quiz" />
            </div>
            <DashedArrow className="full-bleed" />
          </div>

          <div className="tablet-columns">
            <div className="tablet-column">
              <h3 className="tablet-heading2 tablet-column-heading">
                {OverviewText['build-fast']}
              </h3>
              <p className="tablet-body">{OverviewText['build-fast-text']}</p>
            </div>
            <div className="tablet-column">
              <h3 className="tablet-heading2 tablet-column-heading">
                {OverviewText['work-with-industry']}
              </h3>
              <p className="tablet-body">{OverviewText['work-with-industry-text']}</p>
            </div>
          </div>
        </div>

        <div className="tablet-svg">
          <TabletSVG2 />
        </div>

        <div className="tablet-section">
          <h2 className="tablet-heading1">Timeline</h2>
          <div>
            <div className="timeline-section">
              <div className="timeline-item">
                <img src={CalendarIcon}></img>
                <p>July 7 - Sep 12</p>
              </div>
              <div className="timeline-item">
                <img src={WeeksIcon}></img>
                <p>10 Weeks</p>
              </div>
              <div className="timeline-item">
                <img src={ClockIcon}></img>
                <p>12-15 hours per week</p>
              </div>
            </div>
            <QuizVector />
          </div>
          <p className="tablet-body">{OverviewText['timeline-text']}</p>
        </div>
        <div className="tablet-section">
          <h2 className="tablet-expectation">{OverviewText.expectation}</h2>
          <div className="tablet-callouts">
            <div className="team-meetings callout">
              <h1>2x</h1>
              <p>Team Meetings</p>
            </div>
            <div className="mentor-meetings callout">
              <h1>1x</h1>
              <p>Mentor Meeting</p>
            </div>
            <div className="group-workshops callout">
              <h1>1x</h1>
              <p>Group Workshop</p>
            </div>
          </div>
        </div>
        <section className="tablet-cta-cards">
          <CTACard variation="faq" isDesktop={true} />
          <CTACard variation="apply" isDesktop={true} />
        </section>
      </div>

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
              <h3 className="desktop-heading2 desktop-column-heading">
                {OverviewText['curious-heading']}
              </h3>
              <p className="desktop-body">
                {OverviewText.curious1}
                {OverviewText.curious2}
              </p>
            </div>
            <div>
              <h3 className="desktop-heading2 desktop-column-heading">Why Should I Apply? </h3>
              <p className="desktop-body">{OverviewText['why-apply']}</p>
            </div>
          </div>
        </div>

        <div className="desktop-section">
          <h2 className="desktop-heading1">The Task</h2>
          <div className="desktop-columns">
            <div className="desktop-column">
              <h3 className="desktop-heading2 desktop-column-heading">
                {OverviewText['task-heading1']}
              </h3>
              <p className="desktop-body">{OverviewText['task-text1']}</p>
            </div>
            <div className="desktop-column">
              <h3 className="desktop-heading2 desktop-column-heading">
                {OverviewText['task-heading2']}
              </h3>
              <p className="desktop-body">{OverviewText['task-text2']}</p>
            </div>
          </div>

          <div>
            <div className="desktop-columns quiz-link">
              <h2 style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</h2>
              <Button text="TAKE A BRIEF QUIZ" link="/quiz" />
            </div>
            <DashedArrow className="full-bleed" />
          </div>

          <div className="desktop-columns">
            <div className="desktop-column">
              <h3 className="desktop-heading2 desktop-column-heading">
                {OverviewText['build-fast']}
              </h3>
              <p className="desktop-body">{OverviewText['build-fast-text']}</p>
            </div>
            <div className="desktop-column">
              <h3 className="desktop-heading2 desktop-column-heading">
                {OverviewText['work-with-industry']}
              </h3>
              <p className="desktop-body">{OverviewText['work-with-industry-text']}</p>
            </div>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-col timeline-left">
            <h2 className="desktop-heading1">Timeline</h2>
            <div>
              <div className="timeline-section">
                <div className="desktop-timeline-item">
                  <img src={CalendarIcon}></img>
                  <p>July 7 - Sep 12</p>
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
              <QuizVector />
            </div>
            <h2 className="desktop-expectation">{OverviewText.expectation}</h2>
            <div className="desktop-callouts">
              <div className="team-meetings callout">
                <h1>2x</h1>
                <p>Team Meetings</p>
              </div>
              <div className="mentor-meetings callout">
                <h1>1x</h1>
                <p>Mentor Meeting</p>
              </div>
              <div className="group-workshops callout">
                <h1>1x</h1>
                <p>Group Workshop</p>
              </div>
            </div>
          </div>
          <div className="timeline-col timeline-right">
            <DesktopSVG2 className="desktop-svg" />
          </div>
        </div>

        <section className="desktop-cta-cards">
          <CTACard variation="faq" isDesktop={true} />
          <CTACard variation="apply" isDesktop={true} />
        </section>
      </div>
    </main>
  );
};

export default Overview;
