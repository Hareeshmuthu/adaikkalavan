
import React from 'react';
import { Phone, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NavBar = () => {
  const phoneNumber = "9361179820";
  const navigate = useNavigate();
  const navigationLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: "/about", label: "About", isRoute: true },
    { href: "services", label: "Services", isRoute: false, target: "services" },
    { href: "why-choose-us", label: "Why Choose Us", isRoute: false, target: "why-choose-us" },
    { href: "clients", label: "Clients", isRoute: false, target: "clients" },
    { href: "contact", label: "Contact", isRoute: false, target: "contact" },
  ];

  // Helper component to handle both regular and scroll links
  const NavigationLink = ({ link, onNavigate }) => {
    if (link.isRoute) {
      return (
        <Link
          to={link.href}
          className="text-sm hover:text-lavender transition-colors py-2"
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      );
    } else {
      const handleClick = () => {
        // If we're not on the home page, navigate to home first
        if (window.location.pathname !== '/') {
          navigate('/', { state: { scrollTo: link.target } });
        } else {
          // If we're already on home page, just scroll
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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <NavigationLink key={link.label} link={link} />
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          {/* Phone Button */}
          <Button variant="outline" asChild>
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
              <Phone size={16} />
              <span className="hidden md:inline">{phoneNumber}</span>
            </a>
          </Button>

          {/* Mobile Menu */}
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
                            const closeButton = sheet.querySelector('button[aria-label="Close"]');
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
