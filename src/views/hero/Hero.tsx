import Button from '@/components/Button';
import data from '@/data/hero.json';

export default function Hero() {
  return (
    <section className="pb-20 pt-[106px] md:pt-[20tpx] md:pb-[206px] xl:pt-[144px] xl:pb-[145px] hero">
      <div className="container md:flex md:gap-11 xl:gap-[299px] ">
        <div className="md:hidden flex flex-col items-end mb-6">
          <p className="text-[37px] leading-none font-thin tracking-[1.6px] uppercase">
            <span className=" font-medium ">{data.days.number}</span>
            {data.days.name}
          </p>
          <p className="font-light text-[12px] leading-loose tracking-[9.48px] uppercase">
            {data.days.description}
          </p>
        </div>
        <div>
          <h1 className="title mb-[34px] md:mb-[109px] xl:mb-[178px]">
            <span className="font-medium uppercase">{data.title.span}</span>{' '}
            {data.title.name}
          </h1>
          <p className="font-extralight text-[10px] leading-[1.6] smOnly:mb-[34px] smOnly:max-w-[159px] mdOnly:max-w-[270px] md:text-[14px] md:leading-[1.1] xl:text-[16px] xl:leading-[1.5] xl:tracking-[1.44px]">
            {data.list}
          </p>
        </div>
        <div className="xl:pr-[15px]">
          <div className="hidden md:flex md:flex-col md:items-end md:mb-[66px] xl:mb-[176px]">
            <p className="md:text-[67px] md:font-thin mdOnly:tracking-[8.71px] uppercase md:leading-none xl:text-[98px]">
              <span className="font-medium ">{data.days.number}</span>
              {data.days.name}
            </p>
            <p className="md:font-light uppercase md:text-[14px] md:leading-[1.7] tracking-[25.9px] xl:text-[16px] xl:tracking-[30px]">
              {data.days.description}
            </p>
          </div>
          <p className="text-[14px] leading-[1.4] mb-10 md:text-[16px] font-extralight md:leading-[1.2] md:mb-8 xl:text-[18px] xl:leading-[1.3] xl:mb-[34px]">
            {data.description}
          </p>
          <Button>{data.button}</Button>
        </div>
      </div>
    </section>
  );
}
