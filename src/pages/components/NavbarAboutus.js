import LogoHeejra from "../../images/heejra-logo-2.png";
import Image from "next/image";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/dashboard/aboutus" },
  { name: "Service", href: "/dashboard/services" },
  //   { name: "Contact", href: "/dashboard/contact" },
];

export default function NavbarAboutus() {
  return (
    <header className="bg-hitam">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Image
                src={LogoHeejra}
                className="h-8 w-auto sm:h-10"
                alt="Logo heejra"
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold text-putih hover:text-merah">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-putih hover:text-merah">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
