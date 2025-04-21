import React from 'react';
import { Building, Scale, FileText, Home, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: <Building className="h-10 w-10 text-lavender" />,
    title: "Valuations for Banks (Loan)",
    description: "Comprehensive property valuations for all major banks to facilitate loan processing with accurate market assessments."
  },
  {
    icon: <Scale className="h-10 w-10 text-lavender" />,
    title: "Valuation for Insolvency (IBBI)",
    description: "Expert valuations following IBBI guidelines for bankruptcy proceedings and insolvency resolution processes."
  },
  {
    icon: <FileText className="h-10 w-10 text-lavender" />,
    title: "Company Law Valuation",
    description: "Specialized valuations under Companies Act, 2013 for mergers, acquisitions, and corporate restructuring."
  },
  {
    icon: <Home className="h-10 w-10 text-lavender" />,
    title: "Real Estate/Industrial Asset Valuation",
    description: "Detailed valuation of residential, commercial properties and industrial assets with market analysis."
  },
  {
    icon: <BarChart className="h-10 w-10 text-lavender" />,
    title: "Fair Market Value, Liquidation Value Reports",
    description: "Comprehensive reports assessing fair market value and liquidation value with detailed analytics."
  },
  {
    icon: <FileText className="h-10 w-10 text-lavender" />,
    title: "Techno-Economic Viability (TEV) & Feasibility Reports",
    description: "Assess both the technical feasibility and economic/financial viability of a project for Project appraisal,Market Potential,Financial Analysis,Legal Compliance,etc"
  },
  {
    icon: <FileText className="h-10 w-10 text-lavender" />,
    title: "Specialized in Discounted Cash Flow (DCF)",
    description: "Present value of future cash flows by applying a discount rate."
  },
  {
    icon: <Building className="h-10 w-10 text-lavender" />,
    title: "Valuation for Fractional Ownership",
    description: "Proportionate share of income, usage, and capital appreciation"
  }
];

const ServicesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center mb-12 opacity-0 -translate-y-4 transition-all duration-700 animate-in">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-lavender mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`glass-card hover:border-lavender/50 transition-all duration-500 h-full opacity-0 animate-in ${
                index % 2 === 0 ? '-translate-x-4' : 'translate-x-4'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
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
