import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';

export default function Header() {
  return (
    <header className="py-7 md:py-4 xl:py-6 absolute top-0 left-0 right-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
