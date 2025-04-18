import React, { useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Book, Briefcase, Medal, School, Star, User } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="container mx-auto pt-24 pb-16 px-4 md:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About M. Adaikkalavan</h1>
          <div className="w-20 h-1 bg-lavender mx-auto mb-8"></div>
          
          {/* Professional Image Section */}
          <div className="flex justify-center mb-8">
            <motion.img 
              src="/lovable-uploads/1dc2530e-a3f6-41ce-9b8a-d016f26be1e5.png" 
              alt="M. Adaikkalavan speaking at 51st Indian Valuers Congress"
              className="w-full max-w-2xl rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            <span className="font-semibold">M. Adaikkalavan, born on 26th June 1970, is a highly accomplished professional with over 30 years of extensive experience in the field of Civil Engineering and Valuation</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="glass-card overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <School size={24} className="text-lavender mr-3" />
                  <h2 className="text-2xl font-semibold">Education</h2>
                </div>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He holds a <strong>Civil Engineering graduate degree from Bangalore University</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He has also attained <strong>post-graduate qualifications in Structural Engineering and Real Estate Valuation</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Further enhancing his expertise, he completed an <strong>Advanced valuation program by the Indian Institute of Corporate Affairs</strong>.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Affiliations Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="glass-card overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Award size={24} className="text-lavender mr-3" />
                  <h2 className="text-2xl font-semibold">Professional Affiliations</h2>
                </div>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He has been <strong>conferred a Fellowship by the Indian Institute of Valuer India</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is an <strong>Associate Member of the Indian Institute of Engineers India</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is a <strong>Fellow of the Association of Construction Civil Engineers</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He serves as a <strong>Patron of the Builders Association of India, Coimbatore Chapter</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is a <strong>Fellow of the Indian Institution of Technical Arbitrators</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Furthermore, he has been <strong>recognised as a Chartered Engineer</strong>.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recognition and Approval Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Star size={24} className="text-lavender mr-3" />
                  <h2 className="text-2xl font-semibold">Recognition and Approval</h2>
                </div>
                <p className="mb-4">Mr. Adaikkalavan's professional standing is underscored by his recognition and empanelment by numerous esteemed institutions:</p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is <strong>recognised and included in the panel of approved engineers/valuers by various Grade I financial institutions and nationalised banks</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is <strong>empanelled in nationalised banks, financial institutions, and Public sector companies such as SBI, BOI, UB, CB, UCO, PNB, ARCILARC, OMKARAARC, EDELWEISSARC, IOC, BSNL, MTNL, TNHB etc.</strong></p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He has also served as a <strong>Consultant for SCR projects of L&T</strong>.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Extensive Experience Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="glass-card overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Briefcase size={24} className="text-lavender mr-3" />
                  <h2 className="text-2xl font-semibold">Extensive Experience</h2>
                </div>
                <p className="mb-4">With <strong>over 30 years of extensive experience in Civil Engineering</strong>, Mr. Adaikkalavan specialises in the <strong>planning, designing, and construction of Shopping Complexes, Residential, and Industrial Buildings</strong>. His career journey includes:</p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Student training with M/s. Coramandal Engineering, Chennai.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Serving as a Site Engineer with M/s. Sastha Construction, Coimbatore.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Working with R.S. Developers, Coimbatore.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Practicing as a Self-employed Consulting Civil Engineer since January 1995.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Practicing as a Valuer (Free lancer) since March 2000.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Valuation Expertise Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="glass-card overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Medal size={24} className="text-lavender mr-3" />
                  <h2 className="text-2xl font-semibold">Valuation Expertise</h2>
                </div>
                <p className="mb-4">Mr. Adaikkalavan is a <strong>Registered Valuer for land and building under the Companies Act 2013 and Wealth Tax Act</strong>. His valuation expertise is evident in his involvement in <strong>landmark assignments</strong> including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="bg-background/30 p-3 rounded-lg text-center">Brooke Field Mall, Coimbatore</li>
                  <li className="bg-background/30 p-3 rounded-lg text-center">Radisson Hotel, Coimbatore</li>
                  <li className="bg-background/30 p-3 rounded-lg text-center">Alliance Mall, Coimbatore</li>
                  <li className="bg-background/30 p-3 rounded-lg text-center">Hindustan Photo Film Industry, Ooty</li>
                </ul>
                <p className="mb-4">He has rendered his services to a wide range of institutions, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <span className="bg-background/20 p-2 text-sm rounded text-center">State Bank of India</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">IDBI bank</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">Agri Development Finance (TN) Ltd.</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">Dewan Housing Ltd</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">Income tax Departments</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">Larson & Toubro Ltd.</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">TIIC</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">APTUS</span>
                  <span className="bg-background/20 p-2 text-sm rounded text-center">Bell Finvest India Ltd.</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education and Training Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="glass-card overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Book size={24} className="text-lavender mr-3" />
                  <h2 className="text-2xl font-semibold">Education and Training Involvement</h2>
                </div>
                <p className="mb-4">Mr. Adaikkalavan is actively involved in shaping the future of the valuation profession and engineering education:</p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He serves as a <strong>Faculty for the Mandatory Education Program and Continuing Education Program for Registered Valuers under the Companies Act in IOVRVF</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is a <strong>Guest faculty for engineering colleges in the Coimbatore region</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is a <strong>Member of the Syllabus Committee in the Department of Civil Engineering at Karpagam University, Coimbatore</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is an <strong>Industrial expert adviser in the Department of Civil Engineering at Kumaraguru College of Technology</strong>.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Recognition and Awards Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="glass-card overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <User size={24} className="text-lavender mr-3" />
                  <h2 className="text-2xl font-semibold">Recognition and Awards</h2>
                </div>
                <p className="mb-4">His significant contributions to the field have been recognised with prestigious awards:</p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is the <strong>Recipient of the "Eminent Educator in Valuation" award from IOV Registered Valuers Foundation for the year 2023</strong>, acknowledging his significant contributions to valuation education.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>He is the <strong>Chairman of the Institute Of Valuer, Coimbatore Branch</strong>.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle size={20} className="text-lavender flex-shrink-0 mt-1" />
                    <p>Under his chairmanship, the <strong>Coimbatore Branch has been awarded as the BEST BRANCH for its activities in the year 2019, 2023 & 2024</strong>.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Conclusion Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg">
              M. Adaikkalavan's <strong>diverse professional experience, extensive knowledge, and continued commitment to the industry and education have established him as a highly respected and sought-after expert in Civil Engineering and Valuation</strong>.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
