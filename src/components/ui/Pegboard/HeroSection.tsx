import PegboardFilled from './PegboardFilled.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef, useState } from 'react';
import './HeroSection.scss';
import ToolIcon from '../../../assets/icons/tool.svg?react';
import MessageIcon from '../../../assets/icons/message.svg?react';
import CalendarGrayIcon from '../../../assets/icons/calendar-gray.svg?react';
import { ROLES } from './constants.tsx';
import Button from '../../Button/Button.tsx';
import DashedArrow from '../../DashedArrow/DashedArrow.tsx';
import PlayButton from './components/PlayButton/PlayButton.tsx';
import { useSliderConfig } from './hooks/useSliderConfig.ts';

export const SLIDER_ANIMATION_DURATION = 300;

function HeroSection() {
  // Randomize role order
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevSelectedIndex = useRef<number | null>(null);
  const isDragging = useRef(false);
  const [rotation, setRotation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(isPlaying);
  const isProgammaticMove = useRef(false);

  const { sliderRef, instanceRef } = useSliderConfig({
    setSelectedIndex,
    isProgammaticMove,
    isPlayingRef,
    setRotation,
    isDragging
  });

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    instanceRef.current?.update();
  }, [isPlaying, instanceRef]);

  useEffect(() => {
    const previousIndex = prevSelectedIndex.current;
    prevSelectedIndex.current = selectedIndex;
    if (isDragging.current) return;
    if (!isProgammaticMove.current) return;
    let newRotation = -20;
    if (previousIndex && previousIndex > selectedIndex) {
      newRotation *= -1;
    }
    setRotation(newRotation);
    setTimeout(() => {
      setRotation(newRotation / -1.5);
      console.log('setRotation', newRotation / -1.5);
      setTimeout(() => {
        setRotation(0);
      }, 200);
    }, SLIDER_ANIMATION_DURATION);
  }, [selectedIndex]);

  return (
    <section id="pegboard-section">
      <div id="title-container">
        <h1 id="title-text">
          <span>
            <span>UP-Grade your</span>
            <span id="dropdown-button-container">
              <Dropdown
                setIsPlaying={setIsPlaying}
                selected={selectedIndex}
                onChange={val => {
                  const newIndex = Number(val);
                  setSelectedIndex(newIndex);
                  isProgammaticMove.current = true;
                  instanceRef.current?.moveToIdx(newIndex);
                }}
              />
              <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            </span>
          </span>

          <span>skills this summer.</span>
        </h1>
      </div>

      <div className="icon-section">
        <div className="icon-line">
          <CalendarGrayIcon width={24} height={24} viewBox="0 0 32 32" />
          <p>July 7 - Sept 12, 2025 (10 weeks)</p>
        </div>
        <div className="icon-line">
          <ToolIcon />
          <p>Refine a skill that matters to you.</p>
        </div>
        <div className="icon-line">
          <MessageIcon />
          <p>Join a team of UCSD students to ideate and innovate.</p>
        </div>
      </div>

      <div ref={sliderRef} id="home-pegboard-container" className="keen-slider full-bleed">
        {ROLES.map((role, idx) => (
          <div
            key={'pegboard' + idx}
            className="keen-slider__slide"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <PegboardFilled role={role} rotation={rotation} />
          </div>
        ))}
      </div>

      <div className="tablet-columns quiz-link">
        <p style={{ fontSize: '20px', color: '#646676' }}>Not sure what role to try?</p>
        <Button text="TAKE A BRIEF QUIZ" link="/quiz" />
      </div>
      <DashedArrow className="full-bleed" />
    </section>
  );
}
export default HeroSection;
