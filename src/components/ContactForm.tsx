import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';



const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    purpose: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePurposeChange = (value: string) => {
    setFormData(prev => ({ ...prev, purpose: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_kfp4efl';     // <-- Replace this
    const templateID = 'template_w35ve9g';   // <-- Replace this
    const userID = 'cZ6WhwraAMcagnzQM';         // <-- Replace this (public key)

    try {
      await emailjs.send(serviceID, templateID, {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        purpose: formData.purpose,
        message: formData.message,
      }, userID);

      toast({
        title: "Request Submitted Successfully",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        purpose: '',
        message: ''
      });
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Request a Valuation</h2>
          <div className="w-20 h-1 bg-lavender mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your property valuation started in 24 hours. Fill the form below or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name*</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary/50 border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="bg-secondary/50 border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    required
                    className="bg-secondary/50 border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-secondary/50 border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Valuation Purpose*</Label>
                  <Select
                    value={formData.purpose}
                    onValueChange={handlePurposeChange}
                    required
                  >
                    <SelectTrigger className="bg-secondary/50 border-muted">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank-loan">Bank Loan</SelectItem>
                      <SelectItem value="insolvency">Insolvency (IBBI)</SelectItem>
                      <SelectItem value="companies-act">Under Companies Act</SelectItem>
                      <SelectItem value="real-estate">Real Estate Valuation</SelectItem>
                      <SelectItem value="other">Other Purpose</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Property details, requirements, or any specific queries"
                    rows={4}
                    className="bg-secondary/50 border-muted resize-none"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="btn-gradient w-full" 
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Request"}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-medium mb-6 text-gradient">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone size={18} className="text-lavender" />
                  <h4 className="font-medium">Phone</h4>
                </div>
                <p className="text-muted-foreground pl-7">
                  <a href="tel:9361179820" className="hover:text-lavender">
                    +91 93611 79820
                  </a>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={18} className="text-lavender" />
                  <h4 className="font-medium">Email</h4>
                </div>
                <p className="text-muted-foreground pl-7 break-all">
                  <a href="mailto:adaikkalavanvaluer@gmail.com" className="hover:text-lavender">
                    adaikkalavanvaluer@gmail.com
                  </a>
                </p>
              </div>

              <div className="p-4 border border-dashed border-white/20 rounded-lg text-center">
                <h4 className="font-medium mb-2">Need urgent assistance?</h4>
                <Button variant="outline" className="gap-2 mt-2" asChild>
                  <a href="tel:9361179820">
                    <Phone size={16} />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { Phone, Mail, Send } from 'lucide-react';
// import { supabase } from "@/integrations/supabase/client";

// const ContactForm = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     phone: '',
//     email: '',
//     purpose: '',
//     message: ''
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePurposeChange = (value: string) => {
//     setFormData(prev => ({ ...prev, purpose: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const { error } = await supabase.functions.invoke('handle-valuation-request', {
//         body: formData
//       });

//       if (error) throw error;
      
//       toast({
//         title: "Request Submitted Successfully",
//         description: "We'll get back to you within 24 hours.",
//       });
      
//       // Reset form
//       setFormData({
//         name: '',
//         company: '',
//         phone: '',
//         email: '',
//         purpose: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error("Submission error:", error);
//       toast({
//         variant: "destructive",
//         title: "Submission Failed",
//         description: "Please try again or contact us directly.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="section-padding bg-secondary/30">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Request a Valuation</h2>
//           <div className="w-20 h-1 bg-lavender mx-auto mb-4"></div>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Get your property valuation started in 24 hours. Fill the form below or contact us directly.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Full Name*</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     required
//                     className="bg-secondary/50 border-muted"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="company">Company Name</Label>
//                   <Input
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     placeholder="Your company"
//                     className="bg-secondary/50 border-muted"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone Number*</Label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Your contact number"
//                     required
//                     className="bg-secondary/50 border-muted"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Your email"
//                     className="bg-secondary/50 border-muted"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="purpose">Valuation Purpose*</Label>
//                   <Select
//                     value={formData.purpose}
//                     onValueChange={handlePurposeChange}
//                     required
//                   >
//                     <SelectTrigger className="bg-secondary/50 border-muted">
//                       <SelectValue placeholder="Select purpose" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="bank-loan">Bank Loan</SelectItem>
//                       <SelectItem value="insolvency">Insolvency (IBBI)</SelectItem>
//                       <SelectItem value="companies-act">Under Companies Act</SelectItem>
//                       <SelectItem value="real-estate">Real Estate Valuation</SelectItem>
//                       <SelectItem value="other">Other Purpose</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
                
//                 <div className="space-y-2 md:col-span-2">
//                   <Label htmlFor="message">Additional Details</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Property details, requirements, or any specific queries"
//                     rows={4}
//                     className="bg-secondary/50 border-muted resize-none"
//                   />
//                 </div>
//               </div>
              
//               <Button 
//                 type="submit" 
//                 className="btn-gradient w-full" 
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit Request"}
//                 <Send size={16} className="ml-2" />
//               </Button>
//             </form>
//           </div>
          
//           <div className="glass-card p-6 rounded-xl">
//             <h3 className="text-xl font-medium mb-6 text-gradient">Get in Touch</h3>
            
//             <div className="space-y-6 mb-8">
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <Phone size={18} className="text-lavender" />
//                   <h4 className="font-medium">Phone</h4>
//                 </div>
//                 <p className="text-muted-foreground pl-7">
//                   <a href="tel:9361179820" className="hover:text-lavender">
//                     +91 93611 79820
//                   </a>
//                 </p>
//               </div>
              
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <Mail size={18} className="text-lavender" />
//                   <h4 className="font-medium">Email</h4>
//                 </div>
//                 <p className="text-muted-foreground pl-7 break-all">
//                   <a href="mailto:adaikkalavanvaluer@gmail.com" className="hover:text-lavender">
//                     adaikkalavanvaluer@gmail.com
//                   </a>
//                 </p>
//               </div>
              
//               <div className="p-4 border border-dashed border-white/20 rounded-lg text-center">
//                 <h4 className="font-medium mb-2">Need urgent assistance?</h4>
//                 <Button variant="outline" className="gap-2 mt-2" asChild>
//                   <a href="tel:9361179820">
//                     <Phone size={16} />
//                     Call Now
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
