import Form from '@/components/Form';
import data from '@/data/contact.json';

export default function Contact() {
  return (
    <section className="contact py-10 md:py-20 xl:py-[100px]" id="contact">
      <div className="container">
        <h2 className="title mb-[49px] xl:mb-[86px]">
          {data.title.text}{' '}
          <span className="font-medium">{data.title.span}</span>
        </h2>
        <div className='xl:flex xl:justify-between'>
          <div className="flex flex-col gap-[22px] smOnly:mb-[22px] mdOnly:flex-row mdOnly:gap-[89px] mdOnly:mb-[61px] md:justify-center xl:justify-between">
            <div className="flex flex-col gap-[22px] ">
              <div className="flex justify-end gap-5">
                <ul className="flex flex-col gap-1 text-[14px] font-normal md:text-[16px] xl:text-[18px]">
                  {data.phone.numbers.map((number, index) => {
                    return <li key={index}>
                      <a href={`tel:${number}`} className='duration-300 hover:opacity-40 focus:opacity-40' >{number}</a></li>;
                  })}
                </ul>
                <p className="text-[12px] leading-[1.6] font-extralight w-[100px]">
                  {data.phone.text}
                </p>
              </div>
              <p className="text-[14px] font-normal flex gap-5 justify-end md:text-[16px] items-center xl:text-[18px]">
               <a href={`mailto:${data.mail.email}`} className='duration-300 hover:opacity-40 focus:opacity-40' >{data.mail.email}</a>
                <span className="text-[12px] leading-[1.6] font-extralight w-[100px] ">
                  {data.mail.text}
                </span>
              </p>
            </div>
            <div className="flex flex-row-reverse gap-5 xl:flex-row xl:justify-end">
              <ul className="w-[100px]">
                {data.social.links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[14px] font-normal md:text-[16px] xl:text-[18px]"
                    >
                      <a href={link.url} target='_blank' rel='noopener noreferrer nofollow' className="duration-300 hover:opacity-40 focus:opacity-40">
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <p className="text-[12px] leading-[1.6] font-extralight xl:w-[100px]">
                {data.social.text}
              </p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
