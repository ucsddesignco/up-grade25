import { useState } from "react";
import RightArrow from './assets/icons/right-arrow.svg?react';
import Pegboard from "./components/ui/Pegboard/Pegboard";
import Dropdown from "./components/ui/Dropdown/Dropdown";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";

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
    slideChanged() {
      console.log("slide changed");
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(selectedIndex);
    }
  }, [selectedIndex, instanceRef]);

  return (
    <>
      <Dropdown
        selected={selectedIndex + 1}
        onChange={(val) => setSelectedIndex(val - 1)}
      />
      <div ref={sliderRef} className="keen-slider">
        {slideColors.map((color, idx) => (
          <div key={idx} className="keen-slider__slide">
            <Pegboard color={color} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
