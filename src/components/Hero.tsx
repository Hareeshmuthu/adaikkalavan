import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Phone } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
    alt: "Office building"
  },
  {
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    alt: "Residential building"
  },
  {
    url: "https://images.unsplash.com/photo-1590510656756-c7d8a9b10dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Real estate market trends and graphs"
  },
  {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    alt: "Law and justice scales"
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToContactForm = () => {
    const contactFormSection = document.getElementById('contact-form');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Carousel background with overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{ 
              backgroundImage: `url('${image.url}')`,
              opacity: currentImageIndex === index ? 1 : 0,
              filter: "brightness(0.2)"
            }}
            aria-hidden="true"
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-6 opacity-0 animate-fadeIn">
          <h4 className="font-medium text-lavender mb-2">
            M.Adaikkalavan M.E.(struc),M.Sc.,(REV),A.M.I.E,F.I.V,F.I.I.T.Arb.
          </h4>
          <h6 className="text-muted-foreground">
            Property Valuation Expert | 25+ Years Experience
          </h6>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto opacity-0 animate-fadeIn animation-delay-200">
          <span className="text-gradient">Trusted Property Valuations</span> for Bank Loans, Under Companies Act, Insolvency, Legal Compliance
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-400">
          IBBI- standard compliant valuation services by Registered Valuers under the Companies Act.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeIn animation-delay-600">
          <Button 
            onClick={scrollToContactForm} 
            size="lg" 
            className="btn-gradient gap-2"
          >
            <FileText size={18} />
            Request a Valuation
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-lavender hover:bg-lavender/10"
          >
            <Phone size={18} />
            <a href="tel:9443292527">Talk to an Expert</a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-lavender flex items-start justify-center">
          <div className="w-1 h-3 bg-lavender rounded-full mt-2 animate-slideUp"></div>
        </div>
      </div>
      
      {/* Background image indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-lavender' : 'bg-gray-500'}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
