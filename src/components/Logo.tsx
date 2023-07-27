'use client';
import Link from 'next/link';
import LogoImg from '/public/images/logo.svg';

export default function Logo() {
  return (
    <Link href="/">
      <LogoImg className="w-[63px] h-[33px]" width={63} height={33} />
    </Link>
  );
}
