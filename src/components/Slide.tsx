import Image from 'next/image';
import data from '@/data/services.json';
import { SlideProps } from '@/views/services/Services.interface';

export default function Slide(slide: SlideProps) {
  return (
    <li className="relative py-[70px] keen-slider__slide md:pt-[126px] md:pb-[131px] xl:pt-[101px] xl:pb-[114px]">
      <Image
        src={slide.bg_image.src}
        alt={slide.bg_image.alt}
        fill
        quality={100}
        sizes="100vw"
        className="absolute left-0 right-0 top-0 bottom-0 -z-10 object-cover object-center "
      />
      <div className="container">
        <div className="mb-[15px] md:flex md:justify-between md:items-center md:mb-8 xl:max-w-[883px] xl:mb-6">
          <h2 className="title smOnly:mb-[23px]">
            {data.title.name}{' '}
            <span className="font-medium">{data.title.span}</span>
          </h2>
          <p className="text-end font-thin text-[43px] text-white/20 leading-none md:text-[69px] xl:text-[97px]">
            <span className="text-white">{slide.date.day}</span>
            {slide.date.month}
          </p>
        </div>
        <div className="md:flex md:justify-between md:items-end mdOnly:gap-5 ">
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            width={280}
            height={213}
            className="w-full smOnly:mb-[11px] md:w-[463px] md:h-[370px] xl:w-[608px] xl:h-[434px] object-cover object-center"
          />
          <div>
            <p className="smOnly:text-end text-[12px] font-extralight leading-loose tracking-[2.4px] smOnly:mb-[227px] mb-[30px] xl:hidden">
              {slide.description}
            </p>
            <p className="text-[14px] font-extralight leading-[1.4] md:text-[13px] md:leading-[1.5] xl:max-w-[293px] xl:text-[18px] xl:leading-[1.3]">
              {slide.text}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
