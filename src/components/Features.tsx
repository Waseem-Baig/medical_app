import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Globe,
  Lock,
  BarChart,
  Smartphone,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Lightning Performance",
      description:
        "AI-optimized for speed with sub-1 second load times and real-time intelligent updates across all modules.",
    },
    {
      icon: Globe,
      title: "AI Multi-Platform Access",
      description:
        "Smart access from any device with AI-adaptive responsive design and intelligent offline capabilities.",
    },
    {
      icon: Lock,
      title: "AI-Enhanced Security",
      description:
        "Military-grade encryption with AI threat detection, smart 2FA, and comprehensive intelligent audit logging.",
    },
    {
      icon: BarChart,
      title: "AI Predictive Analytics",
      description:
        "Real-time AI dashboards with predictive modeling, machine learning insights, and intelligent custom reporting.",
    },
    {
      icon: Smartphone,
      title: "AI Mobile-First Design",
      description:
        "Native AI-powered mobile apps with smart notifications, intelligent sync, and predictive user experience.",
    },
    {
      icon: CheckCircle,
      title: "AI 99.9% Uptime SLA",
      description:
        "AI-guaranteed reliability with smart redundant systems, automated backups, and 24/7 intelligent monitoring.",
    },
  ];

  const stats = [
    { number: "500+", label: "AI-Enhanced Hospitals" },
    { number: "1M+", label: "AI-Assisted Patients" },
    { number: "99.9%", label: "AI System Uptime" },
    { number: "24/7", label: "AI Support Available" },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-space-gradient relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Our
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Medical Hub?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge AI technology and healthcare expertise to
            deliver unmatched intelligent performance, security, and user
            experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/20 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25"
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-2xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
