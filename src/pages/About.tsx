
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MindMap from '@/components/MindMap';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="container mx-auto pt-24 pb-16 px-4">
        <h1 className="text-3xl font-bold text-gradient mb-8 text-center">About M. Adaikkalavan Property Valuations</h1>
        <div className="flex justify-center mb-12">
          <div className="glass-card p-8 rounded-lg w-full max-w-6xl overflow-x-auto">
            <MindMap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
