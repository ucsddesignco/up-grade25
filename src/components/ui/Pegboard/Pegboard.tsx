import PegboardFilled from './PegboardFilled.tsx';
import Dropdown from '../Dropdown/Dropdown.tsx';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useRef, useState } from 'react';
import './Pegboard.scss';

const SLIDE_COLORS = ['#FFF2DC', '#DCEEFF', '#FFE8DC', '#FEE8EB', '#E2F5F9', '#E7F3DD'];

function Pegboard() {
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
export default Pegboard;
