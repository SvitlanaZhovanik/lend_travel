'use client';

import { Link } from 'react-scroll';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link
      activeClass="active"
      to="target"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={1000}
      isDynamic={true}
      className=" btn inline-block text-center hover:bg-white/10 w-full py-3 px-[64px] font-bold text-[18px] xl:max-w-[293px]"
    >
      {children}
    </Link>
  );
}
