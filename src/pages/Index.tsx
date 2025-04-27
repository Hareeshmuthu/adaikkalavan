
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientsSection from '@/components/ClientsSection';
import MapSection from '@/components/MapSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Element } from 'react-scroll';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <Hero />
      
      <Element name="services" id="services">
        <ServicesSection />
      </Element>
      
      <Element name="why-choose-us" id="why-choose-us">
        <WhyChooseUs />
      </Element>
      
      <Element name="clients" id="clients">
        <ClientsSection />
      </Element>
      
      <Element name="contact" id="contact">
        <MapSection />
        <ContactForm id="contact-form" />
      </Element>
      
      <Footer />
      
      {/* Sticky Call-to-Action with animation */}
      <div className="fixed bottom-4 right-4 z-50 animate-bounce">
        <a href="tel:9443292527">
          <Button className="btn-gradient rounded-full h-14 w-14 p-0 hover:scale-110 transition-transform">
            <Phone size={24} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Index;
