import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Globe,
  Lock,
  BarChart,
  Smartphone,
  Cloud,
  Shield,
  Users,
  Calendar,
  Bell,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Features = () => {
  const coreFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Performance",
      description:
        "Lightning-fast AI processing with sub-second response times and intelligent predictive analytics across all healthcare operations.",
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description:
        "Next-generation encryption with AI threat detection, multi-factor authentication, and comprehensive HIPAA compliance.",
    },
    {
      icon: Globe,
      title: "Omnichannel Access",
      description:
        "Seamless access from any device with adaptive AI interfaces, voice commands, and intelligent offline synchronization.",
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description:
        "AI-driven insights with real-time dashboards, predictive modeling, and automated decision support systems.",
    },
    {
      icon: Cloud,
      title: "Intelligent Cloud",
      description:
        "Self-healing cloud infrastructure with AI optimization, 99.99% uptime, and automatic scaling based on demand.",
    },
    {
      icon: Bell,
      title: "Smart AI Alerts",
      description:
        "Context-aware notifications powered by machine learning with priority ranking and multi-channel delivery.",
    },
  ];

  const detailedFeatures = [
    {
      category: "AI Patient Intelligence",
      icon: Users,
      features: [
        "AI-powered patient risk assessment",
        "Intelligent patient portal with chatbots",
        "Automated appointment optimization",
        "Smart insurance verification system",
        "Predictive billing analytics",
        "AI-generated patient satisfaction insights",
      ],
    },
    {
      category: "Smart Clinical Operations",
      icon: Calendar,
      features: [
        "AI-driven scheduling optimization",
        "Intelligent resource allocation",
        "Clinical decision support AI",
        "Voice-powered e-prescribing",
        "Automated lab result analysis",
        "AI-assisted diagnostic imaging",
      ],
    },
    {
      category: "Intelligent Administration",
      icon: Database,
      features: [
        "AI workforce management",
        "Smart inventory predictions",
        "Automated financial reporting",
        "AI compliance monitoring",
        "Predictive quality metrics",
        "Intelligent vendor optimization",
      ],
    },
  ];

  const stats = [
    { number: "500K+", label: "Patients Managed" },
    { number: "1,000+", label: "Healthcare Providers" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Expert Support" },
  ];

  return (
    <div className="min-h-screen bg-space-gradient">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-space-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-dmsans">
                Powerful Features
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Built for AI Healthcare
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover the comprehensive AI-powered features that make our HMS
                the preferred choice for modern healthcare providers worldwide.
                Built with cutting-edge technology and healthcare expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 bg-space-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dmsans">
                Core Features
              </h2>
              <p className="text-xl text-gray-300">
                Essential AI capabilities that power modern healthcare
                operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 cta-glow">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-dmsans">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 bg-space-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dmsans">
                Comprehensive Feature Set
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to manage your healthcare facility with AI
                precision
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {detailedFeatures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glassmorphism rounded-2xl p-8 border border-blue-500/20"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 cta-glow">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white font-dmsans">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-space-gradient relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dmsans">
                Trusted by Healthcare Leaders
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of AI-powered healthcare providers worldwide
              </p>
            </motion.div>

            <div className="glassmorphism rounded-2xl p-12 border border-purple-500/30 cta-glow">
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
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-dmsans">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-space-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-12 border border-blue-500/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dmsans">
                Experience These AI Features Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                See how our comprehensive AI-powered feature set can transform
                your healthcare operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 cta-glow hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border-0"
                >
                  Start AI Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 border border-blue-500/30 text-gray-300 hover:bg-blue-500/10 hover:text-white hover:border-blue-400 transition-all duration-300 bg-transparent glassmorphism"
                >
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
