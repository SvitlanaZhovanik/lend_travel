'use client';
import { useEffect, useState } from 'react';
import Navigate from './Navigate';
import data from '@/data/header.json';

export default function MobileMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => setNavbarOpen(false);

  useEffect(() => {
    navbarOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [navbarOpen]);

  return (
    <>
      <button
        type="button"
        onClick={navbarToggleHandler}
        className="md:hidden tracking-[1.4px]"
      >
        {data.menu.open}
      </button>
      <div
        className={`smOnly:absolute smOnly:z-30 smOnly:bg-bg_mobile smOnly:backdrop-blur-[3px] ${
          navbarOpen
            ? ' smOnly:disable-scroll smOnly:!fixed smOnly:left-0 smOnly:top-0 smOnly:h-screen w-screen '
            : '!static smOnly:hidden  '
        }`}
      >
        <div className="relative flex flex-col smOnly:w-full items-center justify-center  smOnly:h-screen  smOnly:overflow-y-auto">
          <Navigate />
          <button
            type="button"
            className="absolute top-0 right-0 mt-[38px] mr-5 md:hidden tracking-[1.4px]"
            onClick={closeNavbar}
          >
            {data.menu.close}
          </button>
        </div>
      </div>
    </>
  );
}
