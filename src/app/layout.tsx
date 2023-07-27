import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/views/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'UncoverCarpathian’s Secrets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-body/80 text-white relative`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
