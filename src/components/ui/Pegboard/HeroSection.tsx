import PegboardFilled from './PegboardFilled.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useRef, useState } from 'react';
import './HeroSection.scss';
import ToolIcon from '../../../assets/icons/tool.svg?react';
import MessageIcon from '../../../assets/icons/message.svg?react';
import CalendarGrayIcon from '../../../assets/icons/calendar-gray.svg?react';
import { ROLES } from './constants.tsx';
import Button from '../../Button/Button.tsx';
import DashedArrow from '../../DashedArrow/DashedArrow.tsx';
import PlayButton from './components/PlayButton/PlayButton.tsx';

function HeroSection() {
  // Randomize role order
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(isPlaying);
  const isProgammaticMove = useRef(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 'auto',
        origin: 'center'
      },
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
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          if (!isPlayingRef.current) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    instanceRef.current?.update();
  }, [isPlaying, instanceRef]);

  return (
    <section id="pegboard-section">
      <div id="title-container">
        <h1 id="title-text">
          <span>
            <span>UP-Grade your</span>
            <span id="dropdown-container">
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
          <CalendarGrayIcon width={20} height={20} viewBox="0 0 32 32" />
          <p>June 30 - Sept 5, 2025 (10 weeks)</p>
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
          <div key={'pegboard' + idx} className="keen-slider__slide">
            <PegboardFilled role={role} />
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
