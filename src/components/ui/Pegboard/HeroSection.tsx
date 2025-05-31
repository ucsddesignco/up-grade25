import PegboardFilled from './PegboardFilled.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useRef, useState } from 'react';
import './HeroSection.scss';
import ToolIcon from '../../../assets/icons/tool.svg';
import MessageIcon from '../../../assets/icons/message.svg';
import CalendarGrayIcon from '../../../assets/icons/calendar-gray.svg';

const SLIDE_COLORS = ['#FFF2DC', '#DCEEFF', '#FFE8DC', '#FEE8EB', '#E2F5F9', '#E7F3DD'];

function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isProgammaticMove = useRef(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged() {
      const currentIndex = instanceRef.current?.track.details.rel;
      if (currentIndex !== undefined && !isProgammaticMove.current) {
        setSelectedIndex(currentIndex);
      }
    },
    animationEnded() {
      if (isProgammaticMove.current) {
        isProgammaticMove.current = false;
      }
    },
    animationStopped() {
      if (isProgammaticMove.current) {
        isProgammaticMove.current = false;
      }
    }
  });

  return (
    <section id="pegboard-section">
      <div id="title-container">
        <h2>UP-Grade your</h2>
        <Dropdown
          selected={selectedIndex}
          onChange={val => {
            const newIndex = Number(val);
            setSelectedIndex(newIndex);
            isProgammaticMove.current = true;
            instanceRef.current?.moveToIdx(newIndex);
          }}
        />
        <h2>skills this summer</h2>
      </div>

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

      <div ref={sliderRef} id="pegboard-container" className="keen-slider">
        {SLIDE_COLORS.map((color, idx) => (
          <div key={'pegboard' + idx} className="keen-slider__slide">
            <PegboardFilled color={color} boardIndex={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default HeroSection;
