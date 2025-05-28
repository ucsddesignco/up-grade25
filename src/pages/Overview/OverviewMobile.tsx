import "./OverviewMobile.css"

// import CalendarIcon from "./assets/icons/icon-calendar.svg"
// import WeeksIcon from "./assets/icons/icon-weeks.svg"
// import ClockIcon from "./assets/icons/icon-clock.svg"
import Phone from "../../components/Overview/Phone.tsx"
import Clock from "../../components/Overview/Clock.tsx"
import OverviewText from "./OverviewText.json"
import Paintbrush from "../../components/Overview/Paintbrush.tsx"
import FaqCard from "../../components/Overview/FaqCard.tsx"
import ApplyCard from "../../components/Overview/ApplyCard.tsx"

export default function OverviewMobile() {
    return (
        <div className="overview-mobile-container">
            <h1 className="mobile-title">Overview</h1>
            <h2 className="mobile-heading1">About</h2>
            <p className="mobile-body">{OverviewText.about}</p>
            <h2 className="mobile-heading2">{OverviewText["curious-heading"]}</h2>
            <p className="mobile-body">{OverviewText.curious1}</p>
            <p className="mobile-body">{OverviewText.curious2}</p>
            <h2 className="mobile-heading2">Why Should I Apply?</h2>
            <p className="mobile-body">{OverviewText["why-apply"]}</p>
            <Phone />
            <h2 className="mobile-heading1">The Task</h2>
            <h2 className="mobile-heading2">{OverviewText["task-heading1"]}</h2>
            <p className="mobile-body">{OverviewText["task-text1"]}</p>
            <h2 className="mobile-heading2">{OverviewText["task-heading2"]}</h2>
            <p className="mobile-body">{OverviewText["task-text2"]}</p>
            <h2>Not sure what role to try?</h2>
            <button className="quiz-button">TAKE A BRIEF QUIZ</button>
            <h2 className="mobile-heading2">{OverviewText["build-fast"]}</h2>
            <p className="mobile-body">{OverviewText["build-fast-text"]}</p>
            <h2 className="mobile-heading2">{OverviewText["work-with-industry"]}</h2>
            <p className="mobile-body">{OverviewText["work-with-industry-text"]}</p>
            <Clock />
            <h2 className="mobile-heading1">Timeline</h2>
            <p className="mobile-body">{OverviewText["timeline-text"]}</p>
            <h2 className="mobile-expectation">{OverviewText.expectation}</h2>
            <div className="mobile-callouts">
                <div className="team-meetings">
                    <h1>2x</h1>
                    <p>Team Meetings</p>
                </div>
                <div className="mentor-meetings">
                    <h1>1x</h1>
                    <p>Mentor Meetings</p>
                </div>
                <div className="group-workshops">
                    <h1>1x</h1>
                    <p>Group Workshops</p>
                </div>
            </div>
            <Paintbrush />
            <FaqCard />
            <ApplyCard />
        </div>
    )
}
