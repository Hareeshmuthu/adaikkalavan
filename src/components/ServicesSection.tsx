
import React from 'react';
import { Building, Scale, FileText, Home, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Building className="h-10 w-10 text-lavender" />,
    title: "Valuations for Banks (Loan)",
    description: "Comprehensive property valuations for all major banks to facilitate loan processing with accurate market assessments."
  },
  {
    icon: <Scale className="h-10 w-10 text-gold" />,
    title: "Valuation for Insolvency (IBBI)",
    description: "Expert valuations following IBBI guidelines for bankruptcy proceedings and insolvency resolution processes."
  },
  {
    icon: <FileText className="h-10 w-10 text-gold" />,
    title: "Company Law Valuation",
    description: "Specialized valuations under Companies Act, 2013 for mergers, acquisitions, and corporate restructuring."
  },
  {
    icon: <Home className="h-10 w-10 text-gold" />,
    title: "Real Estate/Industrial Asset Valuation",
    description: "Detailed valuation of residential, commercial properties and industrial assets with market analysis."
  },
  {
    icon: <BarChart className="h-10 w-10 text-gold" />,
    title: "Fair Market Value, Liquidation Value Reports",
    description: "Comprehensive reports assessing fair market value and liquidation value with detailed analytics."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-lavender mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:border-gold/50 transition-all duration-300 h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

