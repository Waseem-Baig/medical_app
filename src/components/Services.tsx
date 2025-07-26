import { motion } from "framer-motion";
import { Heart, Shield, Users, Calendar, Brain, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "AI Patient Care Management",
      description:
        "Intelligent EHR system with real-time AI analysis, predictive patient data, and smart treatment tracking.",
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-500/20",
      iconColor: "text-red-400",
    },
    {
      icon: Calendar,
      title: "AI-Powered Smart Scheduling",
      description:
        "Machine learning appointment scheduling with intelligent reminders via SMS, WhatsApp, and email.",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Brain,
      title: "Advanced AI Assistant & Chatbot",
      description:
        "Neural network chatbot for patient queries, AI symptom triage, and intelligent clinical decision support.",
      color: "from-purple-400 to-violet-400",
      bgColor: "bg-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Shield,
      title: "AI-Enhanced HIPAA Compliance",
      description:
        "Quantum-level security with AI threat detection, end-to-end encryption, and intelligent audit trails.",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: Users,
      title: "AI Multi-Role Dashboards",
      description:
        "Intelligent adaptive interfaces for doctors, nurses, administrators, and patients with AI-driven role optimization.",
      color: "from-orange-400 to-yellow-400",
      bgColor: "bg-orange-500/20",
      iconColor: "text-orange-400",
    },
    {
      icon: Phone,
      title: "AI Telehealth Integration",
      description:
        "Smart video consultations with AI health monitoring, integrated EHR access, and intelligent e-prescription.",
      color: "from-teal-400 to-cyan-400",
      bgColor: "bg-teal-500/20",
      iconColor: "text-teal-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-space-gradient relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Healthcare
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Management Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From intelligent patient care to automated operations, our
            AI-Enhanced Medical Hub provides everything you need to run a
            revolutionary smart healthcare facility efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative glassmorphism rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20`}
              >
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>

              {/* Hover effect border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-300`}
                style={{
                  borderImage: `linear-gradient(135deg, ${service.color
                    .replace("from-", "")
                    .replace(" to-", ", ")}) 1`,
                  borderImageSlice: 1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
