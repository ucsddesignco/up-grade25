import "./OverviewTablet.css"
import OverviewText from "./OverviewText.json"

import CalendarIcon from "../../assets/icons/icon-calendar.svg"
import WeeksIcon from "../../assets/icons/icon-weeks.svg"
import ClockIcon from "../../assets/icons/icon-clock.svg"

import TabletSVG1 from "../../components/Overview/tablet/ExpectationCard"
import TabletSVG2 from "../../components/Overview/tablet/ExpectationCard2"
import FaqCard from "../../components/Overview/tablet/FaqCardTablet"
import ApplyCard from "../../components/Overview/tablet/ApplyCard"

export default function OverviewTablet() {
  return (
    <div className="overview-tablet-container">
              <h1 className="tablet-title">Overview</h1>
              <h2 className="tablet-heading1">About</h2>
              <p className="tablet-body">{OverviewText.about}</p>

              <div className="tablet-columns">
                <div className="tablet-column">
                  <h2 className="tablet-heading2 tablet-column-heading">{OverviewText["curious-heading"]}</h2>
                  <p className="tablet-body">{OverviewText.curious1}{OverviewText.curious2}</p>
                </div>
                <div className="tablet-column">
                  <h2 className="tablet-heading2 tablet-column-heading">Why Should
                    I Apply? </h2>
                  <p className="tablet-body">{OverviewText["why-apply"]}</p>
                </div>
              </div>

              <TabletSVG1 />

              <h2 className="tablet-heading1">The Task</h2>
              <div className="tablet-columns">
                <div className="tablet-column">
                  <h2 className="tablet-heading2 tablet-column-heading">{OverviewText["task-heading1"]}</h2>
                  <p className="tablet-body">{OverviewText["task-text1"]}</p>
                </div>
                <div className="tablet-column">
                  <h2 className="tablet-heading2 tablet-column-heading">{OverviewText["task-heading2"]}</h2>
                  <p className="tablet-body">{OverviewText["task-text2"]}</p>
                </div>
              </div>

              <div className="tablet-columns quiz-link">
                <h2 style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</h2>
                <button className="quiz-button">TAKE A BRIEF QUIZ</button> 
              </div>           

              <div className="tablet-columns">
                <div className="tablet-column">
                  <h2 className="tablet-heading2 tablet-column-heading">{OverviewText["build-fast"]}</h2>
                  <p className="tablet-body">{OverviewText["build-fast-text"]}</p>
                </div>
                <div className="tablet-column">
                  <h2 className="tablet-heading2 tablet-column-heading">{OverviewText["work-with-industry"]}</h2>
                  <p className="tablet-body">{OverviewText["work-with-industry-text"]}</p>
                </div>
              </div>

              <TabletSVG2 />

              <h2 className="tablet-heading1">Timeline</h2>
              <div className="timeline-section">
                <div className="timeline-item">
                  <img src={CalendarIcon}></img>
                  <p>June 30 - Sept 5</p>  
                </div>
                <div className="timeline-item">
                  <img src={WeeksIcon}></img><p>10 Weeks</p> 
                </div>
                <div className="timeline-item">
                  <img src={ClockIcon}></img> 
                  <p>12-15 hours per week</p> 
                </div>

              </div>
              <p className="tablet-body">{OverviewText["timeline-text"]}</p>

              <h2 className="tablet-expectation">{OverviewText.expectation}</h2>
              <div className="tablet-callouts">
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
              <FaqCard />
              <ApplyCard />
    </div>
  )
}
