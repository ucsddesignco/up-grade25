import "./App.scss";
import RightArrow from './assets/icons/right-arrow.svg?react';
import Pegboard from "./components/ui/Pegboard/Pegboard";
import Dropdown from "./components/ui/Dropdown/Dropdown";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const slideColors = [
  "#FFF2DC",
  "#FEE8EB",
  "#E7F3DD",
  "#DCEEFF",
  "#FFE8DC",
  "#E2F5F9",
];
import "./App.css";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged() {
      const currentIndex = instanceRef.current?.track.details.rel;
      if (currentIndex !== undefined) {
        setSelectedIndex(currentIndex);
      }
    },
  });

  return (
    <>
      <Dropdown
        selected={selectedIndex}
        onChange={(val) => {
          setSelectedIndex(val);
          instanceRef.current?.moveToIdx(val);
        }}
      />
      <div ref={sliderRef} className="keen-slider">
        {slideColors.map((color, idx) => (
          <div key={"pegboard" + idx} className="keen-slider__slide">
            <Pegboard color={color} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
