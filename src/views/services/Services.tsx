'use client';
import Slide from '@/components/Slide';
import data from '@/data/services.json';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <section className="relative">
      <ul ref={sliderRef} className="keen-slider">
        {data.slides.map(slide => (
          <Slide key={slide.id} {...slide} />
        ))}
      </ul>
      {loaded && instanceRef.current && (
        <div className="absolute sm:top-[calc(50%+112px)] left-[7%] sm:left-[calc(50%-215px)] flex flex-col text-start gap-[14px] max-w-[211px] uppercase text-[20px] font-extralight leading-[0.8] dots_wrapper">
          {data.buttons.map((button, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`${
                  currentSlide === idx
                    ? 'text-white font-medium dot flex items-center gap-2'
                    : 'text-white/50'
                } text-start uppercase text-[20px] font-extralight leading-[0.8] `}
              >
                {button}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
