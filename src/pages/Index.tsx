import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ValueProposition from "@/components/ValueProposition";
import CallToAction from "@/components/CallToAction";
import LoadingAnimation from "@/components/LoadingAnimation";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import HospitalStats from "@/components/HospitalStats";
import MedicalServices from "@/components/MedicalServices";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-space-gradient relative">
      <ParticleBackground />
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <Hero />

        {/* Hospital Stats Section */}
        <HospitalStats />

        {/* Medical Services Section */}
        <MedicalServices />

        {/* Value Proposition Section */}
        <ValueProposition />

        {/* Contact Section */}
        <Contact />

        {/* Call to Action Section */}
        <CallToAction />
      </motion.main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
