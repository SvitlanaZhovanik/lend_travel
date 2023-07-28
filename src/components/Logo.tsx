'use client';
import Link from 'next/link';
import LogoImg from '/public/images/logo.svg';
import data from '@/data/header.json';

export default function Logo() {
  return (
    <Link href="/" aria-label={data.logoLinkAria}>
      <LogoImg
        className="w-[63px] h-[33px]"
        width={63}
        height={33}
        aria-label={data.logoLabel}
      />
    </Link>
  );
}
