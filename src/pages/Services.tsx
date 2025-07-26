import { motion } from "framer-motion";
import {
  Heart,
  Calendar,
  Brain,
  Shield,
  Users,
  Phone,
  Zap,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "AI-Powered Electronic Health Records (EHR)",
      description:
        "Intelligent patient data management with AI insights, secure cloud storage, real-time updates, and seamless integration across all departments.",
      features: [
        "AI Patient History Analysis",
        "Smart Medical Record Management",
        "Automated Lab Results Integration",
        "Predictive Prescription History",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Appointment Management",
      description:
        "AI-driven scheduling system with intelligent appointment optimization, automated reminders, and predictive waitlist management.",
      features: [
        "AI-Optimized Booking",
        "Smart SMS/Email Reminders",
        "Intelligent Waitlist Management",
        "Predictive Resource Scheduling",
      ],
    },
    {
      icon: Brain,
      title: "Advanced AI Analytics",
      description:
        "Deep learning algorithms for predictive analytics, AI treatment recommendations, and intelligent operational insights.",
      features: [
        "AI Predictive Diagnostics",
        "Intelligent Treatment Suggestions",
        "Smart Resource Optimization",
        "AI Risk Assessment",
      ],
    },
    {
      icon: Shield,
      title: "Quantum Security & Compliance",
      description:
        "Next-generation security with AI threat detection, HIPAA compliance, intelligent access control, and comprehensive audit trails.",
      features: [
        "AI-Enhanced HIPAA Compliance",
        "Quantum Data Encryption",
        "Smart Access Control",
        "Intelligent Audit Logging",
      ],
    },
    {
      icon: Users,
      title: "AI Multi-Department Integration",
      description:
        "Intelligent workflow integration across all hospital departments with AI-powered dashboards and smart role-based permissions.",
      features: [
        "AI-Optimized Department Workflows",
        "Smart Role-Based Access",
        "Intelligent Inter-department Communication",
        "AI Unified Dashboard",
      ],
    },
    {
      icon: Phone,
      title: "AI Telehealth Platform",
      description:
        "Intelligent video consultation platform with AI-assisted diagnostics, smart e-prescriptions, and AI-powered remote patient monitoring.",
      features: [
        "AI-Enhanced Video Consultations",
        "Smart Remote Monitoring",
        "Intelligent Digital Prescriptions",
        "AI Patient Portal",
      ],
    },
    {
      icon: Zap,
      title: "AI Emergency Response System",
      description:
        "Real-time AI emergency management with predictive alerts, intelligent resource allocation, and AI-powered critical care coordination.",
      features: [
        "AI Emergency Alerts",
        "Smart Resource Tracking",
        "AI Critical Care Protocols",
        "Intelligent Response Automation",
      ],
    },
    {
      icon: BarChart,
      title: "AI Business Intelligence",
      description:
        "Advanced AI-powered reporting and analytics for operational efficiency, intelligent financial management, and strategic planning insights.",
      features: [
        "AI Financial Reports",
        "Smart Operational Metrics",
        "Intelligent Performance Analytics",
        "AI Strategic Insights",
      ],
    },
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
                Comprehensive AI Healthcare
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Management Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your healthcare facility with our complete suite of
                AI-integrated services. From intelligent patient care to
                operational excellence, we provide everything you need to
                deliver exceptional healthcare.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 cta-glow hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border-0"
              >
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-space-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glassmorphism rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 cta-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-dmsans">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-6 border border-blue-500/30 text-gray-300 hover:bg-blue-500/10 hover:text-white hover:border-blue-400 transition-all duration-300 bg-transparent"
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
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
              className="glassmorphism rounded-2xl p-12 border border-purple-500/30 cta-glow"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-dmsans">
                Ready to Transform Your Healthcare Facility?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of healthcare providers who trust our
                comprehensive AI-powered HMS solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border-0 cta-glow"
                >
                  Schedule Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 border border-blue-500/30 text-gray-300 hover:bg-blue-500/10 hover:text-white hover:border-blue-400 transition-all duration-300 bg-transparent"
                >
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
