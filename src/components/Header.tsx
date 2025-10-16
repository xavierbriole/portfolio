import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavItems,
  NavbarButton,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

interface HeaderProps {
  siteTitle: string;
  siteNavItems: { name: string; link: string }[];
  isHome?: boolean;
  pathname: string;
}

export default function Header({
  siteTitle,
  siteNavItems,
  isHome,
  pathname,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo href="/">
            {isHome ? (
              <span className="animate-typing self-center overflow-hidden border-r-8 border-r-black pr-2 font-[Courier] text-lg font-extrabold whitespace-nowrap dark:border-r-white">
                cd ~/home
              </span>
            ) : (
              <span className="self-center text-lg font-extrabold whitespace-nowrap">
                {siteTitle}
              </span>
            )}
          </NavbarLogo>
          <NavItems pathname={pathname} items={siteNavItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="/contact">Contact</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <NavbarLogo href="/">
            {isHome ? (
              <span className="animate-typing self-center overflow-hidden border-r-8 border-r-black pr-2 font-[Courier] text-lg font-extrabold whitespace-nowrap dark:border-r-white">
                cd ~/home
              </span>
            ) : (
              <span className="self-center text-lg font-extrabold whitespace-nowrap">
                {siteTitle}
              </span>
            )}
          </NavbarLogo>
        </MobileNav>
      </Navbar>

      <div className="fixed right-6 bottom-6 z-[60] lg:hidden">
        <MobileNavToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </div>

      <MobileNavMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose}>
        <MobileNavItems
          items={siteNavItems}
          pathname={pathname}
          onItemClick={handleMobileMenuClose}
        />
        <NavbarButton
          href="/contact"
          isMobile={true}
          onClick={handleMobileMenuClose}
        >
          Contact
        </NavbarButton>
      </MobileNavMenu>
    </header>
  );
}
