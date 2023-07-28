import data from '@/data/about.json';

export default function About() {
  return (
    <section className="pt-[69px] pb-[49px] about md:pt-[79px] md:pb-[84px] xl:pt-[103px] xl:pb-[90px]">
      <div className="container mdOnly:relative">
        <div className="mb-[38px] md:flex mdOnly:justify-between md:mb-[79px] xl:gap-[21px] xl:mb-[71px]">
          <h2 className="title smOnly:mb-2">
            {data.title.name}
            <span className="font-medium"> {data.title.span}</span>
          </h2>
          <div>
            <p className="max-w-[180px] text-[14px] leading-[1.4] font-extralight mb-[21px] md:text-[16px] md:leading-[1.2] md:max-w-[221px] md:mb-[14px] xl:max-w-[293px] xl:mb-[11px] xl:text-[18px] xl:leading-[1.3]">
              <span className="font-normal">{data.text1.span}</span>{' '}
              {data.text1.description}
            </p>
            <p className="max-w-[180px] text-[14px] leading-[1.4] font-extralight md:text-[16px] md:leading-[1.2]  md:max-w-[221px] xl:max-w-[293px] xl:text-[18px] xl:leading-[1.3]">
              <span className="font-normal"> {data.text2.span}</span>{' '}
              {data.text2.description}
            </p>
          </div>
        </div>
        <div className="xl:flex-row-reverse xl:flex xl:justify-between">
          <p className="smOnly:ml-auto mdOnly:absolute mdOnly:top-[383px] mdOnly:left-0 text-[14px] leading-[1.4] font-extralight tracking-[-0.14px] mb-[39px] text-end smOnly:max-w-[180px] md:text-[16px] md:leading-[1.2] md:max-w-[221px] md:tracking-[-0.32px] xl:text-[18px] xl:leading-[1.3] xl:max-w-[293px] xl:tracking-[1.8px]">
            <span className="uppercase block font-normal tracking-normal">
              {data.appeal.span}
            </span>
            {data.appeal.text}
          </p>
          <p className="text-[14px] leading-[1.4] font-extralight md:text-[16px] md:leading-[1.2] mdOnly:max-w-[463px] mdOnly:ml-auto xl:text-[18px] xl:leading-[1.3] xl:max-w-[606px]">
            <span className="font-normal"> {data.methods.span}</span>
            {data.methods.text}
          </p>
        </div>
      </div>
    </section>
  );
}
