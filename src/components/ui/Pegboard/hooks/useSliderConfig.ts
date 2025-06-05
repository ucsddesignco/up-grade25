import { useKeenSlider } from 'keen-slider/react';
import type { RefObject } from 'react';

interface UseSliderConfigProps {
  setSelectedIndex: (index: number) => void;
  isProgammaticMove: RefObject<boolean>;
  isPlayingRef: RefObject<boolean>;
  setRotation: (rotation: number) => void;
  isDragging: RefObject<boolean>;
}

const AUTOMATIC_SLIDER_INTERVAL = 2000;
const AUTOMATIC_SLIDER_DURATION = 350;
const ROTATION_FORCE = 13000;

export const useSliderConfig = ({
  setSelectedIndex,
  isProgammaticMove,
  isPlayingRef,
  setRotation,
  isDragging
}: UseSliderConfigProps) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 'auto',
        origin: 'center'
      },
      loop: true,
      renderMode: 'performance',
      dragged(slider) {
        isDragging.current = true;
        const newRotation = slider.track.velocity() * -ROTATION_FORCE;
        setRotation(newRotation);
      },
      dragEnded(slider) {
        isDragging.current = false;
        const newRotation = (slider.track.velocity() * ROTATION_FORCE) / 1.5;

        setTimeout(() => {
          setRotation(newRotation);
          setTimeout(() => {
            setRotation(0);
          }, 150);
        }, 100);
      },
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
            if (isDragging.current) return;
            const newRotation = -20;
            setRotation(newRotation);
            setTimeout(() => {
              setRotation(newRotation / -1.5);
              setTimeout(() => {
                setRotation(0);
              }, 200);
            }, AUTOMATIC_SLIDER_DURATION);
          }, AUTOMATIC_SLIDER_INTERVAL);
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
