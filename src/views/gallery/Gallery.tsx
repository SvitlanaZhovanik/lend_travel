'use client';
import data from '@/data/gallery.json';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLUListElement>({
    loop: true,
    slides: { origin: 'center', perView: 1.5, spacing: 20 },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="relative py-10 md:py-20 xl:pt-[100px] xl:pb-[125px] gallery">
      <div className="container">
        <h2 className="title mb-6 md:mb-[66px] xl:mb-4">
          {data.title.text}{' '}
          <span className="font-medium">{data.title.span}</span>
        </h2>
        <ul ref={ref} className=" gallery_slider keen-slider">
          {data.images.map((img, idx) => (
            <li key={idx} className="keen-slider__slide shadow-gallery">
              <Image
                src={img.url}
                alt={img.text}
                width={280}
                height={187}
                className="w-full"
              />
            </li>
          ))}
        </ul>
        {loaded && instanceRef.current && (
          <div className="hidden md:flex absolute top-[86%] left-1/2 transform -translate-x-1/2  gap-[494px] xl:top-[87%] xl:gap-[850px]">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="text-[33px] font-thin "
            >
              {data.btnPrev}
            </button>

            <button
              onClick={() => instanceRef.current?.next()}
              className="text-[33px] font-thin "
            >
              {data.btnNext}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}