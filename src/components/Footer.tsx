import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black pt-14 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-4 text-gradient">M. Adaikkalavan</h3>
            <p className="text-muted-foreground mb-4">
              Professional property valuation services with 25+ years of experience. 
              Registered valuer under IBBI and Companies Act.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-lavender transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-lavender transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-muted-foreground hover:text-lavender transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-lavender transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-lavender transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Details</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <MapPin size={18} className="text-lavender shrink-0 mt-1" />
                <span>
                  201, Sri Vasavi Complex,<br />
                  1248, Big Bazaar Street,<br />
                  Coimbatore, Tamil Nadu - 641001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-lavender shrink-0" />
                <a href="tel:9443290527" className="hover:text-lavender">
                  +91 94432 90527
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-lavender shrink-0" />
                <a href="mailto:adaikkalavanvaluer@gmail.com" className="hover:text-lavender break-all">
                  adaikkalavanvaluer@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://www.linkedin.com/in/adaikkalavan-m-6b00878a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-lavender transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/adaikkalavan_valuer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-lavender transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Business Hours</h4>
              <p className="text-muted-foreground">
                Monday to Saturday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 bg-white/10" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} M. Adaikkalavan Property Valuations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
