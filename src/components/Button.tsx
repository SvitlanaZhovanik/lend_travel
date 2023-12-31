'use client';

import { Link } from 'react-scroll';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="contact"
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
      isDynamic={true}
      className="btn inline-block cursor-pointer text-center duration-300 hover:bg-white/10 w-full py-3 px-[64px] font-bold text-[18px] xl:max-w-[293px]"
    >
      {children}
    </Link>
  );
}
