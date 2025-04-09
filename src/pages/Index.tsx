
import React from 'react';
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <MapSection />
      <ContactForm />
      <Footer />
      
      {/* Sticky Call-to-Action */}
      <div className="fixed bottom-4 right-4 z-50">
        <a href="tel:9361179820">
          <Button className="btn-gradient rounded-full h-14 w-14 p-0">
            <Phone size={24} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Index;
