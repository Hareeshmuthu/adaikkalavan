
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  "SBI", "IOB", "IOC", "IDBI", "TIIC", "PNB", "LICHFL", 
  "Canara Bank", "BSNL", "Bank of India", "Karnataka Bank", 
  "Union Bank", "ESAF Bank", "REPCO HFL", "G Square"
];

const sectors = [
  { 
    icon: "🏛", 
    title: "Banking & Financial",
    description: "Major PSU & private banks across India"
  },
  { 
    icon: "🏗", 
    title: "Industrial & Real Estate",
    description: "Developers, manufacturers & industrial clients" 
  },
  { 
    icon: "⚖", 
    title: "Legal & Professional",
    description: "Law firms and legal professionals" 
  },
  { 
    icon: "🏬", 
    title: "Corporate & MSME",
    description: "Startups, SMEs and large corporations" 
  }
];

const ClientsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="clients" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center mb-12 opacity-0 -translate-y-4 transition-all duration-700 animate-in">
          <h2 className="text-3xl font-bold mb-4">Clients Served</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've proudly served leading banks, insolvency professionals, legal firms, and corporate clients.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="glass-card py-3 px-5 rounded-full text-center hover:border-gold/50 transition-all opacity-0 animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl text-center opacity-0 animate-in"
              style={{ animationDelay: `${(index + clients.length) * 100}ms` }}
            >
              <div className="text-4xl mb-3">{sector.icon}</div>
              <h3 className="text-xl font-medium mb-2">{sector.title}</h3>
              <p className="text-muted-foreground">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
