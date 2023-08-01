'use client';
import { Link } from 'react-scroll';
import data from '@/data/navigate.json';
import { NavigateProps } from '@/views/header/Header.interface';

export default function Navigate({ onClick }: NavigateProps) {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-[56px] mdOnly:gap-6 items-center justify-center max-w-[454px] xl:max-w-[614px]">
        {data.map(item => (
          <li key={item.id}>
            <Link
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              to={item.link}
              className="md:text-[14px] cursor-pointer inline-block pb-1 leading-none text-[18px] font-normal tracking-[1.8px] border-b border-b-transparent duration-300 hover:border-b-white focus:border-b-white"
              onClick={onClick}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
