import "./App.scss";
import PegboardFilled from "./components/ui/Pegboard/PegboardFilled.tsx";
import Dropdown from "./components/ui/Dropdown/Dropdown";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const slideColors = [
  "#FFF2DC",
  "#DCEEFF",
  "#FFE8DC",
  "#FEE8EB",
  "#E2F5F9",
  "#E7F3DD",
];

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
            <PegboardFilled color={color} boardIndex={idx} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;