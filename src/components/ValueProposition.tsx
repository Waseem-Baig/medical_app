import { motion } from "framer-motion";
import { Shield, Clock, Users, BarChart3 } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Secure & Compliant",
      description:
        "HIPAA compliant with AI-powered security to intelligently protect patient data.",
    },
    {
      icon: Clock,
      title: "Smart Workflow AI",
      description:
        "AI-driven automation reduces overhead and maximizes focus on patient care.",
    },
    {
      icon: Users,
      title: "AI-Enhanced Collaboration",
      description:
        "Intelligent communication systems connecting all healthcare team members.",
    },
    {
      icon: BarChart3,
      title: "AI-Driven Analytics",
      description:
        "Make smarter decisions with AI-powered insights and predictive analytics.",
    },
  ];

  return (
    <section className="py-20 bg-space-gradient relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-16 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-24 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -100, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-1/3 w-10 h-10 bg-cyan-500/20 rounded-full blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Why Choose AI Medical Hub?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our AI-enhanced medical platform revolutionizes healthcare delivery
            with intelligent automation, predictive analytics, and seamless
            AI-powered workflows across your entire facility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="glassmorphism rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 text-center h-full">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                {/* Enhanced glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
