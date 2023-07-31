import About from '@/views/about/About';
import Contact from '@/views/contact/Contact';
import Gallery from '@/views/gallery/Gallery';
import Hero from '@/views/hero/Hero';
import Services from '@/views/services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
}
