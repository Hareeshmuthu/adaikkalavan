
import React from 'react';
import { CheckCircle, Award, Clock, Shield, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-lavender" />,
    title: "Registered Valuers",
    description: "IBBI, Income Tax, and Government Approved valuers providing credible assessments."
  },
  {
    icon: <Users className="h-8 w-8 text-lavender" />,
    title: "Education & Mentorship",
    description: "Teaching and educating budding valuers as faculty associated with IOV."
  },
  {
    icon: <Award className="h-8 w-8 text-lavender" />,
    title: "Strong Experience",
    description: "Extensive experience with PSU & private banks for over 25 years."
  },
  {
    icon: <Clock className="h-8 w-8 text-lavender" />,
    title: "Compliance",
    description: "Strict adherence to Valuation Standards for all reports."
  },
  {
    icon: <Shield className="h-8 w-8 text-lavender" />,
    title: "Secure Data Handling",
    description: "Confidential and secure handling of all client information."
  }
];

const WhyChooseUs = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="why-choose-us" className="section-padding">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center mb-12 opacity-0 -translate-y-4 transition-all duration-700 animate-in">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-lavender mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With 25 years of experience in property valuation, we deliver accurate, 
            compliant, and professional services for all your valuation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex gap-4 p-6 glass-card rounded-xl opacity-0 animate-in ${
                index % 2 === 0 ? '-translate-x-4' : 'translate-x-4'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mt-1 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
