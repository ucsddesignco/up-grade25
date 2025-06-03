import { useKeenSlider } from 'keen-slider/react';
import type { RefObject } from 'react';

interface UseSliderConfigProps {
  setSelectedIndex: (index: number) => void;
  isProgammaticMove: RefObject<boolean>;
  isPlayingRef: RefObject<boolean>;
}

const AUTOMATIC_SLIDER_DURATION = 2000;

export const useSliderConfig = ({
  setSelectedIndex,
  isProgammaticMove,
  isPlayingRef
}: UseSliderConfigProps) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 'auto',
        origin: 'center'
      },
      loop: true,
      defaultAnimation: {
        duration: 350,
        // ease in out
        easing: t => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
      },

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
          }, AUTOMATIC_SLIDER_DURATION);
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

  return { sliderRef, instanceRef };
};
