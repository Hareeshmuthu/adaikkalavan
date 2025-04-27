import React from 'react';
import { Phone, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NavBar = () => {
  const phoneNumber = "9443292527";
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    navigate('/about');
  };

  const navigationLinks = [
    { href: "/", label: "Home", isRoute: true, onClick: handleHomeClick },
    { href: "/about", label: "About", isRoute: true, onClick: handleAboutClick },
    { href: "services", label: "Services", isRoute: false, target: "services" },
    { href: "why-choose-us", label: "Why Choose Us", isRoute: false, target: "why-choose-us" },
    { href: "clients", label: "Clients", isRoute: false, target: "clients" },
    { href: "contact", label: "Contact", isRoute: false, target: "contact" },
  ];

  const NavigationLink = ({ link, onNavigate }: { link: any; onNavigate?: () => void }) => {
    if (link.isRoute) {
      return (
        <div
          onClick={(e) => {
            if (link.onClick) {
              link.onClick(e);
            }
            if (onNavigate) onNavigate();
          }}
          className="text-sm hover:text-lavender transition-colors py-2 cursor-pointer"
        >
          {link.label}
        </div>
      );
    } else {
      const handleClick = () => {
        if (window.location.pathname !== '/') {
          navigate('/', { state: { scrollTo: link.target } });
        } else {
          const element = document.getElementById(link.target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        if (onNavigate) onNavigate();
      };

      return (
        <div
          onClick={handleClick}
          className="text-sm hover:text-lavender transition-colors py-2 cursor-pointer"
        >
          {link.label}
        </div>
      );
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="font-bold text-xl text-gradient">
          M. Adaikkalavan
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <NavigationLink 
              key={link.label} 
              link={link} 
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
              <Phone size={16} />
              <span className="hidden md:inline">{phoneNumber}</span>
            </a>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <SheetClose asChild>
                  <div className="flex flex-col gap-4 mt-6">
                    {navigationLinks.map((link) => (
                      <NavigationLink 
                        key={link.label} 
                        link={link} 
                        onNavigate={() => {
                          const sheet = document.querySelector('[data-state="open"]');
                          if (sheet) {
                            const closeButton = sheet.querySelector('button[aria-label="Close"]') as HTMLButtonElement;
                            if (closeButton) {
                              closeButton.click();
                            }
                          }
                        }}
                      />
                    ))}
                  </div>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
