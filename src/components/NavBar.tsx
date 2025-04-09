import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="font-bold text-xl text-gradient">
          M. Adaikkalavan
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm hover:text-lavender transition-colors">Services</a>
          <a href="#why-choose-us" className="text-sm hover:text-lavender transition-colors">Why Choose Us</a>
          <a href="#clients" className="text-sm hover:text-lavender transition-colors">Clients</a>
          <a href="#contact" className="text-sm hover:text-lavender transition-colors">Contact</a>
        </div>
        <Button variant="outline" className="hidden md:flex items-center gap-2">
          <Phone size={16} />
          <a href="tel:9361179820">9361179820</a>
        </Button>
        <Button variant="outline" className="md:hidden">
          <Phone size={16} />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
