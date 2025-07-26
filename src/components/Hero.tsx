import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const highlights = [
    "AI-Accredited Medical Hub",
    "24/7 AI Emergency Services",
    "50+ AI-Assisted Specialists",
  ];

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center bg-space-gradient overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 glassmorphism text-blue-300 rounded-full text-sm font-medium mb-8 border border-blue-400/30"
          >
            🤖 AI-Powered Healthcare Excellence Since 1998
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Your Health, Powered by
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto"
          >
            Experience revolutionary AI-powered healthcare at our Medical Hub.
            Our intelligent systems and AI-assisted specialists ensure you
            receive personalized, cutting-edge medical care.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl group shadow-lg hover:shadow-xl transition-all duration-300 cta-glow border-0"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:border-blue-500/50 px-8 py-4 text-lg rounded-xl group shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-transparent"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find AI Hub Location
            </Button>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="glassmorphism border border-red-400/30 rounded-2xl p-6 mb-12 inline-block"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-300 font-semibold">AI Emergency: </span>
              <a
                href="tel:+911234567890"
                className="text-red-400 font-bold text-lg hover:text-red-300 transition-colors"
              >
                +91 123 456 7890
              </a>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="flex items-center justify-center sm:justify-start text-white glassmorphism backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;
