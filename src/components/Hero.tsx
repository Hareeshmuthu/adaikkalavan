import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContactForm = () => {
    const contactFormSection = document.getElementById('contact-form');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')",
          filter: "brightness(0.2)"
        }}
      />
      
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
    </section>
  );
};

export default Hero;
